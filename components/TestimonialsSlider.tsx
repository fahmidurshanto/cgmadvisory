"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = TESTIMONIALS.length;

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Build the list of visible testimonials wrapping around cyclically
  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (startIndex + i) % total;
    visibleTestimonials.push(TESTIMONIALS[index]);
  }

  return (
    <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Proven Excellence &amp; Client Trust
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07162c] tracking-tight">
              Trusted by Singapore &amp; Regional Leaders
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Read verified testimonials from founders, managing directors, and general counsels across Southeast Asia.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonials"
              className="p-3 rounded-full bg-white hover:bg-slate-100 text-[#07162c] border border-slate-200 shadow-sm transition cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-500 px-1">
              {startIndex + 1} / {total}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next testimonials"
              className="p-3 rounded-full bg-white hover:bg-slate-100 text-[#07162c] border border-slate-200 shadow-sm transition cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Reviews Grid with Framer Motion AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center transition-colors group-hover:bg-amber-100">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wide mb-3">
                    {t.service}
                  </div>

                  {/* Client identity with Avatar photo or Initials monogram */}
                  <div className="flex items-center gap-3.5">
                    {t.avatar ? (
                      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md ring-1 ring-slate-200">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#07162c] to-[#0b2545] text-amber-300 font-extrabold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-md ring-1 ring-amber-500/30">
                        {t.initials || t.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="font-black text-[#07162c] text-sm sm:text-base truncate">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium truncate">
                        {t.role}, <span className="font-bold text-slate-700">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
