"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { id: "home", href: "/", label: "Нүүр", mark: "" },
  { id: "about", href: "/about", label: "Миний тухай", mark: " round" },
  { id: "projects", sectionId: "work", href: "/projects", label: "Төслүүд", mark: "" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const sections = navigation
      .map((item) => document.getElementById(item.sectionId ?? item.id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" data-od-id="site-header">
      <Link className="brand-dot" href="/" aria-label="Нүүр" onClick={closeMenu}>
        <span />
      </Link>
      <nav
        className={`nav${menuOpen ? " open" : ""}`}
        id="nav"
        data-od-id="main-navigation"
        aria-label="Үндсэн цэс"
      >
        {navigation.map((item) => (
          <Link
            key={item.id}
            className={(pathname === item.href) || (pathname === "/" && activeSection === (item.sectionId ?? item.id)) ? "active" : undefined}
            href={item.href}
            onClick={closeMenu}
          >
            <span className={`nav-mark${item.mark}`} aria-hidden="true" />
            {item.label}
          </Link>
        ))}
        <span className="nav-spacer" />
        <Link
          className="nav-contact"
          href="/contact"
          onClick={closeMenu}
        >
          Холбоо барих
        </Link>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="nav"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Цэс хаах" : "Цэс нээх"}
        data-od-id="mobile-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d="M3 5.5h14M3 10h14M3 14.5h14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
    </header>
  );
}
