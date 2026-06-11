import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  AlertCircle, 
  UserCheck, 
  ChevronDown, 
  ArrowUpRight, 
  Sparkles,
  Check,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
  Award
} from "lucide-react";

export default function ApplyView() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need to be based in Hyderabad before applying?",
      a: "No, but you must be physically present in Hyderabad by July 1, 2026. Once selected, our Koshaadhikari will coordinate your onboarding logistics."
    },
    {
      q: "Can I apply if I am currently a student?",
      a: "Yes. We do not filter by student or professional status. We filter by proof of execution. If you have built something real, apply."
    },
    {
      q: "Is there an age requirement?",
      a: "No stated age requirement. You must be legally eligible to work in India and capable of independent professional-level execution."
    },
    {
      q: "Can I apply for more than one role?",
      a: "No. One applicant, one role, one application. Multi-role applications are immediately disqualified."
    },
    {
      q: "What if my WiseIn profile is not 100% complete?",
      a: "Do not submit until it is. Incomplete or unverified applications are rejected without review and without notification. Complete everything first."
    },
    {
      q: "Will I know if I was rejected?",
      a: "We do not send individual rejection notifications. If you have not heard back within 10 working days of a complete, verified submission, you may reach out at connect@aarambhfellowship.com."
    },
    {
      q: "Is Varsha the only open season?",
      a: "Varsha - Season 1 - is the currently active cohort starting July 1, 2026. Sharad, Vasant, and Grishma applications open on a rolling basis. Register your interest for future seasons via email."
    }
  ];

  return (
    <div className="w-full bg-white select-none">
      
      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[30rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06)_0%,_transparent_65%)] pointer-events-none z-0" />
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100 text-blue-700 text-[10px] font-mono font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Applications Live · Varsha Season 1</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-slate-900 leading-none mb-4"
          >
            Apply to Aarambh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed"
          >
            Aarambh looks for proven builders with strict execution credentials. Here is the operational specification and entry protocol.
          </motion.p>
        </div>
      </div>

      {/* ── READ THIS FIRST SECTION ────────────────────────────── */}
      <div className="bg-white py-16 border-b border-slate-100 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/3">
              <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold select-none">
                PRE-FLIGHT RULES
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Read This First
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Aarambh is a high-intensity deployment residency. Review these baseline realities before initiating your review protocol.
              </p>
            </div>
            
            <div className="lg:w-2/3 border-l-2 border-blue-600 pl-6 sm:pl-8 space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black text-slate-400 block">01 / LOCATION EXCLUSIVITY</span>
                <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-bold">
                  You must be physically present in <strong className="text-slate-950 font-extrabold">Hyderabad</strong> for the full 13-week duration starting <strong className="text-slate-950 font-extrabold">July 1, 2026</strong>. Remote participation is stringently prohibited.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black text-slate-400 block">02 / OPERATIONAL SCALE</span>
                <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-bold">
                  You will have genuine database inputs and pipeline ownership. If you slip, production benchmarks are impacted. This is a real deployment sandbox, not a simulator.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black text-slate-400 block">03 / CONSECUTIVE PACING</span>
                <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-bold">
                  A high-tempo rhythm of 91 consecutive days. Monday strategic kickoffs, Wednesday mid-week production launches, and Friday hard-target deliveries recur without pause.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black text-slate-400 block">04 / IDENTITY VERIFICATION</span>
                <p className="text-xs sm:text-sm text-slate-955 leading-relaxed font-bold">
                  All profiles must have complete Aadhaar-verified status on <strong className="text-blue-600 font-extrabold">Apply on WiseIN</strong>. Submissions lacking secure verified coordinates are auto-filtered out immediately.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── WHO WE ARE LOOKING FOR ──────────────────────────────── */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/3">
              <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
                PROVEN BENCHMARKS
              </span>
              <h2 className="text-xl font-extrabold font-sans text-slate-900 tracking-tight leading-snug">
                Evidence of Shipment
              </h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Prior credentials, degrees, and academic pedigree are secondary. We select based on standalone proof of execution.
              </p>
            </div>

            <div className="lg:w-2/3">
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                Demonstrated output in at least one of these professional domains is highly valued:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 md:gap-x-12">
                <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100/70">
                  <span className="p-0.5 rounded-full bg-blue-50 text-blue-600 mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-950 font-black font-sans block">Operational Products</span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">Live web portals or digital pipelines</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100/70">
                  <span className="p-0.5 rounded-full bg-blue-50 text-blue-600 mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-955 font-black font-sans block">Managed Communities</span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">Real cohorts with monitored engagement</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100/70">
                  <span className="p-0.5 rounded-full bg-blue-50 text-blue-600 mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-955 font-black font-sans block">Active Outreach</span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">Cold pipelines initiated and refined</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100/70">
                  <span className="p-0.5 rounded-full bg-blue-50 text-blue-600 mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-955 font-black font-sans block">Production Codebases</span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">Public and auditable active code hosts</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100/70">
                  <span className="p-0.5 rounded-full bg-blue-50 text-blue-600 mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-955 font-black font-sans block">Media & Writing Channels</span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">Consistent publish intervals on schedules</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100/70">
                  <span className="p-0.5 rounded-full bg-blue-50 text-blue-600 mt-0.5"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <span className="text-xs sm:text-sm text-slate-955 font-black font-sans block">Closed Commercial Deals</span>
                    <span className="text-[11px] text-slate-400 font-medium font-mono">Verifiable B2B or institutional conversion</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-5 text-[11px] text-slate-500 font-mono flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Rolling reviews processed daily. No backlog accumulation.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── THE FIVE APPLICATION STEPS (TIMELINE STRUCTURE) ─────────── */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 lg:mb-14">
            <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
              ADMISSION PROTOCOL
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-sans text-slate-900 tracking-tight">
              The Five Application Steps
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              A sequence engineered around transparency, security, and verification.
            </p>
          </div>

          <div className="relative border-l border-slate-150 pl-6 sm:pl-8 ml-3 space-y-10 sm:space-y-12">
            
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-[10px] sm:text-xs font-black">
                01
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase font-sans tracking-wide">Register Account Coordinates</h4>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                  Establish an authentic account on <strong className="text-blue-600">Apply on WiseIN</strong>. This establishes your central applicant node coordinate.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-[10px] sm:text-xs font-black">
                02
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase font-sans tracking-wide">Aadhaar Bio-Aesthetic Sync</h4>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                  Complete the secure identity verification pipeline in the application. Safe, encrypted, and structurally mandatory to guard against unverified profiles.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-[10px] sm:text-xs font-black">
                03
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase font-sans tracking-wide">Complete Profile to 100%</h4>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                  Instate a clean headshot, record precise past execution metrics, and list verified links of active production systems you contributed to.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-[10px] sm:text-xs font-black">
                04
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase font-sans tracking-wide">Select Exactly One Sanskrit Function</h4>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                  Acknowledge and target precisely one dedicated track matching your direct superpower. Multi-role redundancy attempts trigger system discard.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <span className="absolute -left-[35px] sm:-left-[43px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-[10px] sm:text-xs font-black">
                05
              </span>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-black text-blue-900 uppercase font-sans tracking-wide">Coupon Verification Activation</h4>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                  Apply for the role using the active activation code <strong className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-mono font-black">FREE3</strong>. Restrict from paying any premium fee listed on general portals.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── AFTER YOU SUBMIT TIMELINE TIMELINE SECTION ────────────── */}
      <div className="bg-white py-16 border-b border-slate-100 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-1/3">
              <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
                TIMELINE PROCESS
              </span>
              <h2 className="text-xl font-extrabold font-sans text-slate-900 tracking-tight leading-snug">
                After You Submit
              </h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                What happens to your applicant payload once submitted to the desk.
              </p>
            </div>

            <div className="lg:w-2/3 space-y-6 text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
              <div className="pb-4 border-b border-slate-100">
                <strong className="text-slate-900 font-extrabold font-sans block mb-1">1. Active Rolling Review</strong>
                <p className="text-slate-500 font-normal">
                  Your coordinates undergo automated Aadhaar match confirmations and link verifications. If any metrics are fake, the node is immediately severed.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <strong className="text-slate-900 font-extrabold font-sans block mb-1">2. Hyderabad In-Person Coffee</strong>
                <p className="text-slate-500 font-normal">
                  If selected, you will be invited to a 45-minute casual conversation in Hyderabad with the founder office. This is to verify physical alignment, intent, and operational rhythm.
                </p>
              </div>

              <div className="pb-4 border-b border-slate-100">
                <strong className="text-slate-900 font-extrabold font-sans block mb-1">3. Future Rollings</strong>
                <p className="text-slate-500 font-normal">
                  If not selected for Varsha, credentials persist safely on the application portal to match for Sharad, Vasant or Grishma cycles.
                </p>
              </div>

              <p className="font-mono text-[11px] text-slate-400">
                Expected turnaround: 3 – 7 operational days. If lacking feedback by 10 days, mail your application link to connect@aarambhfellowship.com.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── THE TEN ROLES SYNOPSIS DIRECTORY ─────────────────────────── */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 lg:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
                OPERATIONAL DIVISION
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-sans text-slate-900 tracking-tight">
                Functional Tracks Synopsis
              </h2>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              Total Slots: 10
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 font-sans">
            
            {/* Business Track Group */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-4 border-b border-slate-100 pb-2">
                  Business & Execution Functions
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Sutradhara</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Operations orchestration, team sync control, precise timeline compliance and direct founder coordination.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Duta Pravesh</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Outbound pipeline activation and daily contact. Requires highly persistent follow-up stamina.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Artha Siddhi</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Direct commercial conversion, retention metrics oversight, and verified revenue growth operations.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Mitra</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Institutional relationships handling, high-stakes client engagement, and long-cycle strategic integrations.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Katha</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Content architecture across writing, video, and design with structured daily calendar deliveries.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Sabha</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Community management, event logistics, and maintaining continuous authentic peer engagement.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Koshaadhikari</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Systems logistics, travel metrics tracking, financial processing, and tight operational accounting.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Track Group */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-4 border-b border-slate-100 pb-2">
                  Technology & Deployment Positions
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Nirmata</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Full-stack product building. Requires React, Node.js, Postgres/Supabase, and public live shipped links.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Megha</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Infrastructure scaling, AWS/Cloud orchestration, Docker setups, and continuous system reliability.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900">Yantra</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    High-tempo React Native mobile build operations, App Store releases, and mobile performance optimization.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── FREQUENTLY ASKED QUESTIONS (CONTAINERLESS ACCORDION) ─────────── */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 sm:text-left">
            <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
              FAQ SYNC
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-sans text-slate-900">
              Frequently Asked Before Applying
            </h2>
          </div>

          <div className="space-y-0.5 border-t border-slate-100">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-slate-100 hover:bg-slate-50/45 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-4.5 sm:py-5 flex justify-between items-center cursor-pointer font-sans"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── CENTRAL ACTION REGISTRATION BOTTOM ───────────────────────── */}
      <div className="bg-white py-20 text-center font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-50 text-blue-650 mb-4">
            <UserCheck className="w-6 h-6" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Mandatory Vetting</h2>
          
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto">
            Reviewers disregard submittals that lack an active verified identity registered securely on <span className="text-blue-600 font-bold">Apply on WiseIN</span>. No appeals or manual exceptions are permitted.
          </p>

          <a
            href="https://wisein.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <span>Apply on WiseIN</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

    </div>
  );
}
