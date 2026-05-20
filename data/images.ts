// Image registry — Conquest Electric

export const images = {
  // Logo
  logo: "/images/conquest-electric-logo.webp", // [TODO: Add Conquest Electric logo file]

  // Hero slider backgrounds (3 slides)
  heroSlide1: "/images/conquest-electric/bigstock-Electrician-Works-With-Wires-A-332840290.jpg",
  heroSlide2: "/images/conquest-electric/bigstock-Electrician-Builder-At-Work-I-374832844-1.png",
  heroSlide3: "/images/conquest-electric/city-rush-ukraine.jpg",

  // About / How We Can Help section
  aboutHero: "/images/conquest-electric/Group-63-scaled.jpg",
  aboutBanner: "/images/about-baner-3.png",
  aboutOverlay: "/images/conquest-electric/about-image-2-366x424.jpg",

  // What We Do / Process section
  processResidential: "/images/conquest-electric/bigstock-Electrician-Builder-At-Work-I-374832844-3.png",
  processCommercial:  "/images/conquest-electric/Group-76.jpg",
  processIndustrial:  "/images/conquest-electric/electric-car.jpg",

  // "What We Do" section image (square)
  whatWeDo: "/images/conquest-electric/Manhattan-247-Electrical-Repair-768x510-1-480x480.jpg",

  // Testimonials section
  testimonialsSide:    "/images/conquest-electric/Group-69.jpg",
  testimonialAvatar1:  "/images/conquest-electric/Chaim-Ehrlich-500x380.png",
  testimonialAvatar2:  "/images/conquest-electric/mike-500x380.png",
  testimonialAvatar3:  "/images/conquest-electric/Sureiny-Fermin-500x380.png",
  testimonialAvatar4:  "/images/conquest-electric/Vivien-C.-500x380.png",
  testimonialAvatar5:  "/images/conquest-electric/Kaitlyn-A.-500x380.png",
  testimonialAvatar6:  "/images/conquest-electric/Christina-Wu-500x380.png",
  testimonialAvatar7:  "/images/conquest-electric/Philip-Futernik-500x380.png",
  testimonialAvatar8:  "/images/conquest-electric/Yishai-BootLair-500x380.png",

  // FAQ / established section
  faqImage:    "/images/conquest-electric/image.png",
  established: "/images/conquest-electric/established.png",

  // Gallery / Past Projects
  gallery1: "/images/conquest-electric/IMG_5027-1.jpg",
  gallery2: "/images/conquest-electric/Group-63-scaled.jpg",
  gallery3: "/images/conquest-electric/electric-car.jpg",
  gallery4: "/images/conquest-electric/Group-76.jpg",
  gallery5: "/images/conquest-electric/Rectangle-45-scaled.jpg",
  gallery6: "/images/conquest-electric/Group-66.jpg",
  gallery7: "/images/conquest-electric/bigstock-Electrician-Works-With-Wires-A-332840290.jpg",
  gallery8: "/images/conquest-electric/bigstock-Electrician-Builder-At-Work-I-374832844-1.png",
  gallery9: "/images/conquest-electric/AdobeStock_297192624-scaled.jpeg",

  // Services section
  serviceResidential: "/images/conquest-electric/bigstock-Electrician-Works-With-Wires-A-332840290.jpg",
  serviceCommercial:  "/images/conquest-electric/bigstock-Electrician-Builder-At-Work-I-374832844-1.png",
  serviceEV:          "/images/conquest-electric/electric-car.jpg",
  serviceSmart:       "/images/conquest-electric/Group-76.jpg",
  serviceDiagnostics: "/images/conquest-electric/IMG_5027-1.jpg",
  serviceEngineering: "/images/conquest-electric/Rectangle-45-scaled.jpg",
  serviceGenerator:   "/images/conquest-electric/Group-66.jpg",
  serviceMisc:        "/images/conquest-electric/AdobeStock_297192624-scaled.jpeg",

  // Client logos
  logoDisney:      "/images/conquest-electric/Disney.png",
  logoGoogle:      "/images/conquest-electric/Google-01-Converted.png",
  logoLV:          "/images/conquest-electric/Louis_Vuitton1.png",
  logoBocci:       "/images/conquest-electric/bocci.png",
  logoIGuzzini:    "/images/conquest-electric/iGuzzini.png",
  logoReiss:       "/images/conquest-electric/reiss-logo.png",
  logoUGG:         "/images/conquest-electric/ugg-vector-logo.png",

  // Decorative
  decoBg: "/images/h4-deco-1-min.png",
} as const;

export type ImageKey = keyof typeof images;
