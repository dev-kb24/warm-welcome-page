import { Brackets } from "@/components/site";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6">
      <div className="relative overflow-hidden">
        <img
          src={heroBg}
          alt="Croquis d'architecture sur papier"
          width={1920}
          height={768}
          className="h-[380px] w-full object-cover saturate-[0.55] md:h-[440px]"
        />
        <span className="pointer-events-none absolute inset-0 bg-sand/25" />
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
          className="w-full max-w-md border border-border bg-background py-3 text-center text-sm tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground"
        >
          <b>Discutons de votre projet</b>
        </a>
      </div>
    </section>
  );
}
