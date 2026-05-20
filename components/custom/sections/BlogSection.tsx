"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// [TODO: Replace placeholder blog posts with real Conquest Electric blog content]
const PLACEHOLDER_IMG = "/images/lopo1-1.jpg";

const blogPosts = [
  {
    title: "Do I Need a 200-Amp Panel Upgrade? A NYC Homeowner's Guide",
    date: "May 2026",
    categories: ["Panel Upgrades"],
    excerpt: "Older New York City apartments and brownstones often run on outdated panels that can't support modern appliances or EV chargers. Here's what you need to know.",
    href: "#",
    img: PLACEHOLDER_IMG,
  },
  {
    title: "EV Chargers for NYC Apartment Buildings: What Landlords and Tenants Should Know",
    date: "May 2026",
    categories: ["EV Charging"],
    excerpt: "Installing EV charging stations in multi-family buildings is more straightforward than most people think. We break down the process from assessment to installation.",
    href: "#",
    img: PLACEHOLDER_IMG,
  },
  {
    title: "5 Signs Your Manhattan Apartment Has Outdated Wiring",
    date: "May 2026",
    categories: ["Residential"],
    excerpt: "Pre-war buildings across Manhattan, Brooklyn, and the Bronx often have electrical systems that need attention. Here are the warning signs to watch for.",
    href: "#",
    img: PLACEHOLDER_IMG,
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section section-block">
      <div className="container-site">
        <div className="blog-header">
          <p className="subtitle-badge" style={{ justifyContent: "center" }}>Blogs &amp; Articles</p>
          <h2 className="section-heading blog-heading">
            Recent blog posts and news insignt
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0:   { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024:{ slidesPerView: 3 },
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.title}>
              <div className="blog-card">
                <div className="blog-card-thumb">
                  <div className="blog-card-categories">
                    {post.categories.map((cat, i) => (
                      <span key={cat}>
                        <a href="/blog/">{cat}</a>
                        {i < post.categories.length - 1 && <span className="blog-dot" />}
                      </span>
                    ))}
                  </div>
                  <div className="blog-card-meta">{post.date}</div>
                  <img src={post.img} alt={post.title} className="blog-card-img" loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <a href={post.href} className="blog-card-link">Read More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
