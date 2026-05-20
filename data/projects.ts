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
    image: "/images/lopo1-1.jpg", // [TODO: Replace with Conquest Electric project photo]
  },
  {
    id: "apartment-lighting",
    title: "Apartment Lighting & Switch Installation",
    location: "Manhattan, New York",
    href: "#",
    image: "/images/lopo2.jpg", // [TODO: Replace with Conquest Electric project photo]
  },
  {
    id: "ev-charger-building",
    title: "EV Charger Building Installation",
    location: "New York City, NY",
    href: "#",
    image: "/images/lopo3.jpg", // [TODO: Replace with Conquest Electric project photo]
  },
  {
    id: "commercial-buildout",
    title: "Commercial Electrical Build-Out",
    location: "Manhattan, New York",
    href: "#",
    image: "/images/lopo4.jpg", // [TODO: Replace with Conquest Electric project photo]
  },
  {
    id: "panel-upgrade",
    title: "Electrical Panel Upgrade",
    location: "New Jersey",
    href: "#",
    image: "/images/lopo5.jpg", // [TODO: Replace with Conquest Electric project photo]
  },
  {
    id: "outdoor-lighting",
    title: "Outdoor Lighting Installation",
    location: "New York City, NY",
    href: "#",
    image: "/images/lopo6.jpg", // [TODO: Replace with Conquest Electric project photo]
  },
];

export const projectsSectionContent = {
  subtitle: "PAST PROJECTS",
  heading: "5-star electrical work across New York City and New Jersey",
};
