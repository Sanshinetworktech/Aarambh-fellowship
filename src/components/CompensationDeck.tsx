import React from "react";
import { BENEFITS } from "../data";
import { Gift, Award, Train, Users, ShieldCheck, CreditCard, Flame, Building, Sparkles } from "lucide-react";

export const CompensationDeck: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "founderaccess":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "workspaceinfra":
        return <Building className="w-5 h-5 text-blue-600" />;
      case "wiseinpro":
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case "founderkeypass":
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case "travelinternet":
        return <Train className="w-5 h-5 text-blue-600" />;
      case "proofofwork":
        return <Award className="w-5 h-5 text-blue-600" />;
      case "fulltimeopp":
        return <Flame className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/10" id="perks-section">
      <div className="max-w-7xl mx-auto animate-fade-in">
        
        {/* Header segment */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2 font-bold animate-fade-in">
            <Gift className="w-4 h-4 text-blue-600" />
            Vesting Perks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-blue-900 mb-4">
            What Fellows Receive
          </h2>
          <p className="text-sm sm:text-base text-slate-950 font-normal leading-relaxed">
            This is an <strong className="text-black font-extrabold">equity-in-experience model (No stipend)</strong>. 
            Sanshi Network Tech Private Limited funds 100% of physical operations, premium developer workspaces, commute costs, high-speed home connections, and uncensored exposure to real operational assets.
          </p>
        </div>

        {/* 9 Cards Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((perk, index) => {
            const declarationNumber = String(index + 1).padStart(2, "0");
            return (
              <div
                key={perk.id}
                className="bg-white border border-blue-100 hover:border-blue-400 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-all group shadow-xs"
                id={`perk-card-${perk.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5 border-b border-blue-100 pb-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-blue-600 font-bold">
                      PERK DECLARATION {declarationNumber}
                    </span>
                    <div className="w-9 h-9 rounded bg-blue-50 border border-blue-150 flex items-center justify-center">
                      {getIcon(perk.id)}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {perk.title}
                  </h3>
                  
                  <span className="inline-block px-2 py-0.5 font-mono text-[9px] bg-blue-50 text-blue-700 border border-blue-250 font-semibold rounded mb-4">
                    {perk.tag}
                  </span>

                  <p className="text-slate-955 font-sans text-xs sm:text-sm font-semibold leading-relaxed mb-4">
                    {perk.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-100 text-[10px] sm:text-xs font-sans text-slate-950 font-bold italic">
                  {perk.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment box callout */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-150 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[9px] text-blue-700 uppercase tracking-widest block mb-1 font-bold">
              Employment Pipeline Note
            </span>
            <p className="font-sans text-sm text-slate-955 font-semibold max-w-2xl leading-relaxed">
              We look for continuous builders. Outstanding execution throughout the 91 Days in Hyderabad leads directly to a formal in-person full-time employment proposal with equity shares and standard tech compensation packages.
            </p>
          </div>
          <a
            href="#enrollment-pathway"
            className="px-5 py-3 bg-blue-600 hover:bg-blue-750 text-white font-sans text-xs font-bold uppercase rounded-sm whitespace-nowrap transition-colors shadow-xs"
          >
            Review Application Steps
          </a>
        </div>

      </div>
    </section>
  );
};
