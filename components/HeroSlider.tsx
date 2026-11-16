"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
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
    image: "/slides/service-3-corporate-secretarial.png",
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
    statBadge: "AGMs, Investor Days & Executive Summits",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const total = SERVICES.length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Slideshow auto-advance (7-8 seconds)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7500);

    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const currentService = SERVICES[currentIndex];
  const currentMedia = slideMedia[currentIndex % slideMedia.length];
  const IconComponent = iconMap[currentService.icon] || Briefcase;

  // Window of 3 thumbnail previews (current + next 2)
  const getVisibleThumbnails = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % total;
      items.push({ service: SERVICES[idx], originalIndex: idx });
    }
    return items;
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <section id="services-slideshow" className="relative w-full bg-white overflow-hidden border-b border-slate-200">
      {/* 2. BDO-STYLE 9-SERVICE INTERACTIVE SLIDESHOW */}
      <div className="relative w-full flex flex-col justify-between overflow-hidden bg-[#f8fafc] min-h-[580px] lg:h-[600px] xl:h-[620px]">
        
        {/* DESKTOP BACKGROUND IMAGE (Hidden on small mobile screens to prevent text overlap collisions) */}
        <div
          className="hidden md:block absolute inset-y-0 right-0 w-full md:w-[50%] lg:w-[60%] xl:w-[62%] overflow-hidden pointer-events-none"
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
              <Image
                src={currentMedia.image}
                alt={currentService.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Angular Gold Accent Wedge */}
          <div
            className="absolute top-0 right-0 h-full w-28 sm:w-44 bg-gradient-to-l from-amber-500/50 via-amber-600/20 to-transparent pointer-events-none z-10"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 25% 100%)",
            }}
          />

          {/* Graphic Callout badge on desktop image */}
          <div className="relative z-10 h-full flex flex-col justify-center max-w-lg text-white text-left pl-16 lg:pl-32 pr-6 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-500/50 text-[#0b2545] text-xs font-bold uppercase tracking-wider shadow-lg w-fit">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>{currentMedia.statBadge}</span>
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-500/40 flex items-center justify-center text-[#0b2545] shadow-2xl shrink-0">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
                </div>

                <div className="space-y-1.5 min-h-[90px] flex flex-col justify-center">
                  <span className="text-xs font-mono text-amber-300 uppercase tracking-widest block font-bold drop-shadow">
                    {currentService.category}
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

        {/* MOBILE HERO IMAGE BANNER (Shown only on small screens as clean dedicated top/card visual) */}
        <div className="block md:hidden relative w-full h-52 sm:h-64 overflow-hidden shrink-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`mobile-img-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentMedia.image}
                alt={currentService.title}
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Mobile Stat Badge */}
          <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/50 text-amber-300 text-[11px] font-bold uppercase tracking-wider truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <span className="truncate">{currentMedia.statBadge}</span>
            </span>

            <span className="text-[11px] font-mono font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-md border border-white/20 shrink-0">
              0{currentIndex + 1}/0{total}
            </span>
          </div>
        </div>

        {/* LEFT / MAIN: Content Area */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-5 md:pt-8 pb-4 flex-1 flex flex-col justify-start">
          <div className="max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3.5 sm:space-y-4"
              >
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-[#0b2545] text-amber-400 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shadow-xs">
                    {currentService.category}
                  </span>
                </div>

                {/* Service Name & Icon Header */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-[#07162c] tracking-tight leading-snug">
                      {currentService.title}
                    </h2>
                  </div>
                </div>

                {/* One-line Description */}
                <div>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                    {currentService.shortDescription}
                  </p>
                </div>

                {/* Primary & Secondary Action CTAs */}
                <div className="pt-2 flex items-center gap-2.5 sm:gap-4 flex-wrap">
                  <Link
                    href={`/services/${currentService.slug}`}
                    className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group border border-amber-500/30"
                  >
                    <span>Learn More</span>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-amber-300 shadow-xs">
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </Link>

                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center justify-center px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-[#0b2545] text-[#07162c] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM: Thumbnail Image Strip & Navigation Controls */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 sm:pb-6 pt-2 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 bg-white hover:bg-slate-100 text-[#07162c] border border-slate-300 transition-colors cursor-pointer shadow-sm shrink-0 active:scale-95 rounded-lg"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Thumbnail Preview Strip (Compact on desktop, right beside Next button) */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden py-1 flex-1 sm:flex-initial">
              {visibleThumbnails.map(({ service, originalIndex }) => {
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
                    className={`relative flex-1 sm:flex-none sm:w-36 md:w-40 lg:w-44 h-14 sm:h-18 md:h-20 p-1.5 sm:p-2 text-left transition-colors duration-200 cursor-pointer overflow-hidden border shrink-0 rounded-lg ${
                      isSelected
                        ? "border-amber-500 shadow-md ring-2 ring-amber-400/50"
                        : "border-slate-300 hover:border-slate-500 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={mediaItem.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-transparent" />

                    <div className="relative z-10 h-full flex flex-col justify-end">
                      <span className="text-[9px] sm:text-[11px] font-bold text-white block truncate leading-tight drop-shadow">
                        {service.title}
                      </span>
                    </div>

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

            {/* Next Button - Immediately beside the 3rd thumbnail */}
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 bg-white hover:bg-slate-100 text-[#07162c] border border-slate-300 transition-colors cursor-pointer shadow-sm shrink-0 active:scale-95 rounded-lg"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Pause / Play Control */}
          <div className="pt-2 flex items-center justify-between sm:justify-start gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#07162c] transition-colors font-semibold cursor-pointer"
              aria-label={isPlaying ? "Pause automatic slideshow" : "Play automatic slideshow"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current text-slate-600" />
                  <span className="text-[10px] sm:text-[11px]">Pause auto-slide</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current text-slate-600" />
                  <span className="text-[10px] sm:text-[11px]">Resume</span>
                </>
              )}
            </button>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
              Slide {currentIndex + 1} of {SERVICES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
