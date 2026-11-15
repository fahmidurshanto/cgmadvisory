import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CGM Advisory Pte. Ltd.",
  description: "Learn about CGM Advisory Pte. Ltd. — Singapore's integrated business consultancy and solicitor-backed corporate solutions firm.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
            About Our Firm
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connecting Business &amp; Law
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            CGM Advisory Pte. Ltd. is a Singapore-based advisory powerhouse uniting strategic commercial consultancy with solicitor-backed legal precision.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
              Our Identity
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
              A Unified Partner for Modern Enterprise in Singapore
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Modern enterprises face a persistent problem: traditional consultancies lack legal enforceability, and traditional law practices often move too slowly to match commercial speed.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              CGM Advisory bridges this divide. By housing corporate advisory, solicitor-backed legal documentation, statutory secretarial services, and executive event management under one roof, we empower leaders to execute boldly without administrative lag.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl space-y-6">
            <h3 className="font-bold text-slate-900 text-lg">Our Four Pillars</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  01
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Strategic Advisory</h4>
                  <p className="text-xs text-slate-500">Business growth, financial forecasting, and capital planning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  02
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Solicitor-Backed Documentation</h4>
                  <p className="text-xs text-slate-500">Rigorous contracts and legal document packages vetted by seasoned solicitors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  03
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Corporate Compliance</h4>
                  <p className="text-xs text-slate-500">Incorporation, ACRA statutory registers, and company secretary mandates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  04
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Executive Events</h4>
                  <p className="text-xs text-slate-500">High-stakes AGMs, board meetings, seminars, and networking symposiums.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Singapore Advantage */}
        <div className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
              Locally Knowledgeable, Regionally Connected
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Headquartered in Singapore&apos;s Financial Core
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Our presence in Singapore grants direct connectivity with ACRA, IRAS, leading local financial institutions, and the wider ASEAN commercial ecosystem. We act as your on-the-ground anchor.
            </p>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              <span>Connect with Our Singapore Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

