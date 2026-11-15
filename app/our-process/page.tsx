import { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STEPS } from "@/data/content";
import ContactForm from "@/components/ContactForm";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | CGM Advisory Pte. Ltd.",
  description: "Learn how easy it is to work with CGM Advisory through our 4-step framework: Consultation, Proposal, Execution, and Delivery.",
};

export default function OurProcessPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
            Predictable · Transparent · Robust
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Process
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Purpose: Show how easy it is to work with CGM. We eliminate ambiguity through our disciplined four-stage delivery model.
          </p>
        </div>
      </section>

      {/* Visual Timeline (4 steps) */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="flex flex-col md:flex-row items-start gap-8 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm"
            >
              {/* Step indicator */}
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-lg">
                {step.step}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {step.title}
                  </h2>
                </div>

                <p className="text-blue-700 font-semibold text-base sm:text-lg">
                  {step.headline}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-slate-200/60">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What Happens in this Stage:
                  </h4>
                  <ul className="space-y-2">
                    {step.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation form */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            headline="Begin Step 1: Consultation"
            subheadline="Initiate a preliminary discussion with our Singapore team. Responses are delivered straight to admin@cgmadvisorypteltd.com."
          />
        </div>
      </section>
    </div>
  );
}

