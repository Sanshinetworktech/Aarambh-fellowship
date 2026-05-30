import React, { useState, useMemo } from "react";
import { ROLES } from "../data";
import { RoleSpecification } from "../types";
import { Search, SlidersHorizontal, Check, Briefcase, Terminal, Users2, Layers, AlertCircle } from "lucide-react";

export const RoleExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Business" | "Technology">("All");
  const [selectedRole, setSelectedRole] = useState<RoleSpecification | null>(null);

  // Filter roles based on search and selected category
  const filteredRoles = useMemo(() => {
    return ROLES.filter((role) => {
      const matchesSearch =
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.skillsRequired.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        role.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || role.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative" id="roles-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Header segment */}
        <div className="mb-14">
          <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
            <Users2 className="w-4 h-4 text-blue-600" />
            Structure & Hierarchy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-blue-900 mb-4">
            Ten Specialized Operational Functions
          </h2>
          <p className="text-sm sm:text-base text-blue-800/85 font-light max-w-3xl leading-relaxed">
            Seven high-tempo business tracks and three technology positions. Everyone reports to Sutradhara (Main Program Manager), who maps and audits the Zoho coordination tables directly with our founder Srishta.
          </p>
        </div>

        {/* Corporate Reporting Hierarchy diagram */}
        <div className="mb-16 bg-blue-50/20 p-8 rounded-lg border border-blue-100 relative">
          <span className="absolute top-4 right-6 font-mono text-[10px] text-blue-500 tracking-wider font-semibold">
            OPERATIONAL HIERARCHY MAP
          </span>
          <div className="flex flex-col items-center">
            
            {/* Level 1: Founder */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-blue-50 border border-blue-200 px-6 py-2.5 rounded text-blue-800 text-center shadow-sm">
                <span className="text-[10px] font-mono text-blue-600 block uppercase tracking-wider mb-0.5 font-bold">Founding Direction</span>
                <span className="font-serif font-bold text-sm">Srishta</span>
                <span className="text-[10px] text-blue-700 font-sans block mt-0.5">Founder & Managing Director</span>
              </div>
              <div className="w-0.5 h-6 bg-blue-200" />
            </div>

            {/* Level 2: PM */}
            <div className="flex flex-col items-center mb-8 relative">
              <div className="bg-white border border-blue-400 px-8 py-3 rounded text-center relative max-w-sm shadow-xs">
                <span className="inline-block px-1.5 py-0.5 bg-blue-100 text-blue-700 font-mono text-[8px] font-bold rounded uppercase absolute -top-2 left-1/2 -translate-x-1/2 border border-blue-200">
                  COHORT MANAGER
                </span>
                <span className="font-serif font-bold text-sm text-blue-900 block mt-1">Sutradhara</span>
                <span className="text-[11px] text-blue-800 font-sans block mt-0.5">Main Program Manager (PM)</span>
                <span className="text-[10px] text-blue-500 font-mono block mt-1 font-medium">Zoho Coordination Bridge</span>
              </div>
              
              {/* Divergence lines */}
              <div className="w-0.5 h-6 bg-blue-200" />
              <div className="w-[80%] h-0.5 bg-blue-200 absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>

            {/* Level 3: Tracks */}
            <div className="grid grid-cols-2 md:grid-cols-10 gap-4 mt-4 w-full">
              
              {/* Business Tracks (7) */}
              <div className="col-span-2 md:col-span-7 grid grid-cols-1 md:grid-cols-7 gap-2 border border-blue-100 bg-white p-2 rounded">
                <div className="col-span-1 md:col-span-7 text-center font-mono text-[9px] text-blue-600/80 tracking-wider mb-1 font-semibold">
                  7 SPECIALIZED BUSINESS TRACKS
                </div>
                {/* 1. Duta Pravesh */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Duta Pravesh</span>
                  <span className="text-[9px] text-blue-700 block truncate">Revenue / BDR</span>
                </div>
                {/* 2. Artha Siddhi */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Artha Siddhi</span>
                  <span className="text-[9px] text-blue-700 block truncate">Sales / AM</span>
                </div>
                {/* 3. Mitra */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Mitra</span>
                  <span className="text-[9px] text-blue-700 block truncate">Partnerships</span>
                </div>
                {/* 4. Katha */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Katha</span>
                  <span className="text-[9px] text-blue-700 block truncate">Content creator</span>
                </div>
                {/* 5. Sabha */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Sabha</span>
                  <span className="text-[9px] text-blue-700 block truncate">Community</span>
                </div>
                {/* 6. Koshaadhikari */}
                <div className="bg-blue-50/55 p-2.5 border border-blue-200 rounded text-center animate-pulse">
                  <span className="text-[10px] text-blue-950 font-serif block font-bold truncate">Koshaadhikari</span>
                  <span className="text-[9px] text-blue-600 block truncate font-bold">Ops & Finance</span>
                </div>
                {/* 7. Sutradhara */}
                <div className="bg-blue-50 p-2.5 border border-blue-300 rounded text-center shadow-xs">
                  <span className="text-[10px] text-blue-700 font-serif block font-bold truncate">Sutradhara</span>
                  <span className="text-[9px] text-blue-600 block truncate font-medium">Lead Track</span>
                </div>
              </div>

              {/* Tech Tracks (3) */}
              <div className="col-span-2 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 border border-blue-100 bg-white p-2 rounded">
                <div className="col-span-1 md:col-span-3 text-center font-mono text-[9px] text-blue-600/80 tracking-wider mb-1 font-semibold">
                  3 TECHNOLOGY POSITIONS
                </div>
                {/* 1. Nirmata */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Nirmata</span>
                  <span className="text-[9px] text-blue-700 block truncate">Full Stack Dev</span>
                </div>
                {/* 2. Megha */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Megha</span>
                  <span className="text-[9px] text-blue-700 block truncate">Cloud / AWS</span>
                </div>
                {/* 3. Yantra */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-blue-950 font-serif block font-semibold truncate">Yantra</span>
                  <span className="text-[9px] text-blue-700 block truncate">Mobile Developer</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Filter and Search Bar Controller */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-blue-100">
          
          {/* Toggles */}
          <div className="flex bg-blue-50 border border-blue-100 p-1 rounded-md w-full md:w-auto">
            {(["All", "Business", "Technology"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-1 md:flex-none px-4 py-2 font-sans text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border border-blue-700 shadow-sm"
                    : "text-blue-800/80 hover:text-blue-955"
                }`}
                id={`filter-btn-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-blue-600 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by role name or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-blue-200 hover:border-blue-300 focus:border-blue-500 rounded-md font-sans text-xs text-blue-900 placeholder-blue-400 focus:outline-hidden"
              id="role-search-input"
            />
          </div>

        </div>

        {/* Roles Listing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="bg-white border border-blue-100 hover:border-blue-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-all shadow-xs"
              id={`role-card-${role.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] text-blue-700 bg-blue-50 py-1 px-2 border border-blue-100 rounded font-medium">
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-blue-600">
                    {role.category === "Business" ? (
                      <Briefcase className="w-2.5 h-2.5 text-blue-600" />
                    ) : (
                      <Terminal className="w-2.5 h-2.5 text-blue-600" />
                    )}
                    {role.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-blue-900 mb-1.5 hover:text-blue-600 transition-colors">
                  {role.name}
                </h3>
                <p className="font-sans text-xs text-blue-800 font-semibold mb-3">
                  {role.title}
                </p>
                <p className="font-sans text-xs text-blue-700 font-light leading-relaxed mb-5 line-clamp-3">
                  {role.shortDescription}
                </p>

                {/* Skills tags summary */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {role.skillsRequired.map((skill) => (
                    <span key={skill} className="font-mono text-[9px] text-blue-600 bg-blue-50/50 py-0.5 px-2 rounded border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedRole(role)}
                className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-100 hover:border-blue-200 font-mono text-[10px] uppercase font-bold tracking-wider rounded transition-colors cursor-pointer"
                id={`btn-open-specs-${role.id}`}
              >
                Click to open specifications
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Modal / Slideout Specs Details */}
        {selectedRole && (
          <div className="fixed inset-0 bg-blue-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-blue-200 rounded-lg w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 relative">
              
              {/* Header card color top */}
              <div className="h-1.5 bg-blue-600" />

              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 hover:text-blue-800 cursor-pointer"
                aria-label="Close Specs Modal"
                id="btn-close-modal"
              >
                ✕
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto max-h-[85vh]">
                
                {/* Meta details */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] py-0.5 px-2.5 rounded border text-blue-700 bg-blue-50 border-blue-200 font-semibold"
                  >
                    {selectedRole.category}
                  </span>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 py-0.5 px-2.5 border border-blue-100 rounded">
                    {selectedRole.location}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-blue-905 mb-2">
                  {selectedRole.name}
                </h3>
                <p className="font-sans text-sm text-blue-800 font-semibold mb-3">
                  {selectedRole.title}
                </p>
                <p className="font-sans text-xs sm:text-sm text-blue-700 font-light leading-relaxed mb-6 border-b border-blue-100 pb-5">
                  {selectedRole.shortDescription}
                </p>

                {/* Reporting Line Callout */}
                <div className="mb-6 p-4 bg-blue-50/80 rounded border border-blue-100 flex items-center gap-3.5">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] text-blue-500 uppercase block leading-none mb-1 font-bold">Internal Reporting structure</span>
                    <span className="font-sans text-xs text-blue-900 block font-medium">Sutradhara PM Node Syncs directly with Founding Executive on Zoho</span>
                  </div>
                </div>

                {/* Scope of shipping (Deliverables) */}
                <div className="mb-6">
                  <h4 className="font-sans text-xs text-blue-900 uppercase tracking-widest font-semibold mb-3">
                    Active Deliverables Scope (Week 1 – 12)
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedRole.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-blue-850/90 leading-relaxed font-semibold">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Skills & Tools Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 border-t border-blue-100 pt-6">
                  <div>
                    <h4 className="font-sans text-xs text-blue-900 uppercase tracking-widest font-semibold mb-2.5">
                      Required Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRole.skillsRequired.map((skill) => (
                        <span key={skill} className="font-mono text-[10px] text-blue-700 bg-blue-50 border border-blue-100 py-1 px-2.5 rounded font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs text-blue-900 uppercase tracking-widest font-semibold mb-2.5">
                      Active Tool Integrations
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRole.zohoIntegrations.map((tool) => (
                        <span key={tool} className="font-mono text-[10px] text-blue-800 bg-blue-50/50 border border-blue-100 py-1 px-2.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Operations & Schedule details footer */}
                <div className="border-t border-blue-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                  <div>
                    <span className="text-blue-500 block mb-0.5">Physical Attendance Requirements</span>
                    <span className="text-blue-900 font-sans font-medium">{selectedRole.schedule}</span>
                  </div>
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-sans text-xs font-bold rounded-sm uppercase tracking-wider hover:bg-blue-700 cursor-pointer"
                  >
                    Done Reviewing
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
