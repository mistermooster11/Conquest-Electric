"use client";

import { useEffect, useRef, useState } from "react";
import { images } from "@/data/images";
import { servicesContent, servicesList } from "@/data/services";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import PrimaryButton from "@/components/custom/PrimaryButton";
import type { ImageKey } from "@/data/images";

export default function ServicesSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const sectionMeasureRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackWrapRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const total = servicesList.length;
  const visible = 3;
  const maxIndex = total - visible;
  const mobileMaxIndex = total - 1;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Desktop autoplay ── */
  const startAutoplay = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1 > maxIndex ? 0 : c + 1));
    }, 5000);
  };

  useEffect(() => {
    if (isMobile) return;
    startAutoplay();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isMobile]);

  /* ── Scroll-driven carousel on mobile ── */
  useEffect(() => {
    if (!isMobile) return;

    const section = sectionMeasureRef.current;
    const wrap = trackWrapRef.current;
    if (!section || !wrap) return;

    let isTouching = false;

    const onTouchStart = () => { isTouching = true; };
    const onTouchEnd = () => {
      // Small delay so snap settles before scroll-driven can run again
      setTimeout(() => { isTouching = false; }, 500);
    };

    const onScroll = () => {
      if (isTouching) return; // don't fight user's finger

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalH = rect.height + vh;
      const traveled = vh - rect.top;
      const progress = Math.max(0, Math.min(1, traveled / totalH));

      const index = Math.min(
        Math.floor(progress * (mobileMaxIndex + 1)),
        mobileMaxIndex
      );

      setCurrent((prev) => {
        if (prev === index) return prev;
        const cardWidth = wrap.scrollWidth / (mobileMaxIndex + 1);
        wrap.scrollTo({ left: index * cardWidth, behavior: "smooth" });
        return index;
      });
    };

    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile, mobileMaxIndex]);

  const prev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((c) => (c - 1 < 0 ? maxIndex : c - 1));
    startAutoplay();
  };

  const next = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((c) => (c + 1 > maxIndex ? 0 : c + 1));
    startAutoplay();
  };

  /* ── Drag-to-scroll (mouse) ── */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackWrapRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - trackWrapRef.current.offsetLeft;
    dragScrollLeft.current = trackWrapRef.current.scrollLeft;
    trackWrapRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackWrapRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackWrapRef.current.offsetLeft;
    trackWrapRef.current.scrollLeft = dragScrollLeft.current - (x - dragStartX.current);
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackWrapRef.current) trackWrapRef.current.style.cursor = "grab";
  };

  return (
    <section className="services-section section-block" ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
        (sectionMeasureRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}>
      <div className="container-site">
        <div className="services-grid">

          {/* ── Col trái: heading + body + button ── */}
          <div className="services-text-col reveal">
            <p className="subtitle-badge">{servicesContent.subtitle}</p>
            <h2 className="section-heading">{servicesContent.heading}</h2>
            <p className="services-body">{servicesContent.body}</p>
            <PrimaryButton href={servicesContent.cta.href} label={servicesContent.cta.label} />
          </div>

          {/* ── Col phải: service cards slider ── */}
          <div className="services-slider-col reveal">
            <div
              className="services-track-wrap"
              ref={trackWrapRef}
              onMouseDown={isMobile ? onMouseDown : undefined}
              onMouseMove={isMobile ? onMouseMove : undefined}
              onMouseUp={isMobile ? onMouseUp : undefined}
              onMouseLeave={isMobile ? onMouseUp : undefined}
            >
              <div
                className="services-track"
                style={isMobile ? undefined : {
                  transform: `translateX(calc(-${current} * (100% / ${visible} + 10px)))`
                }}
              >
                {servicesList.map((svc) => (
                  <a key={svc.href} href={svc.href} className="service-card">
                    <div className="service-card-img-wrap">
                      <img
                        src={images[svc.imgKey as ImageKey]}
                        alt={svc.title}
                        className="service-card-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="service-card-body">
                      <h3 className="service-card-title">{svc.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Arrows — hidden on mobile via CSS */}
            <div className="services-arrows">
              <button className="svc-arrow" onClick={prev} aria-label="Previous">
                <i className="caren-icon caren-icon-arrow-left" aria-hidden="true" />
              </button>
              <button className="svc-arrow" onClick={next} aria-label="Next">
                <i className="caren-icon caren-icon-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
