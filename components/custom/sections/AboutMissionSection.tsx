"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { aboutMissionData } from "@/data/about";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const {
  subtitle,
  heading,
  subheading,
  body,
  checklist,
  mainImage,
  decoImage3,
  decoCircle,
  bannerDeco,
} = aboutMissionData;

export default function AboutMissionSection() {
  const sectionRef = useScrollReveal() as React.MutableRefObject<HTMLElement>;
  const mainImgRef = useRef<HTMLImageElement>(null);
  const decoCircleRef = useRef<HTMLImageElement>(null);
  const bannerDecoRef = useRef<HTMLImageElement>(null);
  const deco3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx: { revert?: () => void } = {};
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          // Main image — parallax từ trên xuống (dịch chuyển lên khi scroll)
          gsap.fromTo(
            mainImgRef.current,
            { y: 60 },
            {
              y: -60,
              ease: "none",
              scrollTrigger: {
                trigger: mainImgRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 3,
              },
            }
          );
          // Deco circle — chuyển động ngược chiều (xuống khi scroll lên)
          gsap.fromTo(
            decoCircleRef.current,
            { y: -40 },
            {
              y: 40,
              ease: "none",
              scrollTrigger: {
                trigger: decoCircleRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2.5,
              },
            }
          );
          // Banner deco — chuyển động xoay nhẹ + dọc
          gsap.fromTo(
            bannerDecoRef.current,
            { y: -30, rotate: 0 },
            {
              y: 30,
              rotate: 6,
              ease: "none",
              scrollTrigger: {
                trigger: bannerDecoRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
              },
            }
          );
          // Deco-3 bottom — parallax nhẹ ngược
          gsap.fromTo(
            deco3Ref.current,
            { y: 30 },
            {
              y: -30,
              ease: "none",
              scrollTrigger: {
                trigger: deco3Ref.current,
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
    <section className="about-mission" ref={sectionRef}>
      <div className="about-mission__inner">
        {/* Top centered heading */}
        <div className="about-mission__top-heading">
          <h2 className="about-mission__top-title">{subtitle}</h2>
        </div>

        {/* 2-col layout */}
        <div className="about-mission__cols">
          {/* Left: images */}
          <div className="about-mission__img-col">
            {/* Small banner deco — absolute top-right */}
            <img
              ref={bannerDecoRef}
              src={bannerDeco}
              alt=""
              width={85}
              height={161}
              className="about-mission__banner-deco"
              aria-hidden="true"
            />
            {/* Circle deco — absolute top-left overlap */}
            <img
              ref={decoCircleRef}
              src={decoCircle}
              alt=""
              width={376}
              height={376}
              className="about-mission__deco-circle"
              aria-hidden="true"
            />
            {/* Main photo — align flex-end, padding-right */}
            <img
              ref={mainImgRef}
              src={mainImage}
              alt="Electrician on site"
              width={700}
              height={700}
              className="about-mission__main-img"
            />
            {/* Bottom deco-3 — absolute bottom-right */}
            <img
              ref={deco3Ref}
              src={decoImage3}
              alt=""
              width={671}
              height={404}
              className="about-mission__deco-3"
              aria-hidden="true"
            />
          </div>

          {/* Right: text */}
          <div className="about-mission__text-col reveal">
            <h2 className="about-mission__heading">{heading}</h2>
            <h5 className="about-mission__subheading">{subheading}</h5>
            <div className="about-mission__body">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="about-mission__checklist">
              {checklist.map((item, i) => (
                <li key={i}>
                  <svg viewBox="0 0 512 512" aria-hidden="true">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
