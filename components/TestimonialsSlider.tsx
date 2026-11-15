"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function TestimonialsSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Get current slice wrapping around if necessary
  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (startIndex + i) % total;
    visibleTestimonials.push(TESTIMONIALS[index]);
  }

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
              Client Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Trusted by Singapore &amp; Regional Leaders
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Real feedback across our business advisory, legal documentation, and corporate solutions.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">
              Review {(startIndex % total) + 1} of {total}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Grid Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                  {t.service}
                </div>
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-500">
                  {t.role}, <span className="font-medium text-slate-700">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

