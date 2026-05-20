// Image registry — Conquest Electric
// [TODO: Replace all AdobeStock placeholders with real Conquest Electric job photos]

export const images = {
  // Logo
  logo: "/images/conquest-electric-logo.webp", // [TODO: Add Conquest Electric logo file]

  // Hero slider backgrounds (3 slides)
  heroSlide1: "/images/AdobeStock_982649324-1.jpg",
  heroSlide2: "/images/AdobeStock_544198882.jpg",
  heroSlide3: "/images/AdobeStock_622443208.jpg",

  // About / How We Can Help section
  aboutHero: "/images/AdobeStock_1734606702.jpg",
  aboutBanner: "/images/about-baner-3.png",
  aboutOverlay: "/images/AdobeStock_1792070898-2.jpg",

  // What We Do / Process section
  processCommercial: "/images/AdobeStock_897898547.jpg",
  processIndustrial: "/images/AdobeStock_581581163.jpg",
  processResidential: "/images/AdobeStock_1511326026.jpg",

  // "What We Do" section image (square)
  whatWeDo: "/images/AdobeStock_1861036262-e1774388962336.jpg",

  // Testimonials section
  testimonialsSide: "/images/AdobeStock_913726797-e1774388913262.jpg",
  testimonialAvatar1: "/images/testimo-avatar-4.jpg",
  testimonialAvatar2: "/images/testimo-avatar-5.jpg",
  testimonialAvatar3: "/images/testimo-avatar-6.jpg",

  // FAQ section
  faqImage: "/images/h4-banner-06.jpg",

  // Gallery / Past Projects (lopo = local project photos)
  gallery1: "/images/lopo1-1.jpg",
  gallery2: "/images/lopo2.jpg",
  gallery3: "/images/lopo3.jpg",
  gallery4: "/images/lopo4.jpg",
  gallery5: "/images/lopo5.jpg",
  gallery6: "/images/lopo6.jpg",
  gallery7: "/images/lopo7.jpg",
  gallery8: "/images/lopo8-1.jpg",
  gallery9: "/images/adaddda-1.jpg",

  // Services section — đúng thứ tự từ HTML gốc
  serviceResidential:  "/images/AdobeStock_1661331836-1.jpg",
  serviceCommercial:   "/images/AdobeStock_1738812468-e1774389187161.jpg",
  serviceEV:           "/images/AdobeStock_830008704-1.jpg",
  serviceSmart:        "/images/AdobeStock_1429423159.jpg",
  serviceDiagnostics:  "/images/AdobeStock_1568613684.jpg",
  serviceEngineering:  "/images/AdobeStock_1781483078.jpg",
  serviceGenerator:    "/images/generator-1.jpg",
  serviceMisc:         "/images/AdobeStock_1370273000-1.jpg",

  // Decorative
  decoBg: "/images/h4-deco-1-min.png",
} as const;

export type ImageKey = keyof typeof images;
