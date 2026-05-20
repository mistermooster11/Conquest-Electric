import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceDetails, getServiceBySlug } from "@/data/serviceDetails";
import ServiceDetailSection from "@/components/custom/sections/ServiceDetailSection";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import "@/styles/service-detail.css";

// Rule 10: generateStaticParams + dynamicParams = false
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceBySlug(slug);
  if (!detail) return {};
  return {
    title: `${detail.title} | Conquest Electric`,
    description: detail.metaDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceBySlug(slug);
  if (!detail) notFound();

  return (
    <>
      <PageHeroSection title={detail.title} />
      <ServiceDetailSection detail={detail} />
    </>
  );
}
