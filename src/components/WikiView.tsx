import React, { useState, useEffect } from "react";
import { 
  CreditCard, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  QrCode, 
  Share2, 
  Sliders, 
  Plus, 
  UserPlus, 
  Users, 
  Search, 
  Clock, 
  Download, 
  Rss, 
  TrendingUp, 
  Upload, 
  AlertCircle, 
  FileText, 
  Check, 
  X,
  Volume2,
  VolumeX,
  Sparkles,
  Link,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Attendee {
  id: string;
  name: string;
  email: string;
  orcid?: string;
  sector: "Technology" | "Agriculture" | "Teaching" | "Administration" | "Founders";
  companyName: string;
  linkedin: string;
  aadhaarVerified: boolean;
  checkedIn: boolean;
  checkedInAt?: string;
  scannedVia: "NFC_TAP" | "QR_SCAN" | "MANUAL" | null;
  cardTheme: string;
}

interface HostedEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  capacity: number;
  price: string;
  description: string;
  syncedPlatform?: string;
  coverColor: string;
  organizerEmail: string;
}

interface Connection {
  id: string;
  name: string;
  email: string;
  sector: string;
  companyName: string;
  linkedin: string;
  connectedAt: string;
  eventName: string;
}

// Low-level synthesizer sound effect helper so we don't depend on static mp3 files
const playSynthBeep = (type: "success" | "nfc" | "click" | "error" | "connect", soundEnabled: boolean) => {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === "success") {
      // Direct high pitched satisfying double-beep
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.08);
      gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === "nfc") {
      // Deeper magnetic pulse sound
      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(520, audioCtx.currentTime + 0.15);
      gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === "connect") {
      // Multi-tone spark sound
      osc.type = "sine";
      osc.frequency.setValueAtTime(450, audioCtx.currentTime);
      osc.frequency.setValueAtTime(550, audioCtx.currentTime + 0.06);
      osc.frequency.setValueAtTime(850, audioCtx.currentTime + 0.12);
      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === "click") {
      // Extremely quick click indicator
      osc.type = "sine";
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === "error") {
      // Buzzing error sound
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    }
  } catch (e) {
    console.warn("Synth failed to play", e);
  }
};

const PRESET_EVENTS: HostedEvent[] = [
  {
    id: "evt-01",
    title: "Brutal Stories Live Season 1 Kickoff",
    date: "Wednesday, June 3, 2026",
    venue: "HQ Private Lounge, Hyderabad, India",
    capacity: 120,
    price: "Premium Member Code / Invitation",
    description: "Our flagship Wednesday live show with premier builders. Strictly Aadhaar-authenticated attendance required.",
    coverColor: "from-blue-700 to-indigo-900",
    organizerEmail: "srishta@sanshinetworktech.com"
  },
  {
    id: "evt-02",
    title: "Pittsburg - Hyderabad Tech Corridor Exchange",
    date: "Friday, June 12, 2026",
    venue: "Duquesne Club & Hybrid Space, Pittsburgh USA",
    capacity: 75,
    price: "Free Admission (Verify Identity)",
    description: "Bridging the makers of steel and the builders of software. Connect with the verified Pittsburgh diaspora cohort.",
    coverColor: "from-amber-600 to-amber-950",
    organizerEmail: "usa-align@sanshinetworktech.com"
  },
  {
    id: "evt-03",
    title: "Agricultural Identity & Verified Commerce Panel",
    date: "Thursday, June 18, 2026",
    venue: "State Cooperative Forum Hall, Tech Garden",
    capacity: 200,
    price: "$10 (Paid Entry)",
    description: "High-trust network panel bringing verified officers, agricultural specialists, and tech architects together.",
    coverColor: "from-emerald-700 to-teal-900",
    organizerEmail: "agro-trust@wisein.in"
  }
];

const PRESET_ATTENDEES: Attendee[] = [
  {
    id: "att-01",
    name: "Dr. Prabhakar Rao",
    email: "p.rao@icar.res.in",
    sector: "Agriculture",
    companyName: "ICAR Agricultural Research Center",
    linkedin: "linkedin.com/in/prabhakar-rao-agro",
    aadhaarVerified: true,
    checkedIn: false,
    scannedVia: null,
    cardTheme: "emerald"
  },
  {
    id: "att-02",
    name: "Santhosh Chandrasekhar",
    email: "santhosh@sanshinetworktech.com",
    sector: "Technology",
    companyName: "Sanshi Network Tech Pvt Ltd",
    linkedin: "linkedin.com/in/santhosh-chan",
    aadhaarVerified: true,
    checkedIn: true,
    checkedInAt: "09:47 AM, Event Day",
    scannedVia: "NFC_TAP",
    cardTheme: "slate"
  },
  {
    id: "att-03",
    name: "Amita Dev",
    email: "amita.dev@ts.edu",
    sector: "Teaching",
    companyName: "Vellore Institute of Technology",
    linkedin: "linkedin.com/in/amita-dev-edu",
    aadhaarVerified: true,
    checkedIn: false,
    scannedVia: null,
    cardTheme: "indigo"
  },
  {
    id: "att-04",
    name: "Sreejit Varma",
    email: "sreejit.varma@telangana.gov.in",
    sector: "Administration",
    companyName: "Department of IT & Commerce",
    linkedin: "linkedin.com/in/sreejit-varma-state",
    aadhaarVerified: true,
    checkedIn: false,
    scannedVia: null,
    cardTheme: "crimson"
  },
  {
    id: "att-05",
    name: "Ryan Gallagher",
    email: "ryan.g@pittventures.com",
    sector: "Founders",
    companyName: "Pittsburgh Steel Capitals",
    linkedin: "linkedin.com/in/ryan-gallagher-capital",
    aadhaarVerified: false,
    checkedIn: true,
    checkedInAt: "10:14 AM, Event Day",
    scannedVia: "QR_SCAN",
    cardTheme: "amber"
  }
];

export default function WikiView() {
  const [activeTab, setActiveTab] = useState<"card" | "organizer" | "checkin" | "discovery">("card");
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Storage states with fallbacks to preseeded data
  const [events, setEvents] = useState<HostedEvent[]>(() => {
    const saved = localStorage.getItem("wiki_events");
    return saved ? JSON.parse(saved) : PRESET_EVENTS;
  });

  const [attendees, setAttendees] = useState<Attendee[]>(() => {
    const saved = localStorage.getItem("wiki_attendees");
    return saved ? JSON.parse(saved) : PRESET_ATTENDEES;
  });

  const [connections, setConnections] = useState<Connection[]>(() => {
    const saved = localStorage.getItem("wiki_connections");
    return saved ? JSON.parse(saved) : [];
  });

  // User's own digital FounderKey setup
  const [userCard, setUserCard] = useState({
    name: "Mehar Sharma",
    email: "mehar.sharma@alumni.cmu.edu",
    sector: "Technology" as "Technology" | "Agriculture" | "Teaching" | "Administration" | "Founders",
    company: "Wi-Ki Core Labs",
    linkedin: "linkedin.com/in/mehar-wi-ki",
    verified: true,
    nfcConnected: false,
    nfcCardSerial: "",
    theme: "purple" // slate, purple, gold, emerald, crimson
  });

  // Save changes automatically
  useEffect(() => {
    localStorage.setItem("wiki_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("wiki_attendees", JSON.stringify(attendees));
  }, [attendees]);

  useEffect(() => {
    localStorage.setItem("wiki_connections", JSON.stringify(connections));
  }, [connections]);

  // Form Fields for manual event creation
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventVenue, setNewEventVenue] = useState("");
  const [newEventPrice, setNewEventPrice] = useState("Free");
  const [newEventCapacity, setNewEventCapacity] = useState(100);
  const [newEventDesc, setNewEventDesc] = useState("");
  const [newEventOrganizer, setNewEventOrganizer] = useState("mehar@wi-ki.in");
  const [showEventForm, setShowEventForm] = useState(false);

  // Form Fields for sync attendee CSV
  const [csvText, setCsvText] = useState("");
  const [importedStatus, setImportedStatus] = useState<string | null>(null);

  // Check-In Panel states
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id || "");
  const [selectedCheckinAttendeeId, setSelectedCheckinAttendeeId] = useState<string>("");
  const [checkinMethod, setCheckinMethod] = useState<"QR_SCAN" | "NFC_TAP">("NFC_TAP");
  const [isScanning, setIsScanning] = useState(false);
  const [scanOutcome, setScanOutcome] = useState<{name: string; time: string; method: string} | null>(null);

  // Purchase NFC Form simulator
  const [showNfcPurchasePanel, setShowNfcPurchasePanel] = useState(false);
  const [nfcEngraving, setNfcEngraving] = useState("FOUNDER KEY · MS");
  const [nfcFinish, setNfcFinish] = useState("matte-black"); // matte-black, carbon-fiber, gold-steel, steel-grey
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Discovery search filter states
  const [discoverySearch, setDiscoverySearch] = useState("");
  const [discoverySector, setDiscoverySector] = useState<string>("All");

  // Filter list of attendees for selected event
  const handleAddNewEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle || !newEventVenue || !newEventDate) {
      playSynthBeep("error", soundEnabled);
      return;
    }
    const colorSchemes = [
      "from-slate-700 to-slate-900",
      "from-purple-800 to-slate-950",
      "from-emerald-800 to-teal-950",
      "from-blue-650 to-blue-900",
      "from-rose-800 to-stone-950",
      "from-amber-600 to-amber-950"
    ];
    const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    const id = `evt-${Date.now()}`;
    const item: HostedEvent = {
      id,
      title: newEventTitle,
      date: newEventDate,
      venue: newEventVenue,
      capacity: Number(newEventCapacity),
      price: newEventPrice,
      description: newEventDesc || "Event organized and hosted using Wi-Ki event identity suite.",
      coverColor: randomColor,
      organizerEmail: newEventOrganizer
    };

    setEvents([item, ...events]);
    setNewEventTitle("");
    setNewEventDate("");
    setNewEventVenue("");
    setNewEventPrice("Free");
    setNewEventCapacity(100);
    setNewEventDesc("");
    setShowEventForm(false);
    playSynthBeep("success", soundEnabled);
  };

  // CSV Import simulation
  const handleCSVImport = () => {
    if (!csvText.trim()) {
      playSynthBeep("error", soundEnabled);
      setImportedStatus("Input text is empty!");
      return;
    }

    try {
      // Split lines
      const lines = csvText.trim().split("\n");
      let count = 0;
      const themeColors = ["slate", "emerald", "indigo", "crimson", "amber"];
      const newAttendeesList: Attendee[] = [];

      lines.forEach((line) => {
        // Skip header if matches Name,Email
        if (line.toLowerCase().includes("name") && line.toLowerCase().includes("email")) {
          return;
        }

        const parts = line.split(",");
        if (parts.length >= 2) {
          const name = parts[0].trim();
          const email = parts[1].trim();
          const pCompany = parts[2] ? parts[2].trim() : "Synced External Enterprise";
          const pSectorStr = parts[3] ? parts[3].trim().toLowerCase() : "technology";
          
          let resolvedSector: "Technology" | "Agriculture" | "Teaching" | "Administration" | "Founders" = "Technology";
          if (pSectorStr.includes("agri")) resolvedSector = "Agriculture";
          else if (pSectorStr.includes("teach")) resolvedSector = "Teaching";
          else if (pSectorStr.includes("admin") || pSectorStr.includes("gov")) resolvedSector = "Administration";
          else if (pSectorStr.includes("found")) resolvedSector = "Founders";

          if (name && email) {
            newAttendeesList.push({
              id: `att-synced-${Date.now()}-${count}`,
              name,
              email,
              sector: resolvedSector,
              companyName: pCompany,
              linkedin: `linkedin.com/in/${name.toLowerCase().replace(/\s+/g, "")}`,
              aadhaarVerified: Math.random() > 0.15, // Most are verified
              checkedIn: false,
              scannedVia: null,
              cardTheme: themeColors[Math.floor(Math.random() * themeColors.length)]
            });
            count++;
          }
        }
      });

      if (count > 0) {
        setAttendees([...attendees, ...newAttendeesList]);
        setImportedStatus(`Successfully synced ${count} attendees from external Luma/Eventbrite payload.`);
        setCsvText("");
        playSynthBeep("success", soundEnabled);
      } else {
        setImportedStatus("Could not parse. Ensure comma-separated layout syntax: Name, Email, Company, Sector");
        playSynthBeep("error", soundEnabled);
      }
    } catch (e) {
      setImportedStatus("Failed to process sync text. Please review standard format rules.");
      playSynthBeep("error", soundEnabled);
    }
  };

  // Connect state
  const handleConnectWithAttendee = (partner: Attendee, sourceEventName: string) => {
    // Check if already in connections
    const alreadyConnected = connections.some(c => c.email.toLowerCase() === partner.email.toLowerCase());
    if (alreadyConnected) {
      playSynthBeep("error", soundEnabled);
      return;
    }

    const newConn: Connection = {
      id: `conn-${Date.now()}`,
      name: partner.name,
      email: partner.email,
      sector: partner.sector,
      companyName: partner.companyName,
      linkedin: partner.linkedin,
      connectedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      eventName: sourceEventName
    };

    setConnections([newConn, ...connections]);
    playSynthBeep("connect", soundEnabled);
  };

  // Simulate NFC Card Tagging or manual QR scanning
  const triggerSimulatedCheckin = () => {
    if (!selectedCheckinAttendeeId) {
      playSynthBeep("error", soundEnabled);
      return;
    }

    setIsScanning(true);
    setScanOutcome(null);

    // Simulate duration of signal processing
    setTimeout(() => {
      setAttendees(prev => {
        return prev.map(item => {
          if (item.id === selectedCheckinAttendeeId) {
            const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
            
            // Log scan outcome details
            setScanOutcome({
              name: item.name,
              time: `${timeStr} (Today)`,
              method: checkinMethod === "NFC_TAP" ? "NFC Hardware Intercept (13.56 MHz)" : "Cryptographic QR Code Validation"
            });

            return {
              ...item,
              checkedIn: true,
              checkedInAt: `${timeStr} PM, Today`,
              scannedVia: checkinMethod
            };
          }
          return item;
        });
      });
      setIsScanning(false);
      playSynthBeep(checkinMethod === "NFC_TAP" ? "nfc" : "success", soundEnabled);
    }, 1200);
  };

  // Fast self tap simulation
  const handleVirtualNfcTapSelf = () => {
    if (!userCard.nfcConnected) {
      setUserCard(prev => ({
        ...prev,
        nfcConnected: true,
        nfcCardSerial: `WIKI-NFC-${Math.floor(100000 + Math.random() * 900000)}`
      }));
      playSynthBeep("nfc", soundEnabled);
    } else {
      // Toggle off to re-test
      setUserCard(prev => ({
        ...prev,
        nfcConnected: false,
        nfcCardSerial: ""
      }));
      playSynthBeep("click", soundEnabled);
    }
  };

  const currentEventObj = events.find(e => e.id === selectedEventId) || events[0];

  return (
    <div className="bg-slate-50 min-h-screen py-10 font-sans text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] bg-blue-100 text-blue-700 font-black uppercase tracking-wider px-2.5 py-1 rounded inline-block">
                Wi-Ki Product Ecosystem
              </span>
              <span className="font-mono text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-1 rounded">
                Live Preview Sandbox
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              Wi-Ki Key <span className="text-blue-600">Event Identity Hub</span>
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl font-medium">
              Combine event hosting registers, glassmorphism digital networking cards, simulated QR/NFC physical check-in engines, and high-trust attendee discovery.
            </p>
          </div>

          {/* Sound, Controls & Metainfo */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Toggle application audio synthesizer feedback"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-blue-600" />
                  <span>Audio Feedback: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span>Audio Feedback: OFF</span>
                </>
              )}
            </button>

            <div className="bg-emerald-50 border border-emerald-150 rounded-lg px-4 py-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs text-emerald-800 font-bold font-mono">
                {attendees.length} Verified Node Coordinates Active
              </span>
            </div>
          </div>
        </div>

        {/* ── CENTRAL TABS NAVIGATION ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-200/50 p-1.5 rounded-xl border border-slate-200 select-none">
          <button
            onClick={() => { setActiveTab("card"); playSynthBeep("click", soundEnabled); }}
            className={`py-3 px-2 text-center text-xs font-black uppercase tracking-wider rounded-lg transition-all flex flex-col md:flex-row items-center justify-center gap-2 cursor-pointer ${
              activeTab === "card" 
              ? "bg-white text-slate-900 shadow-sm border border-slate-200/40" 
              : "text-slate-650 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <CreditCard className="w-4 h-4 shrink-0" />
            <span>Digital Card Customizer</span>
          </button>

          <button
            onClick={() => { setActiveTab("organizer"); playSynthBeep("click", soundEnabled); }}
            className={`py-3 px-2 text-center text-xs font-black uppercase tracking-wider rounded-lg transition-all flex flex-col md:flex-row items-center justify-center gap-2 cursor-pointer ${
              activeTab === "organizer" 
              ? "bg-white text-slate-900 shadow-sm border border-slate-200/40" 
              : "text-slate-650 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Host & Sync Dashboard</span>
          </button>

          <button
            onClick={() => { setActiveTab("checkin"); playSynthBeep("click", soundEnabled); }}
            className={`py-3 px-2 text-center text-xs font-black uppercase tracking-wider rounded-lg transition-all flex flex-col md:flex-row items-center justify-center gap-2 cursor-pointer ${
              activeTab === "checkin" 
              ? "bg-white text-slate-900 shadow-sm border border-slate-200/40" 
              : "text-slate-650 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Rss className="w-4 h-4 shrink-0" />
            <span>QR & NFC Check-In Desk</span>
          </button>

          <button
            onClick={() => { setActiveTab("discovery"); playSynthBeep("click", soundEnabled); }}
            className={`py-3 px-2 text-center text-xs font-black uppercase tracking-wider rounded-lg transition-all flex flex-col md:flex-row items-center justify-center gap-2 cursor-pointer ${
              activeTab === "discovery" 
              ? "bg-white text-slate-900 shadow-sm border border-slate-200/40" 
              : "text-slate-650 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>AttendeeDiscovery Lounge</span>
          </button>
        </div>

        {/* ── MAIN CONTENT ACCORDINGS TO TAB ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TAB 1: CARD CUSTOMIZER */}
          {activeTab === "card" && (
            <>
              {/* Creator Controls */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-2xs space-y-6">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Create Your Digital Key</h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Configure your high-trust credentials on Sanshi's global identity standard. Metainfo binds with your secure physical NFC tag.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-450 uppercase font-bold tracking-wider mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      value={userCard.name}
                      onChange={(e) => setUserCard({...userCard, name: e.target.value})}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-450 uppercase font-bold tracking-wider mb-1.5">Enterprise Name</label>
                      <input 
                        type="text" 
                        value={userCard.company}
                        onChange={(e) => setUserCard({...userCard, company: e.target.value})}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-slate-450 uppercase font-bold tracking-wider mb-1.5 font-bold">Contact Node Email</label>
                      <input 
                        type="email" 
                        value={userCard.email}
                        onChange={(e) => setUserCard({...userCard, email: e.target.value})}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-450 uppercase font-bold tracking-wider mb-1.5">Sector Track</label>
                      <select 
                        value={userCard.sector}
                        onChange={(e) => setUserCard({...userCard, sector: e.target.value as any})}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-black focus:outline-none focus:border-blue-600"
                      >
                        <option value="Technology">Technology</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Teaching">Teaching</option>
                        <option value="Administration">Administration</option>
                        <option value="Founders">Founders</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-450 uppercase font-bold tracking-wider mb-1.5">LinkedIn Handle</label>
                      <input 
                        type="text" 
                        value={userCard.linkedin}
                        onChange={(e) => setUserCard({...userCard, linkedin: e.target.value})}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-450 uppercase font-bold tracking-wider mb-2">Display Aesthetic (Hologram Color)</label>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { key: "slate", label: "Midnight Slate", bg: "bg-slate-900 border-slate-700 text-slate-400" },
                        { key: "purple", label: "Cobalt Purple", bg: "bg-purple-900 border-purple-700 text-purple-400" },
                        { key: "gold", label: "Golden Steel", bg: "bg-amber-950 border-amber-600 text-amber-500" },
                        { key: "emerald", label: "Jungle Green", bg: "bg-emerald-900 border-emerald-700 text-emerald-400" },
                        { key: "crimson", label: "Crimson Velvet", bg: "bg-rose-950 border-rose-700 text-rose-400" }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            setUserCard({...userCard, theme: item.key});
                            playSynthBeep("click", soundEnabled);
                          }}
                          className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold ${item.bg} ${
                            userCard.theme === item.key 
                            ? "ring-2 ring-blue-500 ring-offset-2 scale-102 font-black" 
                            : "opacity-75 hover:opacity-100"
                          } cursor-pointer transition-all`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Security Clearance Switch */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-150 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${userCard.verified ? "bg-blue-600 shadow-xs shadow-blue-500" : "bg-red-500"}`} />
                      <div className="flex flex-col">
                        <span className="text-xs font-extrabold text-slate-900 leading-none mb-0.5">Government Aadhaar Verification Node</span>
                        <span className="text-[9px] font-mono text-slate-500">Auto-cleared via central digital credential API</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setUserCard(prev => ({...prev, verified: !prev.verified}));
                        playSynthBeep("click", soundEnabled);
                      }}
                      className={`px-3 py-1 rounded text-[10px] font-bold font-mono transition-colors cursor-pointer ${
                        userCard.verified ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-red-50 text-red-600 border border-red-100"
                      }`}
                    >
                      {userCard.verified ? "VERIFIED (OFFLIINE)" : "UNVERIFIED"}
                    </button>
                  </div>

                  {/* Active Hardware NFC Connection Link */}
                  <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-extrabold text-blue-900 flex items-center gap-1">
                          <Rss className="w-3.5 h-3.5" /> Physical NFC Smart-Key Association
                        </span>
                        <p className="text-[10px] text-blue-700 font-medium leading-relaxed mt-1">
                          Bind your digital profile metadata with any 13.56 MHz NFC responder card or tap module.
                        </p>
                      </div>
                      <button
                        onClick={handleVirtualNfcTapSelf}
                        className={`text-[9px] font-black uppercase tracking-wider py-1.5 px-3 rounded-md transition-all shadow-xs cursor-pointer ${
                          userCard.nfcConnected 
                          ? "bg-red-100 text-red-700 hover:bg-neutral-200" 
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        {userCard.nfcConnected ? "Disconnect Tag" : "Simulate Near-Field Tap"}
                      </button>
                    </div>

                    {userCard.nfcConnected ? (
                      <div className="flex items-center justify-between text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-150 p-2 rounded">
                        <span>● PHYSICAL NFC LINKED SECURELY</span>
                        <span className="font-bold">{userCard.nfcCardSerial}</span>
                      </div>
                    ) : (
                      <div className="text-[10.5px] font-mono text-slate-505 italic text-center p-1 font-semibold leading-relaxed">
                        ⚠️ No physical NFC cards are associated. Connect below or proceed with digital card.
                      </div>
                    )}
                  </div>

                  {/* NFC Card Checkout Simulator link */}
                  <button
                    onClick={() => {
                      setShowNfcPurchasePanel(!showNfcPurchasePanel);
                      playSynthBeep("click", soundEnabled);
                    }}
                    className="w-full text-center text-xs text-blue-600 hover:text-blue-800 font-bold underline flex items-center justify-center gap-1.5 cursor-pointer py-1"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{showNfcPurchasePanel ? "Close Card Simulator" : "Customize Professional Physical NFC Card"}</span>
                  </button>
                </div>
              </div>

              {/* Card visual showcase */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* 3D Glass Card visual */}
                <div className="flex flex-col items-center justify-center py-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
                  
                  {/* Backdrop glowing sphere */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none transition-all duration-300 ${
                    userCard.theme === "slate" ? "bg-slate-400" :
                    userCard.theme === "purple" ? "bg-violet-500" :
                    userCard.theme === "gold" ? "bg-amber-400" :
                    userCard.theme === "emerald" ? "bg-emerald-500" : "bg-rose-500"
                  }`} />

                  {/* Security Seal Title Text */}
                  <div className="text-center font-mono text-[9px] tracking-widest text-slate-500 uppercase font-black mb-6">
                    Wi-Ki Network Trust Protocol • Cryptographic Signature ID
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.02, rotateX: 6, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    className={`w-[20.5rem] sm:w-[23.5rem] h-[13.5rem] sm:h-[15.5rem] rounded-2xl relative p-5 flex flex-col justify-between overflow-hidden shadow-2xl border ${
                      userCard.theme === "slate" ? "bg-gradient-to-tr from-slate-900 via-slate-800 to-zinc-900 border-slate-650" :
                      userCard.theme === "purple" ? "bg-gradient-to-tr from-purple-950 via-slate-950 to-indigo-950 border-purple-800/80" :
                      userCard.theme === "gold" ? "bg-gradient-to-tr from-stone-950 via-amber-975 to-slate-950 border-amber-600/60" :
                      userCard.theme === "emerald" ? "bg-gradient-to-tr from-emerald-950 via-stone-950 to-teal-950 border-emerald-800/70" :
                      "bg-gradient-to-tr from-rose-950 via-neutral-950 to-stone-950 border-rose-800/80"
                    }`}
                  >
                    {/* Metallic Hologram Badge or Chip */}
                    <div className="absolute top-5 right-5 w-10 sm:w-12 h-8 sm:h-10 rounded-sm bg-gradient-to-tr from-slate-300 via-slate-150 to-zinc-400 opacity-85 overflow-hidden flex flex-col items-center justify-center p-1 border border-white/20">
                      <div className="h-[2px] w-full bg-white/40 my-0.5" />
                      <div className="h-[2px] w-full bg-white/40 my-0.5" />
                      <div className="h-[2px] w-full bg-slate-700/30 my-0.5" />
                      <div className="text-[7px] font-mono text-slate-800 font-extrabold uppercase scale-90 leading-none">NFC TAP</div>
                    </div>

                    {/* Laser Seal badge logic */}
                    {userCard.verified && (
                      <div className="absolute bottom-5 right-5 flex items-center gap-1 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[8.5px] text-white font-mono font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>AADHAAR VERIFIED</span>
                      </div>
                    )}

                    {/* Logo */}
                    <div>
                      <div className="flex items-center gap-1 bg-white/5 backdrop-blur-xs w-fit px-2 py-0.5 rounded border border-white/10">
                        <span className="text-[9.5px] font-sans font-black text-white uppercase tracking-wider">Wi-Ki Key</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      </div>
                      <span className="text-[8px] font-mono text-white/50 block mt-1 tracking-widest uppercase">Universal Identity Node</span>
                    </div>

                    {/* Cardholder Information Fields */}
                    <div>
                      <div className="text-[13px] sm:text-[15px] font-sans font-black text-white tracking-wide uppercase leading-none truncate max-w-[15rem]">
                        {userCard.name || "UNNAMED HOLDER"}
                      </div>
                      <div className="text-[10px] text-white/80 font-bold font-mono tracking-tight mt-0.5 truncate max-w-[16rem]">
                        {userCard.company || "Independent Maker"}
                      </div>
                      <div className="text-[9px] text-white/60 font-medium font-mono leading-relaxed truncate max-w-[16rem]">
                        {userCard.email}
                      </div>
                    </div>

                    {/* Sector Specific Indicator Chip */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-white/50 bg-white/5 py-1 px-2.5 rounded-md border border-white/10 font-bold uppercase tracking-wider">
                          {userCard.sector} Track
                        </span>
                        {userCard.nfcConnected && (
                          <span className="text-[8.5px] font-mono text-emerald-400 bg-emerald-950/40 py-1 px-2 rounded border border-emerald-900/60 font-black tracking-tight uppercase">
                            🖲️ NFC ACTIVE
                          </span>
                        )}
                      </div>
                      
                      <span className="text-[8.5px] font-mono text-slate-450 uppercase font-black tracking-widest scale-95 pr-2 block">
                        COHORT NODE
                      </span>
                    </div>
                  </motion.div>

                  {/* Metainfo parameters and instructions */}
                  <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-350">
                      <QrCode className="w-4 h-4 text-slate-450" />
                      <span>Simulated Secure Enclave Key</span>
                    </div>
                    <span className="text-slate-700">|</span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-350">
                      <Download className="w-4 h-4 text-slate-450" />
                      <span>Sync via Card Reader Enabled</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Order Custom Card checkout Panel */}
                <AnimatePresence>
                  {showNfcPurchasePanel && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-xs"
                    >
                      <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-5">
                        <div>
                          <span className="text-[10px] font-mono bg-amber-50 text-amber-700 font-bold border border-amber-150 py-0.5 px-2.5 rounded uppercase">
                            Hardware Store Module
                          </span>
                          <h3 className="text-base font-extrabold text-slate-900 mt-1 flex items-center gap-1.5 select-all">
                            Order Physical NFC Networking Card
                          </h3>
                        </div>
                        <button 
                          onClick={() => { setShowNfcPurchasePanel(false); setOrderPlaced(false); playSynthBeep("click", soundEnabled); }}
                          className="p-1 rounded-full text-slate-400 hover:text-slate-650 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {orderPlaced ? (
                        <div className="text-center py-6 space-y-4">
                          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-150 shadow-sm text-emerald-600">
                            <Check className="w-6 h-6 stroke-[3px]" />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-slate-900 uppercase">Custom NFC Key Order Dispatched</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-sm mx-auto font-medium">
                              Your physical high-trust steel card (engraving values preserved) was compiled in the factory. Delivery logistics coordinated by our Koshaadhikari within 48 hours.
                            </p>
                          </div>
                          <div className="flex gap-2 items-center justify-center">
                            <button
                              onClick={() => {
                                // Simulate receiving connection
                                setUserCard(prev => ({
                                  ...prev,
                                  nfcConnected: true,
                                  nfcCardSerial: `WIKI-PHYS-${Math.floor(200000 + Math.random() * 700000)}`
                                }));
                                setOrderPlaced(false);
                                playSynthBeep("nfc", soundEnabled);
                              }}
                              className="px-4 py-2 bg-slate-900 hover:bg-black text-white text-[11px] font-mono font-black uppercase tracking-wider rounded-lg shadow-sm cursor-pointer"
                            >
                              Tap Received card (Simulate Association)
                            </button>
                            <button
                              onClick={() => {setOrderPlaced(false); playSynthBeep("click", soundEnabled);}}
                              className="px-4 py-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-[11px] font-bold rounded-lg cursor-pointer"
                            >
                              Configure New Card
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-mono text-slate-450 uppercase font-black tracking-wider mb-1">
                                Personalized Laser Engraving Text
                              </label>
                              <input 
                                type="text"
                                maxLength={28}
                                value={nfcEngraving}
                                onChange={(e) => setNfcEngraving(e.target.value.toUpperCase())}
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold uppercase focus:outline-none focus:border-blue-500"
                              />
                              <span className="text-[9px] text-slate-450 block mt-1">Laser engraved directly onto aluminum/steel layer</span>
                            </div>

                            <div>
                              <label className="block text-[10px] font-mono text-slate-450 uppercase font-black tracking-wider mb-1">
                                Physical Finish Texture
                              </label>
                              <div className="grid grid-cols-2 gap-2 text-[11px]">
                                {[
                                  { id: "matte-black", label: "Matte Black Steel (Premium)", price: "₹2,499" },
                                  { id: "carbon-fiber", label: "Carbon Fiber Mesh", price: "₹2,699" },
                                  { id: "gold-steel", label: "Pittsburg Gold Plated", price: "₹3,999" },
                                  { id: "steel-grey", label: "Space Titanium", price: "₹2,599" }
                                ].map(f => (
                                  <button
                                    key={f.id}
                                    type="button"
                                    onClick={() => { setNfcFinish(f.id); playSynthBeep("click", soundEnabled); }}
                                    className={`p-2 rounded text-left border cursor-pointer transition-all ${
                                      nfcFinish === f.id 
                                      ? "bg-slate-900 text-white border-slate-900 font-extrabold" 
                                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                                    }`}
                                  >
                                    <div className="font-bold">{f.label}</div>
                                    <div className="text-[9.5px] opacity-80 mt-0.5">{f.price}</div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Order Review Card visual */}
                          <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 flex flex-col justify-between">
                            <div className="space-y-2">
                              <span className="text-[9px] font-mono text-slate-450 block uppercase font-bold">Physical Card Concept Draft</span>
                              <div className={`w-full h-28 rounded-lg relative p-3 text-white flex flex-col justify-between ${
                                nfcFinish === "matte-black" ? "bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-700" :
                                nfcFinish === "carbon-fiber" ? "bg-gradient-to-br from-slate-900 to-stone-900 border border-slate-800 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:4px_4px]" :
                                nfcFinish === "gold-steel" ? "bg-gradient-to-br from-amber-650 via-yellow-750 to-amber-950 border border-amber-500" :
                                "bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600"
                              }`}>
                                <div className="flex justify-between items-start">
                                  <span className="text-[10px] font-bold font-sans uppercase tracking-widest text-shadow">FOUNDERKEY</span>
                                  <div className="w-5 h-5 rounded bg-amber-400/20 flex items-center justify-center border border-amber-400/30">
                                    <span className="text-[8px] font-bold text-amber-300">NFC</span>
                                  </div>
                                </div>
                                <div className="text-[11px] font-mono font-black uppercase text-center bg-white/10 py-1 px-2 rounded tracking-wider">
                                  {nfcEngraving || "YOUR NAME HERE"}
                                </div>
                                <div className="flex justify-between text-[8px] text-white/50 font-mono">
                                  <span>LASER ENGRAVED</span>
                                  <span>SN: MOCK-744</span>
                                </div>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between">
                              <div className="text-xs">
                                <span className="text-slate-450 block font-mono">Total (Introductory):</span>
                                <span className="font-sans font-black text-slate-900">₹2,499 (incl. tax)</span>
                              </div>
                              <button
                                onClick={() => { setOrderPlaced(true); playSynthBeep("success", soundEnabled); }}
                                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-755 text-white font-sans text-xs font-black uppercase tracking-wider rounded-lg shadow-sm shadow-blue-500/10 cursor-pointer"
                              >
                                Place Secure Order
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </>
          )}

          {/* TAB 2: HOSTING AND CSV IMPORT */}
          {activeTab === "organizer" && (
            <div className="lg:col-span-12 space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* HOST EVENT FORM */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-2xs space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900">Host an Event Session</h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">Create ticket coordinates and compile high-trust visitor rosters.</p>
                    </div>
                    <button
                      onClick={() => { setShowEventForm(!showEventForm); playSynthBeep("click", soundEnabled); }}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-150 text-blue-700 text-xs font-black uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{showEventForm ? "Close Form" : "Create New"}</span>
                    </button>
                  </div>

                  {showEventForm ? (
                    <form onSubmit={handleAddNewEvent} className="space-y-4">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1">Event Title</label>
                        <input 
                          type="text"
                          required
                          placeholder="e.g. Hyderabad Agro-Tech Conclave 2026"
                          value={newEventTitle}
                          onChange={(e) => setNewEventTitle(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-blue-500 text-slate-900"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1">Session Date</label>
                          <input 
                            type="text"
                            required
                            placeholder="e.g. Wednesday, June 10, 2026"
                            value={newEventDate}
                            onChange={(e) => setNewEventDate(e.target.value)}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:border-blue-500 text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1 font-bold">Venue Coordinates</label>
                          <input 
                            type="text"
                            required
                            placeholder="e.g. Room 442, Cyber Tower"
                            value={newEventVenue}
                            onChange={(e) => setNewEventVenue(e.target.value)}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none text-slate-900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1">Ticket Cost / Pricing Mode</label>
                          <input 
                            type="text"
                            placeholder="e.g. Free Entry, ₹499"
                            value={newEventPrice}
                            onChange={(e) => setNewEventPrice(e.target.value)}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1">Target Seat Capacity</label>
                          <input 
                            type="number"
                            value={newEventCapacity}
                            onChange={(e) => setNewEventCapacity(Number(e.target.value))}
                            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none text-slate-900"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1">Session Abstract Description</label>
                        <textarea 
                          rows={2}
                          value={newEventDesc}
                          onChange={(e) => setNewEventDesc(e.target.value)}
                          placeholder="Provide context regarding the core tracks and speakers of the meetup."
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-none text-slate-900"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-750 text-white font-sans text-xs font-black uppercase tracking-wider rounded-lg shadow-sm shadow-blue-500/10 cursor-pointer"
                      >
                        Publish Event Node & Access Register
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono text-slate-450 uppercase font-black">Active Events Catalogue</span>
                      
                      <div className="space-y-3.5">
                        {events.map((evt) => {
                          const eventCheckedInCount = attendees.filter(a => a.checkedIn).length; // Simulated tally
                          return (
                            <div 
                              key={evt.id}
                              onClick={() => { setSelectedEventId(evt.id); playSynthBeep("click", soundEnabled); }}
                              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                                selectedEventId === evt.id 
                                ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                                : "bg-slate-50 text-slate-800 border-slate-150 hover:bg-slate-100"
                              }`}
                            >
                              <div className="flex justify-between items-start gap-2 mb-1.5">
                                <h4 className="text-xs sm:text-sm font-extrabold line-clamp-1">{evt.title}</h4>
                                <span className={`text-[8.5px] font-mono px-2 py-0.5 rounded font-black uppercase ${
                                  selectedEventId === evt.id ? "bg-amber-100 text-amber-800" : "bg-slate-200/80 text-slate-750"
                                }`}>
                                  {evt.price}
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 text-[10.5px] opacity-75 mb-2 font-medium">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="line-clamp-1">{evt.venue}</span>
                              </div>

                              <div className="flex justify-between items-center text-[10px] font-mono opacity-80 pt-2 border-t border-slate-200/15">
                                <span>{evt.date}</span>
                                <span className="font-bold uppercase tracking-tight text-blue-500">
                                  Max Seats: {evt.capacity}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* PASTE PAYLOAD CSV SYNC MULTIPLE ATTENDEES */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-2xs space-y-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between border-b border-slate-100 pb-3 mb-4">
                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900">Sync Attendees Payload</h3>
                        <p className="text-xs text-slate-550 mt-0.5 font-medium">Integrate registers from third-party ecosystems (such as Luma, CSV Exports, or CRM payloads) into secure verification matrices.</p>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-2xs">
                        <Upload className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3.5 bg-slate-50 border border-slate-150 rounded-lg">
                        <span className="text-[10px] font-mono text-slate-450 block uppercase font-bold mb-1.5">Required CSV Format Syntax</span>
                        <div className="font-mono text-[10px] text-slate-600 bg-white border border-slate-200 rounded p-2.5 leading-relaxed">
                          Name, Email, Company, Sector Track<br />
                          <span className="text-blue-500 font-extrabold">Srishta Murthy, srishta@sanshinetworktech.com, Sanshi Tech, Technology</span><br />
                          Ananya Sen, ananya.sen@ts.edu, Hyderabad University, Teaching
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-450 uppercase font-black mb-1.5">Paste CSV or Comma-separated Text Rows</label>
                        <textarea
                          rows={4}
                          value={csvText}
                          onChange={(e) => setCsvText(e.target.value)}
                          placeholder="Priyanka Nair, priyanka@agrocore.in, AgroCore TS, Agriculture&#10;Arthur Pendragon, arthur@pittventures.com, Pittsburgh Ventures, Founders"
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold focus:outline-none focus:border-blue-600 text-slate-900 leading-relaxed"
                        />
                      </div>

                      {importedStatus && (
                        <div className="p-2.5 bg-blue-50 border border-blue-150 rounded-lg flex items-start gap-2 text-xs text-blue-800 leading-relaxed font-bold">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{importedStatus}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleCSVImport}
                    className="w-full py-3.5 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-sm cursor-pointer transition-all mt-4"
                  >
                    Parse Pasteboard & Sync Attendee List
                  </button>
                </div>

              </div>

              {/* LIVE SYNC STATUS & ATTENDEE COUNTS */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-sm font-black uppercase text-slate-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Attendee Register Tally for: {currentEventObj?.title}</span>
                  </h3>
                  <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded">
                    Total: {attendees.length} Verified Records
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-150 text-[10.5px] font-mono text-slate-450 uppercase tracking-widest bg-slate-50/50">
                        <th className="py-2.5 px-3">Attendee Name</th>
                        <th className="py-2.5 px-3">Track / Sector</th>
                        <th className="py-2.5 px-3">Organization</th>
                        <th className="py-2.5 px-3">Identity Seal</th>
                        <th className="py-2.5 px-3">Registration Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {attendees.map((att) => (
                        <tr key={att.id} className="hover:bg-slate-50/50">
                          <td className="py-3 px-3 font-bold text-slate-900">
                            <div>{att.name}</div>
                            <div className="text-[10px] text-slate-450 font-normal font-mono">{att.email}</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className={`inline-block text-[9.5px] font-mono font-bold uppercase tracking-tight py-0.5 px-2.5 border rounded-full ${
                              att.sector === "Technology" ? "bg-blue-50 text-blue-700 border-blue-150" :
                              att.sector === "Agriculture" ? "bg-emerald-50 text-emerald-800 border-emerald-150" :
                              att.sector === "Teaching" ? "bg-indigo-50 text-indigo-800 border-indigo-150" :
                              att.sector === "Administration" ? "bg-rose-50 text-rose-800 border-rose-150" :
                              "bg-amber-50 text-amber-800 border-amber-150"
                            }`}>
                              {att.sector}
                            </span>
                          </td>
                          <td className="py-3 px-3 font-semibold text-slate-700">
                            {att.companyName}
                          </td>
                          <td className="py-3 px-3">
                            {att.aadhaarVerified ? (
                              <div className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-150 py-0.5 px-2 rounded-full font-mono font-bold">
                                <Check className="w-3 h-3 stroke-[3px]" />
                                <span>Aadhaar Verified</span>
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1 text-[10px] text-slate-450 bg-slate-100 border border-slate-200 py-0.5 px-2 rounded-full font-mono">
                                <span>Self Asserted</span>
                              </div>
                            )}
                          </td>
                          <td className="py-3 px-3">
                            {att.checkedIn ? (
                              <div className="flex flex-col">
                                <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                  Checked In
                                </span>
                                <span className="text-[9.5px] font-mono text-slate-500 font-semibold">{att.checkedInAt || "Event Day"} via {att.scannedVia || "NFC_TAP"}</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 text-slate-450 font-medium">
                                <Clock className="w-3.5 h-3.5" />
                                <span>Registered (Standby)</span>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          )}

          {/* TAB 3: CHECKIN DESK SIMULATOR */}
          {activeTab === "checkin" && (
            <div className="lg:col-span-12 space-y-8">
              
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[15rem] h-[15rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="max-w-3xl mx-auto space-y-6">
                  
                  {/* Title block */}
                  <div className="text-center space-y-2">
                    <span className="font-mono text-[9px] bg-sky-900 border border-sky-700 font-black tracking-widest text-sky-300 py-1 px-3 rounded uppercase inline-block">
                      NFC Receiver & QR Scanner Terminal
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-sans">
                      Universal Check-In Simulator
                    </h2>
                    <p className="text-xs text-slate-400 font-medium max-w-lg mx-auto">
                      Simulate the digital gate experience. Choose an attendee and validate their credentials securely.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    
                    {/* Setup checkin target */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase font-black mb-1.5">1. Target Scheduled event</label>
                        <select
                          value={selectedEventId}
                          onChange={(e) => { setSelectedEventId(e.target.value); playSynthBeep("click", soundEnabled); }}
                          className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm font-semibold text-white focus:outline-none"
                        >
                          {events.map(e => (
                            <option key={e.id} value={e.id}>{e.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase font-black mb-1.5">2. Select Attendee profile</label>
                        <select
                          value={selectedCheckinAttendeeId}
                          onChange={(e) => { setSelectedCheckinAttendeeId(e.target.value); playSynthBeep("click", soundEnabled); }}
                          className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm font-semibold text-white focus:outline-none"
                        >
                          <option value="">-- Choose Attendee --</option>
                          {attendees.map(a => (
                            <option key={a.id} value={a.id}>
                              {a.name} ({a.sector} Track) {a.checkedIn ? " [ALREADY CHECKED IN]" : ""}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase font-black mb-2">3. Select Scanner Protocol Match</label>
                        <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm select-none">
                          <button
                            type="button"
                            onClick={() => { setCheckinMethod("NFC_TAP"); playSynthBeep("click", soundEnabled); }}
                            className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer font-bold ${
                              checkinMethod === "NFC_TAP"
                              ? "bg-blue-600 border-blue-500 text-white shadow-md font-black"
                              : "bg-slate-800 border-slate-75 *0 text-slate-350 hover:bg-slate-750"
                            }`}
                          >
                            <Rss className="w-4 h-4" />
                            <span>NFC Hardware Tap</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => { setCheckinMethod("QR_SCAN"); playSynthBeep("click", soundEnabled); }}
                            className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer font-bold ${
                              checkinMethod === "QR_SCAN"
                              ? "bg-blue-600 border-blue-500 text-white shadow-md font-black"
                              : "bg-slate-800 border-slate-75 *0 text-slate-350 hover:bg-slate-750"
                            }`}
                          >
                            <QrCode className="w-4 h-4" />
                            <span>QR Code Scan</span>
                          </button>
                        </div>
                      </div>

                      {/* Trigger Execution */}
                      <button
                        onClick={triggerSimulatedCheckin}
                        disabled={isScanning || !selectedCheckinAttendeeId}
                        className={`w-full py-4 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer ${
                          !selectedCheckinAttendeeId 
                          ? "bg-slate-800 text-slate-550 border border-slate-750 border-dashed cursor-not-allowed"
                          : isScanning 
                          ? "bg-blue-100 text-blue-900 border border-blue-200" 
                          : "bg-white text-slate-900 hover:bg-slate-100 active:scale-[0.99]"
                        }`}
                      >
                        {isScanning ? "Processing Device Intercept..." : "Initialize Scanner Verification"}
                      </button>
                    </div>

                    {/* INTERACTIVE SCANNER EYE PIECE FEEDBACK */}
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between min-h-[15rem] relative">
                      
                      {isScanning && (
                        <div className="absolute inset-0 bg-blue-500/5 animate-pulse pointer-events-none" />
                      )}

                      {/* Moving laser scanline overlay */}
                      {isScanning && (
                        <motion.div 
                          initial={{ top: "10%" }}
                          animate={{ top: "90%" }}
                          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                          className="absolute left-0 right-0 h-1 bg-blue-500 shadow-lg shadow-blue-500/80 z-10"
                        />
                      )}

                      <div className="space-y-4">
                        <span className="text-[10px] font-mono text-slate-500 uppercase font-black block">Active Signal Intercept Terminal Log</span>
                        
                        {isScanning ? (
                          <div className="text-center py-8 space-y-3">
                            <Rss className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
                            <p className="text-xs font-mono text-blue-400 font-bold animate-pulse uppercase">Scanning Cryptographic Envelope...</p>
                          </div>
                        ) : scanOutcome ? (
                          <div className="space-y-3 p-3 bg-emerald-950/40 border border-emerald-900/60 rounded-xl">
                            <div className="flex gap-2 items-start">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-xs font-black text-white uppercase tracking-wider">Access Granted (Aadhaar Match)</h4>
                                <p className="text-[11px] text-emerald-300 font-mono mt-0.5">Attendee Name: {scanOutcome.name}</p>
                              </div>
                            </div>
                            <div className="space-y-1.5 pt-2 border-t border-emerald-900/40 text-[9.5px] font-mono text-slate-400">
                              <div>Check-in Timestamp: {scanOutcome.time}</div>
                              <div>Intercept Standard: {scanOutcome.method}</div>
                              <div className="font-bold text-emerald-400">STATUS: VERIFIED SECURE COORDINATE</div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-6 border border-dashed border-slate-800 rounded-xl space-y-2">
                            <ShieldAlert className="w-7 h-7 text-slate-700 mx-auto" />
                            <p className="text-xs font-mono text-slate-500 italic max-w-xs mx-auto leading-relaxed">
                              Waiting for verification trigger. Confirm target selection first.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Metric snapshot */}
                      <div className="pt-4 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex justify-between">
                        <span>Terminal ID: HYD_NFC_01</span>
                        <span>Protocol v3.45</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          )}

          {/* TAB 4: DISCOVERY AND CONNECTIONS LOUNGE */}
          {activeTab === "discovery" && (
            <div className="lg:col-span-12 space-y-8">
              
              {/* CONNECT WITH ATTENDEES IN REALTIME */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* ATTENDEE SEARCH GATEWAY */}
                <div className="md:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-2xs space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900">Virtual Discovery Lounge</h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">Verify credentials on the fly, examine secure sector tracks, and link profiles.</p>
                    </div>

                    {/* Filter Sector Row */}
                    <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-lg">
                      {["All", "Technology", "Agriculture", "Teaching", "Administration", "Founders"].map((sec) => (
                        <button
                          key={sec}
                          onClick={() => { setDiscoverySector(sec); playSynthBeep("click", soundEnabled); }}
                          className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                            discoverySector === sec 
                            ? "bg-slate-900 text-white" 
                            : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {sec === "All" ? "All Tracks" : sec}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Search Bar input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Search checked-in attendee name or enterprise..."
                      value={discoverySearch}
                      onChange={(e) => setDiscoverySearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-150 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* List of Attendees registered for discovery */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {attendees
                      .filter(att => {
                        // Filter by sector matches
                        if (discoverySector !== "All" && att.sector !== discoverySector) return false;
                        // Filter by search terms
                        if (discoverySearch.trim() !== "") {
                          const query = discoverySearch.toLowerCase();
                          return att.name.toLowerCase().includes(query) || att.companyName.toLowerCase().includes(query);
                        }
                        return true;
                      })
                      .map((partner) => {
                        const isConnected = connections.some(c => c.email.toLowerCase() === partner.email.toLowerCase());
                        
                        return (
                          <div 
                            key={partner.id} 
                            className="p-4 rounded-xl border border-slate-150 hover:border-slate-300 transition-all bg-white relative flex flex-col justify-between"
                          >
                            <div className="space-y-3">
                              {/* Meta Identity badges */}
                              <div className="flex items-center justify-between gap-2">
                                <span className={`text-[8.5px] font-mono tracking-tight py-0.5 px-2 font-black border rounded scale-95 uppercase ${
                                  partner.sector === "Technology" ? "bg-blue-50 border-blue-150 text-blue-700" :
                                  partner.sector === "Agriculture" ? "bg-emerald-50 border-emerald-150 text-emerald-800" :
                                  partner.sector === "Teaching" ? "bg-indigo-50 border-indigo-150 text-indigo-800" :
                                  partner.sector === "Administration" ? "bg-rose-50 border-rose-150 text-rose-800" :
                                  "bg-amber-50 border-amber-150 text-amber-800"
                                }`}>
                                  {partner.sector} TRACK
                                </span>

                                {partner.aadhaarVerified && (
                                  <span className="text-[8px] font-mono font-bold text-blue-650 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                                    AADHAAR OK
                                  </span>
                                )}
                              </div>

                              {/* Title holder details */}
                              <div>
                                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-none mb-1">{partner.name}</h4>
                                <span className="text-[10px] text-slate-500 font-bold font-mono">{partner.companyName}</span>
                              </div>

                              {/* Checked in info */}
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-455 font-semibold">
                                <div className={`w-1.5 h-1.5 rounded-full ${partner.checkedIn ? "bg-emerald-500 animate-pulse" : "bg-slate-300"}`} />
                                <span className="truncate">{partner.checkedIn ? `Checked in: ${partner.checkedInAt || "Today"}` : "Standby (Awaiting gate check-in)"}</span>
                              </div>
                            </div>

                            {/* Actions footer */}
                            <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                              <span className="text-[10px] font-mono text-slate-450 leading-none">{partner.email}</span>
                              
                              <button
                                onClick={() => handleConnectWithAttendee(partner, currentEventObj.title)}
                                disabled={isConnected}
                                className={`px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-wider cursor-pointer ${
                                  isConnected 
                                  ? "bg-slate-100 text-slate-450 border border-slate-200" 
                                  : "bg-blue-600 hover:bg-blue-750 text-white shadow-xs"
                                }`}
                              >
                                {isConnected ? "Connected OK" : "Connect Card"}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* VISITED LEDGER HISTORY LOG */}
                <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-2">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">Networking History</h3>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-semibold">Connected roster of professional partners synchronized in Hyderabad/USA event series.</p>
                    </div>
                  </div>

                  {connections.length > 0 ? (
                    <div className="space-y-3 max-h-[25rem] overflow-y-auto">
                      {connections.map((c) => (
                        <div key={c.id} className="p-3 bg-slate-50 rounded-xl border border-slate-150 relative space-y-1">
                          <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                            <span>Met at: {c.connectedAt}</span>
                            <span className="font-semibold uppercase tracking-tight text-blue-500">Exchanged</span>
                          </div>

                          <h4 className="text-xs font-black text-slate-900 leading-none">{c.name}</h4>
                          <p className="text-[10.5px] text-slate-500 font-bold">{c.companyName} ({c.sector})</p>

                          <div className="flex justify-between text-[9.5px] font-mono pt-1 text-slate-450">
                            <span>{c.email}</span>
                          </div>
                        </div>
                      ))}

                      {/* Clear cache simulation */}
                      <button
                        onClick={() => {
                          setConnections([]);
                          playSynthBeep("click", soundEnabled);
                        }}
                        className="w-full text-center text-[10px] font-mono text-red-500 hover:text-red-750 font-bold uppercase block pt-2 underline cursor-pointer"
                      >
                        Clear Saved History
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-10 border border-dashed border-slate-200 rounded-xl space-y-3">
                      <Users className="w-8 h-8 text-slate-300 mx-auto" />
                      <p className="text-xs text-slate-550 leading-relaxed font-bold italic max-w-xs mx-auto">
                        No metadata exchanges established. Visit the discovery lounger and tap "Connect Card" to record contacts!
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
