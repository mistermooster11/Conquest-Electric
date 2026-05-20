/**
 * ContactFormSection
 * Source: elementor-88 container-325154c
 * Left: form iframe (leadconnector) + Right: Google Maps iframe
 */
export default function ContactFormSection() {
  return (
    <section className="contact-main">
      {/* ── Left: Form card ────────────────────────────────── */}
      <div className="contact-form-col">
        <div className="section-subtitle">
          <i className="caren-icon- caren-icon-breadcrumb" aria-hidden="true" />
          Call Us!
        </div>
        <h2>Contact us &amp; let&apos;s collaborate!</h2>
        <p className="contact-desc">
          Conquest Electric proudly serves Manhattan, Brooklyn, the Bronx, Queens,
          Staten Island, New Jersey, and surrounding areas.
        </p>
        <hr className="contact-form-divider" />
        {/* [TODO: Replace iframe src and data-form-id with Conquest Electric LeadConnector form ID] */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/[TODO-FORM-ID]"
          className="contact-form-iframe"
          id="inline-[TODO-FORM-ID]"
          data-layout='{"id":"INLINE"}'
          data-form-name="Contact Form"
          data-height="719"
          data-form-id="[TODO-FORM-ID]"
          title="Contact Form"
        />
        <script src="https://link.msgsndr.com/js/form_embed.js" async />
      </div>

      {/* ── Right: Google Map ──────────────────────────────── */}
      <div className="contact-map-col">
        {/* [TODO: Replace with Google Maps embed centered on Conquest Electric service area — Manhattan, NY] */}
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Manhattan%2C%20New%20York%2C%20NY&t=m&z=12&output=embed&iwloc=near"
          title="Conquest Electric — Manhattan, New York"
          aria-label="Conquest Electric service area — Manhattan, New York"
        />
      </div>
    </section>
  );
}
