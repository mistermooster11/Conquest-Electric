// ── Shared TypeScript types (dùng ở ≥2 nơi) ────────────────────────────────

/** Block nội dung linh hoạt cho service detail page */
export type ContentBlock =
  | { type: "image"; src: string; alt?: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

/** Dữ liệu chi tiết một service page */
export interface ServiceDetail {
  slug: string;
  title: string;          // dùng cho breadcrumb + <title>
  metaDescription: string;
  content: ContentBlock[];
}
