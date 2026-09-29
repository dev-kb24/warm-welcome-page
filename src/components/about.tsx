import portrait from "@/assets/ms-portrait.jpg";

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-4xl px-6 pb-24">
      <div className="flex items-center gap-6">
        <h2 className="shrink-0 text-lg text-sand md:text-xl">À propos</h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <h3 className="mt-14 text-lg tracking-tight md:text-xl">
        Une approche sensible et structurée du design d'espace.
      </h3>

      <div className="mt-10 flex flex-col gap-10 sm:flex-row">
        <img
          src={portrait}
          alt="Portrait de Mathilde Staels, designer d'espace"
          loading="lazy"
          width={382}
          height={384}
          className="h-56 w-44 shrink-0 object-cover"
        />
        <div className="space-y-6 text-sm leading-relaxed text-ink-soft md:text-base">
          <p>
            Designer d'espace et décoratrice d'intérieur, j'imagine et conçois des lieux où chaque
            détail est pensé avec précision.
          </p>
          <p className="text-sand">
            Mon approche repose sur une lecture fine des volumes, de la lumière et des usages,
            afin de structurer des espaces à la fois fonctionnels, esthétiques et durables.
          </p>
          <p className="text-sand">
            Formée au design d'espace, j'ai développé une vision qui allie rigueur architecturale
            et sensibilité. Chaque projet devient une recherche d'équilibre entre matière,
            circulation et perception.
          </p>
        </div>
      </div>
      <span className="mt-20 block h-px w-full bg-border" />
    </section>
  );
}
