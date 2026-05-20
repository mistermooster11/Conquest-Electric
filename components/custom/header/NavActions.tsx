"use client";

import { useState } from "react";
import { ScanLine } from "lucide-react";
import CanvasPanel from "./CanvasPanel";

interface NavActionsProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
}

export default function NavActions({ menuOpen, onMenuToggle }: NavActionsProps) {
  const [canvasOpen, setCanvasOpen] = useState(false);

  return (
    <>
      {/* Phone Box + Canvas Button — desktop only */}
      <div className="nav-phone nav-desktop-only">
        <a href="tel:212-301-6225" className="nav-phone-icon" aria-label="Call us">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
        </a>
        <div className="nav-phone-text">
          <span className="nav-phone-label">Need Help?</span>
          <a href="tel:212-301-6225" className="nav-phone-number">212-301-6225</a>
        </div>
        <a
          href="#"
          className="caren-info-button"
          aria-label="Info panel"
          onClick={(e) => { e.preventDefault(); setCanvasOpen(true); }}
        >
          <ScanLine size={20} strokeWidth={1.5} />
        </a>
      </div>

      {/* Hamburger */}
      <button
        aria-label="Toggle menu"
        onClick={onMenuToggle}
        className="nav-hamburger"
      >
        <span className={`ham-bar ${menuOpen ? "open-1" : ""}`} />
        <span className={`ham-bar ${menuOpen ? "open-2" : ""}`} />
        <span className={`ham-bar ${menuOpen ? "open-3" : ""}`} />
      </button>

      <CanvasPanel isOpen={canvasOpen} onClose={() => setCanvasOpen(false)} />
    </>
  );
}
