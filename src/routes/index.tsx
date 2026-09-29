import { createFileRoute, Link } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { Method } from "@/components/method";
import { Usages } from "@/components/usages";

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

function Home() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <Hero />
      <Usages />
      <Method />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}
