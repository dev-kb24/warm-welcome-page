import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logo from "@/assets/ms-logo.png";

export const NAV = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/#contact" },
  { label: "Particuliers", href: "/particuliers" },
  { label: "Professionnels", href: "/professionnels" },
];

export function Brackets({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute -left-4 -top-4 h-8 w-8 border-l border-t border-sand" />
      <span className="pointer-events-none absolute -right-4 -top-4 h-8 w-8 border-r border-t border-sand" />
      <span className="pointer-events-none absolute -bottom-4 -left-4 h-8 w-8 border-b border-l border-sand" />
      <span className="pointer-events-none absolute -bottom-4 -right-4 h-8 w-8 border-b border-r border-sand" />
      {children}
    </div>
  );
}

export function Header({ active }: { active?: string }) {
  return (
    <header className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6">
      <nav className="order-2 flex flex-1 justify-center gap-2 md:order-1 md:justify-end">
        {NAV.slice(0, 2).map((item) => (
          <NavLink key={item.href} item={item} active={active} />
        ))}
      </nav>
      <Link to="/" className="order-1 md:order-2">
        <img src={logo} alt="MS Reflect" width={140} height={90} className="h-16 w-auto" />
      </Link>
      <nav className="order-3 flex flex-1 justify-center gap-2 md:justify-start">
        {NAV.slice(2).map((item) => (
          <NavLink key={item.href} item={item} active={active} />
        ))}
      </nav>
    </header>
  );
}

function NavLink({ item, active }: { item: { label: string; href: string }; active?: string | undefined }) {
  const isActive = active === item.href;
  return (
    <a
      href={item.href}
      className={`px-3 py-1.5 text-sm tracking-wide transition-colors ${
        isActive ? "bg-clay text-primary-foreground" : "text-ink-soft hover:text-clay"
      }`}
    >
      {item.label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-6 text-center text-xs text-sand">
      <a href="/#contact" className="hover:text-clay">
        mentions légales
      </a>
      <span className="px-2">|</span>
      <a href="/#contact" className="hover:text-clay">
        politique de confidentialité
      </a>
    </footer>
  );
}
