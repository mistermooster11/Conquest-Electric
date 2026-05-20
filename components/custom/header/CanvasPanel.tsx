import Link from "next/link";
import Image from "next/image";
import { images } from "@/data/images";

interface CanvasPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CanvasPanel({ isOpen, onClose }: CanvasPanelProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="canvas-overlay" onClick={onClose} />
      <div className="canvas-panel">
        <button className="canvas-close" onClick={onClose} aria-label="Close panel">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <Link href="/" className="canvas-logo" onClick={onClose}>
          <Image
            src={images.logo}
            alt="Conquest Electric"
            width={200}
            height={52}
            style={{ width: "auto", height: "auto", maxWidth: "200px" }}
          />
        </Link>

        <p className="canvas-tagline">
          5-Star Electricians<br />Serving NYC &amp; New Jersey
        </p>

        {/* Gallery 3-column grid — 6 project photos */}
        <div className="canvas-gallery">
          {[
            { src: images.gallery1, alt: "Project photo 1" },
            { src: images.gallery5, alt: "Project photo 2" },
            { src: images.gallery2, alt: "Project photo 3" },
            { src: images.gallery3, alt: "Project photo 4" },
            { src: images.gallery7, alt: "Project photo 5" },
            { src: images.gallery8, alt: "Project photo 6" },
          ].map((img, i) => (
            <div key={i} className="canvas-gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <hr className="canvas-divider" />

        <ul className="canvas-contact-list">
          <li className="canvas-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            <a href="tel:212-301-6225">212-301-6225</a>
          </li>
          <li className="canvas-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a href="mailto:service@conquestelectric.com">service@conquestelectric.com</a>
          </li>
          <li className="canvas-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>Manhattan, NYC &amp; New Jersey</span>
          </li>
        </ul>

        <hr className="canvas-divider" />

        <p className="canvas-license">License#: [TODO: Add NY electrical license number]</p>
      </div>
    </>
  );
}
