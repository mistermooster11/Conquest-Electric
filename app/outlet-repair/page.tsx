import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Outlet & Switch Repair NYC — Conquest Electric",
  description:
    "Fast outlet and switch repair, replacement, and installation throughout Manhattan, NYC, and New Jersey. Licensed electricians with same-day availability.",
};

export default function OutletRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Outlet & Switch Repair"
        subtitle="Fast, professional outlet and switch repair, replacement, and new installations across Manhattan, NYC, and New Jersey."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Outlet & Switch Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Outlet & Switch Repair"
        sidebarImage="/images/electrician-installing-outlet-white-wall.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Outlet & Switch Repair and Installation"
        intro={[
          "Dead outlets, sparking switches, and non-working receptacles are more than an inconvenience — they can indicate an underlying wiring issue. Our licensed electricians diagnose and resolve outlet and switch problems quickly and safely.",
          "We handle everything from a single outlet replacement in a Manhattan apartment to full outlet upgrades across an entire commercial space.",
        ]}
        whatWeDo={[
          "Outlet and switch replacement and repair",
          "GFCI outlet installation in kitchens, bathrooms, and outdoor areas",
          "USB and tamper-resistant outlet upgrades",
          "Smart switch and dimmer installation",
          "Troubleshooting dead outlets and tripped circuits",
          "Whole-home outlet inspection and code compliance upgrades",
        ]}
        whyChooseUs={[
          "Same-day service available for outlet and switch issues",
          "Licensed electricians serving all five boroughs and NJ",
          "Transparent pricing with no surprises on your invoice",
          "Fast response to calls and emails",
          "Clean, efficient work with minimal disruption",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
