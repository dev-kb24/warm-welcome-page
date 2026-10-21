type OfferProps = {
  title: string;
  intro: string;
  points: string[];
  ideal: string;
};

export function Offer({ title, intro, points, ideal }: OfferProps) {
  return (
    <div>
      <h4 className="text-xl font-bold text-steel md:text-2xl">{title}</h4>
      <p className="mt-4 text-base leading-relaxed text-steel md:text-lg">{intro}</p>
      <ul className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
        {points.map((p) => (
          <li key={p}>· {p}</li>
        ))}
      </ul>
      <p className="mt-5 text-base leading-relaxed text-steel md:text-lg">Idéal pour : {ideal}</p>
      <a href="#" className="mt-4 inline-block text-base font-bold text-ink decoration-1 underline-offset-4 hover:text-clay md:text-lg">
        ⤷ Sur devis
      </a>
    </div>
  );
}
