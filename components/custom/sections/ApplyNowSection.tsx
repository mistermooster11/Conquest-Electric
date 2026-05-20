/**
 * ApplyNowSection
 * Source: elementor-5903 — container-89c1ab9
 * 3 steps: Employment Application → Resume Upload → Predictive Index Assessment
 */

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
);

export default function ApplyNowSection() {
  return (
    <section className="apply-now">
      {/* Intro */}
      <h2 className="apply-now__intro">
        Interested in Joining Our Team?<br />
        Follow these two easy steps below.
      </h2>

      {/* Step 1 */}
      <h2 className="apply-now__step">
        1. Click on the button below to fill out your employment application.
      </h2>
      <a
        className="apply-now__btn"
        href="#" {/* [TODO: Replace with Conquest Electric employment application URL] */}
      >
        <ArrowIcon />
        Employment Application
      </a>

      {/* Step 2 */}
      <h2 className="apply-now__step">2. Upload your resume</h2>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/X3pSLr1eFmn0rGPrXVir"
        className="apply-now__resume-iframe"
        id="inline-X3pSLr1eFmn0rGPrXVir"
        data-form-name="resume form"
        data-height="493"
        data-form-id="X3pSLr1eFmn0rGPrXVir"
        title="Resume Upload Form"
      />
      <script src="https://link.msgsndr.com/js/form_embed.js" async />

      {/* NOTE */}
      <p className="apply-now__note">
        NOTE: Please use the same email address in both the application form and
        the resume form.
      </p>

      {/* Step 3 */}
      <h2 className="apply-now__step">
        3. Please take this Predictive Index Behavioral Assessment
      </h2>
      <a
        className="apply-now__btn"
        href="https://assessment.predictiveindex.com/bo/D03Q/Electrician_Jul2024_172633#page0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ArrowIcon />
        Form Here
      </a>

      {/* Closing */}
      <p className="apply-now__closing">
        We thank you for your interest in Conquest Electric and look forward to
        speaking with you soon.
      </p>
    </section>
  );
}
