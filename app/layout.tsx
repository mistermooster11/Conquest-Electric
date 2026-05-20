import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import "@/styles/homepage.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Conquest Electric — Licensed Electricians | Manhattan, NYC & NJ",
    template: "%s | Conquest Electric",
  },
  description:
    "Conquest Electric is a 5-star electrical contractor serving Manhattan, New York City, and New Jersey — residential, commercial, EV charging, and more. Call 212-301-6225.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "Conquest Electric",
    title: "Conquest Electric — Licensed Electricians | Manhattan, NYC & NJ",
    description:
      "Conquest Electric is a 5-star electrical contractor serving Manhattan, New York City, and New Jersey — residential, commercial, EV charging, and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Conquest Electric" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Conquest Electric",
  telephone: "+12123016225",
  email: "service@conquestelectric.com",
  url: "https://[TODO: production-domain]",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manhattan",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Manhattan" },
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Bronx" },
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "Staten Island" },
    { "@type": "State", name: "New Jersey" },
  ],
  openingHours: "[TODO: Mo-Fr 08:00-18:00 — confirm with client]",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "[TODO: Add review count]",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
