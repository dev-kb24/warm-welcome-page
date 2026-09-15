import { createFileRoute } from "@tanstack/react-router";

import { BeforeAfter } from "@/components/before-after";
import { Brackets, Footer, Header } from "@/components/site";
import entreeAvant from "@/assets/famars-entree-avant.jpg";
import entreeApres from "@/assets/famars-entree-apres.jpg";
import bleueAvant from "@/assets/famars-bleue-avant.jpg";
import bleueApres from "@/assets/famars-bleue-apres.jpg";
import corailAvant from "@/assets/famars-corail-avant.jpg";
import corailApres from "@/assets/famars-corail-apres.jpg";
import parentsAvant from "@/assets/famars-parents-avant.jpg";
import parentsApres from "@/assets/famars-parents-apres.jpg";
import verteAvant from "@/assets/famars-verte-avant.jpg";
import verteApres from "@/assets/famars-verte-apres.jpg";
import detailCoussin from "@/assets/famars-detail-coussin.jpg";
import detailArmoire from "@/assets/famars-detail-armoire.jpg";
import detailMiroirs from "@/assets/famars-detail-miroirs.jpg";
import detailMurVert from "@/assets/famars-detail-mur-vert.jpg";

export const Route = createFileRoute("/projets/maison-famars")({
  head: () => ({
    meta: [
      { title: "Maison Famars — rénovation & aménagement | MS Reflect" },
      {
        name: "description",
        content:
          "Maison à Famars : entrée et chambres de l'étage repensées comme un parcours coloré. Découvrez le projet en photos avant/après signé MS Reflect.",
      },
      { property: "og:title", content: "Maison Famars — projet MS Reflect" },
      {
        property: "og:description",
        content:
          "Un projet où la couleur devient un langage décoratif : entrée et 1er étage transformés, en photos avant/après.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaisonFamars,
});

function MaisonFamars() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header active="/particuliers" />

      <section className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-6">
          <h1 className="shrink-0 text-lg text-ink-soft md:text-xl">Maison Famars</h1>
          <span className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink-soft">
          MS Reflect est intervenu dans cette maison à Famars pour repenser l'entrée et les chambres
          de l'étage. Le projet a été imaginé comme un parcours coloré, où chaque espace affirme sa
          personnalité tout en s'inscrivant dans une harmonie globale.
        </p>

        <div className="mt-16 grid items-center gap-10 sm:grid-cols-2">
          <BeforeAfter
            before={entreeAvant}
            after={entreeApres}
            alt="Entrée et cage d'escalier, Famars"
            className="aspect-[3/4] w-full"
          />
          <p className="text-center text-lg leading-relaxed tracking-tight text-ink-soft md:text-xl">
            Un projet où la couleur devient un véritable langage décoratif, transformant chaque pièce
            en une ambiance unique tout en créant une harmonie d'ensemble.
          </p>
        </div>
      </section>

      {/* Intention / parti pris / résultat */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid gap-12 sm:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="font-medium">L'intention</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Faire de l'étage un espace vivant et chaleureux, où chaque chambre possède sa propre
                identité. L'enjeu était de créer des atmosphères personnalisées tout en conservant une
                continuité visuelle grâce à un travail précis sur les teintes, les matières et les
                détails décoratifs.
              </p>
            </div>
            <div>
              <h2 className="font-medium">Le parti pris</h2>
              <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li>
                  · Choisir un lustre sculptural et coloré comme pièce maîtresse de l'entrée, véritable
                  point de départ de l'univers chromatique du projet.
                </li>
                <li>
                  · Décliner ses nuances dans les chambres à travers des murs d'accent et des éléments
                  décoratifs pour créer une cohérence subtile.
                </li>
                <li>
                  · Jouer avec la couleur pour révéler les volumes sous combles et donner du caractère
                  à chaque espace.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium">Le résultat</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Un étage métamorphosé où chaque pièce raconte sa propre histoire, tout en faisant écho
                aux autres. Un intérieur harmonieux, audacieux et chaleureux, où la couleur devient le
                lien entre les espaces.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <Brackets>
              <div className="space-y-3 px-8 py-8 text-sm">
                <Fiche label="Type" value="Maison" />
                <Fiche label="Mission" value="Rénovation & aménagement" />
                <Fiche label="Surface" value="Entrée & 1er étage" />
                <Fiche label="Localisation" value="Famars" />
              </div>
            </Brackets>

            <BeforeAfter
              before={bleueAvant}
              after={bleueApres}
              alt="Chambre bleue sous combles"
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>

        {/* Galerie */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <BeforeAfter
            before={corailAvant}
            after={corailApres}
            alt="Chambre terracotta"
            className="aspect-[3/4] w-full"
          />
          <div className="grid gap-6">
            <img
              src={detailCoussin}
              alt="Coussin à motifs sur mur terracotta"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <img
              src={detailArmoire}
              alt="Armoire en bois et rideaux clairs"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <BeforeAfter
            before={parentsAvant}
            after={parentsApres}
            alt="Chambre parentale"
            className="aspect-[4/3] w-full"
          />
          <img
            src={detailMiroirs}
            alt="Composition de miroirs soleil sur le mur"
            loading="lazy"
            className="aspect-[4/3] w-full self-center object-cover"
          />

          <BeforeAfter
            before={verteAvant}
            after={verteApres}
            alt="Chambre verte sous les toits"
            className="aspect-[4/3] w-full"
          />
          <img
            src={detailMurVert}
            alt="Mur d'accent vert et porte en bois"
            loading="lazy"
            className="aspect-[4/3] w-full self-center object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <h2 className="text-xl tracking-tight md:text-2xl">
          Vous souhaitez rénover ou optimiser votre intérieur ?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          MS Reflect vous accompagne dans la transformation de vos espaces.
        </p>
        <a
          href="/#contact"
          className="mx-auto mt-10 block max-w-md border border-border bg-background py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground"
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
