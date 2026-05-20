"use client";

import React from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import PrimaryButton from "@/components/custom/PrimaryButton";
import { sinceSectionContent } from "@/data/since";

const { heading, paragraphs, button } = sinceSectionContent;

export default function SinceSection() {
  const ref = useScrollReveal();

  return (
    <section className="since-section">
      {/* overlay làm tối background */}
      <div className="since-overlay" aria-hidden="true" />
      <div className="container-site">
        <div className="since-inner" ref={ref as React.RefObject<HTMLDivElement>}>
          <div className="since-content reveal">
            <h2 className="since-heading">{heading}</h2>
            <div className="since-body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <PrimaryButton href={button.href} label={button.label} className="btn-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
