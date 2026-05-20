"use client";

import { useRef, useState } from "react";
import { images } from "@/data/images";
import { processTabs } from "@/data/process";
import type { ImageKey } from "@/data/images";
import PrimaryButton from "../PrimaryButton";

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToTab = (i: number) => {
    setActive(i);
    const el = carouselRef.current?.children[i] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setActive(index);
  };

  return (
    <section className="process-section">
      {/* Layer 1: Full-section grayscale bg */}
      <div className="process-bg-wrap">
        {processTabs.map((tab, i) => (
          <div
            key={tab.index}
            className={`process-bg-img${active === i ? " is-active" : ""}`}
            style={{ backgroundImage: `url(${images[tab.bgKey as ImageKey]})` }}
          />
        ))}
      </div>

      {/* Layer 2: Dark overlay */}
      <div className="process-overlay" />

      {/* Mobile dot indicators */}
      <div className="process-dots">
        {processTabs.map((_, i) => (
          <button
            key={i}
            className={`process-dot${active === i ? " is-active" : ""}`}
            onClick={() => scrollToTab(i)}
            aria-label={`Tab ${i + 1}`}
          />
        ))}
      </div>

      {/* Layer 3: 3 columns (carousel on mobile) */}
      <div className="process-cols" ref={carouselRef} onScroll={handleScroll}>
        {processTabs.map((tab, i) => (
          <div
            key={tab.index}
            className={`process-col${active === i ? " is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            {/* Color bg — only visible in active column */}
            <div
              className="process-col-color-bg"
              style={{ backgroundImage: `url(${images[tab.bgKey as ImageKey]})` }}
            />
            <div className="process-col-color-overlay" />
            <div className="process-content-wap border-t border-neutral-100 mx-auto py-20">
              <div className="flex flex-row items-center justify-start">
                <span className="process-number-index -translate-y-3">{tab.index}.</span>
                <h4 className="process-title">
                  <a href={tab.href}>{tab.title}</a>
                </h4>
              </div>
              <div className="process-inner-content-wap">
                <div className="process-body">
                  <ul className="process-list">
                    {tab.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <PrimaryButton label="View all" href={tab.href} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
