import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import logo from "@/assets/ms-logo.png";

export const NAV = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
];

export function Brackets({ children }: { children: ReactNode }) {
  return (
    <div className="relative px-5 pb-5">
      <span className="pointer-events-none absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-sand" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-clay" />
      {children}
    </div>
  );
}

export function Header({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "border-border shadow-[0_6px_18px_oklch(0_0_0/10%)]" : ""
      }`}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-x-3 px-3 py-3 sm:px-6 md:gap-x-8">
        <nav aria-label="Navigation principale gauche" className="flex min-w-0 justify-end gap-1 md:gap-2">
          {NAV.slice(0, 2).map((item) => (
            <NavLink key={item.href} item={item} active={active} />
          ))}
        </nav>
        <Link to="/" aria-label="MS Reflect — Accueil" className="shrink-0">
          <img src={logo} alt="MS Reflect" width={140} height={90} className="h-11 w-auto sm:h-14" />
        </Link>
        <nav aria-label="Navigation principale droite" className="flex min-w-0 justify-start gap-1 md:gap-2">
          {NAV.slice(2).map((item) => (
            <NavLink key={item.href} item={item} active={active} />
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

export function Footer() {
  return (
    <footer className="steel-surface border-t border-steel px-6 py-8 text-center text-xs text-primary-foreground">
      <a href="/#contact" className="transition-colors hover:text-sand">
        mentions légales
      </a>
      <span className="px-2">|</span>
      <a href="/#contact" className="transition-colors hover:text-sand">
        politique de confidentialité
      </a>
    </footer>
  );
}
