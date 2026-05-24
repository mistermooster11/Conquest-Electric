"use client";

import { useEffect, useRef } from "react";
import { whyCards } from "@/data/why-choose";

export default function WhyChooseSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(gridRef.current?.querySelectorAll(".why-card") ?? [], {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            once: true,
          },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="why-choose-section">
      <div className="why-choose-section__container">
        <div className="why-choose-section__grid" ref={gridRef}>
          {whyCards.map((card) => (
            <div key={card.title} className="why-card">
              <div className="why-card__body">
                <h3 className="why-card__title">{card.title}</h3>
                <p className="why-card__text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
