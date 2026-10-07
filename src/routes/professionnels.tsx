import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Brackets } from "@/components/site";
import proHero from "@/assets/cat-pro.jpg";

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
        <div className="mx-auto max-w-5xl">
          <Brackets>
            <div className="relative overflow-hidden border-50 border-sand/60">
              <img
                src={proHero}
                alt="Bureau professionnel aux tons chauds aménagé par MS Reflect"
                className="h-80 w-full object-cover md:h-96"
              />
              <span className="pointer-events-none absolute inset-0 bg-sand/70" />
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <h1 className="text-3xl leading-snug tracking-tight text-primary-foreground drop-shadow-[0_1px_6px_oklch(0_0_0/45%)] md:text-5xl">
                  <span className="block">Des lieux conçus</span>
                  <span className="block">pour allier fonctionnalité</span>
                  <span className="block">et attractivité.</span>
                </h1>
              </div>
            </div>
          </Brackets>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-relaxed md:text-xl">
            L'aménagement de votre commerce ou de vos bureaux influence directement :
          </p>
          <div className="mt-6 space-y-2 text-lg leading-relaxed text-ink-soft md:text-xl">
            <p>· l'expérience client</p>
            <p>· la perception de votre marque</p>
            <p>· la productivité des équipes</p>
          </div>
          <p className="mt-14 text-xl italic leading-relaxed text-sand md:text-2xl">
            Je conçois des environnements professionnels alignés avec votre positionnement,
            vos usages et vos objectifs.
          </p>
          <a
            href="/#contact"
            className="mt-10 block border border-border bg-background py-3 text-base font-bold tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground md:text-lg"
          >
            Échanger sur votre projet
          </a>
        </div>
      </section>

      {/* Travaux */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="flex items-center gap-6">
          <h2 className="shrink-0 text-2xl text-ink-soft md:text-3xl">Chantier en cours...</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
