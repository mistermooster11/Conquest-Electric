"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal — GSAP scroll-triggered fade-up animation
 * Matches the original site's `opal-move-up` Elementor animation.
 *
 * Usage: const ref = useScrollReveal();
 * Attach ref to the section or container you want to animate.
 * Children with class `.reveal` will animate in on scroll.
 */
export function useScrollReveal(selector = ".reveal") {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const targets = el.querySelectorAll<HTMLElement>(selector);
        if (!targets.length) {
          // Animate the container itself if no children tagged
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          );
        } else {
          targets.forEach((target, i) => {
            gsap.fromTo(
              target,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: i * 0.1,
                ease: "power2.out",
                scrollTrigger: { trigger: target, start: "top 88%" },
              }
            );
          });
        }
      });
    });
  }, [selector]);

  return ref;
}
