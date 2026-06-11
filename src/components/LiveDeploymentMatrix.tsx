import React from "react";
import { CHANNELS } from "../data";
import { ShieldAlert, Monitor, Youtube, Key, Activity, ArrowUpRight, CheckCircle2, Play, Lock } from "lucide-react";
import { motion } from "motion/react";

export const LiveDeploymentMatrix: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "wisein":
        return <Monitor className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />;
      case "brutalstories":
        return <Youtube className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />;
      case "founderkey":
        return <Key className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />;
      default:
        return <Activity className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />;
    }
  };

  const getCardColorClass = (id: string) => {
    return "text-blue-600 bg-blue-50/70 border-blue-150/65 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600";
  };

  const getDecorationClass = (id: string) => {
    return "bg-gradient-to-br from-blue-500/10 to-transparent";
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-blue-50/10 to-white relative" id="channels-section">
      <div className="absolute inset-0 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title with sophisticated typography */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/80 border border-blue-150/60 rounded-full mb-4">
            <Activity className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-mono text-[9px] text-blue-700 font-black uppercase tracking-widest">
              Live Production Deployments
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
            Live Workspace Initiatives
          </h2>
          <p className="text-sm sm:text-base text-slate-950 font-semibold leading-relaxed max-w-2xl mx-auto">
            Every fellow is given direct access, ownership, and contribution targets across three active production products managed by Sanshi Network Tech Private Limited.
          </p>
        </div>

        {/* Three Channels Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHANNELS.map((channel, idx) => (
            <motion.div
              key={channel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-blue-100 hover:border-blue-300 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden shadow-[0_2px_15px_rgba(59,130,246,0.01)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.06)]"
              id={`channel-${channel.id}`}
            >
              {/* Corner Ambient Radial Glow */}
              <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-45 ${getDecorationClass(channel.id)}`} />
              
              {/* Highlight bar top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Meta Tagline and Custom styled Icon */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100/60 text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wide">
                    {channel.tagline}
                  </div>
                  
                  <div className={`w-11 h-11 border rounded-xl flex items-center justify-center transition-all duration-300 shadow-xs ${getCardColorClass(channel.id)}`}>
                    {getIcon(channel.id)}
                  </div>
                </div>

                {/* Main System Headline */}
                <h3 className="text-xl font-extrabold text-slate-900 font-sans tracking-tight mb-2 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  {channel.name} 
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                
                {/* System Subtitle */}
                <p className="font-mono text-[10px] text-blue-600 font-bold mb-4 pb-3 border-b border-blue-50/80 leading-relaxed uppercase tracking-widest">
                  {channel.subtitle}
                </p>

                {/* Practical Description */}
                <p className="text-slate-955 font-sans text-xs sm:text-sm font-bold leading-relaxed mb-6">
                  {channel.description}
                </p>

                {/* Live System High-Fidelity Mockup Embed */}
                {channel.id === "wisein" && (
                  <div className="mb-8 p-4 rounded-xl bg-blue-50/40 border border-blue-100 group-hover:bg-blue-50/70 transition-colors duration-300 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs font-sans shadow-sm shadow-blue-500/25">
                        S
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-800 truncate">Srishta Founder</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 fill-blue-50" />
                        </div>
                        <p className="text-[10px] font-medium text-slate-500 truncate mt-0.5">Sanshi Network Tech · Founder</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-blue-100 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-blue-600 font-bold">1 Connected Community</span>
                      <span className="text-slate-400 font-medium">ID: #90412</span>
                    </div>
                  </div>
                )}

                {channel.id === "brutalstories" && (
                  <div className="mb-8 p-3 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden shadow-md">
                    <div className="relative aspect-video rounded bg-slate-850 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-2.5 z-10">
                        <div className="min-w-0">
                          <span className="text-[8px] font-mono uppercase bg-blue-600 px-1.5 py-0.5 rounded text-white font-bold tracking-wider">
                            WEEKLY WEDNESDAY LIVE
                          </span>
                          <h4 className="text-[10px] font-bold text-white truncate mt-1">S3 E2: Scale Mindset of Operators</h4>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white z-20 hover:scale-105 transition-transform duration-200 cursor-pointer">
                        <Play className="w-3 h-3 fill-current ml-0.5 text-white" />
                      </div>
                    </div>
                  </div>
                )}

                {channel.id === "founderkey" && (
                  <div className="mb-8 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 text-white border border-blue-500/20 relative overflow-hidden shadow-md">
                    <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-blue-600/10 rounded-full blur-lg" />
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[8px] font-mono opacity-50 uppercase tracking-widest block mb-0.5 font-bold">
                          Access Pass
                        </span>
                        <span className="text-[11px] font-black tracking-widest text-blue-400 font-mono">
                          TAPBY
                        </span>
                      </div>
                      <span className="text-[8px] font-mono border border-blue-400/30 px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 font-bold uppercase tracking-wider">
                        Hyderabad HQ
                      </span>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <div>
                        <p className="text-[8px] font-mono text-slate-400 font-semibold uppercase leading-none mb-1">Pass holder status</p>
                        <p className="text-[10px] font-bold font-sans tracking-wide">Ecosystem Builder</p>
                      </div>
                      <span className="text-[8px] font-mono text-blue-400/85">#HYD-8812</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Status Section */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 font-semibold text-[10.5px]">Operation Status</span>
                <span className="inline-flex items-center gap-1.5 bg-blue-50/80 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-normal select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  Live Production
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strict Working Condition Statement */}
        <div className="mt-12 bg-white p-6 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left shadow-xs hover:border-blue-200 transition-colors duration-300">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center border border-blue-100">
            <ShieldAlert className="w-5.5 h-5.5 text-blue-600" />
          </div>
          <p className="font-sans text-xs sm:text-[13px] text-slate-950 font-semibold leading-relaxed">
            <strong className="text-black font-extrabold">Regulatory Declaration:</strong> All three systems are operational corporate mechanisms managed by Sanshi Network Tech Private Limited. Unverified profiles, fake credentials, and academic simulators are systematically restricted. Real work has real liabilities and rewards.
          </p>
        </div>

      </div>
    </section>
  );
};
