import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/components/before-after";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Brackets } from "@/components/site";
import cuisineAvant from "@/assets/famars-bleue-avant.jpg";
import cuisine from "@/assets/cuisine-prouvy-apres.jpg";
import cuisineEvier from "@/assets/cuisine-evier.jpg";
import cuisineVue from "@/assets/cuisine-row-3.jpg";

export const Route = createFileRoute("/projets/cuisine-prouvy")({
  head: () => ({
    meta: [
      { title: "Cuisine Prouvy — rénovation & aménagement | MS Reflect" },
      {
        name: "description",
        content:
          "Cuisine à Prouvy : une cuisine vieillissante transformée en un espace contemporain, chaleureux et fonctionnel.",
      },
      { property: "og:title", content: "Cuisine Prouvy — projet MS Reflect" },
      {
        property: "og:description",
        content:
          "D'une cuisine datée et peu chaleureuse à un espace de vie lumineux, fonctionnel et convivial.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CuisineProuvy,
});

function CuisineProuvy() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header active="/particuliers" />

      <section className="mx-auto max-w-5xl px-6 pt-8">
        <div className="flex items-center gap-6">
          <h1 className="shrink-0 text-2xl text-ink-soft md:text-5xl">Cuisine Prouvy</h1>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-steel md:text-xl">
          MS Reflect est intervenu sur cette cuisine à Prouvy afin de transformer une cuisine
          vieillissante et peu fonctionnelle en un espace plus contemporain, chaleureux et adapté au
          quotidien de ses occupants.
        </p>

        <BeforeAfter
          before={cuisineAvant}
          after={cuisine}
          alt="Cuisine à Prouvy"
          className="mt-16 aspect-[4/3] w-full"
        />

        <p className="mx-auto mt-16 max-w-4xl text-center text-2xl leading-tight tracking-tight text-ink-soft md:text-4xl">
          D'une cuisine datée et peu chaleureuse à un espace de vie lumineux, fonctionnel et
          convivial.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-2">
          <div className="space-y-10 text-base md:text-xl">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">L'intention</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Révéler le potentiel de cette cuisine en créant un espace plus contemporain et
                chaleureux. Le projet s'est construit autour d'une palette naturelle associant le
                bois, les tons clairs et une touche de bleu, choisie pour dynamiser l'ensemble et
                mettre en valeur la nouvelle implantation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold md:text-2xl">Le parti pris</h2>
              <ul className="mt-3 space-y-3 leading-relaxed text-ink-soft">
                <li>
                  · Apporter du caractère grâce à un mur d'accent bleu, créant un contraste élégant
                  avec les façades bois et les matériaux minéraux.
                </li>
                <li>
                  · Jouer sur l'équilibre entre chaleur et sobriété avec des matières naturelles, des
                  teintes douces et des lignes épurées.
                </li>
                <li>
                  · Optimiser l'agencement pour proposer une cuisine plus fonctionnelle et agréable à
                  vivre au quotidien.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold md:text-2xl">Le résultat</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                Une cuisine transformée, lumineuse et harmonieuse, où le bleu apporte une signature
                visuelle forte et souligne avec subtilité l'élégance du bois et des finitions choisies.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <Brackets variant="diagonal">
              <div className="space-y-4 px-8 py-8 text-base md:text-lg">
                <Fiche label="Type" value="Maison" />
                <Fiche label="Mission" value="Rénovation & aménagement" />
                <Fiche label="Surface" value="Cuisine" />
                <Fiche label="Localisation" value="Prouvy" />
              </div>
            </Brackets>

            <img
              src={cuisineEvier}
              alt="Vue détaillée de la cuisine rénovée à Prouvy"
              width={4032}
              height={3024}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
      </section>


    <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row">
        <img
          src={cuisine}
          alt="Cuisine rénovée à Prouvy"
          loading="lazy"
          className="aspect-[4/3] min-w-0 flex-1 object-cover"
        />
        <img
          src={cuisineEvier}
          alt="Évier et plan de travail de la cuisine rénovée"
          loading="lazy"
          className="aspect-[4/3] min-w-0 flex-1 object-cover"
        />
        <img
          src={cuisineVue}
          alt="Vue d'ensemble de la cuisine rénovée"
          loading="lazy"
          className="aspect-[4/3] min-w-0 flex-1 object-cover"
        />
      </div>


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
