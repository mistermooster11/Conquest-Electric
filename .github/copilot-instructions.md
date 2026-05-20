# GitHub Copilot — Agent Instructions
# ═══════════════════════════════════════════════════════════════
# ⚠️  ĐÂY LÀ LUẬT TỐI CAO — Đọc toàn bộ file này trước khi
#     viết bất kỳ dòng code nào cho project này.
# ═══════════════════════════════════════════════════════════════

## 0 — Trước tiên: đọc tài liệu gốc

Mọi workflow, rule và pattern đều nằm trong `docs/flow-clone/`.
**Đọc theo thứ tự:**
1. `docs/flow-clone/1.guide-clone-ui.md` — index tổng quan + quick start
2. `docs/flow-clone/steps/step-1b-identify-techstack.md` — xác định Case A/B/C **trước khi viết code**
3. Tất cả 12 rules trong `docs/flow-clone/rules/`

---

## 1 — Tech Stack dự án này

- **Framework:** Next.js (App Router) — phiên bản trong `package.json`
- **Language:** TypeScript (strict)
- **CSS:** Tailwind CSS v4 — xem `docs/flow-clone/rules/rule-3-tailwind.md`
- **Package manager:** pnpm
- **Deploy:** Vercel

> ⚠️ Next.js App Router có thể khác với training data của bạn.
> Đọc `node_modules/next/dist/docs/` hoặc `AGENTS.md` khi không chắc về API.

---

## 2 — 12 Rules bắt buộc (tóm tắt — đọc file chi tiết trước khi code)

| # | Rule | Tóm tắt | Chi tiết |
|---|---|---|---|
| 1 | `"use client"` | Thêm khi có state/event/browser API — phải là dòng **đầu tiên** | `docs/flow-clone/rules/rule-1-use-client.md` |
| 2 | Image | `<Image>` cho ảnh local/whitelisted — `<img>` cho CDN ngoài | `docs/flow-clone/rules/rule-2-image.md` |
| 3 | CSS Strategy | **Case A** (WordPress): copy CSS gốc vào `styles/<page>.css`. **Case B** (Tailwind): Tailwind inline là chính | `docs/flow-clone/rules/rule-3-tailwind.md` |
| 4 | Link | `<Link>` cho route nội bộ — `<a>` cho URL ngoài | `docs/flow-clone/rules/rule-4-link.md` |
| 5 | Architecture | Parent gọn (chỉ orchestrate) — con độc lập. Tách file khi > 40 dòng JSX | `docs/flow-clone/rules/rule-5-component-architecture.md` |
| 6 | Fonts & Colors | **Không** hard-code hex/font-family — dùng CSS variables trong `globals.css` | `docs/flow-clone/rules/rule-6-fonts-colors.md` |
| 7 | Style Architecture | Mỗi page có 1 file `styles/<page>.css` riêng — import đúng nơi | `docs/flow-clone/rules/rule-7-style-architecture.md` |
| 8 | Data Layer | Component chỉ chứa JSX — nội dung tĩnh (danh sách, text, link) đặt trong `data/` | `docs/flow-clone/rules/rule-8-data-layer.md` |
| 9 | Layout Global | Header & Footer import **một lần duy nhất** trong `app/layout.tsx` | `docs/flow-clone/rules/rule-9-layout-global.md` |
| 10 | Dynamic Routes | `generateStaticParams` + `dynamicParams = false` cho mọi `[slug]` route | `docs/flow-clone/rules/rule-10-dynamic-routes.md` |
| 11 | Sections Folder | Section → `components/custom/sections/` + `export default`. Sub-component → named export | `docs/flow-clone/rules/rule-11-sections-folder.md` |
| 12 | Types | Shared types (≥2 nơi) → `lib/types/`. Single-use → inline tại data/component | `docs/flow-clone/rules/rule-12-types-organization.md` |

---

## 3 — Cấu trúc thư mục chuẩn

```
app/
  layout.tsx          ← Header + Footer ở đây (chỉ 1 lần duy nhất)
  page.tsx            ← Homepage — import sections + page CSS
  globals.css         ← CSS variables (@theme inline), base styles
  [route]/
    page.tsx          ← Import page CSS + sections

components/
  custom/
    sections/         ← Tất cả Section cấp 1 (export default *Section)
    header/           ← Header + sub-components (named exports)
    footer/           ← Footer + sub-components
    <feature>/        ← Component phức tạp có nhiều sub-files

data/                 ← Nội dung tĩnh: nav.ts, services.ts, locations.ts...
lib/
  types/              ← Shared TypeScript types (≥2 nơi sử dụng)
    index.ts          ← Barrel export
styles/               ← Per-page CSS files
  homepage.css
  services.css
  ...
```

---

## 4 — Quy trình clone một website mới

Luôn thực hiện theo đúng thứ tự trong `docs/flow-clone/1.guide-clone-ui.md`:

```
Step 1B → Step 1 → Step 2 → Step 2A → Step 2B → (đọc 12 rules)
→ Step 3 (convert section) → Step 3A (data fidelity) → Step 3B (visual QA)
→ Step 3C (inner pages) → Step 4 (final checklist) → Step 5 (deploy)
```

---

## 5 — Refactor / Fix section

Khi inspect và sửa một section đã convert, đọc:
`docs/flow-clone/2.fix-refactor-each-section.md`

**Nguồn truth duy nhất là `downloaded/` folder** — không bao giờ đoán.

---

## 6 — Lỗi thường gặp — tra cứu nhanh

Xem bảng đầy đủ tại `docs/flow-clone/reference/common-errors.md`

| Lỗi | Fix nhanh |
|---|---|
| `Event handlers cannot be passed to Client Component props` | Thêm `"use client"` dòng đầu file |
| `Invalid src prop on <Image>` | Dùng `<img>` hoặc whitelist domain trong `next.config.ts` |
| `Hydration failed` | Wrap dynamic logic trong `useEffect` |
| `flex-shrink-0` lint error | Tailwind v4: dùng `shrink-0` |
| CSS Modules bare selector `address {}` | Scope dưới local class: `.wrapper address {}` |
| `::before` overlay không hiện | Thêm `position: relative` vào element cha |
| Tailwind class không sinh ra | Dùng `@theme inline` (không phải `@theme`) trong `globals.css` |

---

## 7 — Checklist trước khi commit / deploy

Xem đầy đủ tại `docs/flow-clone/check-before-deploying.md`

- [ ] `pnpm build` không lỗi
- [ ] `/downloaded/` và `/docs/` đã trong `.gitignore`
- [ ] Không có file > 500KB bị stage
- [ ] Không hard-code hex color hoặc font-family
- [ ] Header/Footer chỉ import trong `layout.tsx`
- [ ] Mọi `data/*.ts` đã có TypeScript type

---

## 8 — Patterns tái sử dụng

Logo Marquee, Lightbox/Modal, Accordion FAQ, Counter, AOS animations:
→ `docs/flow-clone/patterns/common-patterns.md`

---

## 9 — Color & Typography tokens

→ `docs/flow-clone/reference/colors-typography.md`
