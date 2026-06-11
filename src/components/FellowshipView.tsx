import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, 
  MapPin, 
  Users, 
  GitPullRequest, 
  Calendar, 
  CornerDownRight, 
  Award, 
  Gift, 
  CheckCircle, 
  AlertTriangle,
  ChevronDown,
  Activity,
  Briefcase,
  AlertCircle,
  Share2,
  Check,
  CheckCircle2,
  ArrowUpRight,
  BookOpen
} from "lucide-react";
import { ROLES, WEEK_DAYS, BENEFITS } from "../data";
import { ROLE_PROSE_DATA, RoleProse } from "../roleProseData";

export default function FellowshipView() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShareRole = (roleId: string) => {
    const shareUrl = `${window.location.origin}?page=fellowship&role=${roleId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    });
  };

  // Expanded descriptions/owns text matching the verbatim content perfectly
  const getVerbatimRoleDesc = (roleId: string) => {
    switch (roleId) {
      case "sutradhara":
        return {
          detail: "The single coordination nerve of the entire cohort. Sutradhara holds every operational thread, spanning across all ten fellows, all three products, and the founder. You run Monday kickoffs, review the Zoho board daily, file the weekly founder report every Friday, and ensure no fellow is blocked, confused, or without a clear weekly priority. The founder should never be surprised by anything.",
          owns: "Zoho board · Notion workspace · Monday kickoffs · Weekly founder report · Cross-team dependency resolution · Performance visibility"
        };
      case "dutapravesh":
        return {
          detail: "The revenue engine. Every rupee of new WiseIn MRR begins with your outreach. You go first, initiating 20+ personalised outreaches per day across LinkedIn, WhatsApp, and email. You source and confirm one Brutal Stories guest every week. You grow the Tapby (TapbyWiseaIN) waitlist. You hand every warm lead to Artha Siddhi with full context. Zero cold handoffs.",
          owns: "Top-of-funnel pipeline · Brutal Stories guest sourcing · Tapby waitlist · Lead qualification · Zoho CRM accuracy"
        };
      case "arthasiddhi":
        return {
          detail: "You close what Duta Pravesh opens. Every warm lead is contacted within 2 hours. You convert leads to paid WiseIn subscribers, manage every active account, and prevent churn before it happens. You own the MRR number. It goes up because of you, or it does not go up.",
          owns: "Lead conversion · Account management · Churn prevention · MRR tracking · Retention strategy · Zoho CRM account records"
        };
      case "mitra":
        return {
          detail: "You build institutional leverage. One MOU with a college or company brings dozens of verified users at once. You sign institutional partnerships, close Startup Expo sponsors, and build the café network that keeps Brutal Stories running every Wednesday. Minimum 3 signed MOUs across 17 weeks.",
          owns: "Institutional partnerships · MOU drafting and closing · Expo sponsorships · Café venue relationships · Partnership pipeline in Zoho CRM"
        };
      case "katha":
        return {
          detail: "The public face of Aarambh. One piece of original content every day without exception. Every Wednesday you film the full Brutal Stories session, edit three short clips the same night, and publish the full YouTube episode within 48 hours. The content calendar is planned 7 days ahead at all times.",
          owns: "Daily content calendar · Brutal Stories filming and editing · YouTube production · Short-form clips · Graphics and teasers · Brand visual consistency"
        };
      case "sabha":
        return {
          detail: "The human layer of WiseIn. Every new member is personally welcomed within 24 hours. You run three active sector communities with daily engagement. You manage all Brutal Stories RSVPs, send every reminder, and keep the Tapby member group active every single day. Silence is a failure state.",
          owns: "Member onboarding · Community engagement · RSVP management · Tapby user group · Member complaint resolution · Community health reporting"
        };
      case "koshaadhikari":
        return {
          detail: "Every rupee that moves (whether in or out) is logged by you the same day. You confirm Wednesday's venue by Monday morning every week without exception. You process fellow reimbursements within 48 hours. You produce the monthly ledger on the 1st without being asked. Nothing operational should ever break because of logistics.",
          owns: "Same-day financial logging · Reimbursement processing · Venue confirmation · Vendor management · Monthly ledger · Expo logistics"
        };
      case "nirmata":
        return {
          detail: "You build and maintain the systems that power WiseIn. React and Next.js frontend. Node.js and Express APIs. Supabase and Postgres databases. Razorpay payment flows. Brutal Stories portal. Tapby portal. What you ship goes directly to real users. Downtime is not acceptable during active member sessions.",
          owns: "WiseIn frontend and backend · API development · Database integrations · Payment systems · Portal builds · Code review and deployment"
        };
      case "megha":
        return {
          detail: "You keep WiseIn completely live and operational at all times. CI/CD pipelines. AWS infrastructure: EC2, RDS, auto-scaling. Docker and Kubernetes. Sentry error monitoring. Database backups. Zero downtime when members are active. If WiseIn goes down, it is your responsibility to bring it back.",
          owns: "AWS infrastructure · CI/CD pipelines · Staging environment · Auto-scaling · Database backups · Monitoring and alerts · Uptime reliability"
        };
      case "yantra":
        return {
          detail: "You build the WiseIn mobile application on React Native: a single shared codebase for iOS and Android. Dynamic profiles, exploration feed, video connections, booking systems, and push notification infrastructure. Published on the App Store and Google Play. Every feature reaches real users on their phones.",
          owns: "React Native codebase · iOS and Android builds · App Store and Play Store submissions · Mobile UX flows · Push notification systems · Native bridge integrations"
        };
      default:
        return { detail: "", owns: "" };
    }
  };

  const selectedRoleData = ROLES.find(r => r.id === selectedRole) || ROLES[0];
  const selectedRoleVerbatim = getVerbatimRoleDesc(selectedRole);

  return (
    <div className="w-full bg-white select-none">
      
      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-white to-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[30rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12)_0%,_transparent_60%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10.5px] font-mono font-bold uppercase tracking-wider mb-6"
          >
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span>17 Weeks · Hyderabad · In-Person Residency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-slate-900 leading-none mb-6"
          >
            The Fellowship
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-955 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about how Aarambh works, what you will own, and what you will walk away with.
          </motion.p>

        </div>
      </div>

      {/* ── WHAT THIS IS & STRUCTURE ─────────────────────────────── */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
                Residency Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-955 mb-6">
                What This Is
              </h2>
              <div className="text-sm sm:text-base text-slate-955 font-medium space-y-4 leading-relaxed">
                <p>
                  Aarambh is a <strong className="text-slate-900 font-extrabold">17-week in-person operator residency</strong> in Hyderabad, India. Ten selected fellows work directly on three live production systems operated by Sanshi Network Tech Private Limited. There are no simulations, no mock assignments, and no hypothetical case studies.
                </p>
                <p>
                  Every deliverable affects real users. Every decision moves a real metric.
                </p>
                <p className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-slate-955 font-bold italic">
                  "This is not an internship. It is not a bootcamp. It is not a certification program. It is the operating division of a live company."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-2 font-bold">
                Operational Logistics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-955 mb-6">
                The Structure
              </h2>

              <div className="p-6 rounded-3xl bg-slate-50 border border-[#e2eafc] overflow-hidden space-y-4">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200/60">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">DURATION</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">17 Weeks · 120 Consecutive Days</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">COHORT SIZE</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">10 Fellows Only</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200/60">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">LOCATION</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">Hyderabad, India (In-Person)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-mono">REPORTING CHAIN</span>
                    <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">To Sutradhara & Founder</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">COORDINATION SUITE</span>
                  <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">Zoho Projects · Zoho Desk · Zoho CRM · Zoho Mail</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ── THE 13-WEEK RHYTHM ───────────────────────────────────── */}
      <div className="bg-slate-50/20 py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Unbroken Routine Coordination
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
              The 17-Week Rhythm
            </h2>
            <p className="text-sm sm:text-base text-slate-955 font-bold leading-relaxed">
              We run a highly coordinated weekly schedule. Same structure, every week, for 17 consecutive weeks. Consistency is not a preference - it is the operational discipline that makes execution at this pace possible.
            </p>
          </div>

          <div className="space-y-6">
            {WEEK_DAYS.map((day, idx) => (
              <div 
                key={day.day} 
                className="bg-white border border-[#e2eafc] p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-3xs hover:border-blue-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 font-mono text-[11px] font-black flex items-center justify-center shrink-0 border border-blue-100">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-950 mb-1 flex items-center gap-3">
                      <span>{day.day}</span>
                      <span className="text-[10px] tracking-wide font-mono bg-blue-50 text-blue-700 font-black px-2 py-0.5 rounded border border-blue-105">
                        {day.mode}
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400 block font-mono mb-2">{day.subtitle}</p>
                    <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-semibold max-w-xl">
                      {day.description}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-[11px] text-blue-600 bg-blue-50/50 border border-blue-100 p-3 rounded-xl max-w-xs md:text-right font-bold w-full md:w-auto">
                  <span className="text-[9px] uppercase tracking-wider block text-blue-500 mb-1 font-black">Mandate</span>
                  {day.mandate}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── THE TEN FUNCTIONS & HIERARCHY ─────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Company Hierarchy & Allocation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
              Ten Specialized Sanskrit Functions
            </h2>
            <p className="text-base text-slate-955 font-bold">
              Seven high-tempo business tracks and three technology positions reporting under Sutradhara.
            </p>
          </div>

          {/* Hierarchy Chart */}
          <div className="mb-20 max-w-2xl mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-100 font-mono text-xs text-slate-950 leading-relaxed text-center sm:text-left shadow-3xs font-semibold">
            <div className="text-center pb-4 border-b border-slate-200 mb-4">
              <span className="text-[10px] text-slate-400 block font-mono uppercase mb-1">FOUNDING EXECUTIVE</span>
              <span className="text-slate-900 font-extrabold text-sm uppercase">Srishta (Founder & Managing Director)</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-1.5 h-6 bg-slate-200" />
              <div className="px-4 py-2 rounded bg-blue-100 border border-blue-200 text-blue-700 font-black uppercase text-[11px]">
                Sutradhara ( सूत्रधार ) - Main Program Manager
              </div>
              <div className="w-1.5 h-6 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-white border border-slate-200">
                <span className="text-[10px] tracking-wide text-blue-600 uppercase font-black block mb-2">Business tracks</span>
                <ul className="text-left space-y-1.5 text-[11px]">
                  <li>• Duta Pravesh (BDR)</li>
                  <li>• Artha Siddhi (Sales Leads)</li>
                  <li>• Mitra (Strategic MOUs & Café Ties)</li>
                  <li>• Katha (Media Filming & Reels edits)</li>
                  <li>• Sabha (Onboarding & RSPV Syncs)</li>
                  <li>• Koshaadhikari (Logistics Ledgers)</li>
                </ul>
              </div>

              <div className="p-4 rounded bg-white border border-slate-200">
                <span className="text-[10px] tracking-wide text-blue-600 uppercase font-black block mb-2">Technology Tracks</span>
                <ul className="text-left space-y-1.5 text-[11px]">
                  <li>• Nirmata (Full Stack Developer)</li>
                  <li>• Megha (AWS Cloud Sync Architect)</li>
                  <li>• Yantra (Mobile React Native Developer)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interactive Role Explorer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Roles Sidebar selectors */}
            <div className="lg:col-span-4 space-y-2 max-h-[500px] overflow-y-auto pr-2">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    selectedRole === role.id 
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                    : "bg-slate-50 text-slate-800 border-slate-100 hover:bg-slate-100"
                  }`}
                >
                  <div>
                    <span className={`text-[9px] font-mono uppercase tracking-widest block ${selectedRole === role.id ? "text-blue-100" : "text-slate-400"}`}>
                      {role.category} Track
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-extrabold tracking-tight block mt-0.5">
                      {role.name}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${selectedRole === role.id ? "-rotate-90 text-white" : "text-slate-400"}`} />
                </button>
              ))}
            </div>

            {/* Active Selected Role details */}
            <div className="lg:col-span-8 bg-slate-50/50 border border-[#e2eafc] p-8 rounded-3xl min-h-[420px] flex flex-col justify-between shadow-2xs relative select-text">
              
              {(() => {
                const prose: RoleProse = ROLE_PROSE_DATA[selectedRole] || {
                  id: selectedRoleData.id,
                  name: selectedRoleData.name,
                  title: selectedRoleData.title,
                  trackInfo: `${selectedRoleData.category} Track · In-Person Residency · Hyderabad`,
                  reportingTo: "Srishta, Founder & Managing Director",
                  collaboratesWith: "All Fellows · Founder Office",
                  overview: selectedRoleData.shortDescription,
                  mission: selectedRoleData.shortDescription,
                  responsibilities: selectedRoleData.deliverables.map((d, i) => ({ title: `Deliverable ${i + 1}`, text: d })),
                  demands: selectedRoleData.schedule,
                  required: selectedRoleData.skillsRequired,
                  advantage: [],
                  values: ["Execution", "Precision", "Accountability"],
                  questions: ["Detail your real-world shipment experience."]
                };

                return (
                  <div className="space-y-8">
                    
                    {/* Header bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                      <div>
                        <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block mb-1 font-bold">
                          {selectedRoleData.category} Track • Active Role Specification
                        </span>
                        <h3 className="text-2xl font-black text-slate-950 tracking-tight font-sans">
                          {prose.name || selectedRoleData.name} - {prose.title || selectedRoleData.title}
                        </h3>
                      </div>
                      <span className="inline-block self-start font-mono text-[10px] font-bold text-blue-700 bg-blue-150 border border-blue-200 px-3 py-1 rounded uppercase tracking-wider">
                        {selectedRoleData.location}
                      </span>
                    </div>

                    {/* Operational Sync Coordinates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4.5 bg-white border border-slate-150 rounded-xl text-xs text-slate-950 font-semibold font-sans">
                      <div>
                        <span className="text-[9px] font-mono uppercase text-slate-400 block mb-0.5">LINE REPORT EXECUTION</span>
                        <span className="font-bold text-slate-900">{prose.reportingTo}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono uppercase text-slate-400 block mb-0.5">TEAM SYNC COORD</span>
                        <span className="font-bold text-slate-900">{prose.collaboratesWith}</span>
                      </div>
                    </div>

                    {/* Mission Directive */}
                    <div className="pl-5 border-l-4 border-blue-600">
                      <span className="font-mono text-[9px] text-blue-600 uppercase tracking-wider font-extrabold block mb-1">THE DIRECT MICRO-MISSION</span>
                      <p className="font-sans text-sm font-bold text-slate-950 leading-relaxed italic">
                        "{prose.mission}"
                      </p>
                    </div>

                    {/* Context Overview */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[9px] text-slate-400 uppercase block tracking-wider font-extrabold">FUNCTIONAL OVERVIEW</span>
                      <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-medium">
                        {prose.overview}
                      </p>
                    </div>

                    {/* Key Shipment Responsibilities */}
                    <div className="space-y-3">
                      <span className="font-mono text-[9px] text-blue-600 uppercase block tracking-wider font-extrabold">RESPONSIBILITIES & SYSTEMS OWNERSHIP</span>
                      <div className="grid grid-cols-1 gap-3">
                        {prose.responsibilities.map((resp, idx) => (
                          <div key={idx} className="p-4 border border-slate-200 bg-slate-50/40 rounded-lg text-xs hover:bg-slate-50 transition-colors">
                            <span className="font-mono text-[9px] text-blue-600 font-bold block mb-1">MODULE {String(idx + 1).padStart(2, '0')} · {resp.title}</span>
                            <span className="text-slate-950 font-normal leading-relaxed">{resp.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Operations Schedules */}
                    <div className="p-4.5 bg-white border border-slate-200 rounded-xl space-y-2">
                      <span className="font-mono text-[9px] text-slate-455 uppercase block font-bold">OPERATIONAL ATTENDANCE & SCHEDULE</span>
                      <p className="text-xs font-sans text-slate-900 font-bold leading-relaxed">{prose.demands}</p>
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-1.5 text-[10px] font-mono text-slate-500">
                        <span>Rotation frequency: <strong className="text-slate-900">{selectedRoleData.weeklyCommitment}</strong></span>
                        <span>Primary Sync Tool: <strong className="text-slate-905">{selectedRoleData.zohoIntegrations.join(', ')}</strong></span>
                      </div>
                    </div>

                    {/* Vetting Assignments */}
                    {prose.questions && prose.questions.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-blue-600 uppercase font-black tracking-widest">
                          <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                          <span>Technical Vetting Prompts</span>
                        </div>
                        <div className="space-y-2">
                          {prose.questions.map((prompt, pidx) => (
                            <div key={pidx} className="p-3.5 border border-blue-50 bg-blue-50/15 rounded-lg text-xs font-semibold leading-relaxed text-slate-950">
                              {prompt}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Prominent Coupon Code Notice Block */}
                    <div className="p-4.5 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
                      <div className="flex items-center justify-between text-[9.5px] font-mono font-bold text-blue-700">
                        <div className="flex items-center gap-1 uppercase">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>COUPON CODE ACTIVE</span>
                        </div>
                        <span className="bg-blue-100/90 px-2 py-0.5 rounded text-[8.5px]">ID: ARH-V1</span>
                      </div>
                      <p className="text-xs text-slate-950 leading-relaxed font-bold">
                        Do not buy/take the paid subscription node on the jobs portal. Use the coupon code <strong className="bg-blue-100/90 text-blue-750 font-mono px-2 py-0.5 rounded font-black select-all text-xs">FREE3</strong> to apply completely free.
                      </p>
                    </div>

                    {/* Inline Call to Action buttons */}
                    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">
                        RECRUITMENT TRACK ID: {selectedRoleData.id.toUpperCase()}-01
                      </span>
                      
                      <div className="flex items-center gap-2.5 w-full sm:w-auto">
                        <button
                          onClick={() => handleShareRole(selectedRoleData.id)}
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-sans text-xs font-bold rounded cursor-pointer transition-all"
                        >
                          {shareSuccess ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                              <span>Copied link!</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>Share Role</span>
                            </>
                          )}
                        </button>

                        <a
                          href="https://wisein.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-6 py-2 bg-blue-600 text-white hover:bg-blue-755 font-sans text-xs font-bold rounded uppercase transition-all shadow-xs cursor-pointer"
                        >
                          <span>Apply on WiseIN</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                        </a>
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>

          </div>

        </div>
      </div>

      {/* ── WHAT FELLOWS RECEIVE (The 9 Perks) ───────────────────── */}
      <div className="bg-slate-50/25 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Fulfillment Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
              What Fellows Receive
            </h2>
            <p className="text-sm sm:text-base text-slate-950 font-bold">
              This is an equity-in-experience model. There is no monthly cash salary. Sanshi Network Tech Pvt. Ltd. funds 100% of operations. Out-of-pocket costs are zero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Perk 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 01</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Aarambh Sharad Welcome Box</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                  Custom Kraft box delivered before Day 1. Contains a physical Fellow ID card, organic cotton tote, workspace notebook, endemic seed kit, and a handwritten MD letter.
                </p>
              </div>
            </div>

            {/* Perk 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 02</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Founder-Signed Proof-of-Work Cards</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
                  Monthly. Formally documents the exact code modules built, campaigns executed, metrics moved, and systems owned. Multiple milestone cards issued. Verifiable in of itself.
                </p>
              </div>
            </div>

            {/* Perk 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 03</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Travel & Internet Reimbursement</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                  100% reimbursement for all commute costs to office and café venues, and high-speed home internet throughout the fellowship. Filed via Koshaadhikari and processed within 48 hours.
                </p>
              </div>
            </div>

            {/* Perk 4 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 04</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Wednesday Catered Cohort Lunch</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                  Every week immediately following the Brutal Stories live show. The full cohort dines together. Commensal networking. Highly critical part of fellowship bonding.
                </p>
              </div>
            </div>

            {/* Perk 5 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 05</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">WiseIn Pro Access</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
                  Complimentary access to WiseIn Premium features for the full residency duration. Establish and leverage your own verified professional identity on the platform you are building.
                </p>
              </div>
            </div>

            {/* Perk 6 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 06</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Tapby Pass</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                  Full complimentary access to every Brutal Stories live recording, monthly Startup Expos, and all private Sanshi-organised gatherings in Hyderabad during and after the residency.
                </p>
              </div>
            </div>

            {/* Perk 7 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 07</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Direct Founder & Operator Access</h4>
                <p className="text-xs sm:text-sm text-slate-955 font-medium leading-relaxed">
                  Spend real, unmediated time with the founders and senior operators who appear on Brutal Stories and engage with the WiseIn ecosystem. Unfiltered mentoring. No middlemen.
                </p>
              </div>
            </div>

            {/* Perk 8 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 08</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Zoho Workspace Access</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
                  Custom @wisein.in email address and enterprise-level access to the full Zoho software suite: Projects, CRM, Desk, Mail, and Books, from Day 1.
                </p>
              </div>
            </div>

            {/* Perk 9 */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-blue-650 font-black tracking-wider uppercase block mb-3">Perk 09</span>
                <h4 className="font-sans text-base font-bold text-slate-900 mb-2">Full-Time Employment Offer</h4>
                <p className="text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                  Outstanding fellows receive a formal, in-person full-time employment proposal from Sanshi Network Tech Pvt Ltd. Equity participation & standard technology packets included.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── THE FINAL OPERATOR REPORT ────────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 text-center sm:text-left">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold animate-pulse">
              Archive & Proof of Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-955">
              The Final Operator Report
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-955 font-bold leading-relaxed mb-8">
            At the conclusion of the residency, every fellow submits a concise operational report documenting:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-mono text-[10px] text-blue-700 font-black bg-blue-10 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">1</span>
              <span className="font-mono text-xs text-slate-950 capitalize font-bold">Systems worked on</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-mono text-[10px] text-blue-700 font-black bg-blue-10 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">2</span>
              <span className="font-mono text-xs text-slate-950 capitalize font-bold">Decisions made and why</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-mono text-[10px] text-blue-700 font-black bg-blue-10 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">3</span>
              <span className="font-mono text-xs text-slate-955 capitalize font-bold">Execution outcomes and metrics</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-mono text-[10px] text-blue-700 font-black bg-blue-10 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">4</span>
              <span className="font-mono text-xs text-slate-955 capitalize font-bold">Failures encountered</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-mono text-[10px] text-blue-700 font-black bg-blue-10 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">5</span>
              <span className="font-mono text-xs text-slate-955 capitalize font-bold">Lessons learned</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-mono text-[10px] text-blue-700 font-black bg-blue-10 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">6</span>
              <span className="font-mono text-xs text-slate-955 capitalize font-bold">Observations for next cohort</span>
            </div>
          </div>

          <p className="font-sans text-xs text-slate-950 font-bold italic text-center sm:text-left pt-2 border-t border-slate-150">
            The report becomes a permanent part of the fellow's verified proof-of-work archive under Sanshi Network Tech Pvt. Ltd.
          </p>

        </div>
      </div>

      {/* ── ZOHO OPERATIONS PROTOCOL ──────────────────────────────── */}
      <div className="bg-slate-50/20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-zinc-950 text-white flex gap-6 items-start border border-zinc-800">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-500 shrink-0 mt-0.5">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-blue-400 mb-2">Zoho Operations Protocol</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed mb-4">
                Every daily log, ticket, and blocker is tracked in Zoho. Fellows file tickets in Zoho Desk before <strong className="text-blue-400 font-bold">10:00 AM every working day without exception</strong>. 
              </p>
              <p className="text-xs text-slate-450 font-mono leading-relaxed font-bold">
                This prevents chat congestion, establishes a clean corporate audit trail, and ensures the founder and Sutradhara have full operational visibility. <strong className="text-blue-400 font-black">Missing a Zoho ticket is not a minor oversight. It is an operational failure.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
