import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SEASONS } from "../data";
import { AlignLeft, Calendar, Flame, Eye, Layers, Compass } from "lucide-react";

export const ProgramDynamics: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState(SEASONS[0].id);

  const activeSeasonData = SEASONS.find((s) => s.id === selectedSeason) || SEASONS[0];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="philosophy-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Core Philosophy & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4 text-blue-600" />
              The Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 tracking-tight leading-tight mb-6 animate-fade-in">
              The Philosophy
            </h2>
            
            <div className="space-y-5 text-slate-955 font-sans text-sm sm:text-base font-semibold leading-relaxed">
              <p>
                <strong className="text-black font-extrabold text-lg block mb-1">Aarambh - आरम्भ - means beginning.</strong>
                The fellowship is built on a simple belief:
              </p>
              
              <div className="relative border-l-4 border-blue-600 pl-4 py-2.5 my-4 italic text-black bg-blue-50/80 rounded-r font-extrabold">
                People learn fastest when they are trusted with real responsibility.
              </div>

              <p>
                Fellows work directly on active systems operated by <span className="text-black font-bold">Sanshi Network Tech Pvt. Ltd.</span> across product, growth, media, partnerships, community, and infrastructure.
              </p>
              <p>
                This is not an academic internship. There are no mock projects or hypothetical assignments.
              </p>
              <p>
                The work done here affects real users, real communities, and real business operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-blue-50/60 p-8 sm:p-10 border border-blue-100 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              In-Person Cohort
            </span>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              The Residency
            </h2>
            
            <div className="space-y-4 text-slate-955 font-sans text-xs sm:text-sm font-semibold leading-relaxed mb-6">
              <p>
                The fellowship runs from Hyderabad as a focused in-person residency.
              </p>
              <p>
                Over 13 weeks, fellows operate inside a small, high-trust cohort designed for execution, consistency, and ownership.
              </p>
              <p className="font-extrabold text-black border-b border-blue-100 pb-2">
                The structure is intentionally small:
              </p>
              <ul className="space-y-2 pl-1 font-mono text-xs text-slate-955 font-bold">
                <li className="flex items-center gap-2">
                  <span className="text-blue-650 font-black">•</span> 10 fellows only
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-650 font-black">•</span> founder-led coordination
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-650 font-black">•</span> direct operational exposure
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-650 font-black">•</span> continuous production work
                </li>
              </ul>
              <p className="pt-2 border-t border-blue-100 text-xs text-slate-955 font-bold italic">
                Top performers may receive full-time deployment offers to continue building with Sanshi Network Tech Pvt. Ltd.
              </p>
            </div>
          </div>

        </div>

        {/* The Three Pillars Grid - Styled precisely like the uploaded image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 py-6">
          
          {/* Card 1: Ownership */}
          <div 
            className="group relative bg-white border border-[#e2eafc] hover:border-blue-300 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(59,130,246,0.01)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] overflow-hidden"
            id="card-pillar-ownership"
          >
            <div className="relative z-10 w-full">
              {/* Icon Container with very clean square layout inside soft border */}
              <div className="w-12 h-12 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-semibold shadow-2xs">
                <Flame className="w-5 h-5" />
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-5">
                Pillar 01 • Autonomy
              </div>
              
              <h3 className="text-[22px] sm:text-2xl text-slate-900 font-bold font-sans tracking-tight mb-4">
                Ownership
              </h3>
              
              <p className="text-sm text-slate-700 leading-relaxed mb-8 font-sans font-medium">
                Fellows are not assigned repetitive task lists or micromanaged workflows. Each person owns a specific operational function and is expected to contribute independently, communicate clearly, and execute consistently.
              </p>
            </div>
            
            <div className="pt-5 border-t border-slate-100 relative z-10 font-mono text-[10px] text-blue-600 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <span>Full Accountability</span>
            </div>
          </div>

          {/* Card 2: Applied Lab Curriculum */}
          <div 
            className="group relative bg-white border border-[#e2eafc] hover:border-blue-300 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(59,130,246,0.01)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] overflow-hidden"
            id="card-pillar-curriculum"
          >
            <div className="relative z-10 w-full">
              {/* Icon Container */}
              <div className="w-12 h-12 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-semibold shadow-2xs">
                <Layers className="w-5 h-5" />
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-5">
                Pillar 02 • Execution
              </div>
              
              <h3 className="text-[22px] sm:text-2xl text-slate-900 font-bold font-sans tracking-tight mb-4">
                Applied Lab Curriculum
              </h3>
              
              <p className="text-sm text-slate-700 leading-relaxed mb-8 font-sans font-medium">
                Zero examinations or certification courses. Your portfolio consists entirely of verified, founder-signed proof-of-work cards documenting precisely what was shipped.
              </p>
            </div>
            
            <div className="pt-5 border-t border-slate-100 relative z-10 font-mono text-[10px] text-blue-600 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <span>Verified Portfolios</span>
            </div>
          </div>

          {/* Card 3: The Ultimate Season Target */}
          <div 
            className="group relative bg-white border border-[#e2eafc] hover:border-blue-300 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(59,130,246,0.01)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] overflow-hidden"
            id="card-pillar-target"
          >
            <div className="relative z-10 w-full">
              {/* Icon Container */}
              <div className="w-12 h-12 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 font-semibold shadow-2xs">
                <Eye className="w-5 h-5" />
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-md text-blue-700 text-[10px] font-mono font-bold uppercase tracking-wider mb-5">
                Pillar 03 • Destination
              </div>
              
              <h3 className="text-[22px] sm:text-2xl text-slate-900 font-bold font-sans tracking-tight mb-4">
                The Ultimate Season Target
              </h3>
              
              <p className="text-sm text-slate-700 leading-relaxed mb-8 font-sans font-medium">
                Top performers across the ten spots secure full-time deployment offers from Sanshi Network Tech Private Limited to drive national WiseIn growth.
              </p>
            </div>
            
            <div className="pt-5 border-t border-slate-100 relative z-10 font-mono text-[10px] text-blue-600 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <span>National Career Leap</span>
            </div>
          </div>

        </div>

        {/* Year-Round Continuity: The Four Seasons */}
        <div className="flex flex-col">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3 flex items-center justify-center gap-2 font-bold">
              <Calendar className="w-4 h-4 text-blue-600" />
              Year-Round Continuity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-blue-900 mb-3">
              The Four Seasons of Aarambh
            </h2>
            <p className="text-sm text-slate-955 font-bold">
              Our fellowship runs year-round in compliance with the natural cycle of the Indian seasons. Each season handpicks a cohort of ten exceptional fellows for a 13-week focused sprint.
            </p>
          </div>

          {/* Interactive Season Selector Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-blue-50/20 p-6 sm:p-8 rounded-lg border border-blue-100">
            
            {/* Tabs Left Panel */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {SEASONS.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeason(season.id)}
                  className={`w-full text-left p-4 rounded-md transition-all border flex items-center justify-between cursor-pointer group ${
                    selectedSeason === season.id
                      ? "bg-blue-100/65 border-blue-300 shadow-inner"
                      : "bg-white border-blue-100 hover:bg-blue-50 hover:border-blue-200"
                  }`}
                  id={`tab-season-${season.id}`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-blue-600 uppercase font-bold">Season {season.id === "varsha" ? "1" : season.id === "sharad" ? "2" : season.id === "vasant" ? "3" : "4"}</span>
                      {season.active && (
                        <span className="inline-block px-1.5 py-0.5 font-mono text-[9px] font-bold text-blue-700 bg-blue-100 border border-blue-200 rounded uppercase">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="font-sans font-extrabold text-base text-slate-950 mt-1 group-hover:text-blue-700 transition-colors uppercase tracking-tight">
                      {season.name}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-blue-700 block">{season.duration}</span>
                    <span className={`font-mono text-[10px] block mt-1 ${season.active ? "text-blue-600 font-bold" : "text-blue-500/80"}`}>
                      {season.startDate}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Season Detail Right Panel */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-md border border-blue-100 flex flex-col justify-between relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSeasonData.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between border-b border-blue-100 pb-5 mb-5">
                    <div>
                      <span className="text-xs font-mono text-blue-600 uppercase tracking-widest block mb-0.5 font-bold">
                        Selected Cycle
                      </span>
                      <h3 className="text-xl sm:text-2xl font-sans text-slate-950 font-extrabold h-7">
                        {activeSeasonData.name} - {activeSeasonData.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-blue-700 bg-blue-50 py-1.5 px-3 border border-blue-100 rounded">
                      {activeSeasonData.startDate}
                    </span>
                  </div>

                  <p className="text-slate-955 font-sans text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                    {activeSeasonData.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-blue-100 pt-5">
                    <div>
                      <span className="text-[10px] font-mono text-blue-500 font-semibold uppercase block mb-1">Duration</span>
                      <span className="font-sans text-sm text-blue-900 font-medium">13-Week Focused Sprint</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-blue-500 font-semibold uppercase block mb-1">Candidate Limit</span>
                      <span className="font-sans text-sm text-blue-600 font-bold">
                        {activeSeasonData.cohort === "Will Release Soon" ? "Will Release Soon" : "10 Selected Fellows Only"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {activeSeasonData.active ? (
                <div className="mt-8 pt-5 border-t border-blue-100/80 flex items-center justify-between bg-blue-50 p-4 border border-blue-250 rounded-md">
                  <span className="text-xs sm:text-sm text-blue-900">Cohort screening in progress.</span>
                  <a href="#enrollment-pathway" className="font-mono text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1">
                    Apply for Varsha
                    <span>→</span>
                  </a>
                </div>
              ) : (
                <div className="mt-8 pt-5 border-t border-blue-100/80 flex items-center justify-between text-blue-500 text-xs font-medium">
                  <span>Applications for this cycle will open near cohort deployment dates.</span>
                  <span className="font-mono text-blue-600/70">Locked</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
