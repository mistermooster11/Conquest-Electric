import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://conquestelectric.com"),
  title: {
    default: "Conquest Electric — Licensed Electricians | Manhattan, NYC & NJ",
    template: "%s | Conquest Electric",
  },
  description:
    "Conquest Electric is a 5-star electrical contractor serving Manhattan, New York City, and New Jersey — residential, commercial, EV charging, and more. Call 212-301-6225.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conquestelectric.com",
    siteName: "Conquest Electric",
    title: "Conquest Electric — Licensed Electricians | Manhattan, NYC & NJ",
    description:
      "Conquest Electric is a 5-star electrical contractor serving Manhattan, New York City, and New Jersey — residential, commercial, EV charging, and more. Call 212-301-6225.",
    images: [
      {
        url: "/images/conquest-electric/Google-01-Converted.png",
        width: 1200,
        height: 630,
        alt: "Conquest Electric — Licensed Electricians NYC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conquest Electric — Licensed Electricians | Manhattan, NYC & NJ",
    description:
      "Conquest Electric is a 5-star electrical contractor serving Manhattan, New York City, and New Jersey — residential, commercial, EV charging, and more.",
    images: ["/images/conquest-electric/Google-01-Converted.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Conquest Electric",
  image: "https://conquestelectric.com/images/conquest-electric/Google-01-Converted.png",
  url: "https://conquestelectric.com",
  telephone: "+1-212-301-6225",
  email: "service@conquestelectric.com",
  description:
    "Licensed electrical contractor serving Manhattan, Brooklyn, Bronx, Queens, Staten Island, and New Jersey. Residential wiring, panel upgrades, EV charger installation, and emergency electrical service.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manhattan",
    addressRegion: "NY",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7831,
    longitude: -73.9712,
  },
  areaServed: [
    { "@type": "City", name: "Manhattan" },
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Bronx" },
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "Staten Island" },
    { "@type": "State", name: "New Jersey" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://www.instagram.com/conquestelectric/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: "47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="Conquest Electric" expiryDate="June 20, 2026" trade="electricians" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
