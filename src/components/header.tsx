import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logo from "@/assets/ms-logo.png";

export const NAV = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
];

export function Header({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [currentActive, setCurrentActive] = useState(active);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      setCurrentActive(active ?? (window.location.hash ? `/${window.location.hash}` : undefined));
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, [active]);

  return (
    <header
      className={`sticky top-0 z-50 mb-8 border-b border-transparent bg-background/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "border-border shadow-[0_6px_18px_oklch(0_0_0/10%)]" : ""
      }`}
    >
      <div
        className={`mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-x-3 px-3 transition-all duration-300 sm:px-6 md:gap-x-8 ${
          scrolled ? "py-1.5" : "py-3"
        }`}
      >
        <nav aria-label="Navigation principale gauche" className="flex min-w-0 justify-end gap-1 md:gap-2">
          {NAV.slice(0, 2).map((item) => (
            <NavLink key={item.href} item={item} active={currentActive} />
          ))}
        </nav>
        <Link to="/" aria-label="MS Reflect — Accueil" className="shrink-0">
          <img
            src={logo}
            alt="MS Reflect"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-7 sm:h-18" : "h-11 sm:h-30"}`}
          />
        </Link>
        <nav aria-label="Navigation principale droite" className="flex min-w-0 justify-start gap-1 md:gap-2">
          {NAV.slice(2).map((item) => (
            <NavLink key={item.href} item={item} active={currentActive} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ item, active }: { item: { label: string; href: string }; active?: string | undefined }) {
  const isActive = active === item.href;
  return (
    <a
      href={item.href}
      className={`px-1.5 py-1.5 text-[10px] transition-colors sm:px-3 sm:text-xs md:text-sm ${
        isActive ? "bg-clay text-primary-foreground" : "text-ink-soft hover:text-clay"
      }`}
    >
      {item.label}
    </a>
  );
}
