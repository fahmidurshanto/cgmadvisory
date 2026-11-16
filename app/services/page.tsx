import Link from "next/link";
import { Metadata } from "next";
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
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Services | CGM Advisory Pte. Ltd.",
  description: "Browse the complete directory of our 9 core business, legal documentation, corporate, and event management services in Singapore.",
};

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
    <div className="bg-slate-50 min-h-screen">
      {/* Header banner */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
            Capabilities Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Comprehensive business consultancy, solicitor-backed legal documentation, statutory corporate compliance, and event execution in Singapore.
          </p>
        </div>
      </section>

      {/* Categorized service listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {categories.map((cat) => {
          const categoryServices = SERVICES.filter((s) => s.category === cat);
          return (
            <div key={cat} className="space-y-6">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">{cat}</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {categoryServices.length} specialized services
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => {
                  const Icon = iconMap[service.icon] || Briefcase;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                          {service.title}
                        </h3>

                        <p className="text-xs text-blue-600 font-medium mb-3">
                          {service.tagline}
                        </p>

                        <p className="text-xs text-slate-600 leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                        <span>Read Full Specifications</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

