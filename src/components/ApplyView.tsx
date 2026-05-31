import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  AlertOctagon, 
  UserCheck, 
  ChevronDown, 
  ArrowUpRight, 
  Sparkles
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
      a: "Varsha — Season 1 — is the currently active cohort starting July 1, 2026. Sharad, Vasant, and Grishma applications open on a rolling basis. Register your interest for future seasons via email."
    }
  ];

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Varsha Season 1 · Applications Live · Rolling Daily Review</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-slate-900 leading-none mb-6"
          >
            Apply to Aarambh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-950 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            We select people who already build. Here is everything you need to know before you apply.
          </motion.p>

        </div>
      </div>

      {/* ── READ THIS FIRST WARNING SECTION ─────────────────────── */}
      <div className="bg-white py-20 border-b border-slate-100 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100/80 flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-blue-700">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-950">Read This First</h3>
              <p className="text-xs sm:text-sm text-slate-950 leading-relaxed font-semibold">
                Aarambh is not the right program for everyone. Before you apply, be honest with yourself about the following:
              </p>
              
              <ul className="space-y-3 font-semibold text-xs sm:text-sm text-slate-950 list-inside list-disc pl-2 leading-relaxed">
                <li>You must be able to be physically present in **Hyderabad** for the full 13-week duration starting **July 1, 2026**. There are no exceptions. Remote participation is not available for any role in any season.</li>
                <li>You must be comfortable with **real accountability**. Your function affects real users and real metrics. If you falter, the company feels it. If you are looking for a low-stakes environment to practice, this is not it.</li>
                <li>You must be willing to work at a **high and consistent pace** for 91 consecutive days. The fellowship rhythm does not pause for personal preference. Monday kickoffs, Wednesday productions, and Friday deliveries happen every week.</li>
                <li>You must apply with a **100% complete, Aadhaar-verified WiseIn profile**. Applications submitted without this are immediately and permanently disqualified without appeal.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── WHO WE ARE LOOKING FOR ──────────────────────────────── */}
      <div className="bg-slate-50/20 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Applicant Filtering Rules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 tracking-tight">
              Who We Are Looking For
            </h2>
            <p className="text-sm sm:text-base text-slate-950 font-bold mt-2 leading-relaxed">
              We care less about credentials and more about proof of execution.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed mb-8">
            We want to see evidence that you have already done something real — independently, without a structured environment telling you exactly what to do. That something could be:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">A product you built and shipped to real users.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">A community you grew and managed with real engagement.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">An outreach campaign you ran producing results.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">A codebase you deployed that is live & accessible.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">A content channel you maintained consistently.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">A partnership or deal you closed with a real entity.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">A financial or operational system you set up & ran.</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#e2eafc] flex gap-3 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-sm text-slate-955 font-bold">Writing or research demonstrating clear thinking.</span>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-950 font-bold bg-blue-50/40 p-4 rounded-xl border border-blue-105">
            You do not need a degree. You do not need a prior company name on your profile. You need to show us that you have already started — and that you are serious about doing more.
          </p>

        </div>
      </div>

      {/* ── THE FIVE APPLICATION STEPS ───────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center sm:text-left">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Admission Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-955">
              The Five Application Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-slate-50 border border-[#e2eafc] flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono font-black text-blue-700 bg-blue-50 w-7 h-7 rounded-lg border border-blue-200 flex items-center justify-center">01</span>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Step One</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-xs font-black text-slate-900 uppercase">Register Identity</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">
                  Establish an authentic account on <strong className="text-blue-600 block">Apply on WiseIN</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-slate-50 border border-[#e2eafc] flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono font-black text-blue-700 bg-blue-50 w-7 h-7 rounded-lg border border-blue-200 flex items-center justify-center">02</span>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Step Two</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-xs font-black text-slate-900 uppercase">Verify Aadhaar</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">
                  Complete official secure biometric sync on the app to prove your identity.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-slate-50 border border-[#e2eafc] flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono font-black text-blue-700 bg-blue-50 w-7 h-7 rounded-lg border border-blue-200 flex items-center justify-center">03</span>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Step Three</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-xs font-black text-slate-900 uppercase">Refine Profile</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">
                  Upload a clean headshot & complete your track metadata to 100%.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-slate-50 border border-[#e2eafc] flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono font-black text-blue-700 bg-blue-50 w-7 h-7 rounded-lg border border-blue-200 flex items-center justify-center">04</span>
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">Step Four</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-xs font-black text-slate-900 uppercase">Target 1 Role</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">
                  Apply for exactly one dedicated Sanskrit track that fits your exact skillset.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-slate-50 border border-blue-100 flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono font-black text-blue-700 bg-blue-50 w-7 h-7 rounded-lg border border-blue-200 flex items-center justify-center">05</span>
                <span className="text-[9px] font-mono font-bold text-blue-700 uppercase">FREE3 Active</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-sans text-xs font-black text-blue-900 uppercase">Apply Free</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-bold">
                  Use coupon code <strong className="text-blue-600 bg-blue-50 px-1 py-0.5 rounded font-black font-mono">FREE3</strong> — do not purchase a subscription.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* ── AFTER YOU SUBMIT FLOW CHART ───────────────────────────── */}
      <div className="bg-slate-50/20 py-20 border-b border-slate-100 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Review Cycle Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 tracking-tight">After You Submit</h2>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-955 font-semibold leading-relaxed">
            <p>
              Applications are reviewed daily on a rolling basis. There is no batch review window — your application enters review the day it is submitted, provided it is complete and verified.
            </p>
            <p>
              **If selected:** You will receive a direct message on WiseIn inviting you to an in-person coffee interview in Hyderabad. This is not a formal boardroom interview — it is a 45-minute face-to-face conversation with the coordination team to verify your intent, clarify your role, and confirm your availability for the full 13-week residency.
            </p>
            <p>
              **If not selected for this season:** Your profile remains on WiseIn and you are eligible to apply for Sharad, Vasant, or Grishma. We do not provide individual rejection feedback, but we do read every submission.
            </p>
            <p className="font-sans text-xs text-slate-950 font-extrabold bg-[#f0f4ff] border border-blue-200/50 p-4 rounded-xl">
              Response time is typically 3–7 working days from submission. If you have not heard anything after 10 working days, reach us at connect@aarambhfellowship.com with your profile link.
            </p>
          </div>

        </div>
      </div>

      {/* ── THE TEN ROLES SYNOPSIS DIRECTORY ─────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <span className="font-mono text-[10px] text-blue-6us uppercase block tracking-widest mb-1 font-bold">
              Specific Track Targetings
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-955 tracking-tight">
              The Ten Roles — Which One Is Yours?
            </h2>
          </div>

          <div className="space-y-8 font-sans">
            
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-extrabold block mb-2">Business Tracks</span>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
                <p>
                  <strong>Sutradhara:</strong> Apply if you are a natural coordinator who holds complexity without cracking, communicates with precision, and takes direct accountability for other people's execution.
                </p>
                <p>
                  <strong>Duta Pravesh:</strong> Apply if you are energised by outreach, comfortable with high-volume daily contact, and have the persistence to follow up until you get a response.
                </p>
                <p>
                  <strong>Artha Siddhi:</strong> Apply if you have closed people before — converted hesitant buyers, retained at-risk customers, and measured your own performance in revenue numbers.
                </p>
                <p>
                  <strong>Mitra:</strong> Apply if you have built institutional relationships, understand how organisations make decisions, and are comfortable in long-cycle, high-stakes conversations.
                </p>
                <p>
                  <strong>Katha:</strong> Apply if you have produced real content consistently — video, graphics, writing — on a calendar that did not stop, and have the work to show for it.
                </p>
                <p>
                  <strong>Sabha:</strong> Apply if you have managed a real community, understand what keeps people engaged, and genuinely enjoy the daily work of human connection at scale.
                </p>
                <p>
                  <strong>Koshaadhikari:</strong> Apply if you are methodical, precise, and deeply uncomfortable with anything untracked, unconfirmed, or left to chance.
                </p>
              </div>
            </div>

            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <span className="text-[10px] uppercase font-mono tracking-wider text-blue-600 font-extrabold block mb-2">Technology Positions</span>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-955 font-semibold leading-relaxed">
                <p>
                  <strong>Nirmata:</strong> Apply if you have shipped a real web product using React, Next.js, Node.js, and a database like Supabase or Postgres, and you can point to it live on the internet.
                </p>
                <p>
                  <strong>Megha:</strong> Apply if you have deployed and maintained real infrastructure on AWS, understand CI/CD pipelines, and have been personally responsible for keeping something live.
                </p>
                <p>
                  <strong>Yantra:</strong> Apply if you have built and published a real React Native application to the App Store or Google Play and can demonstrate the codebase and the live listing.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── FREQUENTLY ASKED QUESTIONS (ACCORDION) ─────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center sm:text-left">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Clearing Ambiguity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-955">
              Frequently Asked Before Applying
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-[#e2eafc] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 bg-slate-50/50 hover:bg-slate-50 flex justify-between items-center cursor-pointer transition-colors"
                >
                  <span className="font-sans text-xs sm:text-sm font-extrabold text-slate-950">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 bg-white"
                    >
                      <div className="p-6 text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
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

      {/* ── MANDATORY BOTTOM CTA ───────────────────────────────── */}
      <div className="bg-slate-50/20 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-blue-50 border border-blue-105 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xs">
            <UserCheck className="w-8 h-8 text-blue-700" />
          </div>
          <h2 className="text-3xl font-black font-sans text-slate-900 tracking-tight mb-4">Mandatory Condition</h2>
          <p className="text-base text-slate-955 font-bold leading-relaxed mb-8 max-w-xl mx-auto">
            Submissions without a 100% complete, Aadhaar-verified profile saved on <strong className="text-blue-600">Apply on WiseIN</strong> are immediately and permanently disregarded by our review desk. No exceptions. No appeals.
          </p>
          <a
            href="https://wisein.in/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 hover:bg-blue-750 text-white font-sans text-xs font-bold uppercase rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Apply on WiseIN</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </div>

    </div>
  );
}
