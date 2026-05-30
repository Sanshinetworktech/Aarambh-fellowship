export const FELLOWSHIP_ROLES = [
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

export function evaluateResumeLocally(text: string) {
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
