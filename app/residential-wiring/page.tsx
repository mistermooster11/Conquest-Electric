import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Wiring NYC — Conquest Electric",
  description:
    "Expert residential electrical wiring for homes and apartments throughout Manhattan, NYC, and New Jersey. New installations, repairs, and rewiring by licensed electricians.",
};

export default function ResidentialWiringPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Wiring"
        subtitle="New installations, rewiring, repairs, and upgrades for homes, apartments, and multi-family buildings throughout New York City and New Jersey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Wiring" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Wiring"
        sidebarImage="/images/electrician-with-tools-residential-site.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Electrical Wiring & Installation"
        intro={[
          "Whether you're renovating a Manhattan apartment, rewiring a Brooklyn brownstone, or adding circuits to a New Jersey home, Conquest Electric's licensed electricians handle every aspect of residential electrical work.",
          "From complete new wiring for gut renovations to targeted repairs and upgrades, we bring the same level of professionalism and precision to every residential job.",
        ]}
        whatWeDo={[
          "New electrical wiring for renovations and additions",
          "Complete home rewiring (knob-and-tube removal)",
          "Indoor and outdoor lighting installation",
          "Circuit additions and load balancing",
          "Dedicated circuits for appliances and home offices",
          "GFCI and AFCI outlet installation for code compliance",
        ]}
        whyChooseUs={[
          "Licensed residential electricians serving NYC and NJ",
          "Experience with pre-war, co-op, and landmark building wiring",
          "Free consultations and upfront written quotes",
          "Clean workmanship with minimal disruption to your home",
          "Available for same-day assessment and emergency calls",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
