"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, services } from "@/data/nav";
import { images } from "@/data/images";
import { ChevronDown } from "lucide-react";

export default function DesktopNav() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <Link href="/" className="header-logo">
        <Image
          src={images.logo}
          alt="Conquest Electric"
          width={200}
          height={52}
          priority
          style={{ width: "auto", height: "52px" }}
        />
      </Link>

      <ul className="nav-desktop">
        {nav.map((item) =>
          item.hasDropdown ? (
            <li
              key={item.href}
              className="nav-item nav-has-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href={item.href} className="nav-link">
                {item.label}
                {/* <span className="nav-arrow">▾</span> */}
                <ChevronDown size={14} />
              </Link>
              {servicesOpen && (
                <ul className="nav-dropdown">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="nav-dropdown-link">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={item.href} className="nav-item">
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}
