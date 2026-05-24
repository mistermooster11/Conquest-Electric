import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — Conquest Electric | Licensed Electrical Services NYC & NJ",
  description:
    "Explore Conquest Electric's full range of electrical services: panel upgrades, residential wiring, EV charger installation, outlet repair, and emergency electrical across NYC and NJ.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Licensed electrical services for residential and commercial properties throughout Manhattan, New York City, and New Jersey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
