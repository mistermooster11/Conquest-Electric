import React from "react";

interface NavArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
}

/**
 * Reusable prev/next navigation buttons using caren-icon font.
 * Usage:
 *   <NavArrows onPrev={prev} onNext={next} />
 *   <NavArrows onPrev={prev} onNext={next} className="my-custom-wrap" />
 */
export default function NavArrows({
  onPrev,
  onNext,
  className = "",
  prevLabel = "Previous",
  nextLabel = "Next",
}: NavArrowsProps) {
  return (
    <div className={`nav-arrows ${className}`.trim()}>
      <button className="nav-arrow" onClick={onPrev} aria-label={prevLabel}>
        <i className="caren-icon caren-icon-arrow-left" aria-hidden="true" />
      </button>
      <button className="nav-arrow" onClick={onNext} aria-label={nextLabel}>
        <i className="caren-icon caren-icon-arrow-right" aria-hidden="true" />
      </button>
    </div>
  );
}

/**
 * Ref-based variant — dùng khi cần gắn vào Swiper navigation (prevEl/nextEl).
 * Usage:
 *   const prevRef = useRef<HTMLButtonElement>(null);
 *   const nextRef = useRef<HTMLButtonElement>(null);
 *   <NavArrowsRef prevRef={prevRef} nextRef={nextRef} />
 */
interface NavArrowsRefProps {
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
}

export function NavArrowsRef({
  prevRef,
  nextRef,
  className = "",
  prevLabel = "Previous",
  nextLabel = "Next",
}: NavArrowsRefProps) {
  return (
    <div className={`nav-arrows ${className}`.trim()}>
      <button ref={prevRef} className="nav-arrow" aria-label={prevLabel}>
        <i className="caren-icon caren-icon-arrow-left" aria-hidden="true" />
      </button>
      <button ref={nextRef} className="nav-arrow" aria-label={nextLabel}>
        <i className="caren-icon caren-icon-arrow-right" aria-hidden="true" />
      </button>
    </div>
  );
}
