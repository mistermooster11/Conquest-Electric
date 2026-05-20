"use client";

import React, { useEffect, useRef } from "react";
import "swiper/css";
import { aboutTestimonialsData } from "@/data/about";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const { subtitle, heading, rating, avatars, sideImage, bgDeco, testimonials, googleReviews } =
  aboutTestimonialsData;

const GOOGLE_ICON = "https://cdn.trustindex.io/assets/platform/Google/icon.svg";
const GOOGLE_STAR = "https://cdn.trustindex.io/assets/platform/Google/star/f.svg";

export default function AboutTestimonialsSection() {
  const sectionRef = useScrollReveal();
  const swiperRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const googleSwiperRef = useRef<HTMLDivElement>(null);
  const sideImgRef = useRef<HTMLImageElement>(null);
  const bgDecoRef = useRef<HTMLImageElement>(null);

  // Main testimonials swiper
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
          pagination: { el: paginationRef.current, clickable: true },
        });
        destroy = () => sw.destroy(true, true);
      }
    );
    return () => destroy?.();
  }, []);

  // Google reviews swiper (3 per view)
  useEffect(() => {
    let destroy: (() => void) | undefined;
    Promise.all([import("swiper"), import("swiper/modules")]).then(
      ([{ Swiper }, { Autoplay, Navigation }]) => {
        if (!googleSwiperRef.current) return;
        const sw = new Swiper(googleSwiperRef.current, {
          modules: [Autoplay, Navigation],
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true },
          navigation: {
            nextEl: googleSwiperRef.current.querySelector(".ti-next") as HTMLElement,
            prevEl: googleSwiperRef.current.querySelector(".ti-prev") as HTMLElement,
          },
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        });
        destroy = () => sw.destroy(true, true);
      }
    );
    return () => destroy?.();
  }, []);

  // GSAP parallax
  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    Promise.all([
      import("gsap").then((m) => m.default),
      import("gsap/ScrollTrigger").then((m) => m.ScrollTrigger),
    ]).then(([gsap, ScrollTrigger]) => {
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        if (sideImgRef.current) {
          gsap.fromTo(
            sideImgRef.current,
            { y: -40 },
            { y: 40, ease: "none", scrollTrigger: { trigger: sideImgRef.current, start: "top bottom", end: "bottom top", scrub: 3 } }
          );
        }
        if (bgDecoRef.current) {
          gsap.fromTo(
            bgDecoRef.current,
            { y: -30 },
            { y: 30, ease: "none", scrollTrigger: { trigger: bgDecoRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 } }
          );
        }
      });
    });
    return () => ctx.revert?.();
  }, []);

  return (
    <section className="about-testimonials" ref={sectionRef}>
      {/* BG deco */}
      <img
        ref={bgDecoRef}
        src={bgDeco}
        alt=""
        width={920}
        height={1120}
        className="about-testimonials__bg-deco"
        aria-hidden="true"
      />

      {/* ── Top row: side image + testimonials ── */}
      <div className="about-testimonials__inner">
        {/* Left: side image (hidden on mobile_extra ≤880px) */}
        <div className="about-testimonials__left">
          <img
            ref={sideImgRef}
            src={sideImage}
            alt="Conquest Electric team"
            width={668}
            height={640}
            className="about-testimonials__left-img"
          />
        </div>

        {/* Right: content */}
        <div className="about-testimonials__right reveal">
          {/* Subtitle */}
          <p className="about-testimonials__subtitle">
            <i className="caren-icon caren-icon-breadcrumb" aria-hidden="true" />
            {subtitle}
          </p>

          {/* Heading */}
          <h2 className="about-testimonials__heading">{heading}</h2>

          {/* Avatars + rating */}
          <div className="about-testimonials__meta">
            <div className="about-testimonials__avatars">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  width={58}
                  height={58}
                  className="about-testimonials__avatar"
                />
              ))}
            </div>
            <div className="about-testimonials__rating-wrap">
              <div className="about-testimonials__stars" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={GOOGLE_STAR} alt="★" width={18} height={18} />
                ))}
              </div>
              <span className="about-testimonials__rating-text">{rating} rating</span>
            </div>
          </div>

          {/* Main testimonials Swiper */}
          <div ref={swiperRef} className="swiper about-testimonials__slider">
            <div className="swiper-wrapper">
              {testimonials.map((t, i) => (
                <div className="swiper-slide" key={i}>
                  <p className="about-testimonials__content">{t.content}</p>
                  <p className="about-testimonials__name">{t.name}</p>
                </div>
              ))}
            </div>
            <div className="about-testimonials__dots">
              <div ref={paginationRef} className="swiper-pagination" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom row: Google Reviews (TrustIndex style) ── */}
      <div className="about-testimonials__google-row">
        <div className="ti-widget ti-goog" ref={googleSwiperRef}>
          {/* Prev / Next controls */}
          <button className="ti-prev" aria-label="Previous review" />
          <button className="ti-next" aria-label="Next review" />

          <div className="swiper-wrapper">
            {googleReviews.map((r, i) => (
              <div className="swiper-slide ti-review-item" key={i}>
                <div className="ti-inner">
                  <div className="ti-review-header">
                    <div className="ti-profile-img">
                      <img src={r.avatar} alt={r.name} width={40} height={40} loading="lazy" />
                    </div>
                    <div className="ti-profile-details">
                      <div className="ti-name">{r.name}</div>
                    </div>
                    <div className="ti-platform-icon">
                      <img src={GOOGLE_ICON} alt="Google" width={20} height={20} loading="lazy" />
                    </div>
                  </div>
                  <div className="ti-stars">
                    {[...Array(5)].map((_, j) => (
                      <img key={j} src={GOOGLE_STAR} alt="★" width={17} height={17} loading="lazy" />
                    ))}
                  </div>
                  <p className="ti-review-text">{r.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicator */}
          <div className="ti-controls-line">
            <div className="dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
