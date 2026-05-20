"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { heroSlides } from "@/data/hero";
import { HeroSlideContent } from "@/components/custom/hero/HeroSlideContent";
import { HeroArrows } from "@/components/custom/hero/HeroArrows";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);          // avoid stale closure in goTo
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);

  // ── Ken Burns on mount (first slide) ──────────────────────────
  useEffect(() => {
    const bg = bgRefs.current[0];
    if (!bg) return;
    import("gsap").then(({ gsap }) => {
      gsap.set(bg, { scale: 1.1, opacity: 1 });
      gsap.to(bg, { scale: 1, duration: 10, ease: "none" });
      // Initial text in — title at 300ms, desc at 540ms (mirrors SR7 data)
      const items = contentRef.current?.querySelectorAll(".hero-animate");
      if (items?.length) {
        gsap.fromTo(items, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1,
          stagger: 0.24, delay: 0.3, ease: "power3.inOut",
        });
      }
    });
  }, []);

  // ── Core transition: slidingoverlay from bottom + Ken Burns ───
  const goTo = useCallback((next: number) => {
    if (isAnimating.current || next === currentRef.current) return;
    isAnimating.current = true;

    import("gsap").then(({ gsap }) => {
      const prevBg = bgRefs.current[currentRef.current];
      const nextBg = bgRefs.current[next];

      // Text OUT fast (d:300 like SR7)
      const items = contentRef.current?.querySelectorAll(".hero-animate");
      if (items?.length) {
        gsap.to(items, { opacity: 0, y: -20, duration: 0.3, ease: "power2.in" });
      }

      // New BG: start below, full opacity
      gsap.killTweensOf(nextBg);
      gsap.set(nextBg, { yPercent: 100, opacity: 1, scale: 1.1, zIndex: 2 });
      if (prevBg) gsap.set(prevBg, { zIndex: 1 });

      // Slide up (2s power2.inOut — matches SR7 d:2000)
      gsap.to(nextBg, {
        yPercent: 0, duration: 2, ease: "power2.inOut",
        onComplete: () => {
          // Hide old BG, reset stacking
          if (prevBg) gsap.set(prevBg, { opacity: 0, zIndex: 0, yPercent: 0, scale: 1 });
          gsap.set(nextBg, { zIndex: 1 });
          currentRef.current = next;
          setCurrent(next);
          isAnimating.current = false;

          // Text IN — title t:300/d:1000, desc t:540/d:1000 (SR7 timing)
          const els = contentRef.current?.querySelectorAll(".hero-animate");
          if (els?.length) {
            gsap.fromTo(els, { opacity: 0, y: 50 }, {
              opacity: 1, y: 0, duration: 1,
              stagger: 0.24, delay: 0.3, ease: "power3.inOut",
            });
          }
        },
      });

      // Ken Burns on incoming BG (10s zoom out, runs alongside slide-up)
      gsap.to(nextBg, { scale: 1, duration: 10, ease: "none" });
    });
  }, []);

  // ── Auto-rotate (7s — SR7 default len) ───────────────────────
  useEffect(() => {
    const timer = setInterval(
      () => goTo((currentRef.current + 1) % heroSlides.length),
      7000,
    );
    return () => clearInterval(timer);
  }, [goTo]);

  return (
    <section className="hero-section">
      {heroSlides.map((s, i) => (
        <div
          key={i}
          ref={(el) => { bgRefs.current[i] = el; }}
          className="hero-bg"
          style={{
            backgroundImage: `url(${s.bg})`,
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="container-site hero-outer">
        <HeroSlideContent slide={heroSlides[current]} ref={contentRef} />
      </div>

      <HeroArrows
        onPrev={() => goTo((currentRef.current - 1 + heroSlides.length) % heroSlides.length)}
        onNext={() => goTo((currentRef.current + 1) % heroSlides.length)}
      />
    </section>
  );
}
