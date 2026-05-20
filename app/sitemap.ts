import type { MetadataRoute } from "next";

const BASE = "https://[TODO: production-domain]";

const serviceslugs = [
  "residential",
  "commercial",
  "ev-charging-stations",
  "lighting-solutions",
  "emergency-services",
  "panel-upgrades",
  "cctv-low-voltage",
  "specialty-installations",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = serviceslugs.map((slug) => ({
    url: `${BASE}/service/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/services/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/about-us/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/contact-us/`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    ...serviceUrls,
  ];
}
