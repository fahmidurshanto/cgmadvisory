"use client";

import { useState } from "react";
import Link from "next/link";
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
  ArrowRight
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

export default function ServicesOverview() {
  const [filter, setFilter] = useState<"All" | "Advisory" | "Legal & Corporate" | "Events">("All");

  const filteredServices = filter === "All" 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === filter);

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
              Capabilities &amp; Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2545]">
              Our 9 Core Service Offerings
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Explore our full spectrum of corporate, legal documentation, financial, and event management capabilities in Singapore. Click any service card to view complete specifications and deliverables.
            </p>
          </div>

          {/* Grouped View Filters */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {(["All", "Advisory", "Legal & Corporate", "Events"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#0b2545] text-amber-400 shadow-sm border border-amber-500/30"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vistra-inspired Grid of 9 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:bg-white hover:border-amber-500/80 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0b2545]/10 text-[#0b2545] flex items-center justify-center group-hover:bg-[#0b2545] group-hover:text-amber-400 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 border border-amber-500/20 group-hover:bg-[#0b2545] group-hover:text-amber-400 transition-colors">
                      {service.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    SERVICE {service.code}
                  </span>

                  <h3 className="text-xl font-bold text-[#0b2545] group-hover:text-amber-600 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0b2545] group-hover:text-amber-600">
                  <span>View Details &amp; Deliverables</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Direct Link to all services */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-800 hover:border-[#0b2545] hover:text-[#0b2545] text-sm font-semibold transition"
          >
            <span>Browse Full Categorized Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
