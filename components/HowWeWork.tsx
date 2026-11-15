import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";

export default function HowWeWork() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-2">
            Execution Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b2545]">
            How We Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our streamlined four-phase framework takes your corporate needs from initial discovery to airtight legal execution and delivery.
          </p>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between bg-white p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-[#0b2545] text-amber-400 font-extrabold text-xl flex items-center justify-center border border-amber-500/30">
                    {step.step}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <span className="hidden lg:block text-amber-400 font-mono text-xl">
                      →
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0b2545] mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs font-bold text-amber-600 mb-4">
                  {step.headline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learn More link to Our Process */}
        <div className="mt-14 text-center">
          <Link
            href="/our-process"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0b2545] hover:bg-[#07162c] text-amber-400 font-bold text-sm shadow-md transition border border-amber-500/30 hover:border-amber-400"
          >
            <span>Learn More About Our Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
