"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Нүүр" },
  { href: "/#projects", label: "Төслүүд" },
  { href: "/deal", label: "Deal" },
  { href: "/#about", label: "Танилцуулга" },
  { href: "/#contact", label: "Холбогдох", primary: true },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLink = ({
    href,
    label,
    primary,
    mobile,
  }: {
    href: string;
    label: string;
    primary?: boolean;
    mobile?: boolean;
  }) => (
    <Link
      href={href}
      onClick={() => setMobileOpen(false)}
      className={cn(
        mobile
          ? "px-4 py-3 rounded-lg text-base font-semibold text-white/90 hover:bg-white/10 transition-colors"
          : "nav-item",
        primary && "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900",
        mobile && primary && "text-gray-900"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 py-3">
      <div className="flex justify-center items-center">
        <nav className="hidden md:flex gap-1 p-2 justify-center items-center border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              primary={link.primary}
            />
          ))}
        </nav>

        {/* Mobile: hamburger button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/10 backdrop-blur text-white"
          aria-label="Цэс нээх"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-30 transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div
          className={cn(
            "absolute top-0 right-0 w-full max-w-sm h-full bg-gray-900/95 border-l border-white/10 shadow-xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col p-6 pt-14 gap-1">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white"
              aria-label="Цэс хаах"
            >
              <X className="w-5 h-5" />
            </button>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                primary={link.primary}
                mobile
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
