"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/content";

// Signature Vistra color palette & abstract graphic archetypes
interface BentoConfig {
  gridSpan: string;
  themeStyle: "deep-blue-grid" | "soft-light" | "split-wave-blue" | "vibrant-orange" | "split-wave-silver" | "deep-gradient";
  cardBg: string;
  textColor: string;
  descColor: string;
  badgeBg: string;
  badgeText: string;
  buttonBg: string;
}

const bentoConfigs: Record<string, BentoConfig> = {
  // 3.1 Business Advisory: Deep Cobolt/Navy Geometric Pattern (Top-Left 2-col)
  "business-advisory": {
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[300px] md:min-h-[330px]",
    themeStyle: "deep-blue-grid",
    cardBg: "bg-gradient-to-br from-[#024a86] via-[#025a9d] to-[#013563]",
    textColor: "text-white",
    descColor: "text-blue-100",
    badgeBg: "bg-white/20 text-white backdrop-blur-md border border-white/20",
    badgeText: "text-white",
    buttonBg: "bg-white text-[#024a86] hover:bg-amber-400 hover:text-slate-950",
  },
  // 3.2 Legal Advisory: Soft Light Minimal Gray/Blue (Top Middle)
  "legal-advisory-documentation-support": {
    gridSpan: "col-span-1 row-span-1 min-h-[300px] md:min-h-[330px]",
    themeStyle: "soft-light",
    cardBg: "bg-[#eef2f6] border border-slate-200/80 hover:border-blue-400",
    textColor: "text-[#07162c]",
    descColor: "text-slate-600",
    badgeBg: "bg-[#dbeafe] text-blue-800",
    badgeText: "text-blue-800",
    buttonBg: "bg-white text-[#07162c] shadow-md hover:bg-[#024a86] hover:text-white",
  },
  // 3.3 Corporate Secretarial: Top-Right Split with Abstract 3D Blue Curves & Soft Sky lower
  "corporate-secretarial-services": {
    gridSpan: "col-span-1 row-span-1 min-h-[300px] md:min-h-[330px]",
    themeStyle: "split-wave-blue",
    cardBg: "bg-[#9dd5ea] border border-sky-300/60",
    textColor: "text-[#07162c]",
    descColor: "text-slate-800",
    badgeBg: "bg-white text-sky-900 shadow-sm",
    badgeText: "text-sky-900",
    buttonBg: "bg-white text-[#07162c] shadow-md hover:bg-[#024a86] hover:text-white",
  },
  // 3.4 Corporate Structuring: Vibrant Full-Bleed Orange/Amber (Bottom Left Tall 2-row)
  "corporate-structuring-incorporation": {
    gridSpan: "col-span-1 row-span-1 md:row-span-2 min-h-[360px] md:min-h-[460px]",
    themeStyle: "vibrant-orange",
    cardBg: "bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#c2410c] shadow-lg",
    textColor: "text-white",
    descColor: "text-orange-50",
    badgeBg: "bg-white text-orange-950 font-bold shadow-sm",
    badgeText: "text-orange-950",
    buttonBg: "bg-white text-[#ea580c] shadow-md hover:bg-slate-950 hover:text-white",
  },
  // 3.5 Corporate Finance: Soft Light Minimal Gray/Blue (Middle Lower)
  "corporate-finance-advisory": {
    gridSpan: "col-span-1 row-span-1 min-h-[280px] md:min-h-[320px]",
    themeStyle: "soft-light",
    cardBg: "bg-[#eef2f6] border border-slate-200/80 hover:border-blue-400",
    textColor: "text-[#07162c]",
    descColor: "text-slate-600",
    badgeBg: "bg-[#dbeafe] text-blue-800",
    badgeText: "text-blue-800",
    buttonBg: "bg-white text-[#07162c] shadow-md hover:bg-[#024a86] hover:text-white",
  },
  // 3.6 Fundraising & Capital Structuring: Split with 3D Abstract Silver/Blue Ribbon (Wide)
  "fundraising-capital-structuring": {
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[280px] md:min-h-[320px]",
    themeStyle: "split-wave-silver",
    cardBg: "bg-[#f1f5f9] border border-slate-200/90",
    textColor: "text-[#07162c]",
    descColor: "text-slate-600",
    badgeBg: "bg-[#dbeafe] text-blue-800",
    badgeText: "text-blue-800",
    buttonBg: "bg-white text-[#07162c] shadow-md hover:bg-[#024a86] hover:text-white",
  },
  // 3.7 Valuation Advisory: Wide Abstract Gradient Waves (Bottom 2-col)
  "valuation-advisory": {
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[220px] md:min-h-[260px]",
    themeStyle: "deep-gradient",
    cardBg: "bg-gradient-to-r from-[#072448] via-[#0b3c68] to-[#12588e]",
    textColor: "text-white",
    descColor: "text-blue-100",
    badgeBg: "bg-white/20 text-white backdrop-blur-sm border border-white/20",
    badgeText: "text-white",
    buttonBg: "bg-white text-[#072448] hover:bg-amber-400 hover:text-slate-950",
  },
  // 3.8 Tax Coordination: Soft Powder Sky Card
  "tax-coordination": {
    gridSpan: "col-span-1 row-span-1 min-h-[220px] md:min-h-[260px]",
    themeStyle: "soft-light",
    cardBg: "bg-[#e0edf7] border border-sky-200/70 hover:border-blue-400",
    textColor: "text-[#07162c]",
    descColor: "text-slate-700",
    badgeBg: "bg-white text-sky-900 shadow-sm",
    badgeText: "text-sky-900",
    buttonBg: "bg-white text-[#07162c] shadow-md hover:bg-[#024a86] hover:text-white",
  },
  // 3.9 Event Planning & Management: Rich Prussian / Indigo Gradient
  "event-planning-management": {
    gridSpan: "col-span-1 row-span-1 min-h-[220px] md:min-h-[260px]",
    themeStyle: "deep-gradient",
    cardBg: "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#13375c]",
    textColor: "text-white",
    descColor: "text-slate-200",
    badgeBg: "bg-amber-400 text-slate-950 font-bold",
    badgeText: "text-slate-950",
    buttonBg: "bg-white text-slate-950 hover:bg-amber-400",
  },
};

export default function ServicesOverview() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Advisory" | "Legal & Corporate" | "Events">("All");

  const filteredServices = activeFilter === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeFilter);

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#07162c]">
              Our 9 Core Service Offerings
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Explore our full spectrum of corporate consultancy, solicitor-backed documentation, ACRA secretarial filings, and executive events in Singapore.
            </p>
          </div>

          {/* Category Filter Pills with smooth animation */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {(["All", "Advisory", "Legal & Corporate", "Events"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#07162c] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 bg-[#07162c] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* VISTRA-STYLE BENTO GRID: PURE COLORS & 3D ABSTRACT GEOMETRIC FLOW */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const cfg = bentoConfigs[service.slug] || {
                gridSpan: "col-span-1 min-h-[280px]",
                themeStyle: "soft-light",
                cardBg: "bg-slate-100 border border-slate-200",
                textColor: "text-[#07162c]",
                descColor: "text-slate-600",
                badgeBg: "bg-sky-100 text-sky-800",
                badgeText: "text-sky-800",
                buttonBg: "bg-white text-slate-900 shadow",
              };

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${cfg.gridSpan}`}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group relative h-full w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${cfg.cardBg}`}
                  >
                    {/* ARCHETYPE 1: Deep Blue Solar Grid Textured Waves (Like Vistra Top-Left) */}
                    {cfg.themeStyle === "deep-blue-grid" && (
                      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:18px_18px] transition-transform duration-700 group-hover:scale-105" />
                    )}

                    {/* ARCHETYPE 3: Split 3D Blue Waves (Like Vistra Top-Right Blue Card) */}
                    {cfg.themeStyle === "split-wave-blue" && (
                      <div className="relative w-full h-32 sm:h-36 -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-4 overflow-hidden rounded-t-3xl bg-gradient-to-br from-[#023e7d] via-[#002855] to-[#001845]">
                        {/* 3D abstract fluid curves like Vistra image */}
                        <svg className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 400 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="blueWave" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#0077b6" />
                              <stop offset="50%" stopColor="#0096c7" />
                              <stop offset="100%" stopColor="#03045e" />
                            </linearGradient>
                          </defs>
                          <path d="M0,0 C150,180 280,30 400,120 L400,0 L0,0 Z" fill="url(#blueWave)" opacity="0.7" />
                          <circle cx="340" cy="50" r="120" fill="#0077b6" opacity="0.5" />
                          <circle cx="370" cy="40" r="90" fill="#90e0ef" opacity="0.3" />
                        </svg>
                      </div>
                    )}

                    {/* ARCHETYPE 6: Split 3D Silver/Navy Waves (Like Vistra Middle Ribbon Card) */}
                    {cfg.themeStyle === "split-wave-silver" && (
                      <div className="relative w-full h-28 sm:h-32 -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-4 overflow-hidden rounded-t-3xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155]">
                        <svg className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 600 200" preserveAspectRatio="none">
                          <path d="M0,80 C200,20 400,180 600,60 L600,0 L0,0 Z" fill="#475569" opacity="0.6" />
                          <path d="M0,140 C220,70 380,190 600,110 L600,0 L0,0 Z" fill="#64748b" opacity="0.4" />
                          <path d="M0,20 C180,120 420,10 600,150 L600,0 L0,0 Z" fill="#94a3b8" opacity="0.25" />
                        </svg>
                      </div>
                    )}

                    {/* ARCHETYPE 4: Vibrant Solid Orange Texture Waves */}
                    {cfg.themeStyle === "vibrant-orange" && (
                      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                    )}

                    {/* ARCHETYPE 7 & 9: Deep Gradient Waves */}
                    {cfg.themeStyle === "deep-gradient" && (
                      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
                    )}

                    {/* TOP: Pill Badge & Code */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${cfg.badgeBg}`}
                      >
                        {service.category}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold ${
                          cfg.textColor === "text-white" ? "text-amber-300" : "text-slate-400"
                        }`}
                      >
                        {service.code}
                      </span>
                    </div>

                    {/* MIDDLE: Service Title & Description */}
                    <div className="relative z-10 my-4 flex-1 flex flex-col justify-end">
                      <h3
                        className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-snug group-hover:opacity-90 transition-opacity ${cfg.textColor}`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`mt-2 text-xs sm:text-sm line-clamp-2 leading-relaxed font-normal ${cfg.descColor}`}
                      >
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* BOTTOM: Signature Vistra Floating Circular Arrow Button */}
                    <div className="relative z-10 flex items-center justify-between pt-2">
                      <span
                        className={`text-xs font-bold ${
                          cfg.textColor === "text-white" ? "text-white/80" : "text-slate-600"
                        }`}
                      >
                        Explore Service
                      </span>
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${cfg.buttonBg}`}
                      >
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to full services page */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-300 bg-white hover:border-[#07162c] text-[#07162c] text-sm font-bold shadow-sm transition hover:shadow-md"
          >
            <span>Browse All 9 Services &amp; Detailed Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
