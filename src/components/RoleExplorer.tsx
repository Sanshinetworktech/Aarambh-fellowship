import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ROLES } from "../data";
import { RoleSpecification } from "../types";
import { ROLE_PROSE_DATA, RoleProse } from "../roleProseData";
import { 
  Search, 
  SlidersHorizontal, 
  Check, 
  Briefcase, 
  Terminal, 
  Users2, 
  Layers, 
  AlertCircle, 
  ArrowUpRight, 
  Share2, 
  Copy, 
  Sparkles, 
  Award,
  BookOpen,
  CheckCircle2,
  Calendar
} from "lucide-react";

export const RoleExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Business" | "Technology">("All");
  const [selectedRole, setSelectedRole] = useState<RoleSpecification | null>(null);
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShareRole = (roleId: string) => {
    const shareUrl = `${window.location.origin}?page=fellowship&role=${roleId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    });
  };

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
          <p className="text-sm sm:text-base text-slate-955 font-semibold max-w-3xl leading-relaxed">
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
                <span className="font-sans font-extrabold text-sm text-slate-900 tracking-tight">Srishta</span>
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
                <span className="font-sans font-extrabold text-sm text-slate-900 block mt-1 uppercase tracking-tight">Sutradhara</span>
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
              <div className="col-span-2 md:col-span-7 grid grid-cols-1 md:grid-cols-7 gap-2 border border-blue-105 bg-white p-2 rounded">
                <div className="col-span-1 md:col-span-7 text-center font-mono text-[9px] text-blue-600/80 tracking-wider mb-1 font-semibold">
                  7 SPECIALIZED BUSINESS TRACKS
                </div>
                {/* 1. Duta Pravesh */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Duta Pravesh</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Revenue / BDR</span>
                </div>
                {/* 2. Artha Siddhi */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Artha Siddhi</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Sales / AM</span>
                </div>
                {/* 3. Mitra */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Mitra</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Partnerships</span>
                </div>
                {/* 4. Katha */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Katha</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Content creator</span>
                </div>
                {/* 5. Sabha */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Sabha</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Community</span>
                </div>
                {/* 6. Koshaadhikari */}
                <div className="bg-blue-50/55 p-2.5 border border-blue-200 rounded text-center animate-pulse">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Koshaadhikari</span>
                  <span className="text-[9px] text-blue-600 block truncate font-bold">Ops & Finance</span>
                </div>
                {/* 7. Sutradhara */}
                <div className="bg-blue-50 p-2.5 border border-blue-300 rounded text-center shadow-xs">
                  <span className="text-[10px] text-blue-700 font-sans block font-extrabold truncate uppercase tracking-tight">Sutradhara</span>
                  <span className="text-[9px] text-blue-600 block truncate font-bold">Lead Track</span>
                </div>
              </div>

              {/* Tech Tracks (3) */}
              <div className="col-span-2 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 border border-blue-105 bg-white p-2 rounded">
                <div className="col-span-1 md:col-span-3 text-center font-mono text-[9px] text-blue-650 tracking-wider mb-1 font-semibold">
                  3 TECHNOLOGY POSITIONS
                </div>
                {/* 1. Nirmata */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Nirmata</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Full Stack Dev</span>
                </div>
                {/* 2. Megha */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Megha</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Cloud / AWS</span>
                </div>
                {/* 3. Yantra */}
                <div className="bg-blue-50/50 p-2.5 border border-blue-100 rounded text-center">
                  <span className="text-[10px] text-slate-900 font-sans block font-extrabold truncate uppercase tracking-tight">Yantra</span>
                  <span className="text-[9px] text-blue-700 block truncate font-medium">Mobile Developer</span>
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

        {/* Roles Listing Grid with Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
              className="bg-white border border-blue-105 hover:border-blue-300 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              id={`role-card-${role.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] text-blue-700 bg-blue-50 py-1 px-2 border border-blue-100 rounded font-bold uppercase tracking-wider">
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-bold text-blue-600">
                    {role.category === "Business" ? (
                      <Briefcase className="w-2.5 h-2.5 text-blue-600" />
                    ) : (
                      <Terminal className="w-2.5 h-2.5 text-blue-600" />
                    )}
                    {role.category} Track
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-slate-900 mb-1.5 hover:text-blue-600 transition-colors">
                  {role.name}
                </h3>
                <p className="font-sans text-xs text-blue-800 font-extrabold mb-3">
                  {role.title}
                </p>
                <p className="font-sans text-xs text-slate-950 font-medium leading-relaxed mb-5 line-clamp-3">
                  {role.shortDescription}
                </p>

                {/* Skills tags summary */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {role.skillsRequired.map((skill) => (
                    <span key={skill} className="font-mono text-[9px] text-slate-950 bg-slate-50 py-1 px-2 rounded border border-slate-200 font-semibold shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-auto">
                <button
                  onClick={() => setSelectedRole(role)}
                  className="py-2.5 bg-blue-50/50 hover:bg-blue-100/85 text-blue-700 border border-blue-100 hover:border-blue-200 font-mono text-[9.5px] uppercase font-bold tracking-wider rounded transition-all duration-200 cursor-pointer text-center"
                  id={`btn-open-specs-${role.id}`}
                >
                  Specifications
                </button>
                <a
                  href="https://wisein.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-mono text-[9.5px] uppercase font-bold tracking-wider rounded transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-1 shadow-xs"
                  id={`btn-apply-${role.id}`}
                >
                  Apply on WiseIN <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Modal / Slideout Specs Details */}
        <AnimatePresence>
          {selectedRole && (() => {
            const prose: RoleProse = ROLE_PROSE_DATA[selectedRole.id] || {
              id: selectedRole.id,
              name: selectedRole.name,
              title: selectedRole.title,
              trackInfo: `${selectedRole.category} Track · In-Person Residency · Hyderabad`,
              reportingTo: "Srishta, Founder & Managing Director",
              collaboratesWith: "All Fellows · Founder Office",
              overview: selectedRole.shortDescription,
              mission: selectedRole.shortDescription,
              responsibilities: selectedRole.deliverables.map((d, i) => ({ title: `Deliverable ${i + 1}`, text: d })),
              demands: selectedRole.schedule,
              required: selectedRole.skillsRequired,
              advantage: [],
              values: ["Execution", "Precision", "Accountability"],
              questions: ["Detail your real-world shipment experience."]
            };

            return (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bg-white border border-blue-200 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
                >
                  {/* Decorative head line */}
                  <div className="h-2 bg-blue-600" />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 flex items-center justify-center text-slate-800 hover:text-blue-600 transition-colors cursor-pointer z-10"
                    aria-label="Close Specs Modal"
                    id="btn-close-modal"
                  >
                    ✕
                  </button>

                  {/* Scrollable Container */}
                  <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-8 select-text">
                    
                    {/* Header Block */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-150 px-2.5 py-1 rounded-sm font-bold">
                          {selectedRole.category} TRACK
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider bg-slate-50 text-slate-700 border border-slate-200/80 px-2.5 py-1 rounded-sm font-bold">
                          {selectedRole.location}
                        </span>
                      </div>
                      
                      <h3 className="font-sans font-black text-3xl text-slate-950 tracking-tight leading-none mb-2">
                        {prose.name || selectedRole.name}
                      </h3>
                      <p className="font-sans text-sm font-bold text-blue-600">
                        {prose.title || selectedRole.title}
                      </p>
                    </div>

                    {/* Operational Sync / Hierarchy Callout */}
                    <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-blue-600 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Residency Coordination Coordinates</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-950 font-semibold">
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] block uppercase">Direct Report In</span>
                          <span className="font-bold text-slate-900">{prose.reportingTo}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-mono text-[9px] block uppercase">Horizontal Collaboration</span>
                          <span className="font-bold text-slate-900">{prose.collaboratesWith}</span>
                        </div>
                      </div>
                    </div>

                    {/* Role Vision / Mission Statement */}
                    <div className="relative pl-6 border-l-4 border-blue-600">
                      <span className="font-mono text-[9px] text-blue-600 uppercase font-black block tracking-widest mb-1">THE DIRECT MICRO-MISSION</span>
                      <p className="font-sans text-sm text-slate-950 font-bold leading-relaxed italic">
                        "{prose.mission}"
                      </p>
                    </div>

                    {/* General Overview */}
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] text-slate-450 uppercase block font-black tracking-widest">FUNCTIONAL CONTEXT</span>
                      <p className="font-sans text-xs sm:text-sm text-slate-950 font-medium leading-relaxed">
                        {prose.overview}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <span className="font-mono text-[9px] text-blue-650 uppercase block font-black tracking-widest">SOCIETAL INITIATION & WEEKLY SHIPMENTS</span>
                      <div className="grid grid-cols-1 gap-4">
                        {prose.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="p-5 border border-slate-100 rounded-xl bg-slate-55/35 space-y-1.5 hover:border-slate-200 transition-all">
                            <div className="flex items-center gap-2.5">
                              <span className="w-5 h-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center font-mono text-[10px] text-blue-600 font-bold">
                                {String(rIdx + 1).padStart(2, '0')}
                              </span>
                              <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-900">
                                {resp.title}
                              </h4>
                            </div>
                            <p className="font-sans text-xs text-slate-950 leading-relaxed font-normal ml-7">
                              {resp.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Real-World Demands Checklist */}
                    <div className="p-5 bg-slate-50 border border-slate-150 rounded-xl space-y-3">
                      <span className="font-mono text-[9px] text-slate-450 uppercase block font-black tracking-widest">OPERATIONAL REALITY & VETTING DEMANDS</span>
                      <p className="font-sans text-xs text-slate-955 leading-relaxed font-semibold">
                        {prose.demands}
                      </p>
                      <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-blue-600">
                        <Calendar className="w-4 h-4 shrink-0 text-blue-500" />
                        <span>Rotation commitment: {selectedRole.weeklyCommitment}</span>
                      </div>
                    </div>

                    {/* Dynamic Vetting Questions */}
                    {prose.questions && prose.questions.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 font-mono text-[9px] text-blue-650 uppercase font-black tracking-widest">
                          <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
                          <span>TECHNICAL VETTING ASSIGNMENTS</span>
                        </div>
                        <div className="space-y-2.5">
                          {prose.questions.map((q, qIdx) => (
                            <div key={qIdx} className="p-4 border border-blue-50 rounded-lg bg-blue-50/20 text-xs text-slate-950 leading-relaxed font-semibold">
                              <span className="font-mono text-[10px] text-blue-600 block mb-1">PROBE QUESTIONS {qIdx + 1}</span>
                              {q}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills Matrix list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-150 pt-6">
                      <div className="space-y-3">
                        <h4 className="font-sans text-xs text-slate-900 uppercase tracking-widest font-bold">
                          Required Prerequisite Capabilities
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {prose.required.map((skill) => (
                            <span key={skill} className="font-mono text-[9.5px] text-slate-950 bg-slate-50 border border-slate-200 py-1.5 px-3 rounded font-bold shadow-2xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-sans text-xs text-slate-900 uppercase tracking-widest font-bold">
                          Secondary Advantage Capabilities
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {prose.advantage && prose.advantage.length > 0 ? (
                            prose.advantage.map((skill) => (
                              <span key={skill} className="font-mono text-[9.5px] text-blue-750 bg-blue-50/40 border border-blue-100 py-1.5 px-3 rounded font-bold">
                                {skill}
                              </span>
                            ))
                          ) : (
                            selectedRole.zohoIntegrations.map((tool) => (
                              <span key={tool} className="font-mono text-[9.5px] text-blue-700 bg-blue-50/40 border border-blue-100 py-1.5 px-3 rounded font-semibold">
                                {tool}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Prominent Coupon Code Notice Block */}
                    <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl space-y-3.5">
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold text-blue-700">
                        <div className="flex items-center gap-1.5 uppercase">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>COUPON EXEMPTION APPLIED</span>
                        </div>
                        <span className="bg-blue-100/80 px-2 py-0.5 rounded text-[9px]">RESIDENCY ID: ARH-V1</span>
                      </div>
                      <p className="text-xs text-slate-950 leading-relaxed font-bold">
                        Do not purchase a paid subscription node on the next step. Use the coupon code <strong className="bg-blue-100/90 text-blue-750 font-mono px-2 py-0.5 rounded select-all font-black">FREE3</strong> to bypass the system paywall and register free.
                      </p>
                    </div>

                  </div>

                  {/* Actions Sticky Footer */}
                  <div className="border-t border-slate-100 bg-slate-50/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase hidden sm:inline">
                      WiseIn Sharad Cohort 2026
                    </span>
                    
                    <div className="flex items-center gap-3.5 w-full sm:w-auto">
                      <button
                        onClick={() => setSelectedRole(null)}
                        className="flex-1 sm:flex-none px-5 py-2.5 bg-white text-slate-700 border border-slate-200 font-sans text-xs font-bold rounded hover:bg-slate-50 transition-colors uppercase cursor-pointer"
                      >
                        Close Details
                      </button>

                      {/* Share Button with status feedback */}
                      <button
                        onClick={() => handleShareRole(selectedRole.id)}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-sans text-xs font-bold rounded transition-all cursor-pointer select-none"
                      >
                        {shareSuccess ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-blue-700" />
                            <span>Copied link!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5 text-blue-600" />
                            <span>Share Role</span>
                          </>
                        )}
                      </button>

                      <a
                        href="https://wisein.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-750 font-sans text-xs font-bold rounded uppercase transition-all shadow-xs cursor-pointer"
                      >
                        <span>Apply on WiseIN</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
};
