import { notFound } from "next/navigation";
import { Metadata } from "next";
import { WHY_CHOOSE_ITEMS } from "@/data/content";
import WhyChooseDetailClient from "@/components/WhyChooseDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

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

  return <WhyChooseDetailClient item={item} />;
}
