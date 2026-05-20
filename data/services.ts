// Services section data — Conquest Electric

export const servicesContent = {
  subtitle: "Full-Service Electrical Contractor",
  heading: "Trusted electrical solutions for every need",
  body: "Our team of highly skilled electricians provides top-quality service tailored to your needs — from a single outlet repair in a Manhattan apartment to a full EV charging station buildout for an entire building.",
  cta: { label: "More Services", href: "/services/" },
};

export interface ServiceItem {
  title: string;
  href: string;
  imgKey: string;
}

export const servicesList: ServiceItem[] = [
  { title: "Residential Electrical",    href: "/service/residential/",            imgKey: "serviceResidential" },
  { title: "Commercial Electrical",     href: "/service/commercial/",             imgKey: "serviceCommercial" },
  { title: "EV Charging Stations",      href: "/service/ev-charging-stations/",   imgKey: "serviceEV" },
  { title: "Lighting Solutions",        href: "/service/lighting-solutions/",     imgKey: "serviceSmart" },
  { title: "Emergency Services",        href: "/service/emergency-services/",     imgKey: "serviceDiagnostics" },
  { title: "Panel & Service Upgrades",  href: "/service/panel-upgrades/",         imgKey: "serviceEngineering" },
  { title: "CCTV & Low Voltage",        href: "/service/cctv-low-voltage/",       imgKey: "serviceGenerator" },
  { title: "Specialty Installations",   href: "/service/specialty-installations/",imgKey: "serviceMisc" },
];

// ── Services PAGE data (app/services/page.tsx) ─────────────────────────────

export interface ServicePageItem {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
}

export const servicesPageData = {
  subtitle: "Full-Service Electrical Contractor",
  heading: "Residential & Commercial Electrical Services in NYC & NJ",
  services: [
    {
      title: "Residential Electrical",
      slug: "/service/residential/",
      image: "/images/AdobeStock_1661331836-1.jpg",
      excerpt:
        "New installations, existing repairs, maintenance, outlets, switches, and indoor/outdoor lighting for homes and apartments throughout NYC and NJ.",
    },
    {
      title: "Commercial Electrical",
      slug: "/service/commercial/",
      image: "/images/AdobeStock_1738812468-e1774389187161.jpg",
      excerpt:
        "New installations, repairs, maintenance, and power outage response for offices, retail spaces, restaurants, and commercial buildings.",
    },
    {
      title: "EV Charging Stations",
      slug: "/service/ev-charging-stations/",
      image: "/images/AdobeStock_830008704-1.jpg",
      excerpt:
        "In-home charger installation, multi-family and apartment building charging stations, and commercial space EV infrastructure — with free quotes.",
    },
    {
      title: "Lighting Solutions",
      slug: "/service/lighting-solutions/",
      image: "/images/AdobeStock_1429423159.jpg",
      excerpt:
        "Landscape lighting, indoor and outdoor lighting design and installation, and ongoing lighting maintenance for residential and commercial properties.",
    },
    {
      title: "Emergency Services",
      slug: "/service/emergency-services/",
      image: "/images/AdobeStock_1568613684.jpg",
      excerpt:
        "Fast response to power outages, circuit failures, and urgent electrical issues — available when you need us most.",
    },
    {
      title: "Panel & Service Upgrades",
      slug: "/service/panel-upgrades/",
      image: "/images/AdobeStock_1781483078.jpg",
      excerpt:
        "Electrical panel replacements, service upgrades, outlet and switch upgrades — keeping your property's electrical system safe and up to code.",
    },
    {
      title: "CCTV & Low Voltage",
      slug: "/service/cctv-low-voltage/",
      image: "/images/generator-1.jpg",
      excerpt:
        "CCTV camera installation, internet wiring, and office desk connections for homes, businesses, and multi-unit buildings.",
    },
    {
      title: "Specialty Installations",
      slug: "/service/specialty-installations/",
      image: "/images/AdobeStock_1370273000-1.jpg",
      excerpt:
        "Restaurant equipment installation, medical equipment wiring, and private client N.D.A. projects handled with discretion and precision.",
    },
  ] as ServicePageItem[],
};
