import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQ — Conquest Electric | Frequently Asked Questions",
  description:
    "Find answers to the most common questions about our electrical services, panel upgrades, EV charger installations, and emergency electrical service in NYC and NJ.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeroSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services, pricing, and process."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FAQSection />
      {/* <NeedServicesSection /> */}
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
