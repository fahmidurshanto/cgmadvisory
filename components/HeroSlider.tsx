"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award, Users, Scale, Briefcase, FileCheck, Building2, TrendingUp, Coins, PieChart, Receipt, CalendarCheck } from "lucide-react";
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

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 7500); // 7-8 seconds auto-slide
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
  };

  const activeService = SERVICES[currentIndex];
  const IconComponent = iconMap[activeService.icon] || Briefcase;

  return (
    <section 
      className="relative bg-[#07162c] text-white overflow-hidden py-20 lg:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle modern corporate background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      
      {/* Brand Gold & Navy Ambient glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline & Sub-headline */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Singapore Corporate &amp; Legal Advisory
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Strategic Business &amp; Legal Solutions for a Changing World
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            CGM Advisory Pte. Ltd. delivers business consultancy, solicitor-backed legal documentation, corporate services, and event management — all under one roof in Singapore.
          </p>
        </div>

        {/* Dynamic Slideshow Card (EY / BDO / Ace Advisory style) */}
        <div className="max-w-4xl mx-auto relative bg-[#0b2545]/90 backdrop-blur-md border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            {/* Service details */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  {activeService.category} · Service {activeService.code}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {currentIndex + 1} of {SERVICES.length}
                </span>
              </div>

              <div className="flex items-start gap-4 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#134074] to-[#1e56a0] border border-amber-500/30 flex items-center justify-center shrink-0 shadow-lg text-amber-400">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-sm text-amber-300/90 mt-1 font-medium">
                    {activeService.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed pt-2">
                {activeService.shortDescription}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all shadow-md group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-medium text-sm transition-all border border-slate-600"
                >
                  <span>Inquire Now</span>
                </Link>
              </div>
            </div>

            {/* Visual highlight box */}
            <div className="w-full md:w-72 bg-[#07162c]/95 border border-amber-500/20 rounded-2xl p-5 shrink-0 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {activeService.keyBullets.slice(0, 3).map((bullet, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Automatic transition every 7-8s
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {SERVICES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-amber-400"
                      : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Slide to service ${s.title}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer border border-slate-700"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer border border-slate-700"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
