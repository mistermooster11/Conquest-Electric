import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Emergency Electrician NYC — Conquest Electric",
  description:
    "Fast emergency electrical service in Manhattan, NYC, and New Jersey. Power outages, circuit failures, and electrical hazards handled by licensed electricians.",
};

export default function EmergencyElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Electrical"
        subtitle="Fast response to power outages, circuit failures, and electrical emergencies throughout Manhattan, NYC, and New Jersey — call us when you need us most."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Electrical"
        sidebarImage="/images/electrician-examining-circuit-breaker-panel.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Emergency Electrical Service"
        intro={[
          "When your power goes out or an electrical issue demands immediate attention, Conquest Electric responds fast. We provide emergency electrical service for residential and commercial properties throughout Manhattan, Brooklyn, the Bronx, Queens, Staten Island, and New Jersey.",
          "Our licensed electricians are available for urgent calls. Call 212-301-6225 and we will dispatch someone to your location as quickly as possible.",
        ]}
        whatWeDo={[
          "Emergency power restoration after outages or circuit failures",
          "Urgent troubleshooting for sparking outlets, breakers, and panels",
          "Electrical hazard assessment and immediate safety shutoffs",
          "After-hours response for residential and commercial clients",
          "Emergency lighting repairs for commercial properties",
          "Same-day diagnosis and repair whenever possible",
        ]}
        whyChooseUs={[
          "Fast pickup — Roman and the team answer their phones",
          "Same-day response for urgent electrical issues",
          "Licensed electricians serving all five NYC boroughs and NJ",
          "No runaround, no excuses — we show up and fix the problem",
          "Upfront pricing even in emergency situations",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
