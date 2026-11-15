import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES, ServiceItem } from "@/data/content";
import ContactForm from "@/components/ContactForm";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  Scale, 
  FileCheck, 
  Building2, 
  TrendingUp, 
  Coins, 
  PieChart, 
  Receipt, 
  CalendarCheck,
  ShieldCheck
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

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

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | CGM Advisory Pte. Ltd.`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Briefcase;

  return (
    <div className="bg-white">
      {/* 1. Hero: Service name + one-line tagline */}
      <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              {service.category} · Service {service.code}
            </span>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg text-white">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-blue-200 font-medium">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What It Is — 1 page overview with description */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            What It Is
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            {service.overview}
          </p>

          <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Solicitor-Backed &amp; Regulatory Aligned
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Every advisory strategy and associated document under this practice is aligned with Singapore ACRA guidelines and reviewed with qualified legal practitioners where appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* 3. What We Offer — bullet list of specific deliverables */}
        <div className="border-b border-slate-200 py-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Scope &amp; Scope of Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-4">
                Core Service Capabilities
              </h4>
              <ul className="space-y-3">
                {service.keyBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                Target Deliverables
              </h4>
              <ul className="space-y-3">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. How It Works — brief steps or process */}
        <div className="py-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Implementation Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold text-blue-600 block mb-2">
                  PHASE 0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: "Speak to us about [service name]" → contact form */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            preselectedService={service.title}
            headline={`Speak to us about ${service.title}`}
            subheadline={`Ready to proceed or have specific requirements? Send your inquiry directly to our Singapore team at admin@cgmadvisorypteltd.com.`}
          />
        </div>
      </section>
    </div>
  );
}

