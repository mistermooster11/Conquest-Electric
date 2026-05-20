export interface Project {
  id: string;
  title: string;
  location: string;
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "brownstone-rewire",
    title: "Brownstone Electrical Troubleshooting",
    location: "Manhattan, New York",
    href: "#",
    image: "/images/conquest-electric/IMG_5027-1.jpg",
  },
  {
    id: "apartment-lighting",
    title: "Apartment Lighting & Switch Installation",
    location: "Manhattan, New York",
    href: "#",
    image: "/images/conquest-electric/Group-63-scaled.jpg",
  },
  {
    id: "ev-charger-building",
    title: "EV Charger Building Installation",
    location: "New York City, NY",
    href: "#",
    image: "/images/conquest-electric/electric-car.jpg",
  },
  {
    id: "commercial-buildout",
    title: "Commercial Electrical Build-Out",
    location: "Manhattan, New York",
    href: "#",
    image: "/images/conquest-electric/Group-76.jpg",
  },
  {
    id: "panel-upgrade",
    title: "Electrical Panel Upgrade",
    location: "New Jersey",
    href: "#",
    image: "/images/conquest-electric/Rectangle-45-scaled.jpg",
  },
  {
    id: "outdoor-lighting",
    title: "Outdoor Lighting Installation",
    location: "New York City, NY",
    href: "#",
    image: "/images/conquest-electric/Group-66.jpg",
  },
];

export const projectsSectionContent = {
  subtitle: "PAST PROJECTS",
  heading: "5-star electrical work across New York City and New Jersey",
};
