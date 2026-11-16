"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Scale, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2,
  TrendingUp,
  FileCheck,
  CalendarCheck
} from "lucide-react";

const pillars = [
  {
    step: "01",
    title: "Strategic Advisory",
    description: "Business growth consulting, financial forecasting, market entry strategy, and capital allocation frameworks.",
    icon: TrendingUp,
    color: "#07162c"
  },
  {
    step: "02",
    title: "Solicitor-Backed Documentation",
    description: "Rigorous commercial contracts and legal document packages vetted by qualified Singapore practitioners.",
    icon: Scale,
    color: "#0b3b60"
  },
  {
    step: "03",
    title: "Corporate Compliance",
    description: "Company incorporation, ACRA statutory registers, and dedicated corporate secretarial retainer mandates.",
    icon: FileCheck,
    color: "#059669"
  },
  {
    step: "04",
    title: "Executive Events",
    description: "High-stakes AGMs, board meetings, investor seminars, product launches, and executive networking symposiums.",
    icon: CalendarCheck,
    color: "#d97706"
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. Hero with entrance animation */}
      <section className="bg-white border-b border-slate-200/90 py-16 sm:py-20 lg:py-24 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            About CGM Advisory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#07162c] tracking-tight"
          >
            Connecting Business &amp; Law
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            CGM Advisory Pte. Ltd. is a premier Singapore-based advisory powerhouse uniting strategic commercial consultancy with solicitor-backed legal precision.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Narrative & Strategic Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Split Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3b60] block">
              Our Identity &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#07162c] tracking-tight leading-snug">
              A Unified Partner for Modern Enterprise in Singapore
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Modern enterprises face a persistent problem: traditional consultancies lack legal enforceability, and traditional law practices often move too slowly to match commercial speed.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              CGM Advisory bridges this divide. By housing corporate advisory, solicitor-backed legal documentation, statutory secretarial services, and executive event management under one roof, we empower leaders to execute boldly without administrative lag.
            </p>

            <div className="pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group border border-amber-500/30"
              >
                <span>Initiate Consultation</span>
                <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-amber-300 shadow-sm">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right: Interactive 4 Pillars Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.step}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#07162c] text-[#07162c] group-hover:text-amber-400 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      {p.step}
                    </span>
                  </div>

                  <h3 className="font-black text-[#07162c] text-base group-hover:text-[#0b3b60] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 3. Singapore Advantage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#07162c] via-[#0b2545] to-[#134074] text-white rounded-3xl shadow-2xl relative overflow-hidden border border-amber-500/30"
        >
          {/* Subtle gold decorative accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              Locally Knowledgeable, Regionally Connected
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Headquartered in Singapore&apos;s Financial Core
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              Our presence in Singapore grants direct connectivity with ACRA, IRAS, leading local financial institutions, and the wider ASEAN commercial ecosystem. We act as your on-the-ground anchor.
            </p>
            <div className="pt-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#07162c] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>Connect with Our Singapore Team</span>
                <div className="w-5 h-5 rounded-full bg-[#07162c] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-sm">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
