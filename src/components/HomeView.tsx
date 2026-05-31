import React from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Eye, 
  Tv, 
  Key, 
  Award,
  Clock,
  Sparkles,
  Users
} from "lucide-react";

// @ts-ignore
import wiseInBedroom from "../assets/images/wisein_bedroom_creation_1780196514474.png";
// @ts-ignore
import wiseInHackathon from "../assets/images/wisein_hackathon_launch_1780196532321.png";
// @ts-ignore
import wiseInFounder from "../assets/images/wisein_founder_santhosh_1780196548742.png";

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="w-full bg-white select-none">
      
      {/* ── SERIES BAR metadata banner ───────────────────────────── */}
      <div className="bg-blue-600 text-white py-2.5 px-4 sm:px-6 lg:px-8 border-b border-blue-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between text-[9px] xs:text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-white/90 gap-2.5 sm:gap-4">
          <div className="flex items-start sm:items-center gap-2 uppercase font-bold text-center sm:text-left justify-center sm:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mt-1.5 sm:mt-0 shrink-0" />
            <span className="leading-relaxed sm:leading-none">
              WiseIn Series • Aarambh Fellowship • Varsha Season 1
            </span>
          </div>
          <p className="uppercase font-semibold text-white/85 text-center sm:text-right leading-relaxed sm:leading-none">
            Sponsorship & Deployment Node: Sanshi Network Tech Pvt. Ltd.
          </p>
        </div>
      </div>

      {/* ── HERO SECTION ───────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-white to-white border-b border-slate-100">
        
        {/* Spotlight & Atmospheric layers */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[35rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15)_0%,_transparent_65%)] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none z-0" />

        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10.5px] font-mono font-bold uppercase tracking-wider mb-8 shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-blue-600 animate-spin" />
            <span>Sanshi Network Tech Pvt. Ltd. Presents • Cohort E1 • Varsha Season 1</span>
          </motion.div>

          {/* Core Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-sans tracking-tighter text-slate-100 bg-linear-to-b from-slate-900 to-slate-950 bg-clip-text text-transparent leading-[0.9] max-w-4xl">
              आरम्भ <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Fellowship</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm font-extrabold text-blue-600 uppercase tracking-widest mt-6 max-w-xl mx-auto">
              A 13-week in-person operator residency in Hyderabad, India
            </p>
          </motion.div>

          {/* High-Impact Verbatim Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mb-12"
          >
            <p className="text-slate-950 font-sans text-base sm:text-xl font-semibold leading-relaxed mb-8">
              Ten handpicked fellows receive direct system ownership to build, deploy, and scale live platforms across WiseIn, Brutal Stories, and WiseIn Key. No simulations. No classroom exercises. Everything ships to production.
            </p>

            <p className="text-slate-955 font-sans text-xs sm:text-sm font-bold bg-blue-50/50 border border-blue-100 px-4 py-2.5 rounded-lg max-w-lg mx-auto leading-relaxed">
              Applications for Varsha Season 1 are live and reviewed daily on WiseIn.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md px-4 mb-16"
          >
            <a
              href="https://wisein.in/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-750 font-sans text-xs font-bold uppercase rounded-lg shadow-md shadow-blue-500/10 cursor-pointer transition-all duration-300"
            >
              <span>Apply on WiseIN</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
            
            <button
              onClick={() => onNavigate("fellowship")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-800 hover:bg-slate-50 border border-[#e2eafc] font-sans text-xs font-bold uppercase rounded-lg shadow-2xs cursor-pointer transition-all duration-300"
            >
              <span>Explore Program</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* ── RESIDENCY LIFE & PREVIOUS COHORTS GALLERY ─────────────────── */}
      <div className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100">
            <div className="text-left">
              <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block mb-2 font-bold select-none">
                PREVIOUS COHORTS & WORKING RESIDENCY
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-sans text-slate-900 tracking-tight">
                Corporate Sandbox & Team Life
              </h2>
            </div>
            <button
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-bold uppercase font-mono mt-3 md:mt-0 group cursor-pointer transition-colors"
            >
              <span>Learn About Sanshi Operations</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Image card 1 */}
            <div 
              onClick={() => onNavigate("about")}
              className="group cursor-pointer block text-left"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100 aspect-16/10 mb-3 border border-slate-100 shadow-2xs group-hover:shadow-xs transition-all duration-300">
                <img 
                  src={wiseInBedroom} 
                  alt="Built from a Bedroom in Hyderabad" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start justify-between gap-2 px-1">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Built from a Bedroom in Hyderabad</h4>
                  <p className="text-[11px] text-slate-500 font-medium font-mono">WiseIn History · Product Conceptualization</p>
                </div>
                <Users className="w-3.5 h-3.5 text-slate-300 mt-1 shrink-0" />
              </div>
            </div>

            {/* Image card 2 */}
            <div 
              onClick={() => onNavigate("about")}
              className="group cursor-pointer block text-left"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100 aspect-16/10 mb-3 border border-slate-100 shadow-2xs group-hover:shadow-xs transition-all duration-300">
                <img 
                  src={wiseInHackathon} 
                  alt="April 2025 College Hackathon" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start justify-between gap-2 px-1">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">April 2025 Hackathon Launch</h4>
                  <p className="text-[11px] text-slate-500 font-medium font-mono">Platform Genesis · First 50 Users</p>
                </div>
                <MapPin className="w-3.5 h-3.5 text-slate-300 mt-1 shrink-0" />
              </div>
            </div>

            {/* Image card 3 */}
            <div 
              onClick={() => onNavigate("about")}
              className="group cursor-pointer block text-left sm:col-span-2 lg:col-span-1"
            >
              <div className="overflow-hidden rounded-2xl bg-slate-100 aspect-16/10 mb-3 border border-slate-100 shadow-2xs group-hover:shadow-xs transition-all duration-300">
                <img 
                  src={wiseInFounder} 
                  alt="Vanaparthi Santhosh" 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start justify-between gap-2 px-1">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Vanaparthi Santhosh</h4>
                  <p className="text-[11px] text-slate-500 font-medium font-mono">Founder & CEO · Product Designer</p>
                </div>
                <Award className="w-3.5 h-3.5 text-slate-300 mt-1 shrink-0" />
              </div>
            </div>
          </div>

          {/* Coordinate Map Pin Section (Containerless layout) */}
          <div className="flex flex-col sm:flex-row items-center sm:justify-between px-2 py-4 border-t border-dashed border-slate-150 gap-4">
            <div className="flex items-center gap-2.5 text-left">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wide">PHYSICAL NODE COORDINATES</p>
                <p className="text-xs text-slate-700 font-semibold leading-tight">Sanshi Network Tech Private Limited, L.B. Nagar, Hyderabad, Telangana, India</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Sanshi+Network+Tech+Private+Limited/@17.311603,78.5445893,15z/data=!3m1!4b1!4m6!3m5!1s0x6785cd30a1885311:0x76603f5e9b5b9be2!8m2!3d17.3115828!4d78.554889!16s%2Fg%2F11wj9bmrmk?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 text-[11px] font-mono font-bold text-slate-700 uppercase px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <span>View Location on Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* ── 4 STATS INDICATORS ──────────────────────────────────────── */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
            
            <div className="flex flex-col p-6 rounded-3xl bg-slate-50/50 border border-[#e2eafc] hover:border-blue-200 transition-all duration-300">
              <span className="text-4xl sm:text-5xl font-black font-sans text-blue-600 tracking-tight mb-2">10</span>
              <span className="font-sans text-sm text-slate-950 font-bold">Selected Fellows Only</span>
              <span className="font-sans text-xs text-slate-500 mt-1">High-trust, core-focused cohort</span>
            </div>

            <div className="flex flex-col p-6 rounded-3xl bg-slate-50/50 border border-[#e2eafc] hover:border-blue-200 transition-all duration-300">
              <span className="text-4xl sm:text-5xl font-black font-sans text-blue-600 tracking-tight mb-2">13</span>
              <span className="font-sans text-sm text-slate-950 font-bold">Focused Weeks</span>
              <span className="font-sans text-xs text-slate-500 mt-1">91 Days continuous deployment</span>
            </div>

            <div className="flex flex-col p-6 rounded-3xl bg-slate-50/50 border border-[#e2eafc] hover:border-blue-200 transition-all duration-300">
              <span className="text-4xl sm:text-5xl font-black font-sans text-blue-600 tracking-tight mb-2">3</span>
              <span className="font-sans text-sm text-slate-950 font-bold">Live Production Systems</span>
              <span className="font-sans text-xs text-slate-500 mt-1">Real users and consequences</span>
            </div>

            <div className="flex flex-col p-6 rounded-3xl bg-slate-50/50 border border-[#e2eafc] hover:border-blue-200 transition-all duration-300">
              <span className="text-4xl sm:text-5xl font-black font-sans text-blue-600 tracking-tight mb-2">4</span>
              <span className="font-sans text-sm text-slate-950 font-bold">Annual Seasons</span>
              <span className="font-sans text-xs text-slate-500 mt-1">Aligned with the Indian cycle</span>
            </div>

          </div>
        </div>
      </div>

      {/* ── THE CORE PHILOSOPHY SECTION ────────────────────────────────── */}
      <div className="bg-slate-50/30 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Who We Are • Fundamental Beliefs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-6">
              The Core Philosophy
            </h2>
            <div className="text-base sm:text-lg text-slate-955 font-semibold space-y-4 leading-relaxed">
              <p>
                <strong className="text-black font-extrabold block text-xl mb-1">Aarambh — आरम्भ — means beginning.</strong>
                The fellowship is built on a simple belief: people learn fastest when trusted with real responsibility.
              </p>
              <p>
                Fellows work directly on active systems operated by <span className="text-black font-bold">Sanshi Network Tech Pvt. Ltd.</span> across product, growth, media, partnerships, community, and infrastructure. This is not an academic internship. There are no mock projects or hypothetical assignments. The work done here affects real users, real communities, and real business operations.
              </p>
            </div>
          </div>

          {/* The Three Pillars Grid - Consistent styling with color containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
            
            {/* Card 1: Autonomy */}
            <div className="group relative bg-white border border-[#e2eafc] p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(59,130,246,0.01)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] overflow-hidden">
              <div className="relative z-10 w-full">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-semibold shadow-2xs">
                  <Flame className="w-5 h-5" />
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-5">
                  Pillar 01 • Autonomy
                </div>
                
                <h3 className="text-xl sm:text-2xl text-slate-900 font-bold font-sans tracking-tight mb-4">
                  Ownership
                </h3>
                
                <p className="text-sm text-slate-950 font-medium leading-relaxed mb-8">
                  Fellows are not assigned repetitive task lists or micromanaged workflows. Each person owns one specific operational function and is expected to contribute independently, communicate clearly, and execute consistently. If you succeed, the company is elevated. If you falter, the metric feels it directly.
                </p>
              </div>
              
              <div className="pt-5 border-t border-slate-100 font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold">
                Full Accountability
              </div>
            </div>

            {/* Card 2: Execution */}
            <div className="group relative bg-white border border-[#e2eafc] p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(59,130,246,0.01)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] overflow-hidden">
              <div className="relative z-10 w-full">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-semibold shadow-2xs">
                  <Layers className="w-5 h-5" />
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-5">
                  Pillar 02 • Execution
                </div>
                
                <h3 className="text-xl sm:text-2xl text-slate-900 font-bold font-sans tracking-tight mb-4">
                  Applied Lab
                </h3>
                
                <p className="text-sm text-slate-950 font-medium leading-relaxed mb-8">
                  Zero examinations or certification courses. Your portfolio consists entirely of verified, founder-signed proof-of-work cards documenting precisely what was shipped, what was scaled, and what you independently owned.
                </p>
              </div>
              
              <div className="pt-5 border-t border-slate-100 font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold">
                Verified Portfolios
              </div>
            </div>

            {/* Card 3: Destination */}
            <div className="group relative bg-white border border-[#e2eafc] p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(59,130,246,0.01)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] overflow-hidden">
              <div className="relative z-10 w-full">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-semibold shadow-2xs">
                  <Eye className="w-5 h-5" />
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-5">
                  Pillar 03 • Destination
                </div>
                
                <h3 className="text-xl sm:text-2xl text-slate-900 font-bold font-sans tracking-tight mb-4">
                  Career Pipeline
                </h3>
                
                <p className="text-sm text-slate-950 font-medium leading-relaxed mb-8">
                  Top performers across the ten spots secure full-time deployment offers from Sanshi Network Tech Private Limited to drive national WiseIn growth. Comes with equity participation and standard technology packages.
                </p>
              </div>
              
              <div className="pt-5 border-t border-slate-100 font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold">
                National Career Leap
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── THREE LIVE SYSTEMS ────────────────────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">
              Active Production Backlogs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
              Three Live Systems. One Residency.
            </h2>
            <p className="text-base text-slate-955 font-semibold leading-relaxed">
              Every fellow is given direct access, ownership, and contribution targets across three active production products managed by Sanshi Network Tech Private Limited.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* System 1 */}
            <div className="p-8 rounded-3xl bg-slate-50/50 border border-[#e2eafc] flex flex-col justify-between hover:border-blue-300 hover:bg-white shadow-2xs transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-105 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-950 mb-1 flex items-center justify-between">
                  <span>WiseIn</span>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase font-bold">
                    wisein.in
                  </span>
                </h3>
                <span className="font-sans text-xs text-slate-400 block mb-4">Verified Professional Network</span>
                <p className="font-sans text-sm text-slate-950 font-medium leading-relaxed mb-6">
                  India's verified professional network. Aadhaar-verified profiles, direct video connections, paid knowledge sessions, and AI-assisted matching across multiple sectors — teachers, officers, agriculturists, and tech architects. Supported by active paid subscribers.
                </p>
              </div>
              <a
                href="https://wisein.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-650 hover:text-blue-800 uppercase tracking-wider font-mono self-start"
              >
                <span>Navigate to wisein.in</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* System 2 */}
            <div className="p-8 rounded-3xl bg-slate-50/50 border border-[#e2eafc] flex flex-col justify-between hover:border-blue-300 hover:bg-white shadow-2xs transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-105 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
                  <Tv className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-950 mb-1 flex items-center justify-between">
                  <span>Brutal Stories</span>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase font-bold">
                    YouTube
                  </span>
                </h3>
                <span className="font-sans text-xs text-slate-400 block mb-4">Weekly YouTube Show • Every Wednesday</span>
                <p className="font-sans text-sm text-slate-950 font-medium leading-relaxed mb-6">
                  A raw, interactive weekly show filmed at premier Hyderabad cafés. Features one prominent founder or professional before a live audience. Produces long-form episodes and same-night high-impact short vertical clips every week without exception.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                Production-Level Training
              </span>
            </div>

            {/* System 3 */}
            <div className="p-8 rounded-3xl bg-slate-50/50 border border-[#e2eafc] flex flex-col justify-between hover:border-blue-300 hover:bg-white shadow-2xs transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-105 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-950 mb-1 flex items-center justify-between">
                  <span>WiseIn Key</span>
                  <span className="text-[10px] font-mono text-zinc-600 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded uppercase font-bold">
                    Physical Key
                  </span>
                </h3>
                <span className="font-sans text-xs text-slate-400 block mb-4">Offline Membership • Hyderabad</span>
                <p className="font-sans text-sm text-slate-950 font-medium leading-relaxed mb-6">
                  A premium physical and digital access pass for verified founders and high-performing operators. Grants complimentary entry to all Brutal Stories live recordings, monthly Startup Expos, and exclusive networking meetups across Hyderabad.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                Elite Physical Token
              </span>
            </div>

          </div>

          <div className="mt-12 p-6 rounded-2xl bg-zinc-900 text-white flex gap-4 items-start border border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 shrink-0 mt-0.5">
              <span className="font-sans font-black text-blue-500 text-lg">!</span>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-blue-400 mb-1">Regulatory Declaration</h4>
              <p className="text-xs text-slate-300 font-mono leading-relaxed font-semibold">
                All three systems are operational corporate mechanisms managed by Sanshi Network Tech Private Limited. Unverified profiles, fake credentials, and academic simulators are systematically restricted. Real work has real liabilities and rewards.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── THE FOUR SEASONS OF AARAMBH ───────────────────────────────── */}
      <div className="bg-slate-50/50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Year-Round Activity Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
              The Four Seasons of Aarambh
            </h2>
            <p className="text-sm sm:text-base text-slate-955 font-bold leading-relaxed">
              Our fellowship runs year-round in compliance with the natural cycle of the Indian seasons. Each season handpicks a cohort of ten exceptional fellows for a 13-week focused sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Season 1: Varsha */}
            <div className="p-6 rounded-3xl bg-white border-2 border-blue-500/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-blue-650 uppercase font-black">Season 01 • Active</span>
                  <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-1.5 py-0.5 rounded font-bold font-mono">🌧️ VARSHA</span>
                </div>
                <h3 className="text-xl font-black text-slate-950 tracking-tight mb-2">Varsha (वर्षा)</h3>
                <span className="font-mono text-[11px] text-blue-650 block mb-4 font-extrabold">Jul – Sep 2026 • Starts July 1</span>
                <p className="font-sans text-xs text-slate-950 font-medium leading-relaxed">
                  The beginning of raw energy. Releasing foundational systems, deploying primary databases, and establishing the physical community baseline in Hyderabad.
                </p>
              </div>
              <span className="text-[10px] font-mono text-blue-600 block pt-4 border-t border-slate-100 font-bold mt-6">
                Monsoon Cohort
              </span>
            </div>

            {/* Season 2: Sharad */}
            <div className="p-6 rounded-3xl bg-white/65 border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Season 02 • Coming</span>
                  <span className="text-xs bg-slate-50 text-slate-650 border border-slate-200 px-1.5 py-0.5 rounded font-bold font-mono">🍂 SHARAD</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">Sharad (शरद)</h3>
                <span className="font-mono text-[11px] text-slate-500 block mb-4 font-bold">Oct – Dec 2026</span>
                <p className="font-sans text-xs text-slate-950 font-medium leading-relaxed">
                  Clarity, sharpness, and accelerated growth. Refining user onboarding funnels and expanding structural partner frameworks across the city.
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-500 block pt-4 border-t border-slate-100 font-bold mt-6">
                Autumn Cohort
              </span>
            </div>

            {/* Season 3: Vasant */}
            <div className="p-6 rounded-3xl bg-white/65 border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Season 03 • Coming</span>
                  <span className="text-xs bg-slate-50 text-slate-650 border border-slate-200 px-1.5 py-0.5 rounded font-bold font-mono">🌸 VASANT</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">Vasant (वसन्त)</h3>
                <span className="font-mono text-[11px] text-slate-500 block mb-4 font-bold">Jan – Mar 2027</span>
                <p className="font-sans text-xs text-slate-950 font-medium leading-relaxed">
                  Bloom, expansion, and new ideas. Launching creative social sub-networks and scaling offline hyper-local forums.
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-500 block pt-4 border-t border-slate-100 font-bold mt-6">
                Spring Cohort
              </span>
            </div>

            {/* Season 4: Grishma */}
            <div className="p-6 rounded-3xl bg-white/65 border border-[#e2eafc] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Season 04 • Coming</span>
                  <span className="text-xs bg-slate-50 text-slate-650 border border-slate-200 px-1.5 py-0.5 rounded font-bold font-mono">☀️ GRISHMA</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">Grishma (ग्रीष्म)</h3>
                <span className="font-mono text-[11px] text-slate-500 block mb-4 font-bold">Apr – Jun 2027</span>
                <p className="font-sans text-xs text-slate-950 font-medium leading-relaxed">
                  Intensity, heat, and peak performance. Optimising latency, consolidating databases, and executing hyper-growth marketing activations.
                </p>
              </div>
              <span className="text-[10px] font-mono text-slate-500 block pt-4 border-t border-slate-100 font-bold mt-6">
                Summer Cohort
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* ── TEN SPECIALIZED FUNCTIONS PREVIEW ────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
                Operational Structure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
                Ten Specialized Functions
              </h2>
              <p className="text-base text-slate-955 font-semibold max-w-2xl leading-relaxed">
                Seven high-tempo business tracks and three technology positions. Everyone reports to Sutradhara, who manages the Zoho coordination table directly with founder Srishta.
              </p>
            </div>
            <button
              onClick={() => onNavigate("fellowship")}
              className="mt-6 md:mt-0 px-6 py-3 border border-blue-200 text-blue-700 hover:bg-blue-50 font-mono text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer"
            >
              Apply Selected Role
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-black text-blue-600 block mb-1">Coordinator</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Sutradhara</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Program Manager & general cohort alignment lead.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400 block mb-1">Business</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Duta Pravesh</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Revenue/BDR and host outreach.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400 block mb-1">Business</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Artha Siddhi</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Sales/Account management & MRR operations.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400 block mb-1">Business</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Mitra</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">College MOUs, cafe venues, and sponsor ties.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400 block mb-1">Business</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Katha</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Media distribution & Brutal Stories filming.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400 block mb-1">Business</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Sabha</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Community lead, user welcome boards & RSVPs.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-bold text-slate-400 block mb-1">Business</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Koshaadhikari</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Finance tracking, ledgers & physical logistics.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-black text-blue-600 block mb-1">Technology</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Nirmata</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Full Stack Developer. React, Express, Supabase.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-black text-blue-600 block mb-1">Technology</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Megha</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Cloud AWS infrastructure & deploy pipelines.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase font-black text-blue-600 block mb-1">Technology</span>
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Yantra</h4>
                <p className="text-[11px] text-slate-950 leading-relaxed font-semibold">Mobile engineering, iOS/Android React Native.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── WHAT FELLOWS RECEIVE SUMMARY ────────────────────────────────── */}
      <div className="bg-slate-50/20 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
                Compensation Paradigm
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight lg:leading-[1.1] mb-6">
                What Fellows Receive
              </h2>
              <div className="text-sm sm:text-base text-slate-950 font-normal leading-relaxed space-y-4">
                <p>
                  This is an <strong className="text-black font-extrabold">equity-in-experience model (No stipend)</strong>. 
                  Sanshi Network Tech Private Limited funds 100% of physical operations, premium developer workspaces, commute costs, high-speed home connections, and uncensored exposure to real operational assets.
                </p>
                <p>
                  No out-of-pocket costs are borne by selected individuals. We evaluate execution daily, creating a high-trust employment pipeline.
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => onNavigate("fellowship")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-black text-white text-xs font-bold uppercase rounded-lg tracking-wider transition-all cursor-pointer"
                >
                  View Perks Deck
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-[#e2eafc] shadow-3xs">
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Founder Direct Access</h4>
                <p className="text-xs text-slate-950 font-semibold leading-relaxed">Work face-to-face with Srishta and leading Hyderabad operators without middle managers.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#e2eafc] shadow-3xs">
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Proof-of-Work Cards</h4>
                <p className="text-xs text-slate-950 font-semibold leading-relaxed">Founder-signed documentation detailing your exact shipping statistics and codebase commits.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#e2eafc] shadow-3xs">
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Travel & Internet Coverage</h4>
                <p className="text-xs text-slate-955 font-semibold leading-relaxed">100% reimbursement for all travel commute to corporate HQ and cafe shootings, plus monthly home internet syncs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-[#e2eafc] shadow-3xs">
                <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Full-Time Pipeline</h4>
                <p className="text-xs text-slate-955 font-semibold leading-relaxed">Top performing residents secure official job offers including corporate equity packages and tech compensations.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── APPLICATIONS ARE LIVE ────────────────────────────────────────── */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-black">
            Admission Funnel
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-slate-900 tracking-tight mb-6">
            Applications Are Live
          </h2>
          
          <p className="text-base text-slate-950 max-w-2xl mx-auto font-semibold leading-relaxed mb-12">
            We select people who already build. Handpicked reviews are done daily on WiseIn. Unverified accounts or fictitious representations are immediately ignored.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-left mb-12">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-black flex items-center justify-center mx-auto mb-2">01</span>
              <p className="text-[11px] text-slate-950 font-bold uppercase tracking-tight">Create Profile</p>
              <span className="text-[10px] text-slate-500 font-sans mt-0.5 block">wisein.in</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-black flex items-center justify-center mx-auto mb-2">02</span>
              <p className="text-[11px] text-slate-950 font-bold uppercase tracking-tight">Verify Aadhaar</p>
              <span className="text-[10px] text-slate-500 font-sans mt-0.5 block">Mandatory Vetting</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-black flex items-center justify-center mx-auto mb-2">03</span>
              <p className="text-[11px] text-slate-950 font-bold uppercase tracking-tight">Reach 100%</p>
              <span className="text-[10px] text-slate-500 font-sans mt-0.5 block">Describe experience</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-black flex items-center justify-center mx-auto mb-2">04</span>
              <p className="text-[11px] text-slate-950 font-bold uppercase tracking-tight">Pick Track</p>
              <span className="text-[10px] text-slate-500 font-sans mt-0.5 block">Choose 1 role</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-mono text-[11px] font-black flex items-center justify-center mx-auto mb-2">05</span>
              <p className="text-[11px] text-slate-950 font-bold uppercase tracking-tight">Rolling Review</p>
              <span className="text-[10px] text-slate-500 font-sans mt-0.5 block">Get coffee invite</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://wisein.in/jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4.5 bg-blue-600 text-white hover:bg-blue-755 text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
            >
              <span>Apply on WiseIN</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
            
            <button
              onClick={() => onNavigate("apply")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
            >
              Review Deadlines
            </button>
          </div>

          <div className="mt-8 text-xs font-sans text-slate-950 font-bold bg-slate-50 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e2eafc]">
            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
            Submissions without a 100% complete, Aadhaar-verified profile are immediately and permanently disqualified.
          </div>

        </div>
      </div>

    </div>
  );
}
