"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers, 
  MapPin,
  CheckCircle2
} from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/content";

// Orb presentation styling for the 4 pillars (Kroll overlapping disks archetype)
const orbConfigs = [
  {
    slug: "documentation-focus",
    shortLabel: "Documentation",
    subLabel: "Zero Friction",
    color: "#024a86", // Deep Cobalt Navy
    accentColor: "#0284c7",
    glow: "rgba(2, 74, 134, 0.4)",
    position: "top-left",
    icon: FileSpreadsheet,
    solutions: [
      { title: "Complete Paperwork Ownership", desc: "Founders focus on revenue while our teams handle drafting, compilation, and registry records." },
      { title: "Contract Administration", desc: "Rapid review and turnarounds on commercial pacts, SLAs, and non-disclosure agreements." },
      { title: "Statutory Filing Management", desc: "Deadlines tracked proactively to prevent penalties with Singapore regulatory authorities." },
      { title: "Confidential Data Retention", desc: "Strict confidentiality and institutional-grade document archiving." }
    ]
  },
  {
    slug: "experienced-solicitor-panel",
    shortLabel: "Solicitor Panel",
    subLabel: "Legal Rigor",
    color: "#059669", // Vibrant Emerald (Like Kroll Green)
    accentColor: "#10b981",
    glow: "rgba(5, 150, 105, 0.4)",
    position: "top-right",
    icon: ShieldCheck,
    solutions: [
      { title: "Vetted Singapore Practitioners", desc: "Every key agreement is scrutinized by qualified solicitors under Singapore law." },
      { title: "Airtight Commercial Enforceability", desc: "Eliminating ambiguous covenants in shareholder pacts and cross-border partnerships." },
      { title: "Liability Mitigation", desc: "Pre-empting legal disputes through comprehensive indemnities and governance protocols." },
      { title: "Transaction Negotiation Support", desc: "Experienced legal practitioners assisting your leadership team at the negotiation table." }
    ]
  },
  {
    slug: "one-firm-end-to-end",
    shortLabel: "End-to-End",
    subLabel: "4 Pillars Unified",
    color: "#0ea5e9", // Cerulean Blue / Cyan
    accentColor: "#38bdf8",
    glow: "rgba(14, 165, 233, 0.4)",
    position: "bottom-left",
    icon: Layers,
    solutions: [
      { title: "One Point of Contact", desc: "No more disconnected accountants, law firms, secretarial agencies, and event hosts." },
      { title: "Unified Strategic Cohesion", desc: "Your business models, legal contracts, and tax alignment operate in total synergy." },
      { title: "Bundled Corporate Retainers", desc: "Cost-effective service packages engineered to scale seamlessly as your firm expands." },
      { title: "Executive Event Production", desc: "Turnkey planning for high-stakes AGMs, board meetings, and client appreciation galas." }
    ]
  },
  {
    slug: "singapore-based-knowledge",
    shortLabel: "Singapore Hub",
    subLabel: "Local Mastery",
    color: "#d97706", // Polished Amber Gold
    accentColor: "#f59e0b",
    glow: "rgba(217, 119, 6, 0.4)",
    position: "bottom-right",
    icon: MapPin,
    solutions: [
      { title: "ACRA & IRAS Real-Time Alignment", desc: "Nuanced, up-to-date compliance workflows directly in Singapore's financial core." },
      { title: "Premier Banking Relationships", desc: "Assistance with Singapore corporate banking setup and institutional introductions." },
      { title: "APAC Regional Gateway", desc: "Foundational guidance for multinational firms establishing their Singapore headquarters." },
      { title: "In-Person Presence", desc: "Immediate local availability for urgent board meetings, signings, and filings." }
    ]
  }
];

export default function WhyChooseSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSolutionIdx, setSelectedSolutionIdx] = useState(0);

  const activePillar = WHY_CHOOSE_ITEMS[activeIdx];
  const activeOrb = orbConfigs[activeIdx];

  return (
    <section className="py-24 bg-[#f8fafc] text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Strategic Differentiators
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#07162c]">
            Why Choose CGM Advisory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Interact with our integrated capability model below to see how our multidisciplinary structure protects and scales your enterprise.
          </p>
        </div>

        {/* KROLL-STYLE INTERACTIVE PRESENTATION (Circles on Left, Dynamic Content on Right) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: INTERACTIVE MOVABLE CIRCLES / VENN ORBS */}
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[400px] sm:h-[440px] flex items-center justify-center shrink-0">
            {/* Ambient Background Blur behind orbs */}
            <div 
              className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: activeOrb.color }}
            />

            {/* Central Brand Apex Logo Shield (Like Kroll Center Triangle) */}
            <div className="absolute z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl border-4 border-slate-100 flex items-center justify-center pointer-events-none">
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-black text-xs uppercase tracking-tighter shadow-inner transition-colors duration-500"
                style={{ backgroundColor: activeOrb.color }}
              >
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-sm sm:text-base">CGM</span>
                  <span className="text-[8px] tracking-widest text-amber-300">ADVISORY</span>
                </div>
              </div>
            </div>

            {/* ORB 1: TOP-LEFT (Documentation) */}
            <motion.button
              onClick={() => { setActiveIdx(0); setSelectedSolutionIdx(0); }}
              animate={{
                scale: activeIdx === 0 ? 1.08 : 0.94,
                zIndex: activeIdx === 0 ? 25 : 10,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`absolute top-4 left-4 sm:top-6 sm:left-6 w-44 h-44 sm:w-50 sm:h-50 rounded-full flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-shadow shadow-lg ${
                activeIdx === 0 ? "ring-4 ring-white shadow-2xl" : "opacity-90 hover:opacity-100"
              }`}
              style={{
                backgroundColor: orbConfigs[0].color,
                color: "#ffffff"
              }}
            >
              <FileSpreadsheet className="w-6 h-6 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {orbConfigs[0].shortLabel}
              </span>
              <span className="text-[10px] text-blue-200 mt-0.5 font-medium">
                {orbConfigs[0].subLabel}
              </span>
            </motion.button>

            {/* ORB 2: TOP-RIGHT (Solicitor Panel - Green like Kroll) */}
            <motion.button
              onClick={() => { setActiveIdx(1); setSelectedSolutionIdx(0); }}
              animate={{
                scale: activeIdx === 1 ? 1.08 : 0.94,
                zIndex: activeIdx === 1 ? 25 : 10,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-44 h-44 sm:w-50 sm:h-50 rounded-full flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-shadow shadow-lg ${
                activeIdx === 1 ? "ring-4 ring-white shadow-2xl" : "opacity-90 hover:opacity-100"
              }`}
              style={{
                backgroundColor: orbConfigs[1].color,
                color: "#ffffff"
              }}
            >
              <ShieldCheck className="w-6 h-6 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {orbConfigs[1].shortLabel}
              </span>
              <span className="text-[10px] text-emerald-100 mt-0.5 font-medium">
                {orbConfigs[1].subLabel}
              </span>
            </motion.button>

            {/* ORB 3: BOTTOM-LEFT (End-to-End Firm) */}
            <motion.button
              onClick={() => { setActiveIdx(2); setSelectedSolutionIdx(0); }}
              animate={{
                scale: activeIdx === 2 ? 1.08 : 0.94,
                zIndex: activeIdx === 2 ? 25 : 10,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-44 h-44 sm:w-50 sm:h-50 rounded-full flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-shadow shadow-lg ${
                activeIdx === 2 ? "ring-4 ring-white shadow-2xl" : "opacity-90 hover:opacity-100"
              }`}
              style={{
                backgroundColor: orbConfigs[2].color,
                color: "#ffffff"
              }}
            >
              <Layers className="w-6 h-6 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {orbConfigs[2].shortLabel}
              </span>
              <span className="text-[10px] text-sky-100 mt-0.5 font-medium">
                {orbConfigs[2].subLabel}
              </span>
            </motion.button>

            {/* ORB 4: BOTTOM-RIGHT (Singapore Knowledge) */}
            <motion.button
              onClick={() => { setActiveIdx(3); setSelectedSolutionIdx(0); }}
              animate={{
                scale: activeIdx === 3 ? 1.08 : 0.94,
                zIndex: activeIdx === 3 ? 25 : 10,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-44 h-44 sm:w-50 sm:h-50 rounded-full flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-shadow shadow-lg ${
                activeIdx === 3 ? "ring-4 ring-white shadow-2xl" : "opacity-90 hover:opacity-100"
              }`}
              style={{
                backgroundColor: orbConfigs[3].color,
                color: "#ffffff"
              }}
            >
              <MapPin className="w-6 h-6 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {orbConfigs[3].shortLabel}
              </span>
              <span className="text-[10px] text-amber-100 mt-0.5 font-medium">
                {orbConfigs[3].subLabel}
              </span>
            </motion.button>
          </div>

          {/* RIGHT COLUMN: DYNAMIC CONTEXTUAL PRESENTATION (Exact Kroll Layout) */}
          <div className="flex-1 w-full space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Header with Vertical Color Bar Accent */}
                <div 
                  className="pl-5 border-l-4 space-y-2"
                  style={{ borderColor: activeOrb.color }}
                >
                  <h3 className="text-2xl sm:text-3xl font-black text-[#07162c] tracking-tight leading-snug">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activePillar.description}
                  </p>
                  
                  {/* Learn More link */}
                  <div className="pt-2">
                    <Link
                      href={`/why-choose-cgm/${activePillar.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black uppercase tracking-wider transition-colors group"
                      style={{ color: activeOrb.color }}
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Our Solutions / Pillars Sub-List (Exact Kroll Sub-Section) */}
                <div className="pt-6 border-t border-slate-200/80">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#07162c] mb-4">
                    Our Deliverables &amp; Solutions
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeOrb.solutions.map((sol, sIdx) => {
                      const isSolActive = selectedSolutionIdx === sIdx;
                      return (
                        <div
                          key={sIdx}
                          onClick={() => setSelectedSolutionIdx(sIdx)}
                          className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                            isSolActive
                              ? "bg-slate-50 border-slate-400 shadow-sm"
                              : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-[#07162c]">
                              {sol.title}
                            </span>
                            <ChevronRight 
                              className={`w-3.5 h-3.5 transition-transform ${
                                isSolActive ? "rotate-90" : "text-slate-400"
                              }`}
                              style={{ color: isSolActive ? activeOrb.color : undefined }}
                            />
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                            {sol.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
