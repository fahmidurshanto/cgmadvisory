"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  MessageSquare, 
  FileText, 
  Cog, 
  CheckCircle,
  Sparkles 
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";
import ContactForm from "@/components/ContactForm";

// 4 Process stages orb visual definitions
const processOrbConfigs = [
  {
    step: "01",
    shortLabel: "Consultation",
    subLabel: "Discovery & Needs",
    color: "#024a86", // Deep Cobalt Navy
    icon: MessageSquare,
  },
  {
    step: "02",
    shortLabel: "Proposal",
    subLabel: "Fixed & Transparent",
    color: "#059669", // Emerald Green
    icon: FileText,
  },
  {
    step: "03",
    shortLabel: "Execution",
    subLabel: "Solicitor-Backed",
    color: "#0ea5e9", // Cerulean Blue
    icon: Cog,
  },
  {
    step: "04",
    shortLabel: "Delivery",
    subLabel: "Turnkey Finalization",
    color: "#d97706", // Polished Amber Gold
    icon: CheckCircle,
  },
];

export default function OurProcessPage() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStep = PROCESS_STEPS[activeIdx];
  const activeOrb = processOrbConfigs[activeIdx];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-white py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Predictable · Transparent · Robust
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#07162c] tracking-tight">
            Our Process
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Purpose: Show how easy it is to work with CGM Advisory. We eliminate ambiguity through our disciplined four-stage delivery model.
          </p>
        </div>
      </section>

      {/* 2. KROLL-STYLE INTERACTIVE PRESENTATION FOR OUR PROCESS (FULL SCREEN WIDTH) */}
      <section className="w-full bg-white pb-20 pt-4 sm:pb-24 lg:pb-28">
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-28">
          
          {/* LEFT: INTERACTIVE MOVABLE CIRCLES / 4 STAGES */}
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[400px] sm:h-[440px] flex items-center justify-center shrink-0">
            {/* Ambient background glow */}
            <div 
              className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: activeOrb.color }}
            />

            {/* Central Brand Apex Logo Shield */}
            <div className="absolute z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl border-4 border-slate-100 flex items-center justify-center pointer-events-none">
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-black text-xs uppercase tracking-tighter shadow-inner transition-colors duration-500"
                style={{ backgroundColor: activeOrb.color }}
              >
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-sm sm:text-base">CGM</span>
                  <span className="text-[8px] tracking-widest text-amber-300">PROCESS</span>
                </div>
              </div>
            </div>

            {/* STAGE 1: TOP-LEFT (Consultation) */}
            <motion.button
              onClick={() => setActiveIdx(0)}
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
                backgroundColor: processOrbConfigs[0].color,
                color: "#ffffff"
              }}
            >
              <span className="text-xs font-mono font-bold text-amber-300 mb-0.5">STAGE 01</span>
              <MessageSquare className="w-5 h-5 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {processOrbConfigs[0].shortLabel}
              </span>
              <span className="text-[10px] text-blue-200 mt-0.5 font-medium">
                {processOrbConfigs[0].subLabel}
              </span>
            </motion.button>

            {/* STAGE 2: TOP-RIGHT (Proposal) */}
            <motion.button
              onClick={() => setActiveIdx(1)}
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
                backgroundColor: processOrbConfigs[1].color,
                color: "#ffffff"
              }}
            >
              <span className="text-xs font-mono font-bold text-emerald-200 mb-0.5">STAGE 02</span>
              <FileText className="w-5 h-5 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {processOrbConfigs[1].shortLabel}
              </span>
              <span className="text-[10px] text-emerald-100 mt-0.5 font-medium">
                {processOrbConfigs[1].subLabel}
              </span>
            </motion.button>

            {/* STAGE 3: BOTTOM-LEFT (Execution) */}
            <motion.button
              onClick={() => setActiveIdx(2)}
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
                backgroundColor: processOrbConfigs[2].color,
                color: "#ffffff"
              }}
            >
              <span className="text-xs font-mono font-bold text-sky-200 mb-0.5">STAGE 03</span>
              <Cog className="w-5 h-5 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {processOrbConfigs[2].shortLabel}
              </span>
              <span className="text-[10px] text-sky-100 mt-0.5 font-medium">
                {processOrbConfigs[2].subLabel}
              </span>
            </motion.button>

            {/* STAGE 4: BOTTOM-RIGHT (Delivery) */}
            <motion.button
              onClick={() => setActiveIdx(3)}
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
                backgroundColor: processOrbConfigs[3].color,
                color: "#ffffff"
              }}
            >
              <span className="text-xs font-mono font-bold text-amber-200 mb-0.5">STAGE 04</span>
              <CheckCircle className="w-5 h-5 mb-1 text-white/90" />
              <span className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
                {processOrbConfigs[3].shortLabel}
              </span>
              <span className="text-[10px] text-amber-100 mt-0.5 font-medium">
                {processOrbConfigs[3].subLabel}
              </span>
            </motion.button>
          </div>

          {/* RIGHT: DYNAMIC CONTEXTUAL DETAILS */}
          <div className="flex-1 w-full space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
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
                  <span 
                    className="text-xs font-mono font-bold uppercase tracking-wider block"
                    style={{ color: activeOrb.color }}
                  >
                    PHASE {activeStep.step} OF 04
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-[#07162c] tracking-tight leading-snug">
                    {activeStep.title} — {activeStep.headline}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                    {activeStep.description}
                  </p>
                </div>

                {/* Sub-Deliverables / What Happens in this Stage */}
                <div className="pt-6 border-t border-slate-200/80">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#07162c] mb-4">
                    Key Activities in this Stage:
                  </h4>

                  <div className="space-y-3">
                    {activeStep.details.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70"
                      >
                        <CheckCircle2 
                          className="w-5 h-5 shrink-0 mt-0.5" 
                          style={{ color: activeOrb.color }}
                        />
                        <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group border border-amber-500/30"
                  >
                    <span>Initiate Stage 01: Consultation</span>
                    <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-amber-300 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. Consultation Form (Full Screen Width) */}
      <section className="py-20 lg:py-24 bg-slate-100 border-t border-slate-200 w-full">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
          <ContactForm
            headline="Begin Step 1: Consultation"
            subheadline="Initiate a preliminary discussion with our Singapore team. Responses are delivered straight to admin@cgmadvisorypteltd.com."
          />
        </div>
      </section>
    </div>
  );
}
