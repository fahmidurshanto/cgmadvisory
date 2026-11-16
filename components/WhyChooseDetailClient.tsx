"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WhyChooseItem } from "@/data/content";
import ContactForm from "@/components/ContactForm";
import { 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface Props {
  item: WhyChooseItem;
}

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  ShieldCheck,
  Layers,
  MapPin,
};

// Distinct signature colors for the 4 pillars (matching Kroll orbital disks)
const pillarColorMap: Record<string, { color: string; bgSoft: string; badge: string }> = {
  "documentation-focus": {
    color: "#024a86", // Deep Cobalt Navy
    bgSoft: "bg-blue-50/70",
    badge: "Operational Advantage"
  },
  "experienced-solicitor-panel": {
    color: "#059669", // Emerald Green
    bgSoft: "bg-emerald-50/70",
    badge: "Legal Precision"
  },
  "one-firm-end-to-end": {
    color: "#0ea5e9", // Cerulean Blue
    bgSoft: "bg-sky-50/70",
    badge: "Integrated Synergy"
  },
  "singapore-based-knowledge": {
    color: "#d97706", // Polished Amber
    bgSoft: "bg-amber-50/70",
    badge: "Jurisdictional Mastery"
  },
};

export default function WhyChooseDetailClient({ item }: Props) {
  const Icon = iconMap[item.icon] || ShieldCheck;
  const config = pillarColorMap[item.slug] || {
    color: "#07162c",
    bgSoft: "bg-slate-50",
    badge: "Strategic Differentiator"
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. Hero with entrance animation matching About Us & Services standard */}
      <section className="bg-white border-b border-slate-200/90 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Ambient background glow with the pillar's signature color */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: config.color }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#07162c] mb-8 transition group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white shadow-xl shrink-0"
              style={{ backgroundColor: config.color }}
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-1.5"
            >
              <span 
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs"
                style={{ 
                  backgroundColor: `${config.color}15`, 
                  borderColor: `${config.color}40`,
                  color: config.color 
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {config.badge} · Strategic Pillar
              </span>
              <p className="text-sm font-semibold text-slate-500">
                CGM Advisory Competitive Advantage
              </p>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#07162c] tracking-tight leading-tight"
          >
            &ldquo;{item.title}&rdquo;
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl"
          >
            {item.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. Main Narrative & Highlights with scroll-triggered animations */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Commitment Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4"
        >
          <span 
            className="text-xs font-mono font-bold uppercase tracking-wider block"
            style={{ color: config.color }}
          >
            Core Institutional Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#07162c] tracking-tight">
            The CGM Advisory Standard
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {item.description}
          </p>
        </motion.div>

        {/* Key Operational Highlights Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-[#07162c] tracking-tight">
              Key Operational Highlights
            </h3>
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
              style={{ 
                backgroundColor: `${config.color}10`, 
                borderColor: `${config.color}30`,
                color: config.color 
              }}
            >
              {item.highlights.length} Verified Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {item.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 transition-all duration-200"
              >
                <div 
                  className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${config.color}20`, color: config.color }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cross-Page Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-slate-600 hover:text-[#07162c] transition-colors"
          >
            ← Explore other advantages
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#07162c] via-[#0b2545] to-[#134074] hover:from-[#0b2545] hover:to-[#1e56a0] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group border border-amber-500/30"
          >
            <span>See How This Powers Our Services</span>
            <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-amber-300 shadow-sm">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </motion.div>
      </section>

      {/* 3. Full-width Consultation Form */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            headline="Experience the CGM Difference"
            subheadline="Contact our Singapore advisory team to discover how our solicitor-backed capabilities serve your business."
          />
        </div>
      </section>
    </div>
  );
}

