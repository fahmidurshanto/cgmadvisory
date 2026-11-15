"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  Briefcase,
  Scale,
  FileCheck,
  Building2,
  TrendingUp,
  Coins,
  PieChart,
  Receipt,
  CalendarCheck,
} from "lucide-react";
import { SERVICES } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Scale,
  FileCheck,
  Building2,
  TrendingUp,
  Coins,
  PieChart,
  Receipt,
  CalendarCheck,
};

// Real curated high-resolution images for each of the 9 services
const slideMedia = [
  {
    image: "/slides/service-1-business-advisory.jpg",
    statBadge: "Singapore & Regional Market Expansion",
  },
  {
    image: "/slides/service-2-legal-advisory.jpg",
    statBadge: "Solicitor Panel Backed Documentation",
  },
  {
    image: "/slides/service-3-corporate-secretarial.jpg",
    statBadge: "ACRA Statutory Compliance & Governance",
  },
  {
    image: "/slides/service-4-corporate-structuring.jpg",
    statBadge: "Singapore Company Incorporation",
  },
  {
    image: "/slides/service-5-corporate-finance.jpg",
    statBadge: "Cash Flow & Capital Allocation",
  },
  {
    image: "/slides/service-6-fundraising.jpg",
    statBadge: "Debt, Equity & Private Capital Advisory",
  },
  {
    image: "/slides/service-7-valuation.jpg",
    statBadge: "DCF & Valuation Modeling",
  },
  {
    image: "/slides/service-8-tax-coordination.jpg",
    statBadge: "IRAS Alignment & Tax Agents Liaison",
  },
  {
    image: "/slides/service-9-event-management.jpg",
    statBadge: "Executive AGMs & Corporate Summits",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // 7.5 seconds automatic transition
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentService = SERVICES[currentIndex];
  const IconComponent = iconMap[currentService.icon] || Briefcase;
  const currentMedia = slideMedia[currentIndex % slideMedia.length];

  // Dynamic 3-thumbnail sliding window: always keeps current in view
  const getVisibleThumbnails = () => {
    const total = SERVICES.length;
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % total;
      items.push({ service: SERVICES[idx], originalIndex: idx });
    }
    return items;
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <section className="relative w-full bg-[#f8fafc] overflow-hidden border-b border-slate-200">
      {/* Top Banner introducing CGM Advisory - Light Clean Theme */}
      <div className="h-9 bg-slate-100 text-slate-700 px-4 text-center border-b border-slate-200 flex items-center justify-center shrink-0">
        <p className="text-xs sm:text-sm font-medium tracking-wide truncate">
          <span className="text-[#0b2545] font-bold">CGM Advisory Pte. Ltd.</span> — Strategic Business &amp; Legal Solutions for a Changing World
        </p>
      </div>

      {/* Main Hero Slider Container with LOCKED & CONSISTENT HEIGHT across all screens */}
      <div className="relative w-full h-[720px] md:h-[640px] lg:h-[620px] xl:h-[640px] flex flex-col justify-between overflow-hidden bg-[#f8fafc]">
        {/* RIGHT SIDE: Real Background Image with BDO-style Slanted Diagonal Mask & Natural Light */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[62%] overflow-hidden"
          style={{
            clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.01 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Natural High Resolution Image without heavy black tint */}
              <Image
                src={currentMedia.image}
                alt={currentService.title}
                fill
                priority
                className="object-cover object-center"
              />

              {/* Gentle, soft vignette gradient - gives high clarity to photograph */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Angular Gold Accent Wedge on Far Right (Mirroring BDO branding geometry) */}
          <div
            className="absolute top-0 right-0 h-full w-28 sm:w-44 bg-gradient-to-l from-amber-500/50 via-amber-600/20 to-transparent pointer-events-none z-10"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 25% 100%)",
            }}
          />

          {/* Prominent Service Graphic Callout on the Image with ample left breathing room */}
          <div className="relative z-10 h-full flex flex-col justify-center max-w-lg text-white text-center sm:text-left pl-14 sm:pl-28 lg:pl-36 pr-6 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-500/50 text-[#0b2545] text-xs font-bold uppercase tracking-wider shadow-lg w-fit mx-auto sm:mx-0">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>{currentMedia.statBadge}</span>
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-500/40 flex items-center justify-center text-[#0b2545] shadow-2xl mx-auto sm:mx-0 shrink-0">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
                </div>

                <div className="space-y-1.5 min-h-[90px] flex flex-col justify-center">
                  <span className="text-xs font-mono text-amber-300 uppercase tracking-widest block font-bold drop-shadow">
                    Service {currentService.code} · {currentService.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-lg line-clamp-2">
                    {currentService.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100 max-w-sm drop-shadow font-medium line-clamp-2">
                    {currentService.tagline}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* LEFT SIDE: Content Area with Crisp Off-White Background & High Contrast Typography */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 md:pt-10 lg:pt-12 flex-1 flex flex-col justify-start">
          <div className="max-w-xl lg:max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, x: direction > 0 ? -24 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? 24 : -24 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Category / Code Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded bg-[#0b2545] text-amber-400 text-xs font-extrabold uppercase tracking-wider shadow-sm">
                    {currentService.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    CODE {currentService.code}
                  </span>
                </div>

                {/* Service Name & Icon Header with RESERVED MIN-HEIGHT */}
                <div className="flex items-start gap-3 sm:gap-4 min-h-[80px] sm:min-h-[100px] lg:min-h-[110px]">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#07162c] tracking-tight leading-[1.15]">
                      {currentService.title}
                    </h1>
                  </div>
                </div>

                {/* One-line Description with RESERVED MIN-HEIGHT */}
                <div className="min-h-[56px] sm:min-h-[64px] flex items-center">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {currentService.shortDescription}
                  </p>
                </div>

                {/* Primary "Learn more" CTA Link */}
                <div className="pt-1 flex items-center gap-3 sm:gap-4">
                  <Link
                    href={`/services/${currentService.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-none bg-[#0b2545] hover:bg-[#07162c] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md group border-l-4 border-amber-400 hover:border-amber-300"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
                  </Link>

                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 rounded-none border border-slate-300 bg-white hover:border-[#0b2545] text-[#07162c] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all hover:bg-slate-50 shadow-sm"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM: Thumbnail Image Strip & Navigation Controls LOCKED TO BOTTOM */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 sm:pb-6 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-none bg-white hover:bg-slate-100 text-[#07162c] border border-slate-300 transition-colors cursor-pointer shadow-md shrink-0 active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Thumbnail Preview Strip (EXACTLY 3 WITH SPRING TRANSITIONS) */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden py-1">
              {visibleThumbnails.map(({ service, originalIndex }, idx) => {
                const isSelected = originalIndex === currentIndex;
                const mediaItem = slideMedia[originalIndex % slideMedia.length];

                return (
                  <motion.button
                    layout
                    key={service.id}
                    onClick={() => {
                      setDirection(originalIndex > currentIndex ? 1 : -1);
                      setCurrentIndex(originalIndex);
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className={`relative w-28 sm:w-36 md:w-40 h-16 sm:h-20 md:h-22 p-2 text-left transition-colors duration-200 cursor-pointer overflow-hidden border shrink-0 ${
                      isSelected
                        ? "border-amber-500 shadow-xl ring-2 ring-amber-400/50 scale-102"
                        : "border-slate-300 hover:border-slate-500 opacity-85 hover:opacity-100"
                    }`}
                    style={{
                      // Give the 3rd (last visible) thumbnail the subtle BDO diagonal cut
                      clipPath:
                        idx === 2
                          ? "polygon(0 0, 84% 0, 100% 100%, 0 100%)"
                          : "none",
                    }}
                  >
                    {/* Thumbnail Background Image */}
                    <Image
                      src={mediaItem.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    {/* Gradient over thumbnail image for legible text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />

                    {/* Content inside thumbnail */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[9px] font-mono font-bold px-1 rounded ${
                            isSelected ? "bg-amber-400 text-slate-950" : "bg-black/50 text-white"
                          }`}
                        >
                          {service.code}
                        </span>
                      </div>

                      <div className="truncate">
                        <span className="text-[10px] sm:text-[11px] font-bold text-white block truncate leading-tight drop-shadow">
                          {service.title}
                        </span>
                      </div>
                    </div>

                    {/* Active Bottom Progress Bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 z-20"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-none bg-white hover:bg-slate-100 text-[#07162c] border border-slate-300 transition-colors cursor-pointer shadow-md shrink-0 active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Pause / Play Control below the arrows */}
          <div className="pt-2 sm:pt-2.5 flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#07162c] transition-colors font-semibold cursor-pointer"
              aria-label={isPlaying ? "Pause automatic slideshow" : "Play automatic slideshow"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px]">Pause (7-8s auto)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px]">Resume slideshow</span>
                </>
              )}
            </button>

            <span className="text-slate-300">|</span>

            <span className="text-[11px] text-slate-500 font-medium">
              Slide {currentIndex + 1} of {SERVICES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
