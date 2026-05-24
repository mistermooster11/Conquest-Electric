export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Chaim E. — Manhattan, NY",
    rating: 5,
    text: "I called up Conquest Electric with quite an obscure question about the voltage of my waffle maker and I received fantastic advice, spot on, short, sweet and to the point. Thank you Roman! Highly recommended.",
    avatar: "/images/conquest-electric/Chaim-Ehrlich-500x380.png",
  },
  {
    name: "Mike G. — Manhattan, NY",
    rating: 5,
    text: "Roman was incredible helping me trouble shoot the electrical issues that surfaced out of nowhere in my landmarked brownstone. He was fast, on time, and funny. Highly recommend him and the team at Conquest Electric!",
    avatar: "/images/conquest-electric/mike-500x380.png",
  },
  {
    name: "Vivien C. — Nomad, Manhattan",
    rating: 5,
    text: "Roman was able to quickly diagnose and fix our problem on the same day that we called him. The pricing was exactly as discussed with no hidden fees. I would definitely recommend Conquest Electric and Roman to anyone in the area.",
    avatar: "/images/conquest-electric/Vivien-C.-500x380.png",
  },
  {
    name: "Sureiny F. — Manhattan, NY",
    rating: 5,
    text: "I had base lamps that needed to be installed and switches that needed to be replaced in two apartments for a production company. The response time to emails and calls was very quick and the electrician who completed the work was very efficient and friendly. He definitely found the right solutions to my problem. Very pleased!",
    avatar: "/images/conquest-electric/Sureiny-Fermin-500x380.png",
  },
  {
    name: "Kaitlyn A. — Upper West Side, NYC",
    rating: 5,
    text: "Conquest Electric did a fantastic job upgrading our electrical panel. Roman walked us through every step of the process, was on time, clean, and professional. Our building feels so much safer now. Will absolutely call them again.",
    avatar: "/images/conquest-electric/Kaitlyn-A.-500x380.png",
  },
  {
    name: "Philip F. — Brooklyn, NY",
    rating: 5,
    text: "Had an emergency at my office — total power failure at 6pm on a Friday. Roman picked up immediately and had someone on-site within the hour. Fixed the issue that same night. Genuinely saved us. Cannot recommend highly enough.",
    avatar: "/images/conquest-electric/Philip-Futernik-500x380.png",
  },
  {
    name: "Yishai B. — Midtown, Manhattan",
    rating: 5,
    text: "Used Conquest Electric for an EV charger installation at my home. They handled the permit process, coordinated with the building, and installed it cleanly and on schedule. Great communication throughout the whole project.",
    avatar: "/images/conquest-electric/Yishai-BootLair-500x380.png",
  },
];
