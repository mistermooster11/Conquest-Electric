"use client";

import { useState, useEffect } from "react";
import HeaderTopbar from "./HeaderTopbar";
import DesktopNav from "./DesktopNav";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " header-scrolled" : ""}`}>
      <HeaderTopbar />
      <nav className="header-nav">
        <div className="container-site header-nav-inner">
          <DesktopNav />
          <NavActions
            menuOpen={menuOpen}
            onMenuToggle={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
