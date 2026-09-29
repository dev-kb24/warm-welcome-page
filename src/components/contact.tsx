import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 text-center">
      <h2 className="text-xl tracking-tight md:text-2xl text-sand">Parlons de votre projet.</h2>
      <div className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ink-soft">
        <p>Chaque projet mérite une réflexion précise.</p> 
        <p className="text-sand">
          Décrivez-moi votre besoin, je vous guiderai
          vers une solution adaptée à votre espace et à vos usages.
        </p>
      </div>

      <div className="mt-8 text-sm text-sand">
        <a href="mailto:staels.mathilde@hotmail.com" className="block hover:text-clay">
          staels.mathilde@hotmail.com
        </a>
        <a href="tel:0651710809" className="block hover:text-clay">
          0651710809
        </a>
      </div>

      <div className="mt-5 flex justify-center gap-5 text-sand">
        <a href="#contact" aria-label="LinkedIn" className="hover:text-clay">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="#contact" aria-label="Facebook" className="hover:text-clay">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#contact" aria-label="Instagram" className="hover:text-clay">
          <Instagram className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-sand">
        Basée à Prouvy
        <br />
        Interventions Hauts de France
      </p>

      <form
        className="mt-12 space-y-3 text-left"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          window.location.href = `mailto:staels.mathilde@hotmail.com?subject=${encodeURIComponent(
            `Projet — ${String(data.get("nom") ?? "")}`,
          )}&body=${encodeURIComponent(
            `${String(data.get("message") ?? "")}\n\n${String(data.get("nom") ?? "")}\n${String(
              data.get("telephone") ?? "",
            )}\n${String(data.get("email") ?? "")}`,
          )}`;
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Field name="nom" placeholder="Nom" />
          <Field name="telephone" placeholder="Téléphone" type="tel" />
        </div>
        <Field name="email" placeholder="Email" type="email" />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Parlez-moi de votre projet (lieu, besoin, contraintes...)"
          className="w-full bg-muted px-4 py-3 text-sm text-ink placeholder:text-sand focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button
          type="submit"
          className="w-full border border-border bg-background py-3 text-sm tracking-wide text-ink transition-colors hover:bg-clay hover:text-primary-foreground"
        >
          <b>Discutons de votre projet</b>
        </button>
      </form>
      <span className="mt-20 block h-px w-full bg-border" />
    </section>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full bg-muted px-4 py-3 text-sm text-ink placeholder:text-sand focus:outline-none focus:ring-1 focus:ring-ring"
    />
  );
}
