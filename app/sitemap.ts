import type { MetadataRoute } from "next";

const BASE = "https://[TODO: production-domain]";

const serviceSlugs = [
  "panel-upgrade",
  "residential-wiring",
  "outlet-repair",
  "ev-charger",
  "emergency-electrical",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = serviceSlugs.map((slug) => ({
    url: `${BASE}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/services-page/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/about-us/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/contact-us/`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE}/blog/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE}/faq/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    ...serviceUrls,
  ];
}
