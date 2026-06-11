import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Building, 
  ArrowUpRight, 
  Menu, 
  X, 
  ExternalLink, 
  Activity 
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import FellowshipView from "./components/FellowshipView";
import ApplyView from "./components/ApplyView";
import WikiView from "./components/WikiView";

type PageType = "home" | "about" | "fellowship" | "apply" | "wiki";

export default function App() {
  const [activePage, setActivePage] = useState<PageType>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top whenever the page changes for natural browsing experience
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activePage]);

  const handleNavigate = (page: PageType) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-950">
      <Analytics />
      
      {/* ── STICKY NAVIGATION HEADER ───────────────────────────────── */}
      <header className="sticky top-0 z-45 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Group */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => handleNavigate("home")}
            >
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center font-sans text-white text-base font-black shrink-0 rounded-[3px] shadow-sm shadow-blue-600/10">
                आ
              </div>
              
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none flex items-center gap-1.5">
                  आरम्भ <span className="text-blue-650 font-sans text-xs tracking-widest font-black uppercase">Fellowship</span>
                </span>
                <span className="text-[9px] font-mono text-slate-500 leading-none mt-1">
                  by Sanshi Network Tech Pvt. Ltd.
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-50/60 p-1 rounded-full border border-slate-100 font-sans">
              <button
                onClick={() => handleNavigate("home")}
                className={`px-4 py-1.5 text-[10.5px] font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activePage === "home" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-slate-650 hover:text-blue-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate("about")}
                className={`px-4 py-1.5 text-[10.5px] font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activePage === "about" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-slate-650 hover:text-blue-600"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigate("fellowship")}
                className={`px-4 py-1.5 text-[10.5px] font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activePage === "fellowship" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-slate-650 hover:text-blue-600"
                }`}
              >
                Fellowship
              </button>
              <button
                onClick={() => handleNavigate("wiki")}
                className={`px-4 py-1.5 text-[10.5px] font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activePage === "wiki" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-slate-650 hover:text-blue-600"
                }`}
              >
                Wi-Ki Key
              </button>
              <button
                onClick={() => handleNavigate("apply")}
                className={`px-4 py-1.5 text-[10.5px] font-black uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                  activePage === "apply" 
                  ? "bg-blue-600 text-white shadow-xs" 
                  : "text-slate-650 hover:text-blue-600"
                }`}
              >
                Apply Now
              </button>
            </nav>

            {/* Header Right CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wisein.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-blue-600 hover:bg-blue-750 text-white font-sans text-[11px] font-bold uppercase rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <span>wisein.in</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-lg border border-slate-100 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-50 border-b border-slate-100 px-6 py-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => handleNavigate("home")}
              className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-black uppercase ${
                activePage === "home" ? "bg-blue-50 text-blue-750 font-black" : "text-slate-700"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("about")}
              className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-black uppercase ${
                activePage === "about" ? "bg-blue-50 text-blue-750 font-black" : "text-slate-700"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigate("fellowship")}
              className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-black uppercase ${
                activePage === "fellowship" ? "bg-blue-50 text-blue-750 font-black" : "text-slate-700"
              }`}
            >
              Fellowship
            </button>
            <button
              onClick={() => handleNavigate("apply")}
              className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-black uppercase ${
                activePage === "apply" ? "bg-blue-50 text-blue-750 font-black" : "text-slate-700"
              }`}
            >
              Apply Now
            </button>
            <button
              onClick={() => handleNavigate("wiki")}
              className={`block w-full text-left py-2 px-3 rounded-lg text-xs font-black uppercase ${
                activePage === "wiki" ? "bg-blue-50 text-blue-750 font-black" : "text-slate-700"
              }`}
            >
              Wi-Ki Key
            </button>
            
            <div className="pt-4 border-t border-slate-200">
              <a
                href="https://wisein.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white hover:bg-blue-700 font-sans text-xs font-bold uppercase rounded-lg cursor-pointer"
              >
                <span>wisein.in</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT AREA ─────────────────────────────────────── */}
      <main className="flex-1">
        {activePage === "home" && <HomeView onNavigate={handleNavigate} />}
        {activePage === "about" && <AboutView />}
        {activePage === "fellowship" && <FellowshipView />}
        {activePage === "apply" && <ApplyView />}
        {activePage === "wiki" && <WikiView />}
      </main>

      {/* ── CORPORATE FOOTER ──────────────────────────────────────── */}
      <footer className="bg-slate-50 border-t border-slate-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none font-sans">
        
        <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-200/60 pb-12 mb-12">
            
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-sans font-black text-xl tracking-tight text-slate-900 block mb-2">
                  आरम्भ Fellowship
                </span>
                <span className="text-xs text-slate-950 font-bold leading-relaxed block max-w-sm">
                  The in-person operational residency acceleration platform hosted by Sanshi Network Tech Private Limited.
                </span>
              </div>
              <div className="mt-8 font-mono text-[10px] text-blue-650 font-black">
                Hyderabad Workspace Residency • 91 Days Continuity Sync
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="font-mono text-[10px] text-blue-600 tracking-wider block uppercase font-bold">
                Corporate Coordinates
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-950 font-semibold">
                  <Building className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-900 font-extrabold uppercase text-[11px]">Sanshi Network Tech Private Limited</span>
                    <span className="text-slate-500">Hyderabad, Telangana, 500001, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 font-semibold">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>HQ Operations: Hyderabad, TS, IN</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <span className="font-mono text-[10px] text-blue-600 tracking-wider block uppercase font-bold">
                Platform Navigation
              </span>
              <div className="space-y-3 pt-1">
                <a
                  href="https://www.wisein.in/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200/80 text-xs text-slate-900 hover:text-blue-600 font-bold shadow-2xs transition-all duration-350 group cursor-pointer"
                >
                  <svg className="w-4 h-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                  <span>WiseIn Home</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-550 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1.5 font-bold">Verification Infrastructure</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a 
                      href="https://wisein.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 border-b border-dashed border-blue-200 hover:border-blue-650 font-extrabold transition-colors cursor-pointer"
                    >
                      wisein.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 font-mono font-bold">
            <div>
              © {new Date().getFullYear()} Sanshi Network Tech Private Limited. Hyderabad, India. All operational rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-450">
              <span className="text-blue-750">Varsha Season 1</span>
              <span>•</span>
              <span className="text-slate-400">Vetting Desk Standard</span>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}
