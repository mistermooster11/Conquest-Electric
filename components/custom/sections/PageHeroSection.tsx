/**
 * PageHeroSection — Reusable hero breadcrumb banner
 * Source: elementor post-6348 (dùng trên About, Services, mọi trang inner)
 * Nhận `title` prop → render h1
 * CSS: styles/service-detail.css → .page-hero
 */
export default function PageHeroSection({ title }: { title: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </section>
  );
}
