"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { images } from "@/data/images";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section section-block">
      <div className="container-site">
        <div className="faq-grid">
          {/* Left: accordion */}
          <div className="faq-left">
            <p className="subtitle-badge">Repair &amp; Installation</p>
            <h2 className="section-heading">Frequently Asked Questions</h2>

            <div className="accordion">
              {faqs.map((faq, i) => (
                <div key={i} className={`accordion-item${open === i ? " open" : ""}`}>
                  <button
                    className="accordion-trigger"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span>{faq.question}</span>
                    <span className="accordion-icon">{open === i ? "−" : "+"}</span>
                  </button>
                  {open === i && (
                    <div className="accordion-content open">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="faq-right">
            <img
              src={images.faqImage}
              alt="FAQ"
              className="faq-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
