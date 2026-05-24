import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — Conquest Electric | Electrical Tips & Guides",
  description:
    "Read Conquest Electric's blog for expert electrical tips, panel upgrade guides, EV charger information, and NYC electrical code insights.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Expert electrical tips, industry insights, and service guides from the Conquest Electric team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
