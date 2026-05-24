import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "EV Charger Installation NYC — Conquest Electric",
  description:
    "Licensed EV charger installation for homes, apartments, and commercial buildings throughout Manhattan, NYC, and New Jersey. Free quotes from Conquest Electric.",
};

export default function EvChargerPage() {
  return (
    <>
      <PageHeroSection
        title="EV Charger Installation"
        subtitle="In-home, multi-family, and commercial EV charging station installation throughout New York City and New Jersey — with free quotes and permit handling."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "EV Charger Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="EV Charger Installation"
        sidebarImage="/images/electric-vehicle-charging-station-garage.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="EV Charging Station Installation"
        intro={[
          "Conquest Electric specializes in EV charger installation for residential, multi-family, and commercial properties throughout New York City and New Jersey. We handle the full process — from load calculation and panel assessment to permit coordination and final installation.",
          "Whether you need a Level 2 charger for your private garage or a multi-unit charging infrastructure for an apartment building, our licensed electricians deliver clean, code-compliant results.",
        ]}
        whatWeDo={[
          "Level 2 home EV charger installation (240V)",
          "Multi-family and apartment building charging station buildout",
          "Commercial EV charging infrastructure for parking facilities",
          "Load calculation and panel assessment before installation",
          "Permit coordination with NYC Buildings Department",
          "Charging equipment recommendations and free quotes",
        ]}
        whyChooseUs={[
          "Specialists in NYC apartment and co-op EV charger installations",
          "Full permit and inspection handling included",
          "Experience with all major EV charger brands (Tesla, ChargePoint, Enel X)",
          "Licensed and insured electricians serving NYC and NJ",
          "Free consultations and upfront pricing",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
