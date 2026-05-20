"use client";

import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import "swiper/css";
import {
  testimonials,
  testimonialsSectionContent,
} from "@/data/testimonials";

const { subtitle, heading, rating, avatars, sideImage } =
  testimonialsSectionContent;

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  // GSAP parallax: image slides up on scroll down, down on scroll up
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current || !imgRef.current) return;

        const tween = gsap.fromTo(
          imgRef.current,
          { yPercent: 6 },
          {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );

        // scroll reveal for content
        const reveals = contentRef.current?.querySelectorAll<HTMLElement>(".reveal");
        reveals?.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 36 },
            {
              opacity: 1, y: 0,
              duration: 0.7,
              delay: i * 0.12,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });

        cleanup = () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });
    });

    return () => cleanup?.();
  }, []);

  // Swiper init
  useEffect(() => {
    let destroy: (() => void) | undefined;

    Promise.all([import("swiper"), import("swiper/modules")]).then(
      ([{ Swiper }, { Autoplay, Pagination }]) => {
        if (!swiperRef.current) return;
        const sw = new Swiper(swiperRef.current, {
          modules: [Autoplay, Pagination],
          slidesPerView: 1,
          loop: true,
          autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
          pagination: {
            el: paginationRef.current!,
            clickable: true,
            type: "bullets",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          },
          speed: 500,
        });
        destroy = () => sw.destroy(true, true);
      }
    );

    return () => destroy?.();
  }, []);

  return (
    <section className="testi-section" ref={sectionRef}>
      {/* BG panel — covers right ~70% */}
      <div className="testi-bg" aria-hidden="true" />

      <div className="testi-layout">
        {/* Left: image flush to screen edge, parallax */}
        <div className="testi-img-col" ref={imgRef}>
          <img
            src={sideImage}
            alt="Conquest Electric team"
            className="testi-img"
            loading="lazy"
          />
        </div>

        {/* Right: content */}
        <div className="testi-content-col" ref={contentRef}>
          <div className="testi-heading-wrap reveal">
            <p className="subtitle-badge">{subtitle}</p>
            <h2 className="section-heading">{heading}</h2>
          </div>

          {/* Avatars + rating */}
          <div className="testi-meta reveal">
            {/* Overlapping avatars */}
            <div className="testi-avatars">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Client ${i + 1}`}
                  className="testi-avatar"
                  loading="lazy"
                />
              ))}
            </div>
            {/* Stars + score — vertical column */}
            <div className="testi-rating">
              <div className="testi-stars" role="img" aria-label="Rated 5 out of 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </div>
              <span className="testi-rating-score">{rating} rating</span>
            </div>
          </div>

          {/* Swiper — dots navigation only */}
          <div className="reveal">
            <div ref={swiperRef} className="swiper testi-swiper">
              <div className="swiper-wrapper">
                {testimonials.map((t, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="testi-card inner">
                      <div className="testimonial-content-text">
                        {/* content-icon: decorative quote mark — mirrors source .content-icon injected by testimonial.js */}
                        <div className="content-icon" aria-hidden="true" />
                        <div className="content">{t.content}</div>
                        <div className="testimonial-caption">
                          <div className="caption-top" />
                          <div className="caption-bottom">
                            <div className="details">
                              <span className="name">{t.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dots pagination only */}
            <div ref={paginationRef} className="testi-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}