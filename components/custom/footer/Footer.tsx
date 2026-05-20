"use client";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footer";
import { images } from "@/data/images";
import "@/styles/footer.css";

function SocialIcon({ name }: { name: string }) {
  if (name === "Facebook")
    return (
      <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    );
  if (name === "X-Twitter")
    return (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    );
  if (name === "LinkedIn")
    return (
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    );
  if (name === "Instagram")
    return (
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    );
  return null;
}

export default function Footer() {
  const { top, brand, pages, contact, newsletter, bottom } = footerData;

  return (
    <footer className="site-footer">
      {/* ── footer-top ── */}
      <div className="ft-top">
        <div className="ft-top__overlay" aria-hidden="true" />
        <div className="ft-top__inner">
          <span className="ft-top__badge">{top.subtitle}</span>
          <h2 className="ft-top__heading">{top.heading}</h2>
          <Link href={top.button.href} className="ft-top__btn">
            {top.button.label}
          </Link>
        </div>
      </div>

      {/* ── footer-main (green) ── */}
      <div className="ft-main">
        <div className="ft-main__inner">
          {/* Col 1 — Brand */}
          <div className="ft-col ft-col--brand">
            <Link href="/" className="ft-logo-link">
              <Image
                src={images.logo}
                alt="Conquest Electric"
                width={202}
                height={62}
                style={{ height: "auto", width: "80%" }}
              />
            </Link>
            <div className="ft-social">
              {brand.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ft-social__icon"
                  aria-label={s.name}
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
            <p className="ft-about">{brand.about}</p>
          </div>

          {/* Col 2 — Pages */}
          <div className="ft-col ft-col--pages">
            <h6 className="ft-col__heading">{pages.heading}</h6>
            <ul className="ft-nav">
              {pages.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="ft-nav__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="ft-col ft-col--contact">
            <h6 className="ft-col__heading">{contact.heading}</h6>
            <div className="ft-contact-info">
              <p>
                <strong>Address:</strong> {contact.address}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <strong>License#:</strong> {contact.license}
              </p>
            </div>
          </div>

          {/* Col 4 — Newsletter */}
          <div className="ft-col ft-col--newsletter">
            <h6 className="ft-col__heading">{newsletter.heading}</h6>
            <form
              className="ft-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="ft-newsletter-input"
                required
              />
              <button type="submit" className="ft-newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ── footer-bottom (white) ── */}
        <div className="ft-bottom">
          <div className="ft-bottom__inner">
            <p>{bottom.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
