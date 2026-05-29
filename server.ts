import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// 10 specialized roles for keywords and description
const FELLOWSHIP_ROLES = [
  { id: "sutradhara", name: "Sutradhara (Main PM)", keywords: ["notion", "zoho", "projects", "pmp", "agile", "scrum", "product manager", "program manager", "pm", "jira", "operations", "leadership", "coordination", "founder"] },
  { id: "dutapravesh", name: "Duta Pravesh (Revenue / BDR)", keywords: ["bdr", "outreach", "sales development", "pipeline", "b2b", "email", "cold network", "leads", "lead generation", "pitching", "guest", "booking", "prospecting"] },
  { id: "arthasiddhi", name: "Artha Siddhi (Sales / Account Manager)", keywords: ["conversion", "clients", "subscriptions", "sales", "recurring revenue", "retention", "billing", "negotiation", "onboarding", "customer success", "closing"] },
  { id: "mitra", name: "Mitra (Partnerships)", keywords: ["mou", "partnerships", "alliance", "sponsorships", "institutes", "hubs", "alliances", "expo", "coordination", "parks", "cafes", "deals"] },
  { id: "katha", name: "Katha (Content Creator)", keywords: ["youtube", "editing", "shorts", "video", "premiere", "photoshop", "figma", "content", "scripts", "creative", "camera", "lighting", "reels", "graphics"] },
  { id: "sabha", name: "Sabha (Community Manager)", keywords: ["community", "moderation", "rsvp", "events", "onboarding", "telegram", "whatsapp", "meetup", "feedback", "support", "member", "customer support"] },
  { id: "koshaadhikari", name: "Koshaadhikari (Ops & Finance)", keywords: ["ledger", "bookkeeping", "finance", "accounting", "rupee", "cashflow", "reimbursement", "vendor", "logistics", "budget", "billing", "audits", "tax"] },
  { id: "nirmata", name: "Nirmata (Full Stack Web Dev)", keywords: ["react", "next.js", "frontend", "backend", "full stack", "supabase", "database", "node.js", "express", "javascript", "typescript", "razorpay", "apis", "postgres"] },
  { id: "megha", name: "Megha (Cloud / AWS)", keywords: ["aws", "cloud", "deployment", "docker", "kubernetes", "ci/cd", "github actions", "infra", "sentry", "monitoring", "server", "linux", "sysadmin", "downtime"] },
  { id: "yantra", name: "Yantra (Mobile iOS/Android Dev)", keywords: ["react native", "ios", "android", "mobile app", "xcode", "gradle", "play store", "app store", "kotlin", "swift", "native", "push notifications"] }
];

// Helper for local keyword matching fallback
function evaluateResumeLocally(text: string) {
  const content = text.toLowerCase();
  let maxScore = -1;
  let bestRole = FELLOWSHIP_ROLES[0].id;
  const roleScores: { [key: string]: number } = {};

  FELLOWSHIP_ROLES.forEach((role) => {
    let score = 0;
    role.keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b|${keyword}`, "g");
      const matches = content.match(regex);
      if (matches) {
        score += matches.length * 15;
      }
    });
    // Add minor baseline
    if (content.includes(role.id)) score += 30;
    
    // Normalize score to something reasonable (max 98, min 30)
    const normalized = Math.min(98, Math.max(35, Math.floor((score / 150) * 10) + 40));
    roleScores[role.id] = normalized;

    if (normalized > maxScore) {
      maxScore = normalized;
      bestRole = role.id;
    }
  });

  // Pick top 3 alternate matches
  const alternates = Object.entries(roleScores)
    .filter(([id]) => id !== bestRole)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([id, score]) => ({
      roleId: id,
      score,
      analysis: `Strong secondary overlap in key ${id === "sutradhara" || id === "koshaadhikari" ? "ops" : "tech"} coordinates matching this track.`
    }));

  const roleNameMap: { [key: string]: string } = {
    sutradhara: "Sutradhara (Main Program Manager)",
    dutapravesh: "Duta Pravesh (Revenue / BDR Lead)",
    arthasiddhi: "Artha Siddhi (Sales / Account Manager)",
    mitra: "Mitra (Partnerships Architect)",
    katha: "Katha (Immersive Content Producer)",
    sabha: "Sabha (Community Architect)",
    koshaadhikari: "Koshaadhikari (Operations & Finance Lead)",
    nirmata: "Nirmata (Full Stack Web Developer)",
    megha: "Megha (Cloud & Infrastructure Engineer)",
    yantra: "Yantra (iOS & Android App Developer)"
  };

  const selectedTitle = roleNameMap[bestRole];

  return {
    bestRole,
    matchPercentage: maxScore,
    fitTitle: selectedTitle,
    analysis: `Based on your submitted dossier, you demonstrate immediate practical alignment with the ${selectedTitle} operations domain. Your experience matches direct skills like ${FELLOWSHIP_ROLES.find(r => r.id === bestRole)?.keywords.slice(0, 4).join(", ") || ""}.`,
    roadmap: [
      "Day 1-5: Complete Aadhaar registration, establish Zoho CRM coordinates, and sync with Sutradhara regarding active weekly board tickets.",
      "Day 6-15: Map out direct corporate accounts / local dev environments in Hyderabad and deploy primary setup.",
      "Day 16-45: Drive raw engagement targets, publish content edits, or push code directly to the active WiseIn repository.",
      "Day 46-91: Consolidate core project modules, coordinate Wednesday café guest lines, and deliver final proof-of-work dashboard."
    ],
    skillGaps: [
      `Deep Zoho suite logs familiarity (required prior to July 1).`,
      `Practical exposure to direct offline Hyderabadi community networks.`
    ],
    alternates,
    parsedSkills: FELLOWSHIP_ROLES.find(r => r.id === bestRole)?.keywords.slice(0, 5) || []
  };
}

// REST route for Smart Matching
app.post("/api/match-role", async (req, res) => {
  const { resumeText } = req.body;
  if (!resumeText || typeof resumeText !== "string" || resumeText.trim().length === 0) {
    return res.status(400).json({ error: "Missing resume details to evaluate." });
  }

  const geminiKey = process.env.GEMINI_API_KEY;

  if (!geminiKey || geminiKey === "MY_GEMINI_API_KEY") {
    // Graceful offline fallback
    console.log("No GEMINI_API_KEY found or default value matches. Falling back to local keyword evaluator.");
    const result = evaluateResumeLocally(resumeText);
    return res.json({ ...result, fallback: true });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: geminiKey });
    
    const systemPrompt = `You are the Head of Admissions and Talent at Sanshi Network Tech Private Limited for the Aarambh Fellowship.
We run a highly selective 3-month (91 Days) in-person workspace residency in Hyderabad.
We require strict mapping of candidate resume/text dossiers to exactly ONE of the following 10 Fellowship Roles:
1. sutradhara (Main Program Manager) - Owns Notion, daily Zoho board audits, founder reporting, reports to Srishta (Founder).
2. dutapravesh (Revenue Lead / BDR) - Secure B2B clients, pitch WiseIn, source Brutal Stories guests, manage waitlist.
3. arthasiddhi (Sales / Account Manager) - Converts lead pipelines to paid premium, prevents team subscription churn.
4. mitra (Partnerships) - Signs strategic MOUs, partners with hybrid Hubs/Cafes in Gachibowli, Jubilee Hills.
5. katha (Content Creator) - Films Brutal Stories on Wed cafe shoots, same-night vertical reel editing, Adobe/Premiere/DaVinci.
6. sabha (Community Manager) - Onboard WiseIn profiles, manage Brutal Stories RSVPs, manage community circles.
7. koshaadhikari (Operations + Finance) - Log cashflow with double-entry ledgers, vendor bookings, manage WiFi/commute allowances.
8. nirmata (Full Stack Web Developer) - React, Next.js, Node.js state interfaces, Supabase, Razorpay flow.
9. megha (Cloud / AWS / Deployment) - CI/CD pipeline automations, EC2/RDS deployment, auto-scaling, Sentry, 99.9% uptime.
10. yantra (Mobile iOS/Android Explorer) - React Native shared native builds, push updates, store submission, offline cache.

Analyze the candidate's custom text Dossier / CV and return a JSON object with this EXACT structural format. Put JSON inside a raw JSON block \`\`\`json ... \`\`\` and no conversational prefix/suffix:
{
  "bestRole": "role-id (one of the 10 role ids exactly matching lowercase names: sutradhara, dutapravesh, arthasiddhi, mitra, katha, sabha, koshaadhikari, nirmata, megha, yantra)",
  "matchPercentage": 85, // integer percentage from 0 to 100
  "fitTitle": "Sutradhara (Main PM)", // Title string
  "analysis": "A detailed 3-4 sentence professional explanation of why their profile matches this track and our parent entity Sanshi Network Tech.",
  "roadmap": [
    "Specific milestones for week 1 to 12 based on their resume...",
    "Milestone 2 details...",
    "Milestone 3 details...",
    "Milestone 4 details..."
  ],
  "skillGaps": [
    "Identified skill gaps for this specific 3-month role",
    "Actions required prior to July 1, 2026 starting date"
  ],
  "alternates": [
    { "roleId": "second-best-role-id", "score": 75, "analysis": "brief explanation..." },
    { "roleId": "third-best-role-id", "score": 68, "analysis": "brief explanation..." }
  ],
  "parsedSkills": ["Skill1", "Skill2", "Skill3", "Skill4"]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: `Candidate CV/Dossier Text:\n${resumeText}\n\nStrictly process this CV and return the structured JSON aligning with our 10 tracks.` }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json"
      }
    });

    const parsedResponse = JSON.parse(response.text || "{}");
    return res.json({ ...parsedResponse, fallback: false });
  } catch (error: any) {
    console.error("Gemini model execution failed:", error);
    // Safe fallback to local keyword parser on API failure
    const fallbackResult = evaluateResumeLocally(resumeText);
    return res.json({ ...fallbackResult, fallback: true });
  }
});

// Configure Vite middleware or index.html serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Aarambh Server] Server online at http://localhost:${PORT}`);
  });
}

startServer();
