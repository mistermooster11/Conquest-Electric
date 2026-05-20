import { workWithUsContent } from "@/data/workWithUs";

const { heading, paragraphs } = workWithUsContent;

export default function WorkWithUsSection() {
  return (
    <section className="wwu-section">
      {/* dark overlay */}
      <div className="wwu-overlay" aria-hidden="true" />

      <div className="wwu-inner">
        {/* Left column — text */}
        <div className="wwu-col-left">
          <h2 className="wwu-heading">{heading}</h2>
          <div className="wwu-text">
            {paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Right column — empty spacer (mirrors source bf52edb) */}
        <div className="wwu-col-right" aria-hidden="true" />
      </div>
    </section>
  );
}
