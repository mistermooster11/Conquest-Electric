/**
 * ContactInfoSection
 * Source: elementor-88 container-4e317f4
 * "Need More Information?" + 4-col grid: Address / Phone / Email / License
 */
export default function ContactInfoSection() {
  return (
    <section className="contact-info">
      {/* heading */}
      <div className="section-subtitle">
        <i className="caren-icon- caren-icon-breadcrumb" aria-hidden="true" />
        get in touch
      </div>
      <h2 className="section-title">Need More Information?</h2>

      {/* 4-col info grid */}
      <div className="contact-info-grid">
        <div className="contact-info-item">
          <h3>Service Area:</h3>
          <p>Manhattan, NYC &amp; New Jersey</p>
        </div>

        <div className="contact-info-item">
          <h3>Phone:</h3>
          <p>
            <a href="tel:212-301-6225">212-301-6225</a>
          </p>
        </div>

        <div className="contact-info-item">
          <h3>Email:</h3>
          <p>
            <a href="mailto:service@conquestelectric.com">
              service@conquestelectric.com
            </a>
          </p>
        </div>

        <div className="contact-info-item">
          <h3>License#:</h3>
          <p>[TODO: Add NY electrical license number]</p>
        </div>
      </div>
    </section>
  );
}
