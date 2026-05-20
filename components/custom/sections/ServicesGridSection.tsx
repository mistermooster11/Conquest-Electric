"use client";

import React from "react";
import Link from "next/link";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { servicesPageData } from "@/data/services";

/**
 * ServicesGridSection
 * Source: elementor-81 → containers e84f797 (outer), e64f76b (heading), 6f9de65 (grid)
 * Grid: 4 cols → 3 (≤1366px) → 2 (≤1200px/1024px) → 1 (≤767px), gap 30px
 * Card height: 525px (.service-block)
 * Title overlaps image: margin-top: -19px (.service-loop-title)
 */
export default function ServicesGridSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="services-grid" ref={sectionRef}>
      {/* Heading widget (e64f76b) */}
      <div className="services-grid__heading reveal">
        <div className="services-grid__subtitle">
          <span className="services-grid__subtitle-dot" />
          {servicesPageData.subtitle}
        </div>
        <h2 className="services-grid__title">{servicesPageData.heading}</h2>
      </div>

      {/* Grid (6f9de65): 4 cols desktop */}
      <ul className="services-grid__list">
        {servicesPageData.services.map((service, index) => (
          <li
            key={service.slug}
            className={`caren-item service service-style-1${index === 0 ? " actived" : ""}`}
          >
            <div className="service-block">
              {/* Image */}
              <figure className="service-image">
                <Link href={service.slug}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </Link>
              </figure>

              {/* Caption */}
              <div className="service-caption">
                <div className="service-content-loop">
                  <div className="service-content-box">
                    {/* Title with margin-top: -19px to overlap image */}
                    <h3 className="service-loop-title">
                      <Link href={service.slug}>{service.title}</Link>
                    </h3>
                    <div className="service-loop-exerpt">
                      <p>{service.excerpt}</p>
                    </div>
                  </div>
                </div>

                {/* More details button */}
                <div className="service-button">
                  <Link
                    href={service.slug}
                    className="more-link"
                    title={service.title}
                  >
                    <span className="elementor-button-text">More details</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
