export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Panel Upgrade",           href: "/panel-upgrade/" },
  { label: "Residential Wiring",      href: "/residential-wiring/" },
  { label: "Outlet & Switch Repair",  href: "/outlet-repair/" },
  { label: "EV Charger Installation", href: "/ev-charger/" },
  { label: "Emergency Electrical",    href: "/emergency-electrical/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Panel Upgrade",
    image: "/images/electrician-installing-circuit-breaker-panel.jpg",
    href: "/panel-upgrade/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Residential Wiring",
    image: "/images/electrician-with-tools-residential-site.jpg",
    href: "/residential-wiring/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Outlet & Switch Repair",
    image: "/images/electrician-installing-outlet-white-wall.jpg",
    href: "/outlet-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "EV Charger Installation",
    image: "/images/electric-vehicle-charging-station-garage.jpg",
    href: "/ev-charger/",
    width: 535,
    height: 643,
  },
];
