"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { images } from "@/data/images";
import { aboutChecklist, aboutContent } from "@/data/about";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import PrimaryButton from "@/components/custom/PrimaryButton";

// Check-circle SVG — fa-check-circle từ site gốc
function CheckCircleIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 512 512" fill="currentColor" className="about-check-icon">
      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
    </svg>
  );
}

export default function AboutSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const mainImgRef = useRef<HTMLImageElement>(null);
  const overlayImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          // Main image: positive direction (moves right) — scrub:1.5 để mượt hơn
          gsap.fromTo(mainImgRef.current,
            { x: -200 },
            { x: 200, ease: "none", scrollTrigger: { trigger: mainImgRef.current, start: "top bottom", end: "bottom top", scrub: 3.5 } }
          );
          // Overlay image: negative direction (moves left) — scrub:1.5 để mượt hơn
          gsap.fromTo(overlayImgRef.current,
            { x: 200 },
            { x: -200, ease: "none", scrollTrigger: { trigger: overlayImgRef.current, start: "top bottom", end: "bottom top", scrub: 3.5 } }
          );
        });
      });
    });
    return () => ctx.revert?.();
  }, []);

  return (
    <section className="about-section section-block" ref={sectionRef}>
      <div className="container-site">
        <div className="about-grid">

          {/* ── Col trái: image stack (44%) ── */}
          <div className="about-image-col reveal">
            {/* Main image — 420px wide, radius 24px, z-index 3, parallax moves right */}
            <div className="about-img-main-wrap">
              <Image
                ref={mainImgRef as React.Ref<HTMLImageElement>}
                src={images.aboutHero}
                alt="Experienced electricians providing quality electrical services"
                width={700} height={700}
                className="about-img-main"
              />
              {/* Overlay image — absolute bottom-right, 420px wide, radius 24px, z-index 4, parallax moves left */}
              <img
                ref={overlayImgRef}
                src={images.aboutOverlay}
                alt="Conquest Electric team at work"
                className="about-img-overlay"
              />
              {/* Deco strip — right:72px top:50px, z-index 5, hidden tablet/mobile */}
              <img
                src={images.aboutBanner}
                alt=""
                aria-hidden="true"
                className="about-deco-strip"
              />
              {/* Green circle icon — absolute left:145px bottom:51px */}
              <span className="about-deco-circle" aria-hidden="true">
                <svg viewBox="0 0 512 512" fill="currentColor" width="20" height="20">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span>
              {/* Deco burst — absolute left:-114px bottom:0 */}
              <img
                src={images.decoBg}
                alt=""
                aria-hidden="true"
                className="about-deco-burst"
              />
            </div>
          </div>

          {/* ── Col phải: text (56%) — padding-left 100px ── */}
          <div className="about-text-col reveal">
            <p className="subtitle-badge">{aboutContent.subtitle}</p>
            <h2 className="section-heading">{aboutContent.heading}</h2>
            <p className="about-body">{aboutContent.body}</p>

            {/* 2-col checklist — repeat(2,1fr), margin-top 36px, margin-bottom 47px */}
            <div className="about-checklist-grid">
              {aboutChecklist.map((item) => (
                <div key={item} className="about-checklist-item">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button — Primary CTA */}
            <PrimaryButton href={aboutContent.cta.href} label={aboutContent.cta.label} />
          </div>

        </div>
      </div>
    </section>
  );
}
