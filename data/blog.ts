export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/signs-your-electrical-panel-needs-an-upgrade/",
    image: "/images/electrician-inspecting-residential-electrical-panel.jpg",
    date: "15",
    monthYear: "May '26",
    category: "Electrical Tips",
    categoryHref: "/blog/",
    title: "5 Signs Your Electrical Panel Needs an Upgrade",
    excerpt:
      "Flickering lights, tripped breakers, and a panel that still uses fuses are all warning signs. Learn what to look for and when to call a licensed electrician before a small issue becomes a serious hazard.",
  },
  {
    slug: "/blog/ev-charger-installation-guide-nyc-apartment-buildings/",
    image: "/images/electric-vehicle-charging-station-garage.jpg",
    date: "08",
    monthYear: "May '26",
    category: "EV Charging",
    categoryHref: "/blog/",
    title: "The NYC Homeowner's Guide to EV Charger Installation",
    excerpt:
      "Installing an EV charger in a New York City apartment or multi-family building involves permits, building approval, and load calculations. Here's what you need to know before you start.",
  },
];
