// Hero slider data — 3 slides
// Hero slider — Conquest Electric

import { images } from "@/data/images";

export interface HeroSlide {
  bg: string;
  title: string;
  desc: string;
}

export const heroSlides: HeroSlide[] = [
  {
    bg: images.heroSlide1,
    title: "Your Manhattan Electricians",
    desc: "5-star electrical contractor serving New York, New Jersey, and surrounding areas — residential, commercial, and EV charging.",
  },
  {
    bg: images.heroSlide2,
    title: "Your Manhattan Electricians",
    desc: "5-star electrical contractor serving New York, New Jersey, and surrounding areas — residential, commercial, and EV charging.",
  },
  {
    bg: images.heroSlide3,
    title: "Your Manhattan Electricians",
    desc: "5-star electrical contractor serving New York, New Jersey, and surrounding areas — residential, commercial, and EV charging.",
  },
];
