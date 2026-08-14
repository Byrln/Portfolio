import { useEffect, useState } from "react";

const navigation = [
  { id: "home", label: "Нүүр", mark: "" },
  { id: "about", label: "Миний тухай", mark: " round" },
  { id: "work", label: "Төслүүд", mark: "" },
  { id: "contact", label: "Холбоо", mark: " diamond" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
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
      <a className="brand-dot" href="#home" aria-label="Нүүр" onClick={closeMenu}>
        <span />
      </a>
      <nav
        className={`nav${menuOpen ? " open" : ""}`}
        id="nav"
        data-od-id="main-navigation"
        aria-label="Үндсэн цэс"
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? "active" : undefined}
            href={`#${item.id}`}
            onClick={closeMenu}
          >
            <span className={`nav-mark${item.mark}`} aria-hidden="true" />
            {item.label}
          </a>
        ))}
        <span className="nav-spacer" />
        <a
          className="nav-contact"
          href="mailto:contact.byrln@gmail.com"
          onClick={closeMenu}
        >
          Захиа бичих
        </a>
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
