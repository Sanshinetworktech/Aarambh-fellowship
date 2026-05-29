/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AarambhHero } from "./components/AarambhHero";
import { ProgramDynamics } from "./components/ProgramDynamics";
import { LiveDeploymentMatrix } from "./components/LiveDeploymentMatrix";
import { RoleExplorer } from "./components/RoleExplorer";
import { CompensationDeck } from "./components/CompensationDeck";
import { AdmissionPathway } from "./components/AdmissionPathway";
import { ShieldCheck, Mail, MapPin, Building, ArrowUpRight, Menu, X, ExternalLink, Activity } from "lucide-react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-blue-950 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-950">
      
      {/* Premium Header/Navigation Panel */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Brand Logo and Active season info */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              {/* Classic crisp blue badge with "आ" for Aarambh */}
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center font-sans text-white text-base font-black select-none shrink-0 rounded-[3px] shadow-sm shadow-blue-600/10">
                आ
              </div>
              
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none flex items-center gap-1.5">
                  आरम्भ <span className="text-blue-600 font-sans text-xs tracking-widest font-semibold uppercase">Fellowship</span>
                </span>
                <span className="text-[9px] font-mono text-slate-500 leading-none mt-1">
                  by Sanshi Network Tech Pvt. Ltd.
                </span>
              </div>
              
              <div className="hidden xl:flex items-center gap-1 bg-blue-50/50 border border-blue-200/60 px-2 py-0.5 rounded text-[9px] font-mono text-blue-700">
                <span className="w-1.2 h-1.2 rounded-full bg-blue-600 animate-pulse shrink-0" />
                Varsha · Cohort E1
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 bg-slate-50/60 px-4 py-1.5 rounded-full border border-slate-100">
              <button
                onClick={() => scrollToSection("philosophy-section")}
                className="text-[10.5px] font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-wider font-sans"
              >
                Philosophy
              </button>
              <span className="text-slate-300 font-normal text-xs pointer-events-none">|</span>
              <button
                onClick={() => scrollToSection("channels-section")}
                className="text-[10.5px] font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-wider font-sans"
              >
                Products
              </button>
              <span className="text-slate-300 font-normal text-xs pointer-events-none">|</span>
              <button
                onClick={() => scrollToSection("roles-section")}
                className="text-[10.5px] font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-wider font-sans"
              >
                10 Roles
              </button>
              <span className="text-slate-300 font-normal text-xs pointer-events-none">|</span>
              <button
                onClick={() => scrollToSection("perks-section")}
                className="text-[10.5px] font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-wider font-sans"
              >
                Perks
              </button>
              <span className="text-slate-300 font-normal text-xs pointer-events-none">|</span>
              <button
                onClick={() => scrollToSection("enrollment-pathway")}
                className="text-[10.5px] font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer uppercase tracking-wider font-sans"
              >
                Enroll Pathway
              </button>
            </nav>

            {/* Direct Applying Trigger Call to action */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wisein.in"
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-blue-600 text-white hover:bg-blue-750 font-sans text-[11px] font-bold uppercase rounded-[3px] transition-colors cursor-pointer shadow-sm shadow-blue-600/10"
                id="header-wisein-link"
              >
                <span>Apply on WiseIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded border border-slate-100 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600"
                id="btn-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Panel Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-50 border-b border-slate-100 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => scrollToSection("philosophy-section")}
              className="block w-full text-left text-xs font-bold uppercase text-slate-700 hover:text-blue-600 transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection("channels-section")}
              className="block w-full text-left text-xs font-bold uppercase text-slate-700 hover:text-blue-600 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("roles-section")}
              className="block w-full text-left text-xs font-bold uppercase text-slate-700 hover:text-blue-600 transition-colors"
            >
              10 Roles
            </button>
            <button
              onClick={() => scrollToSection("perks-section")}
              className="block w-full text-left text-xs font-bold uppercase text-slate-700 hover:text-blue-600 transition-colors"
            >
              Perks
            </button>
            <button
              onClick={() => scrollToSection("enrollment-pathway")}
              className="block w-full text-left text-xs font-bold uppercase text-slate-700 hover:text-blue-600 transition-colors"
            >
              Enrollment Pathway
            </button>
            
            <div className="pt-4 border-t border-slate-200 flex items-center">
              <a
                href="https://wisein.in"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-3 bg-blue-600 text-white hover:bg-blue-750 font-sans text-xs font-bold uppercase rounded-[3px] cursor-pointer"
              >
                <span>Apply on WiseIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Structural Page Body */}
      <main className="flex-1">
        
        {/* AarambhHero with hooks to scroll */}
        <AarambhHero
          onExploreRoles={() => scrollToSection("roles-section")}
        />

        {/* Philosophy details block */}
        <ProgramDynamics />

        {/* Matrix channel deploy columns */}
        <LiveDeploymentMatrix />

        {/* Roles Search Explorer panel */}
        <RoleExplorer />

        {/* Perks and Compensations declaration list */}
        <CompensationDeck />

        {/* Admission steps */}
        <AdmissionPathway />

      </main>

      {/* Corporate footer details */}
      <footer className="bg-blue-50 border-t border-blue-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-blue-100 pb-12 mb-12">
            
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-serif font-extrabold text-xl tracking-tight text-blue-900 block mb-2">
                  आरम्भ Fellowship
                </span>
                <span className="font-sans text-xs text-blue-800 leading-relaxed block max-w-sm">
                  The in-person recruitment accelerator operated under corporate framework guidelines by Sanshi Network Tech Private Limited.
                </span>
              </div>
              <div className="mt-8 font-mono text-[10px] text-blue-600">
                Hyderabad Workspace Residency • 91 Days Continuity Sync
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="font-mono text-[10px] text-blue-600 tracking-wider block uppercase font-bold">
                Corporate Coordinates
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-blue-900">
                  <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-blue-950">Sanshi Network Tech Private Limited</span>
                    <span>Hyderabad, Telangana, 500001, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-blue-900">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>HQ Residency: Hyderabad, TS, IN</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <span className="font-mono text-[10px] text-blue-600 tracking-wider block uppercase font-bold">
                Follow for Updates
              </span>
              <div className="space-y-3 pt-1">
                <a
                  href="https://twitter.com/mannupaaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white hover:bg-blue-50 border border-blue-100 text-xs font-sans text-blue-900 hover:text-blue-600 font-semibold shadow-xs transition-all duration-300 group"
                >
                  <span className="text-blue-500 font-extrabold font-serif">𝕏</span>
                  <span>Twitter @mannupaaji</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-300 group-hover:text-blue-550 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-blue-500 font-semibold block uppercase mb-1.5">Aesthetics & Engine</span>
                  <div className="flex flex-wrap gap-2 text-xs font-sans">
                    <a 
                      href="https://tailwindcss.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-600 border-b border-dashed border-blue-200 hover:border-blue-650 font-medium transition-colors"
                    >
                      Learn Tailwind CSS
                    </a>
                    <span className="text-blue-200">•</span>
                    <a 
                      href="https://motion.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:text-blue-600 border-b border-dashed border-blue-200 hover:border-blue-650 font-medium transition-colors"
                    >
                      Motion React
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-blue-700/80 gap-4 font-mono">
            <div>
              © 2026 Sanshi Network Tech Private Limited. Hyderabad, India. All structural trademarks reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Varsha Season 1 E1</span>
              <span>•</span>
              <a href="#enrollment-pathway" className="text-blue-700 hover:text-blue-900 transition-colors">Vetting Protocol</a>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}

