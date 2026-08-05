import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import logoAsset from "@/assets/ms-logo.png.asset.json";
import catPro from "@/assets/cat-pro.jpg";
import catPart from "@/assets/cat-part.jpg";
import portraitAsset from "@/assets/ms-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MS Reflect — Designer d'espace & Décoratrice d'intérieur" },
      {
        name: "description",
        content:
          "MS Reflect, designer d'espace et décoratrice d'intérieur à Prouvy. Aménagement et décoration pour particuliers et professionnels dans les Hauts-de-France.",
      },
      { property: "og:title", content: "MS Reflect — Designer d'espace & Décoratrice d'intérieur" },
      {
        property: "og:description",
        content:
          "Des espaces pensés pour vous ressembler : lieux harmonieux, fonctionnels et uniques, conçus pour révéler tout leur potentiel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
  { label: "Particuliers", href: "#particuliers" },
  { label: "Professionnels", href: "#professionnels" },
];

function Brackets({ children }: { children: React.ReactNode }) {
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

function Home() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* Header */}
      <header className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6">
        <nav className="order-2 flex flex-1 justify-center gap-2 md:order-1 md:justify-end">
          {NAV.slice(0, 2).map((item) => (
            <NavLink key={item.href} item={item} active={active} setActive={setActive} />
          ))}
        </nav>
        <a href="#top" className="order-1 md:order-2">
          <img
            src={logoAsset.url}
            alt="MS Reflect"
            width={140}
            height={90}
            className="h-16 w-auto"
          />
        </a>
        <nav className="order-3 flex flex-1 justify-center gap-2 md:justify-start">
          {NAV.slice(2).map((item) => (
            <NavLink key={item.href} item={item} active={active} setActive={setActive} />
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden">
          <img
            src={heroBg}
            alt="Croquis d'architecture sur papier"
            width={1920}
            height={768}
            className="h-[380px] w-full object-cover md:h-[440px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <Brackets>
              <div className="bg-background/70 px-10 py-6 backdrop-blur-[2px]">
                <h1 className="text-3xl leading-tight tracking-tight md:text-5xl">
                  <span className="block font-normal text-ink">Des espaces pensés</span>
                  <span className="block text-sand">pour vous ressembler</span>
                </h1>
              </div>
            </Brackets>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
              Designer d'espace &amp; Décoratrice d'intérieur
              <br />
              Je conçois des lieux harmonieux, fonctionnels et uniques,
              <br />
              pensés pour révéler tout leur potentiel
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="w-full max-w-md border border-border bg-background py-3 text-center text-sm font-medium tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground"
          >
            Discutons de votre projet
          </a>
        </div>
      </section>

      {/* Usages */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-xl tracking-tight md:text-2xl">Des espaces pensés pour chaque usage</h2>

        <div className="mt-16 flex flex-col items-center justify-center gap-14 sm:flex-row sm:gap-16">
          <CategoryCard
            id="professionnels"
            src={catPro}
            label="PROFESSIONNELS"
            alt="Bureau professionnel aménagé"
          />
          <CategoryCard
            id="particuliers"
            src={catPart}
            label="PARTICULIERS"
            alt="Salon particulier aménagé"
          />
        </div>
      </section>

      {/* Méthode */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center">
        <h2 className="text-xl tracking-tight md:text-2xl">
          Chaque projet commence par une immersion.
        </h2>
        <div className="mt-12 inline-block text-left text-base leading-loose text-ink-soft md:text-lg">
          <p>
            <strong className="font-medium text-ink">Comprendre</strong> vos contraintes.
            <br />
            <strong className="font-medium text-ink">Analyser</strong> l'espace existant.
            <br />
            <strong className="font-medium text-ink">Identifier</strong> les axes d'amélioration.
          </p>
          <p className="mt-8">
            Ensuite, je structure. Je clarifie.
            <br />
            Je révèle le potentiel.
          </p>
          <p className="mt-8">
            <strong className="font-medium text-clay">Résultat :</strong>
            <br />
            un lieu cohérent, fonctionnel et esthétique.
          </p>
        </div>
      </section>

      {/* À propos */}
      <section id="a-propos" className="mx-auto max-w-4xl px-6 pb-24">
        <div className="flex items-center gap-6">
          <h2 className="shrink-0 text-lg text-ink-soft md:text-xl">À propos</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <h3 className="mt-14 text-lg tracking-tight md:text-xl">
          Une approche sensible et structurée du design d'espace.
        </h3>

        <div className="mt-10 flex flex-col gap-10 sm:flex-row">
          <img
            src={portraitAsset.url}
            alt="Portrait de Mathilde Staels, designer d'espace"
            loading="lazy"
            width={246}
            height={248}
            className="h-56 w-44 shrink-0 object-cover"
          />
          <div className="space-y-6 text-sm leading-relaxed text-ink-soft md:text-base">
            <p>
              Designer d'espace et décoratrice d'intérieur, j'imagine et conçois des lieux où chaque
              détail est pensé avec précision.
            </p>
            <p>
              Mon approche repose sur une lecture fine des volumes, de la lumière et des usages,
              afin de structurer des espaces à la fois fonctionnels, esthétiques et durables.
            </p>
            <p>
              Formée au design d'espace, j'ai développé une vision qui allie rigueur architecturale
              et sensibilité. Chaque projet devient une recherche d'équilibre entre matière,
              circulation et perception.
            </p>
          </div>
        </div>

        <span className="mt-20 block h-px w-full bg-border" />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <h2 className="text-xl tracking-tight md:text-2xl">Parlons de votre projet.</h2>
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ink-soft">
          Chaque projet mérite une réflexion précise. Décrivez-moi votre besoin, je vous guiderai
          vers une solution adaptée à votre espace et à vos usages.
        </p>

        <div className="mt-8 text-sm text-ink-soft">
          <a href="mailto:staels.mathilde@hotmail.com" className="block hover:text-clay">
            staels.mathilde@hotmail.com
          </a>
          <a href="tel:0651710809" className="block hover:text-clay">
            0651710809
          </a>
        </div>

        <div className="mt-5 flex justify-center gap-5 text-ink-soft">
          <a href="#contact" aria-label="LinkedIn" className="hover:text-clay">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Facebook" className="hover:text-clay">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Instagram" className="hover:text-clay">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-ink-soft">
          Basée à Prouvy
          <br />
          Interventions Hauts de France
        </p>

        <form
          className="mt-12 space-y-3 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            window.location.href = `mailto:staels.mathilde@hotmail.com?subject=${encodeURIComponent(
              `Projet — ${String(data.get("nom") ?? "")}`,
            )}&body=${encodeURIComponent(
              `${String(data.get("message") ?? "")}\n\n${String(data.get("nom") ?? "")}\n${String(
                data.get("telephone") ?? "",
              )}\n${String(data.get("email") ?? "")}`,
            )}`;
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Field name="nom" placeholder="Nom" />
            <Field name="telephone" placeholder="Téléphone" type="tel" />
          </div>
          <Field name="email" placeholder="Email" type="email" />
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Parlez-moi de votre projet (lieu, besoin, contraintes...)"
            className="w-full bg-muted px-4 py-3 text-sm text-ink placeholder:text-sand focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <button
            type="submit"
            className="w-full border border-border bg-background py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground"
          >
            Discutons de votre projet
          </button>
        </form>
      </section>

      <footer className="border-t border-border py-6 text-center text-xs text-sand">
        <a href="#contact" className="hover:text-clay">
          mentions légales
        </a>
        <span className="px-2">|</span>
        <a href="#contact" className="hover:text-clay">
          politique de confidentialité
        </a>
      </footer>
    </div>
  );
}

function NavLink({
  item,
  active,
  setActive,
}: {
  item: { label: string; href: string };
  active: string | null;
  setActive: (v: string) => void;
}) {
  const isActive = active === item.href;
  return (
    <a
      href={item.href}
      onClick={() => setActive(item.href)}
      className={`px-3 py-1.5 text-sm tracking-wide transition-colors ${
        isActive ? "bg-clay text-primary-foreground" : "text-ink-soft hover:text-clay"
      }`}
    >
      {item.label}
    </a>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full bg-muted px-4 py-3 text-sm text-ink placeholder:text-sand focus:outline-none focus:ring-1 focus:ring-ring"
    />
  );
}

function CategoryCard({
  id,
  src,
  label,
  alt,
}: {
  id: string;
  src: string;
  label: string;
  alt: string;
}) {
  return (
    <a id={id} href="#contact" className="group block">
      <Brackets>
        <div className="relative h-40 w-72 overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width={1100}
            height={512}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-[oklch(0_0_0/60%)] opacity-70 transition-opacity group-hover:opacity-50" />
          <span className="absolute inset-0 flex items-center justify-center text-sm tracking-[0.2em] text-primary-foreground">
            {label}
          </span>
        </div>
      </Brackets>
    </a>
  );
}
