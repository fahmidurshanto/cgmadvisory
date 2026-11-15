"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/content";

// 9 Fancy, high-end editorial monochromatic gradients & tones inspired by modern corporate design
interface BentoConfig {
  gridSpan: string;
  cardBg: string;
  textColor: string;
  descColor: string;
  badgeBg: string;
  badgeText: string;
  buttonBg: string;
}

const bentoConfigs: Record<string, BentoConfig> = {
  // 1. Business Advisory (Top-Left 2-Col): Electric Midnight Sapphire
  "business-advisory": {
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[300px] md:min-h-[330px]",
    cardBg: "bg-gradient-to-br from-[#0c2b5e] via-[#103d80] to-[#1a56a6]",
    textColor: "text-white",
    descColor: "text-blue-100/90",
    badgeBg: "bg-white/20 text-white backdrop-blur-md border border-white/25",
    badgeText: "text-white",
    buttonBg: "bg-white text-[#0c2b5e] hover:bg-amber-400 hover:text-slate-950",
  },
  // 2. Legal Advisory (Top Middle): Luxe Champagne Cashmere
  "legal-advisory-documentation-support": {
    gridSpan: "col-span-1 row-span-1 min-h-[300px] md:min-h-[330px]",
    cardBg: "bg-gradient-to-br from-[#f8f5ee] via-[#efe9dc] to-[#e6dfcf]",
    textColor: "text-[#2e2316]",
    descColor: "text-[#5e4d3a]",
    badgeBg: "bg-white/80 text-[#2e2316] shadow-sm border border-[#d8cdb9]",
    badgeText: "text-[#2e2316]",
    buttonBg: "bg-white text-[#2e2316] shadow-md hover:bg-[#2e2316] hover:text-white",
  },
  // 3. Corporate Secretarial (Top Right): Vibrant Nordic Glacier Ice
  "corporate-secretarial-services": {
    gridSpan: "col-span-1 row-span-1 min-h-[300px] md:min-h-[330px]",
    cardBg: "bg-gradient-to-br from-[#7dd3fc] via-[#38bdf8] to-[#0ea5e9]",
    textColor: "text-[#022c44]",
    descColor: "text-[#075985]",
    badgeBg: "bg-white/90 text-[#022c44] shadow-sm font-bold",
    badgeText: "text-[#022c44]",
    buttonBg: "bg-white text-[#022c44] shadow-md hover:bg-[#022c44] hover:text-white",
  },
  // 4. Corporate Structuring (Bottom Left Tall 2-Row): Rich Crimson Sunset / Royal Amber
  "corporate-structuring-incorporation": {
    gridSpan: "col-span-1 row-span-1 md:row-span-2 min-h-[360px] md:min-h-[460px]",
    cardBg: "bg-gradient-to-br from-[#ea580c] via-[#f97316] to-[#fb923c] shadow-lg",
    textColor: "text-white",
    descColor: "text-orange-50",
    badgeBg: "bg-white text-orange-950 font-bold shadow-md",
    badgeText: "text-orange-950",
    buttonBg: "bg-white text-[#ea580c] shadow-md hover:bg-slate-950 hover:text-white",
  },
  // 5. Corporate Finance (Middle Lower): Fresh Pistachio / Botanical Mint
  "corporate-finance-advisory": {
    gridSpan: "col-span-1 row-span-1 min-h-[280px] md:min-h-[320px]",
    cardBg: "bg-gradient-to-br from-[#dcfce7] via-[#bbf7d0] to-[#86efac]",
    textColor: "text-[#052e16]",
    descColor: "text-[#166534]",
    badgeBg: "bg-white/80 text-[#052e16] shadow-sm border border-emerald-200",
    badgeText: "text-[#052e16]",
    buttonBg: "bg-white text-[#052e16] shadow-md hover:bg-[#052e16] hover:text-white",
  },
  // 6. Fundraising & Capital Structuring (Middle Wide): Sleek Platinum Titanium
  "fundraising-capital-structuring": {
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[280px] md:min-h-[320px]",
    cardBg: "bg-gradient-to-br from-[#f1f5f9] via-[#e2e8f0] to-[#cbd5e1]",
    textColor: "text-[#0f172a]",
    descColor: "text-[#334155]",
    badgeBg: "bg-white text-[#0f172a] shadow-sm border border-slate-300",
    badgeText: "text-[#0f172a]",
    buttonBg: "bg-white text-[#0f172a] shadow-md hover:bg-[#0f172a] hover:text-white",
  },
  // 7. Valuation Advisory (Bottom Left Wide): Imperial Deep Jade / Forest Emerald
  "valuation-advisory": {
    gridSpan: "col-span-1 md:col-span-2 row-span-1 min-h-[220px] md:min-h-[260px]",
    cardBg: "bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#0d9488]",
    textColor: "text-white",
    descColor: "text-emerald-100",
    badgeBg: "bg-white/20 text-white backdrop-blur-md border border-white/25",
    badgeText: "text-white",
    buttonBg: "bg-white text-[#064e3b] hover:bg-amber-400 hover:text-slate-950",
  },
  // 8. Tax Coordination (Bottom Middle): Royal Wisteria / Pastel Amethyst
  "tax-coordination": {
    gridSpan: "col-span-1 row-span-1 min-h-[220px] md:min-h-[260px]",
    cardBg: "bg-gradient-to-br from-[#ede9fe] via-[#ddd6fe] to-[#c4b5fd]",
    textColor: "text-[#2e1065]",
    descColor: "text-[#5b21b6]",
    badgeBg: "bg-white text-[#2e1065] shadow-sm border border-violet-200",
    badgeText: "text-[#2e1065]",
    buttonBg: "bg-white text-[#2e1065] shadow-md hover:bg-[#2e1065] hover:text-white",
  },
  // 9. Event Planning & Management (Bottom Right): Midnight Obsidian / Deep Violet Navy
  "event-planning-management": {
    gridSpan: "col-span-1 row-span-1 min-h-[220px] md:min-h-[260px]",
    cardBg: "bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554]",
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

        {/* VISTRA-STYLE BENTO GRID: FANCY LUXURY COLOR COMBOS */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const cfg = bentoConfigs[service.slug] || {
                gridSpan: "col-span-1 min-h-[280px]",
                cardBg: "bg-slate-100",
                textColor: "text-[#07162c]",
                descColor: "text-slate-600",
                badgeBg: "bg-white text-slate-800 shadow-sm",
                badgeText: "text-slate-800",
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
                    className={`group relative h-full w-full rounded-3xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 ${cfg.cardBg}`}
                  >
                    {/* Subtle ambient light glow for fancy visual depth */}
                    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                    {/* TOP: Pill Badge */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span
                        className={`px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${cfg.badgeBg}`}
                      >
                        {service.category}
                      </span>
                    </div>

                    {/* MIDDLE: Service Title & Description */}
                    <div className="relative z-10 my-4 flex-1 flex flex-col justify-end">
                      <h3
                        className={`text-xl sm:text-2xl font-black tracking-tight leading-snug group-hover:opacity-90 transition-opacity ${cfg.textColor}`}
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
                          cfg.textColor === "text-white" ? "text-white/80" : "opacity-80"
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
      </div>
    </section>
  );
}
