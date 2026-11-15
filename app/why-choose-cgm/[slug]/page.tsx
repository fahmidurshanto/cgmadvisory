import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { WHY_CHOOSE_ITEMS } from "@/data/content";
import ContactForm from "@/components/ContactForm";
import { 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  ShieldCheck,
  Layers,
  MapPin,
};

export async function generateStaticParams() {
  return WHY_CHOOSE_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = WHY_CHOOSE_ITEMS.find((w) => w.slug === slug);
  if (!item) return { title: "Pillar Not Found" };

  return {
    title: `${item.title} | Why Choose CGM Advisory`,
    description: item.shortDesc,
  };
}

export default async function WhyChooseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = WHY_CHOOSE_ITEMS.find((w) => w.slug === slug);

  if (!item) {
    notFound();
  }

  const Icon = iconMap[item.icon] || ShieldCheck;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 shadow-xl text-white">
            <Icon className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-2">
            Why Choose CGM Advisory Pillar
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            &ldquo;{item.title}&rdquo;
          </h1>

          <p className="mt-4 text-xl text-blue-200">
            {item.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            The CGM Advisory Commitment
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            {item.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 my-10">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Key Operational Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next pillar preview */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            ← Explore other advantages
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
          >
            <span>See How This Powers Our Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Consultation form */}
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

