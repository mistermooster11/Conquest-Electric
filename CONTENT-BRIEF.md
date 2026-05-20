# Conquest Electric — Content Brief
**QuickFlip Sites | Build Log**
Date: 2026-05-20
Prospect: https://conquestelectric.com/
Template: Medium Size Business
Reference site: N/A

---

## Source Material Summary

- **Business name**: Conquest Electric
- **Phone**: 212-301-6225
- **Email**: service@conquestelectric.com
- **Service area**: Manhattan, New York City, New Jersey, and surrounding areas
- **Rating**: 5-star (stated on site as "5 star electrical contractor")
- **Key person**: Roman (mentioned by multiple reviewers — appears to be lead tech/owner)
- **Instagram**: https://www.instagram.com/conquestelectric/
- **Other socials**: Not found — Facebook, Twitter, LinkedIn marked as TODO
- **Physical address**: Not listed on site — service-area only business
- **Founding year**: Not listed on site — TODO to confirm with client
- **License number**: Not listed on site — TODO to confirm NY electrical license
- **Business hours**: Not listed — TODO to confirm with client
- **Notable commercial clients**: Disney, Pandora (logo wall on about page)

---

## Service Inventory

Services as listed on conquestelectric.com/our-services/:

**Residential:**
1. Residential - New Installation
2. Residential - Existing Repairs
3. Residential - Maintenance

**Commercial:**
4. Commercial - New Installation
5. Commercial - Existing Repairs
6. Commercial - Maintenance
7. Commercial - Power Outage & Emergency Repairs

**EV Chargers:**
8. EV Chargers - Quotes & Consultation
9. EV Chargers - Commercial Space Installation
10. EV Chargers - In-Home Charger Installation
11. EV Chargers - Apartment Building Installation

**Additional Services:**
12. Troubleshooting and Repair
13. Landscape Lighting
14. Service Upgrade
15. Indoor/Outdoor Lighting
16. Emergency Service Calls
17. Lighting Solutions
18. CCTV Installation
19. Private Client N.D.A.
20. Restaurant Equipment Installation
21. Lighting Maintenance
22. Outlets, Switches, Electrical Panels Upgrade
23. Medical Equipment Installation
24. Office Desk Connections
25. Internet Wiring

---

## Services Consolidated

The prospect lists 25 granular service items. These were consolidated into 8 coherent service pages to match the template's 8-slot structure:

| Built Service Page | Source Items Included |
|---|---|
| Residential Electrical | Items 1–3, 12, 13, 15, 17, 21, 22 |
| Commercial Electrical | Items 4–7, 20, 23, 24 |
| EV Charging Stations | Items 8–11 |
| Lighting Solutions | Items 13, 15, 17, 21 |
| Emergency Services | Items 7, 12, 16 |
| Panel & Service Upgrades | Items 14, 22 |
| CCTV & Low Voltage | Items 18, 25, 24 |
| Specialty Installations | Items 19, 20, 23 |

All 25 source items are covered across the 8 service pages. No service was silently dropped.

---

## Pages Built & Content Decisions

**Homepage (`app/page.tsx`):** Retained all standard sections — Hero, About, Services, Process, WhatWeDo, Projects, Since, Testimonials. WorkWithUsSection remains commented out (unused).

**About Us (`data/about.ts`):** Used Conquest Electric's own language from their about page. Mission statement, tagline ("One stop for all your electrical needs"), and checklist pulled directly from source. Stats section updated — founding year and exact project count not available; marked as TODO. Google reviews section replaced with Conquest Electric reviews from testimonials page.

**Services (`data/services.ts`, `data/serviceDetails.ts`):** All 25 source services mapped to 8 pages. Each service page has a headline, description (from source where available, generated for gaps), and bulleted list of what's included.

**Testimonials (`data/testimonials.ts`):** Replaced with 3 real Conquest Electric reviews (Chaim E., Mike G., Sureiny F.) extracted from their testimonials page. Rating changed from 4.8 to 5.0 to match their stated "5-star" positioning.

**Projects (`data/projects.ts`):** All "London" locations replaced with NYC/NJ locations. Project titles updated to match Conquest Electric's actual service types. All images flagged as TODO for replacement with real job photos.

**Process tabs (`data/process.ts`):** Remapped to Residential / Commercial / EV Charging to match Conquest Electric's three main service categories.

**Since section (`data/since.ts`):** Founding year unknown — rewritten around "5-star" positioning without a year reference. TODO for client to provide founding year.

---

## Navigation Changes

**Removed:** Safety, Testimonials, Apply Now (not applicable for this client)
**Added:** EV Chargers (prominent dedicated nav item — mirrors the original site's nav structure)
**Final nav:** Home | About Us | Services (dropdown) | EV Chargers | Contact Us

---

## Copy Generation Log

The following copy was generated (not extracted from source) due to content gaps:

1. **Service detail page descriptions** — Conquest Electric's site does not have individual service detail pages. All service page body copy was generated from the source's top-level service listing and the Trade Content Library (Electrician section). Each service retains all items from the Service Inventory.
2. **FAQ section** — Source site has no FAQ page. 6 FAQs generated based on common NYC electrician objections (service area, pricing, apartment buildings, brownstones, EV chargers).
3. **Process tabs** — Tab labels and sub-items generated from the service structure. Source site has no "process" section.
4. **Stats counters** — Exact client numbers not available. Counters set to 5-star rating, 2 states, 100+ clients. TODO to confirm with client.
5. **Since section paragraphs** — No founding year or brand story on source site. Copy generated around 5-star positioning.
6. **Project titles/locations** — No project gallery on source site. Titles assigned to match service types; locations set to NYC/NJ. All images flagged for replacement.

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | Created — disallows all (staging block) | TODO: Update for production domain |
| sitemap.ts | Created — covers all standard routes + 8 service slugs | TODO: Add production domain |
| LocalBusiness JSON-LD | Added to app/layout.tsx | Trade type: Electrician |
| Root metadata (title, description, OG, Twitter) | Done | |
| Production domain | TODO: confirm | |
| Business hours | TODO: confirm with client | |
| OG image (1200x630) | TODO: provide image | Path set to /og-image.jpg |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Conquest Electric logo file | `data/images.ts` → `logo` key | Replace `/images/conquest-electric-logo.webp` with actual logo |
| NY electrical license number | `HeaderTopbar.tsx`, `ContactInfoSection.tsx`, `data/footer.ts` | Add license# to all 3 locations |
| Facebook URL | `data/footer.ts` → `brand.socials` | Add real Facebook profile URL |
| Twitter/X URL | `data/footer.ts` → `brand.socials` | Add real Twitter/X profile URL or remove |
| LinkedIn URL | `data/footer.ts` → `brand.socials` | Add real LinkedIn URL or remove |
| Physical/mailing address | `data/footer.ts` → `contact.address` | Add if they have one; remove field if service-area only |
| Founding year | `data/since.ts` + `data/about.ts` counters | Update "Since" section and stats counter |
| Business hours | `app/layout.tsx` → JSON-LD `openingHours` | e.g. "Mo-Fr 08:00-18:00" |
| Review count | `app/layout.tsx` → JSON-LD `aggregateRating.ratingCount` | Total number of reviews |
| LeadConnector form ID | `ContactFormSection.tsx` | Replace `[TODO-FORM-ID]` with real GHL form ID |
| OG image (1200×630) | `public/og-image.jpg` | Create and place branded image for social sharing |
| Production domain | `app/robots.ts`, `app/sitemap.ts`, `app/layout.tsx` | Replace all `[TODO: production-domain]` |
| Project photos (×6) | `data/projects.ts` | Replace all `/images/lopo*.jpg` with real job photos |
| Hero slide images (×3) | `data/images.ts` → `heroSlide1/2/3` | Replace AdobeStock photos with Conquest Electric job site photos |
| Service images (×8) | `data/images.ts` → `service*` keys | Replace AdobeStock placeholders with relevant photos |
| Google Maps embed | `ContactFormSection.tsx` | Currently centered on Manhattan — confirm or replace with business address embed |
