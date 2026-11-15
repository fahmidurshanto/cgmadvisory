import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SERVICES, ServiceItem } from "@/data/content";
import ContactForm from "@/components/ContactForm";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Briefcase, 
  Scale, 
  FileCheck, 
  Building2, 
  TrendingUp, 
  Coins, 
  PieChart, 
  Receipt, 
  CalendarCheck,
  ShieldCheck,
  Sparkles
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

// High-resolution photography thumbnail mapping for each service
const serviceThumbnailMap: Record<string, { image: string; statBadge: string }> = {
  "business-advisory": {
    image: "/slides/service-1-business-advisory.jpg",
    statBadge: "Singapore & Regional Market Expansion",
  },
  "legal-advisory": {
    image: "/slides/service-2-legal-advisory.jpg",
    statBadge: "Solicitor Panel Backed Documentation",
  },
  "corporate-secretarial": {
    image: "/slides/service-3-corporate-secretarial.jpg",
    statBadge: "ACRA Statutory Compliance & Governance",
  },
  "corporate-structuring-incorporation": {
    image: "/slides/service-4-corporate-structuring.jpg",
    statBadge: "Singapore Company Incorporation",
  },
  "corporate-finance": {
    image: "/slides/service-5-corporate-finance.jpg",
    statBadge: "Cash Flow & Capital Allocation",
  },
  "fundraising": {
    image: "/slides/service-6-fundraising.jpg",
    statBadge: "Debt, Equity & Private Capital Advisory",
  },
  "valuation-due-diligence": {
    image: "/slides/service-7-valuation.jpg",
    statBadge: "DCF & Valuation Modeling",
  },
  "tax-accounting-coordination": {
    image: "/slides/service-8-tax-coordination.jpg",
    statBadge: "IRAS Alignment & Tax Agents Liaison",
  },
  "event-management": {
    image: "/slides/service-9-event-management.jpg",
    statBadge: "AGMs, Investor Days & Executive Summits",
  },
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
  const media = serviceThumbnailMap[service.slug] || {
    image: "/slides/service-1-business-advisory.jpg",
    statBadge: "Corporate Advisory",
  };

  return (
    <div className="bg-white">
      {/* 1. Hero with Curated High-Resolution Photography Background */}
      <section className="relative text-white py-20 lg:py-28 overflow-hidden">
        {/* Photographic Background Image */}
        <Image
          src={media.image}
          alt={service.title}
          fill
          priority
          className="object-cover object-center scale-105"
        />

        {/* Sophisticated Dual Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162c]/95 via-[#0b2545]/90 to-[#07162c]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162c] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              {service.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {media.statBadge}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0b2545] to-[#134074] border border-amber-500/40 flex items-center justify-center shrink-0 shadow-2xl text-white">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-2xl text-slate-200 font-normal leading-relaxed max-w-3xl">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What It Is & Visual Thumbnail Showcase */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Overview Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0b3b60] block mb-2">
                  Practice Scope
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#07162c] tracking-tight">
                  What It Is
                </h2>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {service.overview}
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200/90 rounded-2xl flex items-start gap-4 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#0b3b60] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-[#07162c] text-sm sm:text-base">
                    Solicitor-Backed &amp; Regulatory Aligned
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Every advisory strategy and associated document under this practice is aligned with Singapore ACRA guidelines and reviewed with qualified legal practitioners where appropriate.
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] group">
                <Image
                  src={media.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-mono font-bold text-amber-300 block uppercase tracking-wider mb-1">
                    Featured Practice
                  </span>
                  <p className="text-sm sm:text-base font-bold leading-tight drop-shadow-sm">
                    {media.statBadge}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. What We Offer — bullet list of specific deliverables */}
        <div className="border-b border-slate-200 py-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b3b60] block mb-2">
            Scope &amp; Scope of Work
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#07162c] tracking-tight mb-8">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#f0f5fa] p-8 rounded-3xl border border-slate-200">
              <h4 className="text-sm font-black text-[#07162c] uppercase tracking-wider mb-5">
                Core Service Capabilities
              </h4>
              <ul className="space-y-4">
                {service.keyBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#0b3b60] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h4 className="text-sm font-black text-[#07162c] uppercase tracking-wider mb-5">
                Target Deliverables
              </h4>
              <ul className="space-y-4">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. How It Works — brief steps or process */}
        <div className="py-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b3b60] block mb-2">
            Implementation Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#07162c] tracking-tight mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors">
                <span className="text-xs font-mono font-black text-[#0b3b60] block mb-2">
                  PHASE 0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-[#07162c] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: Contact Form */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
