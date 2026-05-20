"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, services } from "@/data/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <ul className="mobile-nav-list">
        {nav.map((item) =>
          item.hasDropdown ? (
            <li key={item.href} className="mobile-nav-item">
              <button
                className="mobile-nav-link mobile-dropdown-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                {item.label}
                <span>{mobileServicesOpen ? "▲" : "▾"}</span>
              </button>
              {mobileServicesOpen && (
                <ul className="mobile-sub-menu">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="mobile-sub-link"
                        onClick={onClose}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={item.href} className="mobile-nav-item">
              <Link href={item.href} className="mobile-nav-link" onClick={onClose}>
                {item.label}
              </Link>
            </li>
          )
        )}
        <li className="mobile-nav-item mobile-phone">
          <a href="tel:212-301-6225" className="mobile-nav-link">📞 212-301-6225</a>
        </li>
      </ul>
    </div>
  );
}
