import { RoleSpecification, Season, Benefit, Channel } from "./types";

export const SEASONS: Season[] = [
  {
    id: "sharad",
    name: "Sharad (शरद)",
    title: "Autumn-Winter Cohort",
    cohort: "Cohort of 10 Fellows",
    duration: "Sep – Dec 2026",
    startDate: "Starts Sept 1",
    active: true,
    colorClass: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    borderClass: "border-blue-500/50",
    textColorClass: "text-blue-400",
    description: "Clarity, sharpness, and accelerated growth. Refining our user onboarding funnels, consolidating primary databases, and expanding structural partner frameworks across Hyderabad."
  },
  {
    id: "vasant",
    name: "Vasant (वसन्त)",
    title: "Spring Cohort",
    cohort: "Will Release Soon",
    duration: "Jan – Apr 2027",
    startDate: "Opening Soon",
    active: false,
    colorClass: "bg-slate-400/5 text-slate-400 border-slate-500/10",
    borderClass: "border-slate-850",
    textColorClass: "text-slate-400",
    description: "Bloom, expansion, and pioneering new ideas. Launching creative social sub-networks and scaling offline hyper-local forums in the city."
  },
  {
    id: "varsha",
    name: "Varsha (वर्षा)",
    title: "Monsoon Cohort",
    cohort: "Will Release Soon",
    duration: "May – Aug 2027",
    startDate: "Opening Soon",
    active: false,
    colorClass: "bg-slate-400/5 text-slate-400 border-slate-500/10",
    borderClass: "border-slate-850",
    textColorClass: "text-slate-400",
    description: "The beginning of raw energy. Deploying foundational tools, primary content networks, and executing hyper-growth marketing activations across Hyderabad."
  }
];

export const CHANNELS: Channel[] = [
  {
    id: "wisein",
    name: "WiseIn",
    tagline: "Workspace Initiative",
    subtitle: "Verified professional network · wisein.in",
    description: "India’s verified professional network. Built around trusted human identity, verified profiles, professional communities, knowledge sessions, and AI-assisted matching systems.",
    linkText: "wisein.in"
  },
  {
    id: "brutalstories",
    name: "Brutal Stories",
    tagline: "Workspace Initiative",
    subtitle: "Weekly YouTube show · Every Wednesday",
    description: "A weekly live founder series filmed in Hyderabad cafés. Each session features founders, operators, and builders speaking in front of a live audience. Fellows participate in production, outreach, media distribution, and event operations.",
    linkText: "Every Wednesday on YouTube"
  },
  {
    id: "founderkey",
    name: "Tapby",
    tagline: "Workspace Initiative",
    subtitle: "Offline access system · Hyderabad",
    description: "A private offline access system for verified founders and operators. Members receive access to live recordings, startup gatherings, curated meetups, and regional events across Hyderabad.",
    linkText: "Hyderabad Pass"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "founderaccess",
    title: "Founder Access",
    tag: "Direct Mentorship",
    description: "Direct operational exposure to founders, builders, and senior operators.",
    detail: "Work face-to-face with leading ecosystem builders."
  },
  {
    id: "workspaceinfra",
    title: "Workspace Infrastructure",
    tag: "Tools & Systems",
    description: "Access to internal systems, collaborative tools, and operational environments.",
    detail: "Equipped with state-of-the-art developer systems."
  },
  {
    id: "wiseinpro",
    title: "WiseIn Pro Access",
    tag: "Premium Tier",
    description: "Full access to WiseIn premium systems during the residency.",
    detail: "Audit and build verified knowledge databases."
  },
  {
    id: "founderkeypass",
    title: "Tapby Pass Access",
    tag: "Offline Network",
    description: "Entry to live recordings, startup gatherings, and private events.",
    detail: "Full offline admission pass in Hyderabad."
  },
  {
    id: "travelinternet",
    title: "Travel & Internet Coverage",
    tag: "100% Covered",
    description: "Commute and high-speed internet reimbursements throughout the fellowship.",
    detail: "Subsidized directly by Sanshi Pvt. Ltd."
  },
  {
    id: "proofofwork",
    title: "Proof-of-Work Verification",
    tag: "Sovereign Proof",
    description: "Founder-signed documentation verifying systems, projects, and operational contributions.",
    detail: "Permanent addition to your verified showcase."
  },
  {
    id: "fulltimeopp",
    title: "Full-Time Opportunities",
    tag: "Career Pipeline",
    description: "Top fellows may receive long-term roles within Sanshi Network Tech Pvt. Ltd.",
    detail: "Performance reviewed continuously across the cohort."
  }
];

export const ROLES: RoleSpecification[] = [
  {
    id: "sutradhara",
    name: "Sutradhara (सूत्रधार)",
    title: "Program Lead",
    category: "Business",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Coordinates execution across all teams and maintains alignment between fellows and founder operations.",
    founderReport: "Reports directly to Srishta (Founder)",
    deliverables: [
      "Owns: coordination systems",
      "Owns: operational reviews",
      "Owns: reporting structure",
      "Owns: execution visibility"
    ],
    zohoIntegrations: ["Zoho Projects", "Zoho Desk", "Zoho Mail", "Notion Workspace"],
    skillsRequired: ["Operations", "Product Management", "Agile Leadership", "Zoho Suite", "Written Communication"],
    weeklyCommitment: "Office Check-in Mon/Fri 10:00 AM sharp + Daily Zoho Logs"
  },
  {
    id: "dutapravesh",
    name: "Duta Pravesh (दूत प्रवेश)",
    title: "Revenue / Business Development",
    category: "Business",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Builds outreach pipelines, develops inbound interest, and sources new strategic opportunities.",
    founderReport: "Reports to Sutradhara & Srishta",
    deliverables: [
      "Focus Area: outreach systems",
      "Focus Area: lead generation",
      "Focus Area: relationship building",
      "Focus Area: pipeline coordination"
    ],
    zohoIntegrations: ["Zoho CRM", "LinkedIn Sales Navigator", "WiseIn Lead Miner"],
    skillsRequired: ["Business Development", "Outbound Campaigning", "Deal Sourcing", "Relationship Management"],
    weeklyCommitment: "Daily Outreach Metrics + Wednesday Live Sourcing"
  },
  {
    id: "arthasiddhi",
    name: "Artha Siddhi (अर्थ सिद्धि)",
    title: "Sales / Account Management",
    category: "Business",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Converts opportunities into retained users and manages long-term account relationships.",
    founderReport: "Reports to Sutradhara & Srishta",
    deliverables: [
      "Focus Area: account management",
      "Focus Area: conversion systems",
      "Focus Area: retention",
      "Focus Area: user coordination"
    ],
    zohoIntegrations: ["Zoho Books", "Zoho CRM", "Stripe/Razorpay Settlement Logs"],
    skillsRequired: ["Account Closing", "Customer Success", "Value Negotiation", "Revenue Audits"],
    weeklyCommitment: "Weekly Subscription Growth + Daily Churn Audits"
  },
  {
    id: "mitra",
    name: "Mitra (मित्र)",
    title: "Partnerships",
    category: "Business",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Builds institutional relationships, sponsorships, collaborations, and strategic alliances.",
    founderReport: "Reports to Sutradhara",
    deliverables: [
      "Focus Area: partnerships",
      "Focus Area: sponsorship outreach",
      "Focus Area: business relations",
      "Focus Area: ecosystem expansion"
    ],
    zohoIntegrations: ["Zoho CRM", "Legal MOU Draft Vault"],
    skillsRequired: ["Negotiation", "Legal/MOU Review", "Sponsorship Sourcing", "Strategic Alliances"],
    weeklyCommitment: "Weekly Institutional MOU Submissions + Venue Alignments"
  },
  {
    id: "katha",
    name: "Katha (कथा)",
    title: "Content & Media",
    category: "Business",
    location: "Café Wed",
    schedule: "Wed Café Shoot · Mon/Fri/Tue/Thu Creative Studio",
    shortDescription: "Produces media across WiseIn and Brutal Stories.",
    founderReport: "Reports to Sutradhara",
    deliverables: [
      "Focus Area: video production",
      "Focus Area: editing",
      "Focus Area: writing",
      "Focus Area: design systems",
      "Focus Area: social distribution"
    ],
    zohoIntegrations: ["YouTube Creator Hub", "Figma", "Adobe Premiere/DaVinci Workspace"],
    skillsRequired: ["Videography", "Professional Editing", "Graphic Design", "Social Algorithms", "Scriptwriting"],
    weeklyCommitment: "Unbroken Daily Publishes + Wednesday Same-Night Reels Delivery"
  },
  {
    id: "sabha",
    name: "Sabha (सभा)",
    title: "Community",
    category: "Business",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Coordinates member onboarding, community engagement, events, and audience systems.",
    founderReport: "Reports to Sutradhara",
    deliverables: [
      "Focus Area: member relations",
      "Focus Area: event coordination",
      "Focus Area: communication systems",
      "Focus Area: community operations"
    ],
    zohoIntegrations: ["Zoho Desk", "RSVP Coordinator System", "WhatsApp API Dispatcher"],
    skillsRequired: ["Community Moderation", "Event Coordination", "Customer Relations", "Communication Audits"],
    weeklyCommitment: "100% Onboarding Coverage + Live RSVP Triage"
  },
  {
    id: "koshaadhikari",
    name: "Koshaadhikari (कोषाधिकारी)",
    title: "Operations & Finance",
    category: "Business",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Maintains operational continuity across logistics, finance, reimbursements, and reporting.",
    founderReport: "Reports directly to Srishta (Founder)",
    deliverables: [
      "Focus Area: operational systems",
      "Focus Area: finance tracking",
      "Focus Area: logistics",
      "Focus Area: vendor coordination"
    ],
    zohoIntegrations: ["Zoho Books", "Razorpay Ledger Portal", "Vendor Contracts Database"],
    skillsRequired: ["Double-Entry Bookkeeping", "Cashflow Management", "Logistics Coordination", "Contracts & Compliance"],
    weeklyCommitment: "Zero-Miss Daily Ledger Audits + Wednesday Production Budgets"
  },
  {
    id: "nirmata",
    name: "Nirmata (निर्माता)",
    title: "Full Stack Development",
    category: "Technology",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Builds and maintains product systems powering the WiseIn ecosystem.",
    founderReport: "Reports to Sutradhara & Srishta (Founder)",
    deliverables: [
      "Focus Area: frontend systems",
      "Focus Area: backend APIs",
      "Focus Area: databases",
      "Focus Area: payment integrations",
      "Focus Area: platform architecture"
    ],
    zohoIntegrations: ["GitHub CI/CD", "Supabase Studio", "Sentry Error Log", "Zoho Desk Ticketing"],
    skillsRequired: ["React / Next.js", "TypeScript", "Node.js (Express)", "Postgres / Supabase", "Razorpay Integration"],
    weeklyCommitment: "Unbroken Production Commits + 10:00 AM Ticket Status Syncs"
  },
  {
    id: "megha",
    name: "Megha (मेघ)",
    title: "Cloud & Infrastructure",
    category: "Technology",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Maintains deployment infrastructure, scaling systems, and operational uptime.",
    founderReport: "Reports to Sutradhara & Srishta (Founder)",
    deliverables: [
      "Focus Area: AWS infrastructure",
      "Focus Area: CI/CD pipelines",
      "Focus Area: monitoring systems",
      "Focus Area: deployment reliability"
    ],
    zohoIntegrations: ["AWS Console", "GitHub Actions", "Sentry Alerts", "Sutradhara Zoho Monitor"],
    skillsRequired: ["AWS Infrastructure (EC2/RDS)", "Docker / Kubernetes", "CI/CD Automations", "Linux SysAdmin", "Sentry Monitoring"],
    weeklyCommitment: "99.9% Uptime SLA + Instant Escalation Triages"
  },
  {
    id: "yantra",
    name: "Yantra (यन्त्र)",
    title: "Mobile Engineering",
    category: "Technology",
    location: "Office Mon/Fri",
    schedule: "Mon/Fri Office · Tue/Thu Remote · Wed Café Shoot",
    shortDescription: "Builds and maintains mobile systems across iOS and Android.",
    founderReport: "Reports to Sutradhara & Srishta (Founder)",
    deliverables: [
      "Focus Area: React Native",
      "Focus Area: mobile infrastructure",
      "Focus Area: push systems",
      "Focus Area: mobile UX flows"
    ],
    zohoIntegrations: ["App Store Connect", "Google Play Developer console", "Sentry Mobile Dashboard"],
    skillsRequired: ["React Native", "TypeScript", "Native Bridge Integration", "Gradle/Xcode builds", "Local SQLite caching"],
    weeklyCommitment: "Weekly Internal Beta Releases + Fast Mobile Bug Fixes"
  }
];

export const WEEK_DAYS = [
  {
    day: "Monday",
    mode: "Office Collaboration",
    subtitle: "Weekly Kickoff at 10:00 AM",
    description: "Week kickoff led by Sutradhara. Deliverables mapped for the week. Previous performance reviewed. Tickets synchronized in Zoho desk before 10 AM.",
    highlight: "Sutradhara PM Session",
    mandate: "Kickoff metrics review at 10:00 AM sharp. HQ Hyderabad physical presence required."
  },
  {
    day: "Tuesday",
    mode: "Remote Deep Work",
    subtitle: "Core Task Isolation",
    description: "Deep flow work state. Developers push code; Revenue teams lock meetings; Designers curate media lists. Live Zoho board is continuously updated.",
    highlight: "Deep Solo Work",
    mandate: "Precheck tickets on Zoho due 6:00 PM."
  },
  {
    day: "Wednesday",
    mode: "Brutal Stories Live Production",
    subtitle: "Brutal Stories Production",
    description: "Coordinated live show recording at elite cafés in Gachibowli or Jubilee Hills. Setup starts at 12:00 PM. Followed by a catered commensal social lunch for all fellows.",
    highlight: "Live Production Day",
    mandate: "Commensal Networking Lunch + Dynamic Reels Prep."
  },
  {
    day: "Thursday",
    mode: "Remote Review & Iteration",
    subtitle: "Refinement & Polishing",
    description: "Iterate based on client feedback. Devs perform pull requests. BBD teams follow up on billing gates. Sabha manages event RSVPs for prospective members.",
    highlight: "Peer Code & Deal Review",
    mandate: "Social media publications live at 5:00 PM."
  },
  {
    day: "Friday",
    mode: "Office Sync & Delivery",
    subtitle: "Consolidated Execution Check",
    description: "Weekly wrap up and deployment. Tech systems are pushed live to production. Ops reports settled. Next week's schedule outlined.",
    highlight: "Target Deployment Sync",
    mandate: "Filing weekend log summaries on Zoho Projects before 5:00 PM."
  }
];
