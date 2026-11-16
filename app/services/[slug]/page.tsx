import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES } from "@/data/content";
import ServiceDetailClient from "@/components/ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

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
    image: "/slides/service-3-corporate-secretarial.png",
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

  const media = serviceThumbnailMap[service.slug] || {
    image: "/slides/service-1-business-advisory.jpg",
    statBadge: "Corporate Advisory",
  };

  return <ServiceDetailClient service={service} media={media} />;
}
