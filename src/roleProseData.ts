export interface RoleProse {
  id: string;
  name: string;
  title: string;
  trackInfo: string;
  reportingTo: string;
  collaboratesWith: string;
  overview: string;
  mission: string;
  responsibilities: { title: string; text: string }[];
  demands: string;
  required: string[];
  advantage: string[];
  values: string[];
  questions: string[];
}

export const ROLE_PROSE_DATA: Record<string, RoleProse> = {
  sutradhara: {
    id: "sutradhara",
    name: "Sutradhara (सूत्रधार)",
    title: "Program Lead",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Srishta, Founder & Managing Director",
    collaboratesWith: "All Fellows · Coordination Systems · Founder Office",
    overview: "Sutradhara is the singular coordination intelligence of the Aarambh Fellowship. This function exists at the precise intersection of operational visibility, human coordination, and founder alignment. The individual in this role is not a facilitator — they are the operational lead of a live, high-tempo cohort, and the quality of their execution determines whether the fellowship delivers at the standard Sanshi Network Tech demands. Every thread across ten fellows, three live products, and the founder passes through this function. Sutradhara does not manage tasks. Sutradhara manages execution — ensuring that every fellow operates with clarity, every dependency is resolved before it becomes a failure, and the founder is never in a position of uncertainty about what the cohort is producing.",
    mission: "To hold complete operational visibility across the entire fellowship and ensure that every fellow executes with clarity, consistency, and measurable output across all thirteen weeks.",
    responsibilities: [
      {
        title: "Cohort Coordination",
        text: "Sutradhara is responsible for the operational rhythm of the entire cohort. This encompasses the initiation of weekly priorities across all ten fellows, the continuous review of execution progress across all three active products, and the proactive resolution of any dependency, blocker, or misalignment before it escalates. The fellow in this role is expected to have an accurate and current understanding of what every member of the cohort is working on at all times."
      },
      {
        title: "Founder Reporting & Visibility",
        text: "Sutradhara serves as the primary communication bridge between the cohort and the founder. This requires the consistent and accurate distillation of weekly execution outcomes into structured reports that give Srishta complete operational transparency without requiring her direct intervention. The standard is simple — the founder should never encounter a surprise. If she does, it is a failure of this function."
      },
      {
        title: "Operational Systems Management",
        text: "This role owns the integrity of all coordination systems — including the Zoho project board, Notion documentation infrastructure, and all cross-functional communication protocols. These systems must reflect reality at all times. Stale data, incomplete records, or gaps in documentation are direct failures of the Sutradhara function."
      },
      {
        title: "Performance Accountability",
        text: "Sutradhara is responsible for monitoring the performance trajectory of every fellow and escalating concerns to the founder with supporting evidence at the earliest signal — not after the damage is visible. This role does not manage people softly. It holds the standard precisely."
      }
    ],
    demands: "The Sutradhara function demands an individual who thinks in systems, communicates with precision, and is comfortable bearing direct accountability for outcomes they do not produce themselves. Coordination without clarity is noise. This role must produce signal. The right person for this function has previously held operational responsibility over multiple people simultaneously, understands how to structure information for senior stakeholder consumption, and possesses the discipline to maintain documentation and visibility systems without requiring external prompting.",
    required: [
      "Demonstrated experience coordinating multiple concurrent workstreams",
      "Exceptional written communication",
      "Systems-level thinking",
      "Comfort with direct accountability for team outcomes",
      "Prior familiarity with project management tooling"
    ],
    advantage: [
      "Prior program management or operations leadership",
      "Zoho suite experience",
      "Startup or high-growth environment background"
    ],
    values: [
      "Radical transparency over comfortable ambiguity",
      "Proactive escalation over delayed disclosure",
      "Ownership of outcomes regardless of origin",
      "Zero tolerance for operational gaps"
    ],
    questions: [
      "Describe a situation in which you were responsible for the coordinated output of multiple people simultaneously. What was your system, what broke, and how did you recover it?",
      "Describe your approach to ensuring that a founder or senior stakeholder is never surprised by a problem that was visible earlier in its development.",
      "What does your personal system for maintaining real-time visibility across multiple concurrent workstreams look like in practice?"
    ]
  },
  dutapravesh: {
    id: "dutapravesh",
    name: "Duta Pravesh (दूत प्रवेश)",
    title: "Revenue Lead · Business Development",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Artha Siddhi · Sabha · Koshaadhikari",
    overview: "Duta Pravesh is the originating force of Sanshi Network Tech's revenue growth. Every rupee of new Monthly Recurring Revenue that enters WiseIn begins with this function. The individual in this role is not a support function for the sales team — they are the engine that makes the sales team possible. Without a healthy, growing, well-qualified pipeline, everything downstream stalls. This is a high-volume, high-discipline outreach function that demands consistent daily execution across multiple channels simultaneously. The individual who performs this role must possess the professional stamina to sustain personalised outreach at significant volume without allowing quality to degrade, the judgement to qualify leads before passing them forward, and the organisational discipline to maintain a pipeline that the entire commercial function can rely on.",
    mission: "To build and sustain the qualified top-of-funnel pipeline that drives all new WiseIn paid subscriber acquisition, Brutal Stories audience development, and Tapby membership growth.",
    responsibilities: [
      {
        title: "Revenue Pipeline Development",
        text: "Duta Pravesh owns the complete top-of-funnel for WiseIn's paid subscriber acquisition. This requires the daily identification, research, and personalised approach of prospective subscribers across LinkedIn, WhatsApp, and professional email channels. Every outreach is researched and tailored — generic broadcast messaging is an operational failure in this role. Prospects are drawn from WiseIn's verified user segments including educators, government officers, technology professionals, agricultural operators, and senior business executives."
      },
      {
        title: "Lead Qualification & Handoff",
        text: "The quality of what Artha Siddhi receives is the direct responsibility of this function. Every lead passed forward must arrive with a complete context document — the prospect's background, the nature of prior engagement, objections already raised, interest level assessed, and recommended approach. A cold handoff is not acceptable under any circumstance. If Artha Siddhi receives a lead without this context, it is a Duta Pravesh failure."
      },
      {
        title: "Brutal Stories Guest Sourcing",
        text: "This role carries full ownership of sourcing, approaching, and confirming one high-profile founder or operator as the guest for every Brutal Stories recording session. The guest pipeline must be maintained with sufficient depth that no recording session is ever at risk of an empty seat. Every confirmed guest receives a structured briefing on the format, the audience, the venue, and the production team before their arrival."
      },
      {
        title: "Tapby Waitlist Development",
        text: "Duta Pravesh is responsible for the continuous identification of high-fit founder and operator profiles for Tapby membership, and for running a structured multi-touch warm-up sequence that introduces candidates to the product's value before the membership offer is extended. The waitlist must grow consistently and the quality of candidates must be high enough to sustain the exclusivity of the Tapby membership programme."
      }
    ],
    demands: "The individual in this function must be energised — not merely tolerant — of high-volume daily outreach. The work requires genuine curiosity about the people being approached, the discipline to research before contacting, the persistence to follow up without becoming intrusive, and the professional judgement to know when a lead is genuinely warm versus merely polite. This is not a role for someone who prefers inbound interest or warm introductions. The Duta Pravesh function creates pipeline from nothing, every day, without exception.",
    required: [
      "Demonstrated cold outreach experience with documented results",
      "High-volume daily contact discipline",
      "Strong written communication in professional contexts",
      "Pipeline management and CRM discipline",
      "Lead qualification judgement"
    ],
    advantage: [
      "Prior business development or sales development role",
      "Existing professional network within Hyderabad's founder and operator community",
      "Guest or speaker sourcing experience for events or media"
    ],
    values: [
      "Pipeline discipline over shortcuts",
      "Personalisation at scale",
      "Zero cold handoffs",
      "Relentless but professional follow-through",
      "Honesty in qualification"
    ],
    questions: [
      "Describe in precise detail the last cold outreach campaign you executed — the channel, the volume, the message approach, and the measurable outcome it produced.",
      "Walk us through the exact steps you would take to secure a prominent Hyderabad founder as a confirmed Brutal Stories guest within forty-eight hours of the recording date.",
      "How do you sustain the quality of personalised outreach at high daily volume without allowing your messages to become formulaic?"
    ]
  },
  arthasiddhi: {
    id: "arthasiddhi",
    name: "Artha Siddhi (अर्थ सिद्धि)",
    title: "Sales & Account Manager",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Duta Pravesh · Sabha · Koshaadhikari",
    overview: "Artha Siddhi is where pipeline becomes revenue. This function receives the warm, qualified leads that Duta Pravesh builds and converts them into paying WiseIn subscribers — and then owns those subscriber relationships for the full duration of the fellowship. Acquisition without retention is a structural leak. This role seals it. The individual in this position bears direct accountability for the Monthly Recurring Revenue number. It is theirs to grow, to protect, and to report accurately. This is not a support function — it is the commercial engine that determines whether WiseIn's paid subscriber base expands or contracts. The fellowship's commercial performance is, in significant measure, a reflection of how well this function is executed.",
    mission: "To convert every qualified lead into a paying WiseIn subscriber and to retain every active account across the full thirteen weeks of the residency.",
    responsibilities: [
      {
        title: "Lead Conversion",
        text: "Every warm lead received from Duta Pravesh is the direct responsibility of Artha Siddhi from the moment of handoff. The individual in this role conducts structured, professional closing conversations via the appropriate channel — voice, message, or email — and navigates objections with prepared, confident, and product-accurate responses. Every deal outcome, whether won or lost, is documented with a clear rationale that informs the pipeline quality upstream."
      },
      {
        title: "Account Management",
        text: "Artha Siddhi owns every active paid subscriber account on WiseIn. This ownership is not passive — it requires regular, structured engagement with each account to assess satisfaction, usage, and renewal intent. The individual in this role must develop a genuine understanding of each subscriber's professional context and use that understanding to sustain the relationship beyond the initial conversion."
      },
      {
        title: "Churn Prevention",
        text: "The identification of churn risk before a subscriber cancels is a core competency of this function. Artha Siddhi monitors behavioural and engagement signals across the subscriber base and intervenes with targeted, personalised outreach at the earliest indication of declining interest. Every cancellation that could have been prevented and was not is a failure of this function."
      },
      {
        title: "Revenue Reporting",
        text: "Artha Siddhi maintains accurate, current, and complete Monthly Recurring Revenue data across all active accounts. This data serves as the primary commercial intelligence available to the founder and is treated accordingly — with the precision and honesty that financial reporting demands."
      }
    ],
    demands: "The individual in this function must have closed real commercial transactions before — not theoretical sales experience, but documented conversions of hesitant prospects into paying customers. They must be comfortable with the discomfort of directly asking for a decision, and equally comfortable with the discipline of maintaining dozens of active account relationships simultaneously without allowing any to lapse through inattention.",
    required: [
      "Documented experience converting leads to paying customers",
      "Objection handling capability",
      "Account relationship management",
      "Comfort with direct revenue accountability",
      "CRM discipline"
    ],
    advantage: [
      "Prior subscription or SaaS sales experience",
      "Churn analysis and prevention methodology",
      "Customer success background",
      "Upselling track record"
    ],
    values: [
      "Revenue ownership without deflection",
      "Proactive retention over reactive damage control",
      "Documentation accuracy as a professional standard",
      "Honesty in forecasting"
    ],
    questions: [
      "Describe the most resistant prospect you have successfully converted to a paying customer. What was the core objection and precisely how did you address it?",
      "Walk us through your system for identifying that an account is at risk of churning before the subscriber communicates their intention to cancel.",
      "What does it mean to you, personally, to be directly accountable for a revenue number that senior leadership reviews every week?"
    ]
  },
  mitra: {
    id: "mitra",
    name: "Mitra (मित्र)",
    title: "Partnerships Lead",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Sabha · Koshaadhikari · Duta Pravesh",
    overview: "Mitra builds the institutional architecture that gives WiseIn leverage beyond individual subscriber acquisition. Where Duta Pravesh approaches individuals, Mitra approaches organisations — and a single signed agreement with the right institution can deliver what months of individual outreach cannot. This function is responsible for the strategic relationships that accelerate WiseIn's verified user base, fund the Startup Expo, and keep Brutal Stories operational every week. The individual in this role must be comfortable operating in long-cycle, high-stakes conversations with institutional decision-makers. They must understand how organisations evaluate partnerships, how to present value in terms that resonate with procurement and leadership simultaneously, and how to sustain professional relationships through the extended timelines that institutional agreements require.",
    mission: "To build the institutional partnership infrastructure that delivers bulk WiseIn user acquisition, Startup Expo sponsorship funding, and operational venue continuity for Brutal Stories.",
    responsibilities: [
      {
        title: "Institutional Partnerships & MOUs",
        text: "Mitra identifies, approaches, and closes formal partnership agreements with colleges, professional bodies, corporations, and trade associations that bring groups of verified users onto WiseIn simultaneously. Each agreement is negotiated with precision, drafted with appropriate legal care, and executed with the involvement of Srishta where required. The relationship does not end at signature — Mitra is responsible for ensuring that every signed partner actively delivers the users agreed upon."
      },
      {
        title: "Startup Expo Sponsorships",
        text: "Mitra owns the identification, approach, negotiation, and closing of all corporate sponsorships for the Startup Expo. This requires the development of credible sponsorship propositions, the professional presentation of those propositions to relevant decision-makers, and the follow-through to confirmed payment in coordination with Koshaadhikari. No sponsor is confirmed without a signed agreement and a confirmed payment pathway."
      },
      {
        title: "Brutal Stories Venue Relationships",
        text: "The operational continuity of Brutal Stories depends on a reliable network of Hyderabad venue partnerships. Mitra builds and maintains these relationships — negotiating terms that work for both parties, ensuring that the production team's requirements are understood and met, and maintaining sufficient venue depth that no recording session is ever at risk of displacement."
      },
      {
        title: "Pipeline Discipline",
        text: "Every partnership conversation — regardless of stage — is maintained in the Zoho CRM with current status, primary contact, last engagement, and clear next action. A partnership conversation that exists only in email or memory is an unmanaged asset. Mitra treats the pipeline with the same rigour applied to financial records."
      }
    ],
    demands: "Institutional partnership work requires a rare combination of strategic thinking and relational patience. The individual in this function must understand that most institutional decisions move slowly, require multiple internal approvals, and demand a level of professional credibility that is earned through sustained, consistent engagement. They must be genuinely comfortable with long cycles, resistant to pressure-driven shortcuts, and capable of maintaining professionalism through negotiations that may not resolve quickly.",
    required: [
      "Demonstrated experience closing partnerships, sponsorships, or institutional agreements",
      "Negotiation capability in formal professional contexts",
      "Relationship management across long cycles",
      "CRM pipeline discipline"
    ],
    advantage: [
      "Existing network within Hyderabad's corporate, institutional, or startup ecosystem",
      "MOU or formal agreement drafting experience",
      "Sponsorship sales background"
    ],
    values: [
      "Agreements over conversations",
      "Long-cycle patience without loss of momentum",
      "Institutional credibility",
      "Delivery accountability post-signature"
    ],
    questions: [
      "Walk us through a partnership, MOU, or sponsorship agreement you personally closed — from the first contact through to the signed document. What was the most significant obstacle and how did you overcome it?",
      "Which five institutions or organisations in Hyderabad would you approach first for a WiseIn partnership agreement, and what is your specific rationale for each?",
      "A signed institutional partner is not delivering the verified users agreed upon in the MOU. How do you approach that conversation in a way that recovers the relationship and the commitment simultaneously?"
    ]
  },
  katha: {
    id: "katha",
    name: "Katha (कथा)",
    title: "Content Creator & Media Producer",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Duta Pravesh · Sabha · Nirmata",
    overview: "Katha is the public voice and visual identity of Aarambh and WiseIn. Every piece of content that reaches an audience — a social post, a short-form clip, a long-form YouTube episode, a graphic, a teaser — originates from this function. The calendar does not pause. The standard does not lower under pressure. Every output carries the credibility of the brand that produced it. This is not a creative role in the casual sense of the word. It is a high-discipline production function that demands genuine creative skill, the operational consistency to sustain output at volume without degradation, and the technical proficiency to execute every format — from filming to editing to design — at a professional standard.",
    mission: "To maintain an unbroken, high-quality content presence for WiseIn and Brutal Stories across all channels and to deliver every production output on the schedule the fellowship demands.",
    responsibilities: [
      {
        title: "Daily Content Production",
        text: "Katha maintains an unbroken daily content presence across WiseIn's social channels. Every piece of content is original, purposeful, and aligned to the professional sectors WiseIn serves — educators, officers, technology professionals, agriculturists, and operators. The content calendar is maintained with sufficient advance planning that production never becomes reactive. Every caption is written with care. Every visual is crafted with intent."
      },
      {
        title: "Brutal Stories Production",
        text: "The Wednesday Brutal Stories recording is the centrepiece of Katha's weekly production responsibility. This encompasses pre-production coordination, on-site filming of the complete session, same-night editing and publication of short-form vertical content, and delivery of the full long-form YouTube episode within a defined post-production window. The production standard is consistent — every episode reflects the professional credibility of the guests and the seriousness of the platform."
      },
      {
        title: "Brand & Visual Consistency",
        text: "Katha is the custodian of WiseIn's visual identity across all content channels. Every piece of content produced — regardless of format or platform — must be immediately recognisable as belonging to the WiseIn brand. Katha maintains a living library of reusable templates, brand assets, and production references that ensures consistency even as the content volume scales."
      },
      {
        title: "Performance Intelligence",
        text: "Content production without performance accountability is creative indulgence. Katha monitors the performance of every content output — reach, engagement, audience growth, watch time — and applies those insights to continuously improve the quality and relevance of future production. This function does not simply publish — it publishes, observes, and refines."
      }
    ],
    demands: "The individual in this function must possess genuine, demonstrable skill across the full production spectrum — camera operation, editing, motion graphics, graphic design, and written copy. They must have previously maintained a content calendar at high volume without significant gaps and be able to produce the evidence of that consistency. Most critically, they must be the kind of person who finds deadline discipline motivating rather than constraining.",
    required: [
      "Demonstrated video filming and editing capability at a professional standard",
      "Consistent content calendar management with verifiable output",
      "Short-form social content production",
      "Graphic design proficiency"
    ],
    advantage: [
      "YouTube channel management with measurable audience growth",
      "Motion graphics",
      "Scriptwriting and narrative development",
      "Professional camera and audio equipment operation"
    ],
    values: [
      "Calendar discipline as a professional standard",
      "Visual consistency without exception",
      "Quality under deadline pressure",
      "Production reliability that others can build their work around"
    ],
    questions: [
      "Provide direct URLs to three pieces of content you have personally produced — one long-form video, one short-form clip, and one graphic. Be prepared to discuss every creative and technical decision made in each piece.",
      "Describe in precise detail how you would approach the editing and publication of same-night short-form content from a raw recording that concludes in the late afternoon.",
      "Have you previously maintained a daily or near-daily content calendar for a sustained period? Describe your system and the circumstances under which it came under the most pressure."
    ]
  },
  sabha: {
    id: "sabha",
    name: "Sabha (सभा)",
    title: "Community Manager",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Artha Siddhi · Katha · Koshaadhikari",
    overview: "Sabha is the human infrastructure of WiseIn. A verified professional network derives its value not from the number of profiles it contains but from the quality of engagement those profiles generate. Sabha builds and sustains that engagement — through the personal warmth of every member welcome, the disciplined daily management of sector communities, and the operational precision of Brutal Stories audience coordination. This function operates at the intersection of genuine human care and operational discipline. The individual in this role must be capable of making every new member feel personally seen at scale, maintaining communities that remain genuinely active without becoming performative, and managing event logistics with the precision that a live production demands.",
    mission: "To ensure that every WiseIn member experiences a genuine sense of belonging from their first interaction and that every community under Sabha's ownership remains substantively active throughout the fellowship.",
    responsibilities: [
      {
        title: "Member Onboarding & Welcome",
        text: "Every individual who joins WiseIn receives a personal, thoughtful welcome from Sabha within a defined response window. This welcome is not a template. It is an acknowledgement of the specific person — their sector, their profile, their potential within the WiseIn ecosystem. Sabha identifies high-potential new members and creates meaningful introductions to existing members whose professional context is relevant. The new member experience that Sabha creates is the primary driver of early retention."
      },
      {
        title: "Community Operations",
        text: "Sabha holds ownership of a minimum of three active WiseIn sector communities and is responsible for their substantive daily engagement. This is not passive moderation — it is active community cultivation. Sabha generates discussion, surfaces member expertise, recognises contributions, and creates the conditions in which professionals in verified sectors find genuine value in their participation. A community that goes silent under Sabha's management is a direct operational failure."
      },
      {
        title: "Brutal Stories Audience Management",
        text: "Sabha manages the complete RSVP and audience coordination infrastructure for every Brutal Stories recording session. This encompasses the collection and confirmation of RSVPs, the delivery of structured event reminders, day-of attendance coordination, and the post-event communication that sustains the relationship between the audience and the WiseIn platform."
      },
      {
        title: "Tapby Member Group",
        text: "The Tapby member community is a premium, private group that Sabha manages with daily attention. The quality of engagement within this group directly reflects the perceived value of the Tapby membership. Sabha ensures that the group remains active, substantive, and worthy of the exclusivity that Tapby membership represents."
      }
    ],
    demands: "Sabha demands an individual who is genuinely energised by human connection at scale — not someone who tolerates it as part of a job description. The right person for this function finds meaning in the act of making other people feel welcomed and valued, and possesses the operational discipline to sustain that at volume without allowing it to become mechanical.",
    required: [
      "Demonstrated community management experience with verifiable activity metrics",
      "Member onboarding system design",
      "Event RSVP and audience coordination",
      "Professional complaint resolution capability"
    ],
    advantage: [
      "Large-scale group management experience",
      "WiseIn or professional networking platform experience",
      "Community engagement strategy development"
    ],
    values: [
      "Human warmth as a professional standard",
      "Proactive engagement over reactive moderation",
      "Zero tolerance for community silence",
      "Escation discipline when issues arise"
    ],
    questions: [
      "Describe the most substantive community you have personally managed — its size, its engagement level, and the specific system you used to keep it active on a daily basis.",
      "A verified WiseIn member publicly criticises the platform in one of your sector communities. Describe your response — both within the community and in a private channel — within thirty minutes of the post appearing.",
      "How do you deliver a genuinely personal welcome to ten or more new members per day without allowing the communication to become formulaic or impersonal?"
    ]
  },
  koshaadhikari: {
    id: "koshaadhikari",
    name: "Koshaadhikari (कोषाधिकारी)",
    title: "Operations & Finance Lead",
    trackInfo: "Business Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Mitra · Sabha · All Fellows",
    overview: "Koshaadhikari is the operational and financial backbone of the Aarambh Fellowship. Every rupee that enters or leaves Sanshi Network Tech's fellowship operations passes through this function — recorded, categorised, and reconciled without exception. Every event runs because this function confirmed the logistics. Every fellow is reimbursed because this function processed the claim. The individual in this role does not manage money carelessly or logistics reactively. They build systems that anticipate operational requirements before they become urgent and maintain financial records so clean and current that the founder can understand the company's position with complete confidence at any moment.",
    mission: "To maintain zero unlogged transactions, zero unconfirmed operational requirements, and complete financial transparency across all thirteen weeks of the fellowship.",
    responsibilities: [
      {
        title: "Financial Management",
        text: "Koshaadhikari is responsible for the same-day logging of every financial transaction across all three fellowship products — WiseIn, Brutal Stories, and Tapby. Income, expenditure, reimbursements, vendor payments, and event costs are recorded immediately and accurately. No transaction accumulates without documentation. The ledger is live, precise, and reconciled at the close of every working week. A clean monthly financial summary is produced for the founder's review at the commencement of each new month — without prompting and without delay."
      },
      {
        title: "Fellow Reimbursements",
        text: "Every fellow submits travel and internet reimbursement claims through Koshaadhikari. The processing of these claims is not a discretionary function — it is a direct commitment from Sanshi Network Tech to its fellows that their out-of-pocket expenses will be returned within a defined and reliable window. The individual in this role treats reimbursement processing with the same precision applied to all other financial obligations."
      },
      {
        title: "Event & Venue Logistics",
        text: "The operational continuity of Brutal Stories, the Startup Expo, and all fellowship events is the direct responsibility of Koshaadhikari. This encompasses the proactive confirmation of venue arrangements, the coordination of catering and production requirements with venue management, and the management of all vendor relationships involved in event delivery. Operational surprises in this domain are preventable — and prevention is the standard expected of this function."
      },
      {
        title: "Vendor & Operational Risk Management",
        text: "Koshaadhikari manages every vendor relationship in the fellowship's operational ecosystem — negotiating terms, tracking deliverables, and ensuring that payments are processed and confirmed. Critically, this function maintains a forward-looking operational risk register that identifies potential disruptions before they materialise. A problem that could have been anticipated and was not is a failure of this function."
      }
    ],
    demands: "The individual in this function must possess a genuine intolerance for imprecision. Financial records must be accurate. Operational confirmations must be proactive. Vendor relationships must be managed — not assumed. This role is not suited to individuals who are comfortable with approximation or who operate reactively under pressure.",
    required: [
      "Financial tracking and expense management experience",
      "Vendor and logistics coordination",
      "Event operations management",
      "Double-entry bookkeeping or equivalent financial discipline"
    ],
    advantage: [
      "Zoho Books or equivalent accounting software proficiency",
      "Prior operations role in a startup or event-intensive environment",
      "Budget management and financial reporting experience"
    ],
    values: [
      "Same-day logging as a non-negotiable standard",
      "Proactive confirmation over reactive management",
      "Zero tolerance for untracked expenditure",
      "Anticipatory risk management"
    ],
    questions: [
      "Describe the financial tracking and expense management system you have personally built and operated for a project, organisation, or event. What was the volume of transactions and how did you ensure nothing was missed?",
      "An essential operational confirmation is required before a critical event and your primary contact is unreachable. Walk us through your exact response — the steps you take, the alternatives you pursue, and the point at which you escalate.",
      "Describe the most complex set of vendor relationships you have managed simultaneously. How did you track obligations, confirm deliverables, and manage payment timelines without anything being missed?"
    ]
  },
  nirmata: {
    id: "nirmata",
    name: "Nirmata (निर्माता)",
    title: "Full Stack Web Developer",
    trackInfo: "Technology Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Megha · Yantra · Katha",
    overview: "Nirmata builds and maintains the product systems that power WiseIn. The frontend users see, the backend APIs that serve them, the database architecture that holds their verified identities, and the payment infrastructure that converts their professional engagement into commercial value — all of it is the responsibility of this function. Every line of code that Nirmata ships reaches real users on a live platform. The standard for production code is accordingly uncompromising.",
    mission: "To deliver and maintain a fully functional, reliable, and scalable WiseIn web platform that serves verified professional users without failure.",
    responsibilities: [
      {
        title: "Frontend Engineering",
        text: "Nirmata builds and maintains WiseIn's user-facing product using React and Next.js. This encompasses the implementation of responsive, accessible interface components across all WiseIn surfaces — profiles, communities, session booking, exploration, and knowledge distribution. The frontend must perform to professional standards on all modern browsers and devices, and must integrate cleanly with all backend services through well-defined API contracts."
      },
      {
        title: "Backend Engineering",
        text: "Nirmata designs, builds, and maintains the Node.js and Express API infrastructure that serves WiseIn's core functions. This includes user authentication and identity management, Aadhaar verification flow integration, community and content APIs, session booking logic, and all data retrieval and persistence operations. API design is treated as a product decision — consistency, security, and performance are non-negotiable requirements."
      },
      {
        title: "Database Architecture",
        text: "The Supabase and Postgres database infrastructure underpinning WiseIn is Nirmata's direct responsibility. This encompasses schema design and evolution, query optimisation, relationship integrity, and the ongoing maintenance of data structures that must scale with the platform's verified user growth."
      },
      {
        title: "Payment Systems",
        text: "Nirmata owns the complete Razorpay integration — subscription creation, payment capture, webhook processing, failure handling, and reconciliation. The payment infrastructure must operate with zero tolerance for silent failures. Every transaction that fails must be caught, logged, and surfaced to the appropriate function within the operations team."
      },
      {
        title: "Portal Development",
        text: "In addition to the core WiseIn platform, Nirmata is responsible for the development and maintenance of the Brutal Stories web portal and the Tapby portal. These are production systems with real users and real operational dependencies — they are treated accordingly."
      }
    ],
    demands: "Nirmata must be a builder who has shipped real products to real users. Not prototypes. Not academic projects. Live, accessible systems that real people use. The individual in this function must be comfortable owning an entire technical product surface, coordinating deployments with an infrastructure engineer, and making consequential technical decisions with appropriate judgement and speed.",
    required: [
      "Live React and Next.js product in production",
      "Node.js and Express API development",
      "Supabase or Postgres database architecture",
      "Payment gateway integration experience"
    ],
    advantage: [
      "Razorpay integration experience",
      "India-specific payment compliance knowledge",
      "Real-time feature development",
      "Core Web Vitals optimisation"
    ],
    values: [
      "Staging validation before every production deployment",
      "Documented code as a professional standard",
      "Coordinated deployments over solo releases",
      "Zero tolerance for silent failures"
    ],
    questions: [
      "Provide the live URL of a product you have built and deployed using React, Next.js, and a backend API. Describe the full technical architecture — frontend, backend, database, and deployment infrastructure.",
      "Walk through in precise technical detail how you would implement a Razorpay subscription flow including webhook handling, payment failure recovery, and subscription status synchronisation with the WiseIn database.",
      "Describe your process for coordinating a production deployment with an infrastructure engineer. What does that workflow look like from code completion to live deployment?"
    ]
  },
  megha: {
    id: "megha",
    name: "Megha (मेघ)",
    title: "Cloud & Infrastructure Engineer",
    trackInfo: "Technology Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Nirmata · Yantra",
    overview: "Megha is responsible for the uninterrupted operational availability of WiseIn. The platform serves verified professional users who have invested in a premium subscription — they have a reasonable expectation that the product will be available when they need it, and an intolerance for downtime that interrupts their professional engagement. Megha exists to ensure that expectation is met, without exception, across all thirteen weeks of the fellowship. This is not an infrastructure role in the abstract sense. It is the operational guarantor of a live commercial product. Every decision Megha makes — architectural, procedural, or reactive — carries the weight of real subscribers and real business continuity.",
    mission: "To maintain WiseIn's operational availability at the highest possible standard and to build the deployment infrastructure that allows Nirmata and Yantra to ship with confidence and without risk.",
    responsibilities: [
      {
        title: "AWS Infrastructure Management",
        text: "Megha designs, deploys, and maintains the complete AWS infrastructure supporting WiseIn — including EC2 compute, RDS databases, S3 storage, CloudFront distribution, load balancing, and auto-scaling configuration. Every architectural decision is made with reliability, performance, and cost efficiency as concurrent priorities. IAM policies enforce least-privilege access across all services. Security group configuration is reviewed regularly and maintained with current best practice."
      },
      {
        title: "Deployment Infrastructure",
        text: "Megha builds and maintains CI/CD pipelines that allow Nirmata and Yantra to move code from development to production with discipline and confidence. A staging environment that mirrors production in all relevant respects is a non-negotiable requirement. No code reaches production without passing through a validated staging environment. Rollback procedures exist and are tested for every production deployment — recovery capability is not assumed, it is verified."
      },
      {
        title: "Monitoring & Incident Response",
        text: "Sentry error monitoring, uptime alerting, and infrastructure health monitoring are configured, maintained, and actively reviewed by Megha. When an alert fires, the response is immediate and structured. When an incident is resolved, a post-mortem is produced that identifies the root cause and the preventive measure implemented. The same incident does not occur twice."
      },
      {
        title: "Security & Compliance",
        text: "Megha conducts regular reviews of all exposed infrastructure and maintains the security posture of the WiseIn platform at a standard appropriate for a product that handles Aadhaar-verified personal and professional identity data. SSL certificates are current. Access controls are enforced. Anomalous activity is identified and responded to immediately."
      }
    ],
    demands: "Megha must have personally managed live production infrastructure on AWS for a product with real users. The individual in this function must be comfortable with the weight of operational accountability — the knowledge that a decision they make or fail to make directly affects the availability of a commercial product that paying subscribers depend on.",
    required: [
      "Live AWS production infrastructure management",
      "CI/CD pipeline design and implementation",
      "Docker and container orchestration",
      "Monitoring and alerting configuration",
      "Linux systems administration"
    ],
    advantage: [
      "Kubernetes orchestration",
      "Infrastructure cost optimisation",
      "Security hardening for identity-sensitive products",
      "Multi-environment management"
    ],
    values: [
      "Staging validation as an absolute requirement",
      "Documentation of every infrastructure change",
      "Proactive monitoring over reactive response",
      "Post-mortem discipline after every incident"
    ],
    questions: [
      "Describe in precise detail a production AWS infrastructure you have personally built and maintained. What services were used, what was the uptime record, and what was the most significant incident you managed?",
      "Walk through the complete CI/CD pipeline architecture you would design for WiseIn — covering the frontend Next.js application, the backend Node.js API, database migration management, and the coordination protocol with the development team.",
      "WiseIn experiences an unplanned outage during a live Brutal Stories recording session. Subscribers are unable to access the platform. Walk through your exact incident response process from the moment the alert fires to the post-mortem."
    ]
  },
  yantra: {
    id: "yantra",
    name: "Yantra (यन्त्र)",
    title: "Mobile Engineer",
    trackInfo: "Technology Track · In-Person Residency · Hyderabad",
    reportingTo: "Sutradhara, Program Lead",
    collaboratesWith: "Nirmata · Megha",
    overview: "Yantra builds the WiseIn mobile application — a single, shared React Native codebase that delivers full feature parity across iOS and Android. Every verified professional who chooses to engage with WiseIn on a mobile device does so through what this function builds and maintains. The application must be published, functional, and available on both the App Store and Google Play. An App Store rejection, an unreliable payment flow, or a push notification system that fails silently are direct failures of this function.",
    mission: "To deliver and maintain a published, fully functional WiseIn mobile application on both iOS and Android that meets the professional standards of the users it serves.",
    responsibilities: [
      {
        title: "React Native Application Development",
        text: "Yantra builds and maintains WiseIn's mobile application using React Native with TypeScript, implementing a shared codebase architecture that delivers complete feature parity across iOS and Android without platform-specific divergence where avoidable. This encompasses dynamic profile screens, exploration and discovery feeds, sector-based community access, direct video connection flows, and session booking interfaces integrated with Nirmata's booking API."
      },
      {
        title: "Payment & Native Integrations",
        text: "Yantra implements the Razorpay mobile SDK for in-app subscription management and knowledge session payment flows. Where React Native's default capabilities are insufficient for the quality of experience WiseIn demands, Yantra builds the native bridge integrations required to close the gap. Gradle and Xcode build configurations are managed with the discipline that multi-platform release management demands."
      },
      {
        title: "Push Notification Infrastructure",
        text: "WiseIn's push notification system — covering booking confirmations, community activity, direct messages, and platform updates — is Yantra's responsibility. Delivery reliability is a measurable standard, not an aspiration. Silent notification failures are identified through monitoring and resolved before they affect user experience at scale."
      },
      {
        title: "App Store & Play Store Management",
        text: "Yantra manages the complete lifecycle of WiseIn's presence on the App Store and Google Play — submission, review management, version control, and update release coordination. An App Store rejection caused by a preventable policy violation is an operational failure. Yantra understands the submission requirements of both platforms thoroughly and applies that understanding before submission, not after rejection."
      },
      {
        title: "Offline Capability & Performance",
        text: "Yantra implements local SQLite caching for profile data and exploration feed persistence, ensuring that WiseIn delivers a professional-grade experience even under variable network conditions. Performance on mid-range Android devices is a baseline requirement — the verified professional user base Yantra serves is not exclusively on premium hardware."
      }
    ],
    demands: "The individual in this function must have personally built and published a React Native application that is currently live and accessible on both the App Store and Google Play. The application must demonstrate real user functionality — not a demonstration or portfolio piece. The ability to point to a live listing and a working codebase is a non-negotiable application requirement.",
    required: [
      "Published React Native application live on App Store and Google Play",
      "TypeScript proficiency",
      "Native bridge integration experience",
      "App Store and Play Store submission process knowledge",
      "Razorpay mobile SDK or equivalent payment integration"
    ],
    advantage: [
      "Video connection and real-time communication implementation",
      "Offline-first architecture",
      "Deep link handling",
      "Performance optimisation for mid-range Android devices"
    ],
    values: [
      "Shared codebase discipline",
      "Test before submission without exception",
      "API coordination before assumption",
      "Zero preventable App Store rejections"
    ],
    questions: [
      "Provide the App Store and Google Play Store listings for a React Native application you have personally built and published. Describe the complete technical architecture — state management, navigation, API integration, and build configuration.",
      "When a feature behaves differently on iOS and Android within your shared React Native codebase, how do you diagnose the root cause and resolve it without introducing platform-specific code that fragments your architecture?",
      "Walk through in precise technical detail how you would implement a push notification system for WiseIn that reliably delivers booking confirmations and community activity alerts on both iOS and Android — including the backend integration with Nirmata's API."
    ]
  }
};
