"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#pillars", label: "Our Units" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-top">
      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Corporate Communications and Partnerships Directorate home"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logos/CLET CCP Logo .png"
              alt="CLET CCP Directorate emblem"
              width={64}
              height={64}
              className="brand__logo"
              priority
            />
            <span className="brand__text">
              <span className="brand__eyebrow">CLET Ghana</span>
              <span className="brand__title">
                <br/>
                Corporate Communications
                <br />
                and Partnerships
              </span>
            </span>
          </Link>

          <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`bar ${open ? "bar--1" : ""}`} />
            <span className={`bar ${open ? "bar--2" : ""}`} />
            <span className={`bar ${open ? "bar--3" : ""}`} />
          </button>
        </div>
      </header>
    </div>
  );
}
