"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ServiceDetail } from "@/lib/types";
import { servicesSidebarLinks } from "@/data/serviceDetails";

interface Props {
  detail: ServiceDetail;
}

export default function ServiceDetailSection({ detail }: Props) {
  const pathname = usePathname();

  return (
    <section className="service-detail">
      {/* ── Left: sticky sidebar ─────────────────────────────── */}
      <aside className="service-detail__sidebar">
        <span className="widget-title">Services</span>
        <ul className="services-list-wrapper">
          {servicesSidebarLinks.map((link) => {
            const isActive = pathname === link.href || pathname === link.href.slice(0, -1);
            return (
              <li key={link.href} className="service-item">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  <i className="caren-icon-breadcrumb" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* ── Right: dynamic content ───────────────────────────── */}
      <div className="service-detail__content">
        {detail.content.map((block, i) => {
          switch (block.type) {
            case "image":
              return (
                <img
                  key={i}
                  src={block.src}
                  alt={block.alt ?? ""}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              );
            case "h2":
              return <h2 key={i}>{block.text}</h2>;
            case "h3":
              return <h3 key={i}>{block.text}</h3>;
            case "paragraph":
              return <p key={i}>{block.text}</p>;
            case "list":
              return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
          }
        })}
      </div>
    </section>
  );
}
