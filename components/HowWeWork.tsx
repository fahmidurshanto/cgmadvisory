"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Execution Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#07162c]">
            How We Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our streamlined four-phase framework takes your corporate needs from initial discovery to airtight legal execution and delivery.
          </p>
        </motion.div>

        {/* 4-Step Visual Timeline with Staggered Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col justify-between bg-slate-50/80 hover:bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#07162c] text-amber-400 font-black text-xl flex items-center justify-center border border-amber-500/30 shadow-md">
                    {step.step}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <span className="hidden lg:block text-slate-300 font-mono text-xl">
                      →
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black text-[#07162c] mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs font-bold text-amber-600 mb-4">
                  {step.headline}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More link with Hover Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/our-process"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#07162c] hover:bg-[#0b2545] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group border border-amber-500/30"
          >
            <span>Learn More About Our Process</span>
            <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-amber-300">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
