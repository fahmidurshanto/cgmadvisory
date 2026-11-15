"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

  const next = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (startIndex + i) % total;
    visibleTestimonials.push(TESTIMONIALS[index]);
  }

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              Client Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#07162c]">
              Trusted by Singapore &amp; Regional Leaders
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal">
              Real feedback across our business advisory, legal documentation, and corporate solutions.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <span className="text-xs text-slate-400 font-mono font-bold">
              Review {(startIndex % total) + 1} of {total}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white hover:bg-slate-100 text-[#07162c] border border-slate-200 shadow-sm transition cursor-pointer active:scale-95"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full bg-white hover:bg-slate-100 text-[#07162c] border border-slate-200 shadow-sm transition cursor-pointer active:scale-95"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
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
                className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-1">
                    {t.service}
                  </div>
                  <div className="font-black text-[#07162c] text-sm sm:text-base">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.role}, <span className="font-bold text-slate-700">{t.company}</span>
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
