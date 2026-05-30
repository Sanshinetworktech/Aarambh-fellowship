import { Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import { evaluateResumeLocally } from "../src/lib/evaluator";

export default async function handler(req: Request, res: Response) {
  // Only accept POST requests for analysis
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { resumeText } = req.body || {};
  if (!resumeText || typeof resumeText !== "string" || resumeText.trim().length === 0) {
    return res.status(400).json({ error: "Missing resume details to evaluate." });
  }

  const geminiKey = process.env.GEMINI_API_KEY;

  if (!geminiKey || geminiKey === "MY_GEMINI_API_KEY") {
    console.log("No GEMINI_API_KEY found or default value matches. Falling back to local keyword evaluator.");
    const result = evaluateResumeLocally(resumeText);
    return res.status(200).json({ ...result, fallback: true });
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
    return res.status(200).json({ ...parsedResponse, fallback: false });
  } catch (error: any) {
    console.error("Gemini model execution failed on Vercel:", error);
    // Safe fallback to local keyword parser on API failure
    const fallbackResult = evaluateResumeLocally(resumeText);
    return res.status(200).json({ ...fallbackResult, fallback: true });
  }
}
