import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // TODO: Change disallow to allow when moving to production domain
        disallow: "/",
      },
    ],
    sitemap: "https://[TODO: production-domain]/sitemap.xml",
  };
}
