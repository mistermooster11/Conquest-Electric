import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import ContactFormSection from "@/components/custom/sections/ContactFormSection";
import ContactInfoSection from "@/components/custom/sections/ContactInfoSection";
import "@/styles/service-detail.css"; /* page-hero CSS */
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Conquest Electric",
  description:
    "Contact Conquest Electric — licensed electricians serving Manhattan, NYC, and New Jersey. Call 212-301-6225 or email service@conquestelectric.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection title="Contact us" />
      <ContactFormSection />
      <ContactInfoSection />
    </>
  );
}
