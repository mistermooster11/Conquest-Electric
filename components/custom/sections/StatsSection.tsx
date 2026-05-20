"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/content";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          import("gsap").then(({ gsap }) => {
            const numbers = section.querySelectorAll<HTMLElement>(".stat-number-val");
            numbers.forEach((el) => {
              const target = parseFloat(el.dataset.target || "0");
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 2,
                ease: "power2.out",
                onUpdate() {
                  el.innerText = Math.round(obj.val).toString();
                },
              });
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section section-block" ref={sectionRef}>
      <div className="container-site">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <h6 className="stat-label">{stat.label}</h6>
              <div className="stat-number">
                {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
                <span className="stat-number-val" data-target={stat.value}>0</span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>
              <p className="stat-sub">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
