"use client";

import Link from "next/link";
import { 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  ShieldCheck,
  Layers,
  MapPin,
};

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Strategic Differentiators
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b2545]">
            Why Choose CGM Advisory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver the ideal balance of commercial pragmatism and legal rigor. Click any pillar below to discover how our unique model protects and accelerates your venture.
          </p>
        </div>

        {/* 4 Pillars Clean Light Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <Link
                key={item.slug}
                href={`/why-choose-cgm/${item.slug}`}
                className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm group-hover:scale-110 group-hover:bg-[#0b2545] group-hover:text-amber-400 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-extrabold text-slate-200 group-hover:text-amber-500/40 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0b2545] group-hover:text-amber-600 transition-colors leading-snug mb-3">
                    &ldquo;{item.title}&rdquo;
                  </h3>

                  <p className="text-sm font-semibold text-amber-700 mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0b2545] group-hover:text-amber-600">
                  <span>Explore Dedicated Pillar Page</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
