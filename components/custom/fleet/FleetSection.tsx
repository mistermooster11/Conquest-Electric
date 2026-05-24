"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Work</div>
          <h2 className="fleet-section__heading">
            Professional Electrical Work, Every Time
          </h2>
          <p className="fleet-section__intro">
            Our licensed electricians arrive equipped and prepared for any job — from
            single-outlet repairs in Manhattan apartments to full panel upgrades and EV
            charging station installations for apartment buildings and commercial spaces.
            Same-day response, clean work, and honest pricing every time.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          <Image
            src="/images/electrician-installing-circuit-breaker-panel.jpg"
            alt="Conquest Electric — panel installation"
            width={1024}
            height={909}
            className="fleet-section__img"
          />
          <Image
            src="/images/electrician-with-tools-residential-site.jpg"
            alt="Conquest Electric — residential electrical work"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/images/electric-vehicle-charging-station-garage.jpg"
            alt="Conquest Electric — EV charger installation"
            width={1024}
            height={541}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
