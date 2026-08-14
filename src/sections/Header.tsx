"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "/#home", label: "Нүүр" },
  { href: "/#projects", label: "Төслүүд" },
  { href: "/#about", label: "Миний тухай" },
  { href: "/#contact", label: "Холбоо барих" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand-mark" href="/#home" onClick={() => setOpen(false)}>
          Баяржавхлан<span>.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Үндсэн цэс">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/deal" className="nav-cta">
            Холбоо барих
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? "Цэс хаах" : "Цэс нээх"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/deal" className="mobile-nav__cta" onClick={() => setOpen(false)}>
          Төслийн талаар ярилцъя
        </Link>
      </div>
    </header>
  );
};
