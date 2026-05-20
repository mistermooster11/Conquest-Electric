"use client";

import { useRef, useEffect } from "react";
import { aboutTalentsData } from "@/data/about";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import PrimaryButton from "@/components/custom/PrimaryButton";

const { subtitle, heading, body, talents, ctaLabel, ctaHref, image1, image2, decoImage } =
  aboutTalentsData;

export default function AboutTalentsSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const decoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          // img-left: parallax lên (tương tự homepage AboutSection — rotateY -10deg giữ nguyên CSS)
          gsap.fromTo(
            img1Ref.current,
            { y: 80 },
            {
              y: -80,
              ease: "none",
              scrollTrigger: {
                trigger: img1Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 3,
              },
            }
          );
          // img-right: parallax ngược chiều (xuống khi scroll lên)
          gsap.fromTo(
            img2Ref.current,
            { y: -80 },
            {
              y: 80,
              ease: "none",
              scrollTrigger: {
                trigger: img2Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 3,
              },
            }
          );
          // deco: xoay nhẹ + float
          gsap.fromTo(
            decoRef.current,
            { y: -40, rotate: 0 },
            {
              y: 40,
              rotate: 10,
              ease: "none",
              scrollTrigger: {
                trigger: decoRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            }
          );
        });
      });
    });
    return () => ctx.revert?.();
  }, []);

  return (
    <section className="about-talents" ref={sectionRef}>
      <div className="about-talents__inner">
        {/* Left: text + icon boxes */}
        <div className="about-talents__left reveal">
          <p className="about-talents__subtitle">
            <i className="caren-icon caren-icon-breadcrumb" aria-hidden="true" />
            {subtitle}
          </p>
          <h2 className="about-talents__heading">{heading}</h2>
          <p className="about-talents__body">{body}</p>

          <div className="about-talents__items">
            {talents.map((t, i) => (
              <div className="about-talents__item" key={i}>
                <div className="about-talents__item-icon">
                  <i className={`caren-icon ${t.icon}`} aria-hidden="true" />
                </div>
                <div className="about-talents__item-content">
                  <h3 className="about-talents__item-title">{t.title}</h3>
                  <p className="about-talents__item-desc">{t.description}</p>
                </div>
              </div>
            ))}
          </div>

          <PrimaryButton href={ctaHref} label={ctaLabel} />
        </div>

        {/* Right: tilted photos */}
        <div className="about-talents__right">
          <img
            ref={decoRef}
            src={decoImage}
            alt=""
            width={188}
            height={188}
            className="about-talents__deco"
            aria-hidden="true"
          />
          <img
            ref={img1Ref}
            src={image1}
            alt="Electrician at work"
            width={400}
            height={566}
            className="about-talents__img-left"
          />
          <img
            ref={img2Ref}
            src={image2}
            alt="Electrical installation"
            width={400}
            height={566}
            className="about-talents__img-right"
          />
        </div>
      </div>
    </section>
  );
}
