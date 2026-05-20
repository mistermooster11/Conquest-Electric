"use client";

import { useRef, useEffect } from "react";
import { HousePlug, Cog, Fingerprint } from "lucide-react";
import { images } from "@/data/images";
import { whatWeDoContent } from "@/data/whatWeDo";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import PrimaryButton from "@/components/custom/PrimaryButton";
import Image from "next/image";

const ICON_BOXES = [
  {
    id: "energy",
    icon: <HousePlug size={48}  />,
    title: "24/7 Electrical Services",
    desc: "Our team is always available to handle any electrical emergency, day or night, keeping your home or business safe.",
  },
  {
    id: "pricing",
    icon: <Fingerprint size={48} />,
    title: "Transparent Pricing",
    desc: "Clear, upfront quotes with no hidden fees — you always know exactly what you're paying for before we begin.",
  },
  {
    id: "fast",
    icon: <Cog size={48} />,
    title: "Fast and Reliable",
    desc: "Illuminate your surroundings with swift, dependable service that gets the job done right the first time.",
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const decoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          decoRef.current,
          { scale: 0.5, opacity: 0.4 },
          {
            scale: 2.2,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",   // bắt đầu khi top section vào bottom viewport
              end: "bottom top",     // kết thúc khi bottom section rời top viewport
              scrub: 2.2,            // smooth lag 1.2s
            },
          }
        );
      });
    };

    init();
    return () => ctx?.revert();
  }, [sectionRef]);

  return (
    <section className="what-we-do-section section-block" ref={sectionRef}>
      {/* Deco background — animated via scroll */}
      <div className="what-we-do-deco" ref={decoRef} aria-hidden="true" />

      <div className="container-site">
        <div className="what-we-do-grid">

          {/* Left: image */}
          <div className="what-we-do-img-col reveal">
            <Image
              width={1200}
              height={800}
              src={images.whatWeDo}
              alt="What we do"
              className="what-we-do-img"
              loading="lazy"
            />
          </div>

          {/* Right: content */}
          <div className="what-we-do-content reveal">
            <p className="subtitle-badge">{whatWeDoContent.subtitle}</p>
            <h2 className="section-heading">{whatWeDoContent.heading}</h2>

            <div className="icon-boxes">
              {ICON_BOXES.map((box) => (
                <div key={box.id} className="icon-box">
                  <div className="icon-box-icon">
                    {box.icon}
                  </div>
                  <div className="icon-box-text">
                    <h3 className="icon-box-title">{box.title}</h3>
                    <p className="icon-box-desc">{box.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="what-we-do-cta">
              <PrimaryButton href={whatWeDoContent.cta.href} label={whatWeDoContent.cta.label} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
