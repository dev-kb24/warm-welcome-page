import { createFileRoute } from "@tanstack/react-router";

import { Brackets, Footer, Header } from "@/components/site";
import proHero from "@/assets/pro-hero.jpg";

export const Route = createFileRoute("/professionnels")({
  head: () => ({
    meta: [
      { title: "Professionnels — MS Reflect, aménagement de commerces et bureaux" },
      {
        name: "description",
        content:
          "Aménagement de commerces et bureaux : des lieux conçus pour allier fonctionnalité et attractivité. MS Reflect conçoit des environnements professionnels alignés avec votre marque.",
      },
      { property: "og:title", content: "Professionnels — MS Reflect" },
      {
        property: "og:description",
        content:
          "Des lieux conçus pour allier fonctionnalité et attractivité : expérience client, image de marque, productivité des équipes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Professionnels,
});

function Professionnels() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header active="/professionnels" />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl">
          <Brackets>
            <div className="relative overflow-hidden">
              <img
                src={proHero}
                alt="Bureau professionnel aux tons chauds aménagé par MS Reflect"
                width={1584}
                height={672}
                className="h-64 w-full object-cover md:h-80"
              />
              <span className="pointer-events-none absolute inset-0 bg-[oklch(0.7364_0.0354_81.93/25%)]" />
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <h1 className="text-2xl leading-snug tracking-tight text-primary-foreground drop-shadow-[0_1px_6px_oklch(0_0_0/45%)] md:text-4xl">
                  <span className="block">Des lieux conçus</span>
                  <span className="block">pour allier fonctionnalité</span>
                  <span className="block">et attractivité.</span>
                </h1>
              </div>
            </div>
          </Brackets>
        </div>

        <div className="mx-auto mt-16 max-w-xl text-center">
          <p className="text-base leading-relaxed md:text-lg">
            L'aménagement de votre commerce
            <br />
            ou de vos bureaux influence directement :
          </p>
          <p className="mt-3 leading-loose text-ink-soft">
            · l'expérience client
            <br />
            · la perception de votre marque
            <br />· la productivité des équipes
          </p>
          <p className="mt-10 text-lg italic text-sand md:text-xl">
            Je conçois des environnements professionnels alignés
            <br />
            avec votre positionnement, vos usages et vos objectifs.
          </p>
          <a
            href="/#contact"
            className="mt-10 block border border-border bg-background py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground"
          >
            Échanger sur votre projet
          </a>
        </div>
      </section>

      {/* Travaux */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="flex items-center gap-6">
          <h2 className="shrink-0 text-lg text-ink-soft md:text-xl">Chantier en cours...</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
