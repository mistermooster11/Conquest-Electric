export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "Panel Upgrade", href: "/panel-upgrade" },
      { label: "Residential Wiring", href: "/residential-wiring" },
      { label: "Outlet & Switch Repair", href: "/outlet-repair" },
      { label: "EV Charger Installation", href: "/ev-charger" },
      { label: "Emergency Electrical", href: "/emergency-electrical" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
    ],
  },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "Panel Upgrade", href: "/panel-upgrade/" },
  { label: "Residential Wiring", href: "/residential-wiring/" },
  { label: "Outlet & Switch Repair", href: "/outlet-repair/" },
  { label: "EV Charger Installation", href: "/ev-charger/" },
  { label: "Emergency Electrical", href: "/emergency-electrical/" },
];
