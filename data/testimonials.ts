export interface Testimonial {
  name: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Chaim E. — Manhattan, NY",
    content:
      "I called up Conquest Electric with quite an obscure question about the voltage of my waffle maker and I received fantastic advice, spot on, short, sweet and to the point. Thank you Roman! Highly recommended.",
  },
  {
    name: "Mike G. — Manhattan, NY",
    content:
      "Roman was incredible helping me trouble shoot the electrical issues that surfaced out of nowhere in my landmarked brownstone. He was fast, on time, and funny. Highly recommend him and the team at Conquest Electric!",
  },
  {
    name: "Sureiny F. — Manhattan, NY",
    content:
      "The response time to emails and calls was very quick and the electrician who completed the work was very efficient and friendly. He definitely found the right solutions to my problem — another electrician kept giving excuses on why the work could not be done. Very pleased!",
  },
];

export const testimonialsSectionContent = {
  subtitle: "Our clients",
  heading: "Here's what New Yorkers say about us",
  rating: "5.0",
  avatars: [
    "/images/testimo-avatar-4.jpg",
    "/images/testimo-avatar-5.jpg",
    "/images/testimo-avatar-6.jpg",
  ],
  sideImage: "/images/AdobeStock_913726797-e1774388913262.jpg",
};
