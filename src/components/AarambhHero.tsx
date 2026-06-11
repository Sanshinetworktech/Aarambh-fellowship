import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, MapPin, Sparkles, Send, ArrowUpRight } from "lucide-react";
import BadgeTag from "./ui/badge-tag";

interface HeroProps {
  onExploreRoles: () => void;
}

export const AarambhHero: React.FC<HeroProps> = ({ onExploreRoles }) => {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-white to-white" id="aarambh-hero-section">
      
      {/* ── ACETERNITY-INSPIRED BACKGROUND LAYERS ──────────────────────── */}
      
      {/* 1. Spotlight Overlay: Cone of soft blue glow projecting from top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[35rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15)_0%,_transparent_65%)] pointer-events-none z-0" />
      
      {/* 2. Soft Dynamic floating glow nodes */}
      <motion.div 
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[10%] w-[25rem] h-[25rem] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" 
      />
      
      <motion.div 
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" 
      />


      {/* 4. Tiny Micro Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none z-0" />

      {/* ── CENTRAL PREMIUM HERO CONTENT ────────────────────────────── */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Announcement Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-3 mb-8 w-full max-w-md px-4"
        >
          <BadgeTag />
        </motion.div>
 
        {/* Master Branding Title & Text with Aceternity Visual Flow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="mb-4">
            <span className="font-sans text-[11px] font-black uppercase text-blue-600/95 tracking-[0.25em] block leading-none">
              Sanshi Network Tech Pvt. Ltd. Presents
            </span>
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-2.5" />
          </div>
          
          {/* Main heading styled under Playfair Elegant Serif paired with clean sans */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-sans tracking-tighter text-slate-900 leading-[0.9] mt-2 max-w-4xl select-none">
            आरम्भ <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">Fellowship</span>
          </h1>
          
          <p className="font-mono text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest mt-6 max-w-xl">
            A 17-week (4-month) in-person operator residency in Hyderabad, India · Cohort E1
          </p>
        </motion.div>
 
        {/* Primary Impact Pitch matching exact user verbatim segment */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-3xl mb-12 text-center"
        >
          <p className="text-slate-955 font-sans text-base sm:text-xl font-semibold leading-relaxed mb-6">
            Ten handpicked fellows receive direct system ownership to build, deploy, and scale live platforms across WiseIn, Brutal Stories, and Tapby (TapbyWiseaIN).
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pt-4 border-t border-blue-50/70 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-700 font-bold bg-blue-50/50 px-2.5 py-1 rounded border border-blue-100">
              ⚡ No simulations
            </span>
            <span className="text-slate-300 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-700 font-bold bg-blue-50/50 px-2.5 py-1 rounded border border-blue-100">
              ⚡ No classroom exercises
            </span>
            <span className="text-slate-300 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-700 font-bold bg-blue-50/50 px-2.5 py-1 rounded border border-blue-100">
              ⚡ Everything ships to production
            </span>
          </div>
        </motion.div>
 
        {/* Action Button Segment with premium border shimmer glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-xs px-4 mb-20"
        >
          <button
            onClick={onExploreRoles}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-blue-600 text-white hover:bg-blue-750 font-sans text-xs font-bold uppercase rounded-[4px] shadow-md shadow-blue-500/10 cursor-pointer group hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 relative overflow-hidden"
            id="btn-explore-tracks"
          >
            {/* Horizontal shimmer effect inside button */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            
            <span>Explore 10 Active Roles</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </motion.div>
 
        {/* Coordinate Highlight Metadata Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-8 border-t border-blue-100 pt-12 px-2 w-full text-left"
        >
          <div className="flex flex-col p-4 rounded-lg bg-white/45 border border-transparent hover:border-blue-100 hover:bg-white/80 hover:shadow-xs transition-all duration-300">
            <span className="font-mono text-[10.5px] text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              Location
            </span>
            <span className="font-sans text-sm sm:text-[15px] text-slate-800 font-bold whitespace-nowrap">Hyderabad HQ</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 leading-snug">In-Person Workspace Residency</span>
          </div>
 
          <div className="flex flex-col p-4 rounded-lg bg-white/45 border border-transparent hover:border-blue-100 hover:bg-white/80 hover:shadow-xs transition-all duration-300">
            <span className="font-mono text-[10.5px] text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Duration
            </span>
            <span className="font-sans text-sm sm:text-[15px] text-slate-800 font-bold whitespace-nowrap">13 Focus Weeks</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 leading-snug">91 Days Unbroken System Routine</span>
          </div>
 
          <div className="flex flex-col p-4 rounded-lg bg-white/45 border border-transparent hover:border-blue-100 hover:bg-white/80 hover:shadow-xs transition-all duration-300">
            <span className="font-mono text-[10.5px] text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
              ⚡ Sizing
            </span>
            <span className="font-sans text-sm sm:text-[15px] text-slate-800 font-bold whitespace-nowrap">10 Elite spots</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 leading-snug">Handpicked and high-agency</span>
          </div>
 
          <div className="flex flex-col p-4 rounded-lg bg-white/45 border border-transparent hover:border-blue-100 hover:bg-white/80 hover:shadow-xs transition-all duration-300">
            <span className="font-mono text-[10.5px] text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-bold">
              ⚡ Parent Corp
            </span>
            <span className="font-sans text-sm sm:text-[15px] text-slate-850 font-bold whitespace-nowrap truncate">Sanshi Network Tech</span>
            <span className="font-sans text-[11px] text-slate-500 mt-1 leading-snug truncate">Private Limited Entity</span>
          </div>
        </motion.div>
 
      </div>
    </div>
  );
};
