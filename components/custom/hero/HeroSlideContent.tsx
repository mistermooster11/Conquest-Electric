import { forwardRef } from "react";
import type { HeroSlide } from "@/data/hero";

interface HeroSlideContentProps {
  slide: HeroSlide;
}

export const HeroSlideContent = forwardRef<HTMLDivElement, HeroSlideContentProps>(
  ({ slide }, ref) => (
    <div className="hero-content" ref={ref}>
      <h1 className="hero-title hero-animate">{slide.title}</h1>
      <p className="hero-description hero-animate">{slide.desc}</p>
    </div>
  )
);

HeroSlideContent.displayName = "HeroSlideContent";
