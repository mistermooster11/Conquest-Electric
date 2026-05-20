import HeroSection from "@/components/custom/sections/HeroSection";
import AboutSection from "@/components/custom/sections/AboutSection";
import ServicesSection from "@/components/custom/sections/ServicesSection";
import ProcessSection from "@/components/custom/sections/ProcessSection";
import WhatWeDoSection from "@/components/custom/sections/WhatWeDoSection";
import ProjectsSection from "@/components/custom/sections/ProjectsSection";
import SinceSection from "@/components/custom/sections/SinceSection";
import TestimonialsSection from "@/components/custom/sections/TestimonialsSection";
import WorkWithUsSection from "@/components/custom/sections/WorkWithUsSection";
import StatsSection from "@/components/custom/sections/StatsSection";
import FAQSection from "@/components/custom/sections/FAQSection";
import BlogSection from "@/components/custom/sections/BlogSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <SinceSection />
      <TestimonialsSection />
      {/* <WorkWithUsSection /> */}
    </>
  );
}
