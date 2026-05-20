"use client";

interface HeroArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function HeroArrows({ onPrev, onNext }: HeroArrowsProps) {
  return (
    <div className="hero-arrows">
      <button className="hero-arrow-btn" onClick={onPrev} aria-label="Previous slide">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="hero-arrow-btn" onClick={onNext} aria-label="Next slide">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
