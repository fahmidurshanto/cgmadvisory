"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroHeadline() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When user scrolls down by 80px or more, morph the big hero into the slim strip
      setIsCollapsed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlides = () => {
    const el = document.getElementById("services-slideshow");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      layout
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full overflow-hidden transition-all duration-500 ${
        isCollapsed
          ? "h-11 sm:h-12 bg-[#f0f5fa] border-b border-slate-200/90 shadow-sm flex items-center"
          : "h-[calc(100vh-80px)] min-h-[620px] border-b border-slate-200 flex items-center justify-center"
      }`}
    >
      {/* BACKGROUND IMAGE & OVERLAYS - Visible only when NOT collapsed */}
      {!isCollapsed && (
        <>
          <Image
            src="/singapore-skyline-hero.jpg"
            alt="Singapore Financial District Skyline"
            fill
            priority
            className="object-cover object-center scale-105 transition-opacity duration-500"
          />

          {/* Clear transparent soft gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50" />

          {/* Ambient Glow */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      {/* STATE 1: FULL SCREEN BIG HERO (When isCollapsed === false) */}
      {!isCollapsed && (
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6">
          {/* Primary Headline (H1) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#07162c] tracking-tight leading-[1.08] max-w-5xl [text-shadow:_0_2px_12px_rgba(255,255,255,0.85)]"
          >
            Strategic Business &amp; Legal Solutions for a Changing World
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl lg:text-2xl text-slate-900 leading-relaxed max-w-3xl font-semibold [text-shadow:_0_1px_8px_rgba(255,255,255,0.9)]"
          >
            <span className="text-[#07162c] font-black">CGM Advisory Pte. Ltd.</span> delivers business consultancy, solicitor-backed legal documentation, corporate services, and event management — all under one roof in Singapore.
          </motion.p>
        </div>
      )}

      {/* STATE 2: CONVERTED SLIM STRIP (When isCollapsed === true - Exact Screenshot Match) */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 flex items-center justify-end"
        >
          <p className="text-xs sm:text-sm text-slate-700 font-normal tracking-tight text-right">
            <span className="font-extrabold text-[#07162c]">CGM Advisory Pte. Ltd.</span>{" "}
            <span className="text-slate-400 font-light mx-0.5">—</span>{" "}
            <span className="text-[#0b3b60] font-medium">Strategic Business &amp; Legal Solutions for a Changing World</span>
          </p>
        </motion.div>
      )}

      {/* Floating Scroll Indicator Arrow at Bottom (Only in Full-Screen State) */}
      {!isCollapsed && (
        <button
          onClick={scrollToSlides}
          aria-label="Scroll to services slideshow"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-500 hover:text-[#07162c] transition-colors cursor-pointer group"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase">Explore Services</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-amber-500 transition-colors" />
        </button>
      )}
    </motion.section>
  );
}
