import React from "react";
import { UserCheck, ShieldCheck, Heart, Sparkles, Send, Coffee, Check, Mail, ExternalLink } from "lucide-react";

export const AdmissionPathway: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Create a WiseIn Profile",
      desc: "Create your verified profile on Apply on WiseIN",
      impact: "Creates central node coordinates"
    },
    {
      step: "02",
      title: "Complete Aadhaar Verification",
      desc: "All fellows must complete identity verification before review.",
      impact: "Authenticates identity compliance"
    },
    {
      step: "03",
      title: "Select One Fellowship Track",
      desc: "Applicants may apply to one operational track only.",
      impact: "Isolates operational ownership track"
    },
    {
      step: "04",
      title: "Submit Background & Work",
      desc: "Share previous work, projects, links, or systems you have contributed to.",
      impact: "Verifies immediate practical drive"
    },
    {
      step: "05",
      title: "Interview Process",
      desc: "Selected applicants are invited for an in-person Hyderabad interaction round.",
      impact: "Triggers regional in-person screening"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="enrollment-pathway">
      <div className="max-w-7xl mx-auto">
        
        {/* Header segment */}
        <div className="mb-16 text-center max-w-3xl mx-auto animate-fade-in">
          <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2 font-bold">
            <UserCheck className="w-4 h-4 text-blue-600" />
            Admissions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-blue-900 mb-4">
            We select people who already build.
          </h2>
          <div className="text-sm text-slate-950 font-normal leading-relaxed space-y-4">
            <p>
              Applicants may submit: <span className="text-black font-bold font-mono bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded shadow-2xs">projects · products · writing · outreach work · design systems · engineering work · community initiatives · operational experience</span>
            </p>
            <p className="text-black font-extrabold text-base">
              We care less about credentials and more about proof of execution.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-blue-100 hover:border-blue-400 p-6 sm:p-8 rounded-sm flex flex-col justify-between relative group transition-all shadow-xs"
              id={`pathway-step-${item.step}`}
            >
              {/* Giant absolute step indicator */}
              <div className="absolute top-4 right-6 font-mono text-3xl font-extrabold text-blue-100/50 pointer-events-none group-hover:text-blue-200/50 transition-colors">
                {item.step}
              </div>

              <div>
                <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold">
                  Step {item.step}
                </span>
                <h3 className="font-sans text-base sm:text-lg text-slate-900 font-extrabold mt-1 mb-2 group-hover:text-blue-750 transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-955 font-sans text-xs sm:text-sm font-bold leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-blue-100 font-mono text-[10px] text-blue-600 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                <Check className="w-3 h-3 text-blue-650 font-bold" />
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Final Operator Report Section */}
        <div className="bg-blue-50/20 border border-blue-100 p-8 sm:p-10 rounded-lg mb-16 max-w-4xl mx-auto relative overflow-hidden shadow-xs">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/2 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pb-6 border-b border-blue-100 mb-6">
            <div>
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-1 font-bold">
                Residency Offboarding Requirement
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                Final Operator Report
              </h3>
            </div>
            <div className="bg-blue-50 text-blue-700 border border-blue-200 rounded py-1 px-3 font-mono text-xs font-bold">
              Verified Proof-of-Work Archive
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-slate-955 font-bold leading-relaxed mb-6">
            At the conclusion of the residency, every fellow submits a concise operational report documenting:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              "systems worked on",
              "decisions made",
              "execution outcomes",
              "failures encountered",
              "lessons learned",
              "operational observations"
            ].map((bullet, i) => (
              <div key={i} className="bg-white p-4 rounded border border-blue-100 flex items-center gap-3">
                <span className="font-mono text-[10px] text-blue-700 font-bold bg-blue-50 w-6 h-6 rounded-full flex items-center justify-center border border-blue-200">
                  {i + 1}
                </span>
                <span className="font-mono text-xs text-slate-955 capitalize font-bold">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-slate-950 font-bold italic text-center sm:text-left pt-2 border-t border-blue-100">
            The report becomes part of the fellow’s verified proof-of-work archive under Sanshi Network Tech Pvt. Ltd.
          </p>
        </div>

        {/* Alert Callout Box */}
        <div className="bg-blue-50/40 border border-blue-200 p-6 rounded-md mb-16 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-205 flex-shrink-0 flex items-center justify-center animate-pulse">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-left">
            <h4 className="font-sans text-sm font-bold text-slate-950 mb-1">Mandatory Vetting Condition</h4>
            <p className="font-sans text-xs text-slate-950 font-bold leading-relaxed">
              Submissions without a 100% complete, Aadhaar-verified profile saved on <strong className="text-black font-extrabold underline">Apply on WiseIN</strong> will be immediately and permanently disregarded by our review desks.
            </p>
          </div>
        </div>

        {/* Core Quick Application trigger */}
        <div className="text-center">
          <a
            href="https://wisein.in"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-750 text-white font-sans text-sm font-bold uppercase rounded-sm shadow-xs transition-all cursor-pointer group"
            id="url-wisein-open"
          >
            <ExternalLink className="w-4 h-4 shrink-0 text-white" />
            <span>Apply on WiseIN</span>
          </a>
        </div>

      </div>
    </section>
  );
};
