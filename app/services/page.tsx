import "@/styles/services.css";
import ServicesHeroSection from "@/components/custom/sections/ServicesHeroSection";
import ServicesGridSection from "@/components/custom/sections/ServicesGridSection";

export const metadata = {
  title: "Services | Conquest Electric",
  description:
    "Residential, commercial, EV charging, lighting, emergency services, panel upgrades, CCTV, and specialty electrical installations in NYC and NJ.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
    </>
  );
}
