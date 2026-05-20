# Template Map: Medium Size Business
**Framework**: Next.js 16 App Router  
**Styling**: Tailwind CSS v4 + per-page CSS stylesheets in `/styles/`  
**Package Manager**: pnpm  
**Key Libraries**: GSAP (hero animations), Swiper, Lucide React  
**Architecture**: Data-driven — nearly all client content lives in `/data/` files; components just render it  
**Last Mapped**: 2026-05-12

---

## Quick Reference

This template is purpose-built for skilled trade businesses (originally cloned from an electrician). Almost everything a repositioner needs to change lives in the `/data/` folder — 13 typed TypeScript files covering every section of every page. The `data/images.ts` file is the single source of truth for all image paths, meaning swapping images only requires editing one file. The two notable exceptions are the contact page (hardcoded contact info and iframe form IDs inside the section components) and the `/apply-now` page (fully hardcoded — repurpose as "Get a Quote" or remove). Nav items and dropdown services are also data-driven via `data/nav.ts`.

---

## Pages & Routes

| Route | Purpose | Data File(s) | Hardcoded Content? |
|-------|---------|--------------|-------------------|
| `/` | Homepage | `data/hero.ts`, `data/about.ts`, `data/services.ts`, `data/process.ts`, `data/whatWeDo.ts`, `data/projects.ts`, `data/since.ts`, `data/testimonials.ts`, `data/content.ts` | Minimal — sections assembled in `app/page.tsx` |
| `/about-us` | About Us page | `data/about.ts` | No — fully data-driven |
| `/services` | Services catalog grid | `data/services.ts` | No — fully data-driven |
| `/service/[slug]` | Service detail page | `data/serviceDetails.ts` | No — driven by `serviceDetails[]` array |
| `/contact-us` | Contact page | None | **Yes** — address, phone, email, LeadConnector form ID, Google Maps embed hardcoded in components |
| `/apply-now` | Job application page | None | **Yes — fully hardcoded.** Repurpose as "Get a Quote" or remove for trade clients |

---

## Data Files — Content Slots

### `data/images.ts`
_Central image registry — ALL image paths go here. Components import from this file. Change images here only._

| Key | What It Shows | Current Placeholder |
|-----|--------------|---------------------|
| `logo` | Header + footer logo | `/images/carpenter-electric-logo.webp` |
| `heroSlide1/2/3` | Hero slider backgrounds (3 slides) | AdobeStock electrician job site photos |
| `aboutHero` | About section (homepage) feature image | AdobeStock electrician photo |
| `aboutBanner` | About page decorative banner | `/images/about-baner-3.png` |
| `aboutOverlay` | About section overlay image | AdobeStock photo |
| `processCommercial/Industrial/Residential` | Process section tab backgrounds | AdobeStock photos per category |
| `whatWeDo` | "What We Do" section square image | AdobeStock photo |
| `testimonialsSide` | Testimonials section side image | AdobeStock photo |
| `faqImage` | FAQ section image | `/images/h4-banner-06.jpg` |
| `gallery1–9` | Past projects photo grid | Generic electrician job photos |
| `serviceResidential/Commercial/EV/Smart/Diagnostics/Engineering/Generator/Misc` | Services slider + services page grid | AdobeStock per service |
| `decoBg` | Decorative background element | `/images/h4-deco-1-min.png` |

---

### `data/hero.ts`
_Controls the 3-slide animated hero carousel (GSAP Ken Burns effect)._

| Field | Type | Notes |
|-------|------|-------|
| `heroSlides[].bg` | string | Image key from `data/images.ts` (e.g. `images.heroSlide1`) |
| `heroSlides[].title` | string | Main headline — shown on all 3 slides |
| `heroSlides[].desc` | string | Subheading — shown on all 3 slides |

**Note:** All 3 slides currently share the same title and desc. Can differ per slide if desired.

---

### `data/nav.ts`
_Controls all nav items — desktop and mobile read from this same file._

| Export | Fields | Notes |
|--------|--------|-------|
| `nav[]` | `label`, `href`, `hasDropdown?` | Top-level nav links. Set `hasDropdown: true` on the Services item to enable the dropdown |
| `services[]` | `label`, `href` | Populates the Services dropdown. Replace with client's actual services + slugs |

**Current nav items:** Home, About Us, Services (dropdown), Safety, Testimonials, Contact Us, Apply Now  
**Recommended for trade clients:** Home, About Us, Services (dropdown), Contact Us, Get a Quote — remove Safety/Testimonials/Apply Now or rename as needed

---

### `data/footer.ts`
_All footer content — fully data-driven._

| Field | Type | Notes |
|-------|------|-------|
| `top.subtitle` | string | Badge label above headline (e.g. "Work With Us") |
| `top.heading` | string | Footer CTA headline |
| `top.button.label / .href` | string | CTA button |
| `brand.about` | string | Service area description paragraph |
| `brand.socials[]` | array | `name`, `href` — Facebook, X-Twitter, LinkedIn, Instagram |
| `pages.links[]` | array | Footer page nav links (label + href) |
| `contact.address` | string | Physical address |
| `contact.phone` | string | Phone number |
| `contact.email` | string | Email address |
| `contact.license` | string | License number (e.g. EC13011405) |
| `newsletter.heading` | string | Newsletter section label |
| `bottom.copyright` | string | Copyright line |

---

### `data/about.ts`
_Two sections: homepage "How We Can Help" block + full About Us page content._

**Homepage About Section:**

| Field | Type | Notes |
|-------|------|-------|
| `aboutChecklist[]` | string[] | 4 bullet points shown as checkmarks |
| `aboutContent.subtitle` | string | Small badge label |
| `aboutContent.heading` | string | Section headline |
| `aboutContent.body` | string | Paragraph copy |
| `aboutContent.cta.label / .href` | string | "More About Us" button |

**About Us Page — Mission Section:**

| Field | Type | Notes |
|-------|------|-------|
| `aboutMissionData.subtitle` | string | Small badge |
| `aboutMissionData.heading` | string | "OUR MISSION:" |
| `aboutMissionData.subheading` | string | Tagline (e.g. "We wire the impossible.") |
| `aboutMissionData.body[]` | string[] | 3–4 paragraphs |
| `aboutMissionData.checklist[]` | string[] | 4 value-prop bullets |
| `aboutMissionData.mainImage` | string | Main image path |

**About Us Page — Stats Section:**

| Field | Type | Notes |
|-------|------|-------|
| `aboutStatsData.subtitle / heading / headingHighlight / body` | string | Section copy |
| `aboutStatsData.counters[]` | array | `label`, `title`, `prefix`, `value`, `suffix` — animated counters |
| `aboutStatsData.ctaLabel / ctaHref` | string | CTA button |

**About Us Page — Talents Section:**

| Field | Type | Notes |
|-------|------|-------|
| `aboutTalentsData.subtitle / heading / body` | string | Section intro |
| `aboutTalentsData.talents[]` | array | `icon`, `title`, `description` — 2 USP cards |
| `aboutTalentsData.image1 / image2` | string | Two image paths |

**About Us Page — Testimonials Section:**

| Field | Type | Notes |
|-------|------|-------|
| `aboutTestimonialsData.testimonials[]` | array | `name`, `content` — carousel quotes |
| `aboutTestimonialsData.googleReviews[]` | array | `name`, `avatar` (URL), `text` — Google review cards |
| `aboutTestimonialsData.rating` | string | Star rating displayed |

---

### `data/services.ts`
_Homepage services slider + full services page grid._

**Homepage Services Slider:**

| Field | Type | Notes |
|-------|------|-------|
| `servicesContent.subtitle / heading / body` | string | Section intro copy |
| `servicesList[]` | array | `title`, `href`, `imgKey` (references `data/images.ts` key) |

**Services Page Grid:**

| Field | Type | Notes |
|-------|------|-------|
| `servicesPageData.subtitle / heading` | string | Page intro |
| `servicesPageData.services[]` | array | `title`, `slug`, `image` (path), `excerpt` |

---

### `data/serviceDetails.ts`
_All individual service detail pages — fully data-driven via `[slug]` route._

| Field | Type | Notes |
|-------|------|-------|
| `serviceDetails[].slug` | string | URL slug — must match entry in `data/nav.ts` services[] and `data/services.ts` |
| `serviceDetails[].title` | string | Page title + breadcrumb |
| `serviceDetails[].metaDescription` | string | SEO meta description |
| `serviceDetails[].content[]` | ContentBlock[] | Flexible content blocks: `image`, `h2`, `h3`, `paragraph`, `list` |
| `servicesSidebarLinks[]` | array | Sidebar nav shown on all service detail pages — must match services list |

**To add a new service:** (1) Add entry to `serviceDetails[]`, (2) add to `servicesSidebarLinks[]`, (3) add to `data/nav.ts` services[], (4) add to `data/services.ts` servicesList[] and servicesPageData.services[].

---

### `data/testimonials.ts`
_Homepage testimonials carousel._

| Field | Type | Notes |
|-------|------|-------|
| `testimonials[]` | array | `name`, `content` — carousel items |
| `testimonialsSectionContent.subtitle / heading / rating` | string | Section header |
| `testimonialsSectionContent.sideImage` | string | Side image path |
| `testimonialsSectionContent.avatars[]` | string[] | 3 avatar image paths |

---

### `data/process.ts`
_"Process" section — 3 tabbed categories with crossfade background images._

| Field | Type | Notes |
|-------|------|-------|
| `processTabs[].index` | string | Tab number label ("01", "02", "03") |
| `processTabs[].title` | string | Tab name (e.g. "Commercial") |
| `processTabs[].href` | string | Link to service page |
| `processTabs[].items[]` | string[] | Sub-services listed under this tab |
| `processTabs[].bgKey` | string | Image key from `data/images.ts` |

---

### `data/projects.ts`
_Past projects / portfolio gallery grid (6 items)._

| Field | Type | Notes |
|-------|------|-------|
| `projects[].id` | string | Unique key |
| `projects[].title` | string | Project title |
| `projects[].location` | string | City/area (replace "London" placeholders!) |
| `projects[].href` | string | Link — set to `#` if no detail page |
| `projects[].image` | string | Image path |
| `projectsSectionContent.subtitle / heading` | string | Section header |

⚠️ **Watch out:** Current placeholder locations say "London" — always replace with real client city.

---

### `data/since.ts`
_"Since [Year]" trust section (appears between projects and testimonials on homepage)._

| Field | Type | Notes |
|-------|------|-------|
| `sinceSectionContent.heading` | string | Section headline (e.g. "ELECTRICAL SOLUTIONS SINCE 1982") |
| `sinceSectionContent.paragraphs[]` | string[] | 2 paragraphs of brand story copy |
| `sinceSectionContent.button.label / .href` | string | CTA button |

---

### `data/whatWeDo.ts`
_"What We Do" icon box section (3 value props)._

| Field | Type | Notes |
|-------|------|-------|
| `whatWeDoContent.subtitle / heading` | string | Section header |
| `whatWeDoContent.cta.label / .href` | string | CTA button |
| `iconBoxes[]` | array | `id`, `iconClass`, `title`, `desc` — 3 USP icon cards |

---

### `data/content.ts`
_Shared/legacy data — some sections also have their own dedicated file._

| Field | Type | Notes |
|-------|------|-------|
| `testimonials[]` | array | Duplicate of `data/testimonials.ts` — use `testimonials.ts` as primary |
| `faqs[]` | array | `question`, `answer` — FAQ accordion items |
| `stats[]` | array | `prefix`, `value`, `suffix`, `label`, `sub` — animated stat counters |

---

## Hardcoded Components (Require Direct Editing)

| Component | What to Change | Effort |
|-----------|---------------|--------|
| `components/custom/header/HeaderTopbar.tsx` | License#, email address, physical address | Low — 3 strings |
| `components/custom/header/MobileMenu.tsx` | Phone number (`tel:561-848-7881` hardcoded) | Low — 1 string |
| `components/custom/sections/ContactFormSection.tsx` | Service area description, LeadConnector form iframe `src` and `data-form-id`, Google Maps embed `src` URL | Medium |
| `components/custom/sections/ContactInfoSection.tsx` | Address, phone, email, license# (all hardcoded — not pulled from `data/footer.ts`) | Low — 4 strings |
| `components/custom/sections/ApplyNowSection.tsx` | Entire page — repurpose as "Get a Quote" form or remove entirely | High (full rewrite) |
| `app/layout.tsx` | Site `<title>` and `description` metadata | Low |

---

## Navigation

- **Main nav file**: `data/nav.ts` (exports `nav[]` and `services[]`)
- **Nav type**: Flat links + one hover dropdown (Services)
- **Desktop nav**: `components/custom/header/DesktopNav.tsx` — reads `data/nav.ts`
- **Mobile nav**: `components/custom/header/MobileMenu.tsx` — reads `data/nav.ts`, has hardcoded phone number
- **Dropdown**: Only one dropdown supported (Services). Triggered by `hasDropdown: true` on nav item
- **Optimal for trade clients**: 5–6 items — `[Home, About Us, Services▾, Contact Us, Get a Quote]`
- **Current items**: Home, About Us, Services (8-item dropdown), Safety, Testimonials, Contact Us, Apply Now

---

## Image Slots

| Slot | Data Source | Current Placeholder | Notes |
|------|------------|---------------------|-------|
| Logo (header + footer) | `data/images.ts → images.logo` | `/images/carpenter-electric-logo.webp` | Replace `.webp` file or update path |
| Hero slide 1–3 backgrounds | `data/images.ts → heroSlide1/2/3` | AdobeStock job site photos | 3 images for the carousel |
| Homepage about section | `data/images.ts → aboutHero` | AdobeStock electrician photo | |
| Process tab backgrounds | `data/images.ts → processCommercial/Industrial/Residential` | AdobeStock per category | 3 images — one per tab |
| "What We Do" section | `data/images.ts → whatWeDo` | AdobeStock square photo | |
| Testimonials side image | `data/images.ts → testimonialsSide` | AdobeStock portrait/job photo | |
| FAQ section image | `data/images.ts → faqImage` | `/images/h4-banner-06.jpg` | |
| Projects gallery (6 slots) | `data/projects.ts → projects[].image` | Generic lopo1–8 photos | Replace with client's actual project photos |
| Services carousel | `data/images.ts → service*` keys | AdobeStock per service | 8 service images |
| About Us main image | `data/about.ts → aboutMissionData.mainImage` | `/images/AdobeStock_656843423.jpg` | |
| About Us talents section | `data/about.ts → aboutTalentsData.image1 / image2` | AdobeStock photos | 2 images |
| Avatar photos | `data/testimonials.ts → testimonialsSectionContent.avatars[]` | 3 stock headshots | |

---

## Pages Not Included (Common Additions for Trade Clients)

| Page | Path | When to Add |
|------|------|-------------|
| Service Areas | `/service-areas` | When client covers multiple cities/regions |
| Blog | `/blog` | When client wants SEO content |
| FAQs (standalone) | `/faqs` | FAQ data exists in `data/content.ts` — easy standalone page |
| Gallery | `/gallery` | Template has 6-slot project grid on homepage; expand to full gallery page if needed |

---

## Repositioning Checklist

Use this checklist for every client build with this template:

**Data files (start here — lowest risk, highest leverage):**
- [ ] `data/images.ts` — swap logo, hero images, service images, gallery photos
- [ ] `data/hero.ts` — update headline, subheading, and slide background keys
- [ ] `data/nav.ts` — update nav labels and service dropdown links to match client's services
- [ ] `data/footer.ts` — update all contact info, service area blurb, socials, copyright
- [ ] `data/about.ts` — update all about section copy (homepage block + full about page)
- [ ] `data/services.ts` — replace service list (homepage slider + services page grid)
- [ ] `data/serviceDetails.ts` — replace all service detail entries + sidebar links
- [ ] `data/testimonials.ts` — replace with client's real reviews
- [ ] `data/content.ts` — update FAQs and stats
- [ ] `data/process.ts` — update tab categories and sub-items to match client's service groupings
- [ ] `data/projects.ts` — replace project titles, locations (remove "London"!), and images
- [ ] `data/since.ts` — update founding year, brand story paragraphs
- [ ] `data/whatWeDo.ts` — update 3 value prop cards

**Hardcoded components:**
- [ ] `components/custom/header/HeaderTopbar.tsx` — license#, email, address
- [ ] `components/custom/header/MobileMenu.tsx` — phone number
- [ ] `components/custom/sections/ContactFormSection.tsx` — service area description, LeadConnector form ID, Google Maps embed
- [ ] `components/custom/sections/ContactInfoSection.tsx` — address, phone, email, license#
- [ ] `components/custom/sections/ApplyNowSection.tsx` — repurpose as "Get a Quote" or remove

**Metadata:**
- [ ] `app/layout.tsx` — site title + meta description
- [ ] `app/about-us/page.tsx` — page title + meta description
- [ ] `app/services/page.tsx` — page title + meta description
- [ ] `app/contact-us/page.tsx` — page title + meta description

**Service detail pages (data-driven — update in `data/serviceDetails.ts`):**
- [ ] Add client's actual services with real slugs, titles, meta descriptions, and content blocks
- [ ] Ensure slugs match entries in `data/nav.ts → services[]` and `data/services.ts → servicesList[]`

**Homepage sections to review:**
- [ ] `app/page.tsx` — uncomment `<WorkWithUsSection />` if desired, or remove unused sections

---

## Conceptual Remapping

_This template was built for an electrician — directly applicable to all skilled trades with minimal remapping._

| Template Concept | Other Trade Equivalent |
|-----------------|------------------------|
| "Electrical Solutions" | "[Trade] Solutions" (Plumbing, HVAC, Roofing, etc.) |
| "Since 1982" | Replace with client's actual founding year |
| "EV Charging / Smart Home" | Remove or replace with trade-specific services |
| "Apply Now" (job board) | "Get a Quote" / "Book a Service" / remove entirely |
| "Safety" (nav item) | Remove or rename to "Our Process" / "Why Us" |
| License# (EC13011405) | Replace with client's actual trade license number |
| Service area (Stuart–Miami + Bahamas) | Replace with client's actual coverage area |
