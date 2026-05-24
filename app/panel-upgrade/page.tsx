import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrade NYC — Conquest Electric",
  description:
    "Licensed panel upgrade and service upgrade electricians serving Manhattan, NYC, and New Jersey. Safe, code-compliant installations with upfront pricing.",
};

export default function PanelUpgradePage() {
  return (
    <>
      <PageHeroSection
        title="Panel Upgrade"
        subtitle="Safe, code-compliant electrical panel replacements and service upgrades for homes and commercial buildings throughout New York City and New Jersey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Panel Upgrade" },
        ]}
      />
      <ServiceDetailSection
        activeService="Panel Upgrade"
        sidebarImage="/images/electrician-installing-circuit-breaker-panel.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Panel Upgrade & Service Upgrade"
        intro={[
          "An outdated or undersized electrical panel is one of the most common safety hazards in New York City homes and commercial buildings. Our licensed electricians handle full panel replacements and service upgrades — from 100-amp to 200-amp and beyond.",
          "We work with co-ops, brownstones, pre-war buildings, and modern construction throughout Manhattan and the surrounding boroughs. All work is done to current NYC electrical code with permits pulled where required.",
        ]}
        whatWeDo={[
          "Full electrical panel replacement and service upgrades",
          "Upgrade from 100-amp to 200-amp or 400-amp service",
          "Breaker replacement and panel repairs",
          "Fuse box conversions to modern circuit breaker panels",
          "Permit coordination with NYC Department of Buildings",
          "Post-upgrade inspection and code certification",
        ]}
        whyChooseUs={[
          "Licensed electricians familiar with NYC and NJ electrical codes",
          "Experience with pre-war, co-op, and landmark buildings",
          "Same-day assessment and upfront pricing",
          "No hidden fees — the quote is the final price",
          "Clean work and full cleanup after every job",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
