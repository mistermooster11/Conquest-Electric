// Service detail page data — Conquest Electric
// Source: conquestelectric.com/our-services/

import type { ServiceDetail } from "@/lib/types";

// ── Sidebar navigation (shared across all service detail pages) ─────────────
export const servicesSidebarLinks = [
  { label: "Residential Electrical",    href: "/service/residential/" },
  { label: "Commercial Electrical",     href: "/service/commercial/" },
  { label: "EV Charging Stations",      href: "/service/ev-charging-stations/" },
  { label: "Lighting Solutions",        href: "/service/lighting-solutions/" },
  { label: "Emergency Services",        href: "/service/emergency-services/" },
  { label: "Panel & Service Upgrades",  href: "/service/panel-upgrades/" },
  { label: "CCTV & Low Voltage",        href: "/service/cctv-low-voltage/" },
  { label: "Specialty Installations",   href: "/service/specialty-installations/" },
];

// ── All service detail pages data ───────────────────────────────────────────
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "residential",
    title: "Residential Electrical",
    metaDescription:
      "Residential electrical services by Conquest Electric — new installations, repairs, maintenance, outlets, switches, and lighting throughout NYC and NJ.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1661331836-1.jpg",
        alt: "Residential electrical services in NYC",
      },
      { type: "h2", text: "RESIDENTIAL ELECTRICAL" },
      {
        type: "paragraph",
        text: "Conquest Electric handles all residential electrical work — from a simple outlet repair in a Manhattan apartment to a full rewire in a Brooklyn brownstone. Our electricians are experienced with the unique electrical systems found in New York City and New Jersey homes, including pre-war buildings, co-ops, and multi-family houses.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "New electrical installation",
          "Existing repairs and troubleshooting",
          "Routine maintenance",
          "Outlets, switches, and electrical panel upgrades",
          "Indoor and outdoor lighting installation",
          "Landscape lighting",
          "Lighting maintenance",
          "Service upgrades",
        ],
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Electrical",
    metaDescription:
      "Commercial electrical services by Conquest Electric — new installations, repairs, maintenance, and emergency response for NYC and NJ businesses.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1738812468-e1774389187161.jpg",
        alt: "Commercial electrical services NYC",
      },
      { type: "h2", text: "COMMERCIAL ELECTRICAL" },
      {
        type: "paragraph",
        text: "From retail build-outs to office renovations, Conquest Electric handles commercial electrical work at every scale. We serve businesses across New York City and New Jersey with professional service, minimal disruption, and work that passes inspection the first time.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "New commercial electrical installation",
          "Existing repairs and troubleshooting",
          "Scheduled maintenance",
          "Power outage and emergency repairs",
          "Restaurant equipment installation",
          "Medical equipment wiring",
          "Office desk connections",
        ],
      },
    ],
  },
  {
    slug: "ev-charging-stations",
    title: "EV Charging Stations",
    metaDescription:
      "EV charging station installation by Conquest Electric — home, apartment building, and commercial EV chargers in New York and New Jersey.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_830008704-1.jpg",
        alt: "EV Charging Station Installation NYC",
      },
      { type: "h2", text: "EV CHARGING STATIONS" },
      {
        type: "paragraph",
        text: "We specialize in installation of electric vehicle chargers for single family homes, multi-family homes, apartment buildings, and businesses — including full charging stations. No matter the size of the property, we can assist you with the installation of a charger or charging station so you or your tenants can conveniently charge their vehicles at home.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "Free quotes and consultation",
          "In-home charger installation",
          "Multi-family and apartment building installation",
          "Commercial space installation",
          "Charging station infrastructure",
        ],
      },
      { type: "h3", text: "Home Charging" },
      {
        type: "paragraph",
        text: "The most convenient way to charge your car is at home. A home charger is significantly faster and safer than a standard 3-pin plug. We install Level 2 chargers that work with all major EV brands.",
      },
      { type: "h3", text: "Multi-Family & Apartment Buildings" },
      {
        type: "paragraph",
        text: "No matter the size of the property, we can assist with the installation of a charger or charging station so tenants can conveniently charge their vehicles. We handle the electrical panel assessment, circuit runs, and charger hardware installation from start to finish.",
      },
    ],
  },
  {
    slug: "lighting-solutions",
    title: "Lighting Solutions",
    metaDescription:
      "Landscape, indoor, and outdoor lighting installation and maintenance by Conquest Electric in NYC and NJ.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1429423159.jpg",
        alt: "Lighting solutions NYC",
      },
      { type: "h2", text: "LIGHTING SOLUTIONS" },
      {
        type: "paragraph",
        text: "Conquest Electric designs and installs lighting for homes, landscapes, and commercial spaces throughout New York and New Jersey. Whether you need a single fixture replaced or a full lighting upgrade across a property, we deliver results that are functional, safe, and well-executed.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "Indoor lighting installation and design",
          "Outdoor and landscape lighting",
          "Lighting maintenance and repair",
          "Commercial and retail lighting upgrades",
        ],
      },
    ],
  },
  {
    slug: "emergency-services",
    title: "Emergency Electrical Services",
    metaDescription:
      "Emergency electrical services by Conquest Electric — fast response to power outages, circuit failures, and urgent electrical issues in NYC and NJ.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1568613684.jpg",
        alt: "Emergency electrical services NYC",
      },
      { type: "h2", text: "EMERGENCY ELECTRICAL SERVICES" },
      {
        type: "paragraph",
        text: "When the power goes out or an electrical issue surfaces unexpectedly, Conquest Electric responds fast. We handle emergency service calls across New York City and New Jersey — troubleshooting and resolving power outages, tripped breakers, failed circuits, and urgent wiring issues.",
      },
      { type: "h3", text: "We Handle:" },
      {
        type: "list",
        items: [
          "Power outage response",
          "Circuit breaker failures",
          "Electrical troubleshooting",
          "Emergency repairs for residential and commercial properties",
        ],
      },
    ],
  },
  {
    slug: "panel-upgrades",
    title: "Panel & Service Upgrades",
    metaDescription:
      "Electrical panel replacements and service upgrades by Conquest Electric — keeping NYC and NJ homes and businesses safe and up to code.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1781483078.jpg",
        alt: "Electrical panel upgrade NYC",
      },
      { type: "h2", text: "PANEL & SERVICE UPGRADES" },
      {
        type: "paragraph",
        text: "Outdated electrical panels are a safety risk and a code violation waiting to happen. Conquest Electric handles full panel replacements and service upgrades for homes and businesses throughout New York City and New Jersey — with permits pulled and inspections passed.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "Electrical panel replacement",
          "Service upgrades",
          "Outlet and switch upgrades",
          "Code compliance inspections and corrections",
        ],
      },
    ],
  },
  {
    slug: "cctv-low-voltage",
    title: "CCTV & Low Voltage",
    metaDescription:
      "CCTV installation, internet wiring, and low voltage services by Conquest Electric in NYC and NJ.",
    content: [
      {
        type: "image",
        src: "/images/generator-1.jpg",
        alt: "CCTV installation NYC",
      },
      { type: "h2", text: "CCTV & LOW VOLTAGE" },
      {
        type: "paragraph",
        text: "Conquest Electric installs CCTV security camera systems, internet wiring, and office desk connections for residential and commercial clients across New York City and New Jersey. We handle the full installation — from cable runs to camera placement and hardware setup.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "CCTV camera installation",
          "Internet wiring and structured cabling",
          "Office desk connections",
          "Low voltage systems for homes and businesses",
        ],
      },
    ],
  },
  {
    slug: "specialty-installations",
    title: "Specialty Installations",
    metaDescription:
      "Specialty electrical installations by Conquest Electric — restaurant equipment, medical equipment, and private client N.D.A. projects in NYC and NJ.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1370273000-1.jpg",
        alt: "Specialty electrical installations NYC",
      },
      { type: "h2", text: "SPECIALTY INSTALLATIONS" },
      {
        type: "paragraph",
        text: "Conquest Electric handles specialized electrical work that requires discretion, precision, and experience with non-standard equipment. We work with restaurants, medical facilities, production companies, and private clients who need work done right — on time and with full confidentiality when required.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "Restaurant equipment installation",
          "Medical equipment wiring",
          "Private client N.D.A. projects",
          "Production company electrical work",
        ],
      },
    ],
  },
];

/** Helper: lấy service detail theo slug */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
