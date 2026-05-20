"use client";

import React, { useEffect, useRef } from "react";
import { aboutStatsData } from "@/data/about";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import PrimaryButton from "@/components/custom/PrimaryButton";

const { subtitle, heading, headingHighlight, body, ctaLabel, ctaHref, decoRight, counters } =
  aboutStatsData;

export default function AboutStatsSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const decoRightRef = useRef<HTMLImageElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.target ?? 0);
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number, startTime: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            el.textContent = String(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
            else el.textContent = String(target);
          };
          requestAnimationFrame((t) => step(t, t));
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    countersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // GSAP parallax
  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          // Deco right — float theo chiều dọc ngược chiều scroll
          gsap.fromTo(
            decoRightRef.current,
            { y: -60 },
            {
              y: 60,
              ease: "none",
              scrollTrigger: {
                trigger: decoRightRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 3,
              },
            }
          );
        });
      });
    });
    return () => ctx.revert?.();
  }, []);

  return (
    <section className="about-stats" ref={sectionRef}>
      <div className="about-stats__inner">
        {/* Deco right — parallax */}
        <img
          ref={decoRightRef}
          src={decoRight}
          alt=""
          width={1010}
          height={820}
          className="about-stats__deco-right"
          aria-hidden="true"
        />

        {/* Main content */}
        <div className="about-stats__content reveal">
          <p className="about-stats__subtitle">
            <i className="caren-icon caren-icon-breadcrumb" aria-hidden="true" />
            {subtitle}
          </p>
          <h2 className="about-stats__heading">
            {heading}{" "}
            <span>{headingHighlight}</span>
          </h2>
          <p className="about-stats__body">{body}</p>
          <PrimaryButton href={ctaHref} label={ctaLabel} />
        </div>

        {/* Floating counter cards */}
        <div className="about-stats__cards">
          {counters.map((c, i) => (
            <div className="about-stats__card" key={i}>
              <div className="about-stats__card-label">{c.label}</div>
              <div className="about-stats__card-number">
                {c.prefix}
                <span
                  ref={(el) => { countersRef.current[i] = el; }}
                  data-target={c.value}
                >
                  0
                </span>
                {c.suffix}
              </div>
              <div className="about-stats__card-title">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
