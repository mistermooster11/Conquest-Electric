import React from "react";
import AboutHeroSection from "@/components/custom/sections/AboutHeroSection";
import AboutMissionSection from "@/components/custom/sections/AboutMissionSection";
import AboutStatsSection from "@/components/custom/sections/AboutStatsSection";
import AboutTalentsSection from "@/components/custom/sections/AboutTalentsSection";
import AboutTestimonialsSection from "@/components/custom/sections/AboutTestimonialsSection";
import "@/styles/about.css";

export const metadata = {
  title: "About Us | Conquest Electric",
  description:
    "Learn about Conquest Electric — Manhattan's 5-star electrical contractor serving NYC and New Jersey. Our mission, values, and why clients choose us.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutStatsSection />
      <AboutTalentsSection />
      <AboutTestimonialsSection />
    </>
  );
}
