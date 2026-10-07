type ProjectCardProps = {
  src: string;
  alt: string;
  title: string;
  text: string;
  href?: string;
};

export function ProjectCard({ src, alt, title, text, href = "#" }: ProjectCardProps) {
  return (
    <div>
      <img src={src} alt={alt} loading="lazy" className="aspect-square w-full object-cover" />
      <h4 className="mt-4 text-xl font-bold text-steel md:text-2xl">{title}</h4>
      <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">{text}</p>
      <a href={href} className="mt-4 inline-block text-base font-bold text-ink decoration-1 underline-offset-4 hover:text-clay md:text-lg">
        ⤷ Voir le projet
      </a>
    </div>
  );
}
