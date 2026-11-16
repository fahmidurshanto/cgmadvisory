"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/content";
import { 
  Briefcase, 
  Scale, 
  FileCheck, 
  Building2, 
  TrendingUp, 
  Coins, 
  PieChart, 
  Receipt, 
  CalendarCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";

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

export default function ServicesPage() {
  const categories = ["Advisory", "Legal & Corporate", "Events"] as const;

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. Hero matching About Us style: Light executive white canvas with amber ambient glow */}
      <section className="bg-white border-b border-slate-200/90 py-16 sm:py-20 lg:py-24 text-center relative overflow-hidden">
        {/* Amber Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Capabilities Directory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#07162c] tracking-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Comprehensive business consultancy, solicitor-backed legal documentation, statutory corporate compliance, and event execution under one roof in Singapore.
          </motion.p>
        </div>
      </section>

      {/* 2. Categorized service listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {categories.map((cat, catIdx) => {
          const categoryServices = SERVICES.filter((s) => s.category === cat);
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="border-b border-slate-200/90 pb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#07162c] tracking-tight">
                    {cat}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    {categoryServices.length} specialized corporate practices
                  </p>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service, sIdx) => {
                  const Icon = iconMap[service.icon] || Briefcase;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="h-full"
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex flex-col justify-between h-full p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 shadow-sm"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            {/* Icon box themed with executive navy & amber highlight on hover */}
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#07162c] flex items-center justify-center group-hover:bg-[#07162c] group-hover:text-amber-400 transition-colors shadow-xs">
                              <Icon className="w-6 h-6" />
                            </div>
                          </div>

                          <h3 className="text-xl font-black text-[#07162c] group-hover:text-[#0b3b60] transition-colors leading-snug">
                            {service.title}
                          </h3>

                          <p className="text-xs font-semibold text-amber-700">
                            {service.tagline}
                          </p>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {service.shortDescription}
                          </p>
                        </div>

                        {/* Card bottom link styled with corporate navy & amber hover */}
                        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#07162c] group-hover:text-amber-600 transition-colors">
                          <span>Read Full Specifications</span>
                          <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#07162c] group-hover:text-amber-400 flex items-center justify-center transition-colors">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
