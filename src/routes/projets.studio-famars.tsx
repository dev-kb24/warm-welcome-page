import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Brackets } from "@/components/site";
import studio from "@/assets/travaux-studio.jpg";
import studioDetail from "@/assets/travaux-studio-2.jpg";

export const Route = createFileRoute("/projets/studio-famars")({
  head: () => ({
    meta: [
      { title: "Studio Famars — rénovation & aménagement | MS Reflect" },
      {
        name: "description",
        content:
          "Studio à Famars : un espace standard transformé en un lieu fonctionnel, agréable et valorisé, pensé pour améliorer les usages et la qualité de vie.",
      },
      { property: "og:title", content: "Studio Famars — projet MS Reflect" },
      {
        property: "og:description",
        content:
          "Optimiser un studio pour en révéler tout le potentiel : une rénovation pensée pour fluidifier les usages et créer une véritable sensation d'espace.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioFamars,
});

function StudioFamars() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header active="/particuliers" />

      <section className="mx-auto max-w-5xl px-6 pt-8">
        <div className="flex items-center gap-6">
          <h1 className="shrink-0 text-2xl text-ink-soft md:text-5xl">Studio Famars</h1>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-steel md:text-xl">
          MS Reflect est intervenu sur ce studio à Famars avec un objectif clair : transformer un
          espace standard en un lieu fonctionnel, agréable et valorisé. Un projet pensé pour
          améliorer les usages tout en apportant une véritable qualité de vie.
        </p>

        <img
          src={studio}
          alt="Studio Famars rénové et aménagé"
          width={1376}
          height={1032}
          className="mx-auto mt-16 aspect-[4/3] w-full max-w-3xl object-cover"
        />

        <h2 className="mx-auto mt-16 max-w-4xl text-center text-2xl tracking-tight text-ink md:text-4xl">
          Optimiser un studio pour en révéler tout le potentiel.
        </h2>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-2">
          <div className="space-y-10 text-base md:text-xl">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">L'intention</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Repenser entièrement la lecture de l'espace pour le rendre plus fluide, plus lumineux
                et mieux adapté au quotidien. L'enjeu était de créer une sensation d'espace dans une
                surface compacte, tout en conservant une organisation claire.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold md:text-2xl">Le parti pris</h2>
              <ul className="mt-3 space-y-3 leading-relaxed text-ink-soft">
                <li>· Désencombrer visuellement l'espace pour le rendre plus lisible.</li>
                <li>· Optimiser l'implantation du mobilier pour fluidifier la circulation.</li>
                <li>· Apporter plus de lumière et de légèreté dans l'ambiance.</li>
                <li>· Uniformiser les matières et les teintes pour créer une cohérence globale.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold md:text-2xl">Le résultat</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Le studio gagne en clarté, en fonctionnalité et en confort. Chaque zone est mieux
                définie, l'espace paraît plus grand et plus agréable à vivre. Une transformation
                simple en apparence, mais pensée dans les moindres détails.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <Brackets variant="diagonal">
              <div className="space-y-4 px-8 py-8 text-base md:text-lg">
                <Fiche label="Type" value="Résidentiel" />
                <Fiche label="Mission" value="Rénovation & aménagement" />
                <Fiche label="Surface" value="Studio" />
                <Fiche label="Localisation" value="Famars" />
              </div>
            </Brackets>

            <img
              src={studioDetail}
              alt="Vue détaillée du studio Famars"
              width={4032}
              height={3024}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-2xl tracking-tight md:text-3xl">
          Vous souhaitez rénover ou optimiser votre intérieur ?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
          MS Reflect vous accompagne dans la transformation de vos espaces.
        </p>
        <a
          href="/#contact"
          className="mx-auto mt-10 block max-w-md border border-border bg-background py-3 text-base font-bold tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground md:text-lg"
        >
          Discuter de votre projet
        </a>
      </section>

      <Footer />
    </div>
  );
}

function Fiche({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="font-medium">{label} :</span>
      <br />
      <span className="text-ink-soft">{value}</span>
    </p>
  );
}
