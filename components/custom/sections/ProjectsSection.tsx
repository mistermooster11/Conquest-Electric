"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { NavArrowsRef } from "@/components/custom/NavArrows";
import { projects, projectsSectionContent } from "@/data/projects";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function ProjectsSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const swiperRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let swiperInstance: { destroy: () => void } | null = null;

    const init = async () => {
      const { default: Swiper } = await import("swiper");
      const { Navigation } = await import("swiper/modules");
      if (!swiperRef.current) return;

      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
        breakpoints: {
          0:   { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        },
      }) as unknown as { destroy: () => void };
    };

    init();
    return () => swiperInstance?.destroy();
  }, []);

  return (
    <section className="projects-section section-block" ref={sectionRef}>
      <div className="container-site">

        {/* Header: left title + nav buttons aligned right */}
        <div className="projects-header reveal">
          <div className="projects-heading-wrap">
            <p className="subtitle-badge">{projectsSectionContent.subtitle}</p>
            <h2 className="section-heading">{projectsSectionContent.heading}</h2>
          </div>
          <div className="projects-nav">
            <NavArrowsRef prevRef={prevRef} nextRef={nextRef} />
          </div>
        </div>

        {/* Swiper */}
        <div ref={swiperRef} className="swiper projects-swiper reveal">
          <div className="swiper-wrapper">
            {projects.map((project) => (
              <div key={project.id} className="swiper-slide">
                <div className="proj-card">
                  <div className="proj-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="proj-text-box">
                    <span className="proj-location">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                    <h3 className="proj-title">
                      <Link href={project.href}>{project.title}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
