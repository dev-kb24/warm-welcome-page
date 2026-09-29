import { Link } from "@tanstack/react-router";

import { Brackets } from "@/components/site";
import catPro from "@/assets/cat-pro.jpg";
import catPart from "@/assets/cat-part.jpg";

export function Usages() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="text-xl tracking-tight md:text-2xl">Des espaces pensés pour chaque usage</h2>

      <div className="mt-16 flex flex-col items-center justify-center gap-14 sm:flex-row sm:gap-16">
        <CategoryCard
          id="professionnels"
          src={catPro}
          label="PROFESSIONNELS"
          alt="Bureau professionnel aménagé"
          href="/professionnels"
        />
        <CategoryCard
          id="particuliers"
          src={catPart}
          label="PARTICULIERS"
          alt="Salon particulier aménagé"
          href="/particuliers"
        />
      </div>
    </section>
  );
}

function CategoryCard({
  id,
  src,
  label,
  alt,
  href,
}: {
  id: string;
  src: string;
  label: string;
  alt: string;
  href: string;
}) {
  const inner = (
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
        <span className="absolute inset-0 bg-overlay opacity-70 transition-opacity group-hover:opacity-50" />
        <span className="absolute inset-0 flex items-center justify-center text-sm tracking-[0.2em] text-primary-foreground">
          {label}
        </span>
      </div>
    </Brackets>
  );

  if (href.startsWith("/")) {
    return (
      <Link id={id} to={href} className="group block">
        {inner}
      </Link>
    );
  }
  return (
    <a id={id} href={href} className="group block">
      {inner}
    </a>
  );
}
