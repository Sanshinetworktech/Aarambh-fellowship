import React from "react";
import { motion } from "motion/react";
import { 
  Building, 
  MapPin, 
  ShieldCheck, 
  Quote, 
  Target, 
  Tv, 
  Key, 
  Award, 
  ArrowUpRight,
  TrendingUp,
  Workflow
} from "lucide-react";

export default function AboutView() {
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
            <Building className="w-3.5 h-3.5" />
            <span>Sanshi Network Tech Pvt. Ltd. · Est. Hyderabad</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-sans tracking-tight text-slate-900 leading-none mb-6"
          >
            About Aarambh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-950 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            The company, the products, and the people building India's verified professional future.
          </motion.p>

        </div>
      </div>

      {/* ── INTRO BLOCK ────────────────────────────────────────── */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg text-slate-955 font-semibold leading-relaxed mb-8">
            Aarambh is not a standalone program. It is the operational core of <strong className="text-slate-900 font-extrabold">Sanshi Network Tech Private Limited</strong>, a Hyderabad-based technology company building India's verified professional infrastructure. To understand Aarambh, you must first understand why Sanshi exists.
          </p>
          <div className="h-[1px] w-full bg-[#e2eafc]" />
        </div>
      </div>

      {/* ── WHY SANSHI EXISTS ───────────────────────────────────── */}
      <div className="bg-slate-50/20 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-950 tracking-tight">
              Why Sanshi Exists
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-950 font-medium leading-relaxed">
            <p>
              India's professional ecosystem has a fundamental trust problem.
            </p>
            <p className="bg-blue-50/30 border border-blue-100/60 p-5 rounded-2xl">
              Unverified credentials circulate freely. Ghost networks inflate follower counts. Performative profiles substitute for real professional identity. A doctor cannot easily find a verified agriculturist to consult. A tech architect has no reliable way to connect with a verified government officer. A teacher with two decades of domain expertise has no professional identity that the internet recognises as real.
            </p>
            <p>
              Sanshi Network Tech Private Limited was founded to solve this. We build verified professional infrastructure: systems where every profile is authenticated at the Aadhaar level, every connection is between real, identified people, and every knowledge exchange carries the weight of a verified professional identity behind it.
            </p>
            <p className="font-semibold text-slate-955">
              We are not building another social network. We are building the trust layer that India's professional ecosystem has been missing.
            </p>
          </div>

        </div>
      </div>

      {/* ── CORPORATE CONTEXT ───────────────────────────────────── */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 rounded-3xl bg-slate-50/50 border border-[#e2eafc] grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-4 font-bold">
                Company Registration details
              </span>
              <h3 className="text-xl font-bold font-sans text-slate-900 mb-6">Who We Are</h3>
              <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed mb-4">
                <strong className="text-slate-900 font-extrabold">Sanshi Network Tech Private Limited</strong> is a registered technology company headquartered in Hyderabad, Telangana, India.
              </p>
              <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
                We operate at the intersection of three disciplines: verified digital identity, professional networking, and live knowledge distribution. Our products are not experimental; they are live, operational systems with active users, active subscribers, and active events running every week.
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-slate-955 font-bold border-t md:border-t-0 md:border-l border-slate-200/80 pt-6 md:pt-0 md:pl-8">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 block font-mono">FOUNDER</span>
                <span className="text-slate-900 tracking-tight block">Srishta, Managing Director</span>
              </div>
              <div className="pb-3 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 block font-mono">HEADQUARTERS</span>
                <span className="text-slate-900 tracking-tight block">Hyderabad, Telangana, 500001, India</span>
              </div>
              <div className="pb-3 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 block font-mono">OPERATIONAL SITES</span>
                <span className="text-slate-900 tracking-tight block">wisein.in · aarambhfellowship.com</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-mono">COORDINATION MAIL</span>
                <span className="text-blue-600 block">connect@aarambhfellowship.com</span>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* ── OUR MISSION ─────────────────────────────────────────── */}
      <div className="bg-slate-50/10 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-950 tracking-tight">OUR MISSION</h2>
          </div>
          <p className="text-base sm:text-lg text-slate-955 font-semibold leading-relaxed mb-6">
            Build the verified professional infrastructure that lets every working Indian (teacher, officer, agriculturist, tech architect, founder) establish a trusted, permanent professional identity and connect with others at the same level of trust.
          </p>
          <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed">
            We are starting in Hyderabad. We are expanding nationally. The fellows we train through Aarambh are the operators who will carry that expansion forward.
          </p>
        </div>
      </div>

      {/* ── THE THREE ACTIVE SYSTEMS IN DETAIL ─────────────────────────── */}
      <div className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-[10px] text-blue-650 uppercase tracking-widest block mb-2 font-bold">
              Infrastructure Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-4">
              The Three Active Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-sans">
              A comprehensive view of the systems fellows manipulate, curate, and scale during their residency.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* System 1: WiseIn */}
            <div className="p-8 rounded-3xl bg-white border border-[#e2eafc] shadow-3xs flex flex-col md:flex-row gap-8 items-start hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-blue-50 border border-blue-105 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950 tracking-tight mb-1 flex items-center gap-3">
                  <span>WiseIn</span>
                  <span className="text-[10px] tracking-wide font-mono bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded font-black uppercase">wisein.in · LIVE</span>
                </h3>
                <span className="text-xs text-slate-400 block mb-4">India's Verified Professional Network</span>
                <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed mb-6">
                  WiseIn is the flagship product of Sanshi Network Tech. Every user is authenticated via Aadhaar before their profile is activated. This means every connection on WiseIn is between two verified, real, identified people, not anonymous accounts or unverified personas.
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-slate-100 text-xs sm:text-sm text-slate-950 font-medium">
                  <p><strong>Aadhaar Authentications:</strong> High-trust profiles established safely.</p>
                  <p><strong>Direct Video Syncs:</strong> Direct video bookings enabling monetisable expert knowledge calls.</p>
                  <p><strong>Universal Coverage:</strong> Dedicated networks facilitating officers, teachers, agricultural scientists, and tech professionals.</p>
                </div>
              </div>
            </div>

            {/* System 2: Brutal Stories */}
            <div className="p-8 rounded-3xl bg-white border border-[#e2eafc] shadow-3xs flex flex-col md:flex-row gap-8 items-start hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-blue-50 border border-blue-105 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                <Tv className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-955 tracking-tight mb-1 flex items-center gap-3">
                  <span>Brutal Stories</span>
                  <span className="text-[10px] tracking-wide font-mono bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded font-black uppercase">YOUTUBE · LIVE</span>
                </h3>
                <span className="text-xs text-slate-400 block mb-4">Weekly Live Founder Series • Every Wednesday</span>
                <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed mb-6">
                  Brutal Stories is a weekly live show filmed at Hyderabad's premier café venues every Wednesday. One prominent founder or operator per session, speaking unfiltered before a real live audience. No scripts. No rehearsed answers. No moderator softening the questions.
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-slate-100 text-xs sm:text-sm text-slate-955 font-medium">
                  <p><strong>Long-form Production:</strong> Complete YouTube episode edited and delivered within 48 hours.</p>
                  <p><strong>Dynamic Reels:</strong> Minimalist vertical shorts distributed same-night across all social platforms.</p>
                  <p><strong>Direct Sourcing:</strong> Sourced entirely by Duta Pravesh pipelines on Zoho CRM.</p>
                </div>
              </div>
            </div>

            {/* System 3: Tapby */}
            <div className="p-8 rounded-3xl bg-white border border-[#e2eafc] shadow-3xs flex flex-col md:flex-row gap-8 items-start hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-blue-50 border border-blue-105 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-955 tracking-tight mb-1 flex items-center gap-3">
                  <span>Tapby</span>
                  <span className="text-[10px] tracking-wide font-mono bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded font-black uppercase">HYDERABAD · LIVE</span>
                </h3>
                <span className="text-xs text-slate-400 block mb-4">Offline Access System (TapbyWiseaIN)</span>
                <p className="text-xs sm:text-sm text-slate-950 font-semibold leading-relaxed mb-6">
                  Tapby is a private offline access system for verified founders and high-performing operators in Hyderabad. Pass holders receive a physical and digital access pass that grants them entry into Sanshi's private event ecosystem.
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-slate-100 text-xs sm:text-sm text-slate-955 font-medium">
                  <p><strong>Guaranteed Invitation:</strong> Compliment RSVP entry to every Wednesday Brutal Stories session.</p>
                  <p><strong>Startup Expos:</strong> High-impact physical expos designed citywide twice a quarter.</p>
                  <p><strong>Curated meetups:</strong> Interactive dinners bringing highly-rated verified profiles offline.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ── UPCOMING INITIATIVES ─────────────────────────────────── */}
      <div className="bg-slate-50/40 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Workflow className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-900 tracking-tight">Upcoming Initiatives</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-955 font-bold leading-relaxed mb-4">
            Sanshi Network Tech is developing further products in the verified professional infrastructure space. Fellows from Sharad, Vasant, and Grishma cohorts will be the first operators on these systems when they launch.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            Details are released on a per-season basis. If you want to be part of building what comes next, apply for a future season through Apply on WiseIN. No further details are available at this time.
          </p>
        </div>
      </div>

      {/* ── WHY HYDERABAD ───────────────────────────────────────── */}
      <div className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-1 font-bold">
              Regional Operations Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-slate-950 tracking-tight">Why Hyderabad</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white transition-all">
              <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Startup density</h4>
              <p className="text-xs text-slate-950 font-semibold leading-relaxed">
                Hyderabad has one of India's most active and concentrated startup ecosystems. The density of verified founders, operators, and builders in this city is disproportionately high - exactly the audience WiseIn is built for.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white transition-all">
              <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Café culture</h4>
              <p className="text-xs text-slate-950 font-bold leading-relaxed">
                Hyderabad's premium café ecosystem is the production backdrop for Brutal Stories. Every Wednesday, a real live audience gathers at a real venue inside the city. Café partnership infrastructures are managed daily.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white transition-all">
              <h4 className="font-sans text-sm font-bold text-slate-900 mb-2">Precompiled Community</h4>
              <p className="text-xs text-slate-955 font-semibold leading-relaxed">
                Tapby's offline network is being built city-first in Hyderabad. The events, meetings, and expos are already happening here. National expansion follows, but Hyderabad is the sandbox.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ── THE AARAMBH FELLOWSHIP CONNECT ───────────────────────────────── */}
      <div className="bg-slate-50/35 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[11px] text-blue-650 uppercase tracking-widest block mb-2 font-black animate-pulse">
            Admissions Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 tracking-tight mb-6">
            The Aarambh Fellowship
          </h2>
          <p className="text-sm sm:text-base text-slate-950 font-semibold max-w-2xl mx-auto leading-relaxed mb-8">
            Aarambh is not a training program attached to Sanshi. It is how Sanshi scales.
          </p>
          <p className="text-xs sm:text-sm text-slate-955 font-bold max-w-xl mx-auto leading-relaxed mb-12">
            Every season, ten fellows are selected to work directly inside Sanshi's live operational systems, owning real functions, moving real metrics, and contributing to real users.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://wisein.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-750 text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-xs cursor-pointer"
            >
              <span>Apply on WiseIN</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
