// Process section data — Conquest Electric
// Layout: left 3 tabs | right crossfade bg image

export interface ProcessTab {
  index: string;
  title: string;
  href: string;
  items: string[];
  bgKey: string; // key trong images
}

export const processTabs: ProcessTab[] = [
  {
    index: "01",
    title: "Residential",
    href: "/service/residential/",
    items: ["New Installation", "Existing Repairs", "Maintenance", "Outlets, Switches & Panels"],
    bgKey: "processResidential",
  },
  {
    index: "02",
    title: "Commercial",
    href: "/service/commercial/",
    items: ["New Installation", "Repairs & Maintenance", "Power Outage Response", "Restaurant & Medical Equipment"],
    bgKey: "processCommercial",
  },
  {
    index: "03",
    title: "EV Charging",
    href: "/service/ev-charging-stations/",
    items: ["In-Home Charger Installation", "Apartment Building Stations", "Commercial EV Infrastructure"],
    bgKey: "processIndustrial",
  },
];
