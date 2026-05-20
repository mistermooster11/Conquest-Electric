import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import ApplyNowSection from "@/components/custom/sections/ApplyNowSection";
import "@/styles/service-detail.css"; /* page-hero CSS */
import "@/styles/apply-now.css";

export const metadata: Metadata = {
  title: "Get a Quote | Conquest Electric",
  description:
    "Request a free quote from Conquest Electric — licensed electricians serving Manhattan, NYC, and New Jersey. Call 212-301-6225 or fill out the form.",
};

export default function ApplyNowPage() {
  return (
    <>
      <PageHeroSection title="Apply Now" />
      <ApplyNowSection />
    </>
  );
}
