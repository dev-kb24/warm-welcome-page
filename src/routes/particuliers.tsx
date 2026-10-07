import { createFileRoute, Link } from "@tanstack/react-router";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Offer } from "@/components/offer";
import { ProjectCard } from "@/components/project-card";
import { Brackets } from "@/components/site";
import partHero from "@/assets/cat-part.jpg";
import famars1 from "@/assets/travaux-famars-1.jpg";
import famars2 from "@/assets/travaux-famars-2.jpg";
import famars3 from "@/assets/travaux-famars-3.jpg";
import famars4 from "@/assets/travaux-famars-4.jpg";
import cuisine from "@/assets/travaux-cuisine.jpg";
import studio from "@/assets/travaux-studio.jpg";
import offreConseil from "@/assets/offre-conseil.jpg";
import offreGlobal from "@/assets/offre-global.jpg";

export const Route = createFileRoute("/particuliers")({
  head: () => ({
    meta: [
      { title: "Particuliers — MS Reflect, aménagement intérieur" },
      {
        name: "description",
        content:
          "Aménagement et décoration pour particuliers : appartement, maison, investissement locatif. Conseil, conception d'espace et accompagnement global dans les Hauts-de-France.",
      },
      { property: "og:title", content: "Particuliers — MS Reflect, aménagement intérieur" },
      {
        property: "og:description",
        content:
          "Des espaces pensés pour améliorer votre quotidien : conseil & optimisation, conception d'espace, accompagnement global.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Particuliers,
});

function Particuliers() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header active="/particuliers" />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-5xl">
          <Brackets>
            <div className="relative overflow-hidden border-50 border-sand/60">
              <img
                src={partHero}
                alt="Salon lumineux aménagé par MS Reflect"
                width={1376}
                height={768}
                className="h-80 w-full object-cover md:h-96"
              />
              <span className="pointer-events-none absolute inset-0 bg-sand/70" />
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <h1 className="text-3xl leading-snug tracking-tight text-primary-foreground drop-shadow-[0_1px_6px_oklch(0_0_0/45%)] md:text-5xl">
                  <span className="block">Des espaces pensés</span>
                  <span className="block">pour améliorer votre quotidien</span>
                </h1>
              </div>
            </div>
          </Brackets>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-relaxed md:text-xl">
            L'aménagement de votre intérieur influence directement :
          </p>
          <div className="mt-6 space-y-2 text-lg leading-relaxed text-ink-soft md:text-xl">
            <p>· votre qualité de vie</p>
            <p>· votre bien-être au quotidien</p>
            <p>· la valorisation de votre bien</p>
          </div>
          <p className="mt-14 text-xl italic leading-relaxed text-sand md:text-2xl">
            Je conçois des espaces de vie fonctionnels, esthétiques et pensés pour durer.
          </p>
          <a
            href="/#contact"
            className="mt-10 block border border-border bg-background py-3 text-base font-bold tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground md:text-lg"
          >
            Parler de votre projet
          </a>
          <p className="mt-4 text-base font-bold tracking-wide text-ink-soft md:text-lg">
            Appartement · Maison · Investissement locatif
          </p>
        </div>
      </section>

      {/* Travaux */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="flex items-center gap-6">
          <h2 className="shrink-0 text-lg text-ink-soft md:text-xl">Travaux</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Famars */}
        <div className="mt-14 grid gap-2 sm:grid-cols-2">
          <img
            src={famars1}
            alt="Cage d'escalier avec suspensions colorées, Famars"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="grid gap-2">
            <img src={famars2} alt="Chambre mansardée ton caramel" loading="lazy" className="w-full object-cover" />
            <img src={famars3} alt="Chambre verte sous les toits" loading="lazy" className="w-full object-cover" />
            <img src={famars4} alt="Chambre d'enfant accent terracotta" loading="lazy" className="w-full object-cover" />
          </div>
        </div>
        <div className="mt-6 max-w-4xl">
          <h3 className="text-2xl font-medium md:text-3xl text-ink">Ensemble étage et entrée, Famars</h3>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft md:text-xl">
            Une palette de couleurs pensée comme un fil conducteur entre les espaces, où chaque
            chambre affirme sa personnalité tout en s'inscrivant dans une harmonie globale.
          </p>
          <Link
            to="/projets/maison-famars"
            className="mt-4 inline-block text-lg font-bold text-ink decoration-1 underline-offset-4 hover:text-clay md:text-xl"
          >
            ⤷ Voir le projet
          </Link>
        </div>

        <div className="mx-auto mt-20 max-w-4xl text-center">
          <h3 className="text-3xl tracking-tight md:text-4xl text-ink">
            Une approche sensible et structurée du design d'espace.
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft md:text-xl">
            Chaque projet est pensé dans sa globalité : volumes, circulation, lumière et usages.
            <br />
            Objectif : créer des espaces à la fois cohérents, confortables et durables.
          </p>
        </div>

        {/* Cuisine / Studio */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <ProjectCard
            src={cuisine}
            alt="Cuisine contemporaine en bois, Prouvy"
            title="Cuisine Prouvy"
            text="La transformation d'une cuisine datée en un espace contemporain, chaleureux et fonctionnel, sublimé par un jeu de matières naturelles et une touche de bleu affirmée."
            href="/projets/cuisine-prouvy"
          />
          <ProjectCard
            src={studio}
            alt="Studio lumineux optimisé, Famars"
            title="Studio Famars"
            text="Un petit espace repensé dans les moindres détails pour optimiser les volumes, améliorer la circulation et créer un intérieur à la fois fonctionnel et agréable à vivre."
            href="/projets/studio-famars"
          />
        </div>
      </section>

      {/* Offres */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="flex items-center gap-6">
          <h2 className="shrink-0 text-xl text-ink-soft md:text-2xl font-bold">Offres particuliers</h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <h3 className="mt-16 text-center text-2xl text-steel tracking-tight md:text-3xl">
          Un accompagnement adapté à votre projet.
        </h3>

        <div className="mt-12 max-w-2xl">
          <h4 className="text-lg font-bold text-ink md:text-xl">Chaque projet est unique.</h4>
          <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
            MS Reflect propose différents niveaux d'accompagnement, selon vos besoins et votre
            budget.
          </p>
        </div>

        {/* Conseil */}
        <div className="mt-16 grid items-start gap-10 sm:grid-cols-2">
          <Offer
            title="Conseil & optimisation"
            intro="Améliorer votre intérieur sans engager de gros travaux."
            points={[
              "Analyse de votre espace",
              "Optimisation de l'aménagement",
              "Recommandations couleurs, matières et mobilier",
            ]}
            ideal="repenser et améliorer rapidement votre intérieur"
          />
          <img
            src={offreConseil}
            alt="Nuancier de couleurs en main"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        {/* Conception */}
        <div className="mx-auto mt-20 max-w-xl">
          <Brackets>
            <div className="px-10 py-10">
              <Offer
                title="Conception d'espace"
                intro="Repenser votre intérieur de manière cohérente et structurée."
                points={[
                  "Plan d'aménagement optimisé",
                  "Définition d'une ambiance globale",
                  "Sélection des éléments clés",
                ]}
                ideal="transformation complète sans suivi de travaux"
              />
            </div>
          </Brackets>
        </div>

        {/* Accompagnement */}
        <div className="mt-20 grid items-start gap-10 sm:grid-cols-2">
          <img
            src={offreGlobal}
            alt="Dossier de projet et échantillons de matériaux"
            loading="lazy"
            className="w-full object-cover"
          />
          <Offer
            title="Accompagnement global"
            intro="Un projet clé en main, de la conception à la réalisation."
            points={[
              "Conception complète du projet",
              "Choix des matériaux et équipements",
              "Suivi et coordination du projet",
            ]}
            ideal="rénovation ou transformation en profondeur"
          />
        </div>

        <a
          href="/#contact"
          className="mx-auto mt-20 block max-w-md border border-border bg-background py-3 text-center text-base font-bold tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground md:text-lg"
        >
          Parlons de votre projet.
        </a>
      </section>

      <Footer />
    </div>
  );
}

