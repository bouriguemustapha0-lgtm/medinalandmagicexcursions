import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Claire M.",
    origin: "Lyon, France",
    text: "Journée à l'Ourika parfaitement organisée : le chauffeur est venu nous chercher au riad à l'heure, la coopérative d'argan était passionnante et nous avons pu marcher jusqu'à la cascade sans être pressés.",
  },
  {
    name: "Thomas & Julie",
    origin: "Bruxelles, Belgique",
    text: "Trois jours jusqu'à Merzouga. Les étapes étaient bien pensées, les gorges du Todra impressionnantes et la nuit dans les dunes reste notre meilleur souvenir du Maroc.",
  },
  {
    name: "Samira B.",
    origin: "Casablanca, Maroc",
    text: "Soirée à Agafay avec quad et dîner sous tente : timing respecté, coucher de soleil magnifique et prix confirmé à l'avance sur WhatsApp, sans surprise.",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((item) => (
        <figure key={item.name} className="rounded-xl border border-border bg-card p-6 shadow-soft">
          <div className="flex gap-1 text-accent" aria-label="Note 5 sur 5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
            {item.text}
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold">
            {item.name}
            <span className="block text-xs font-normal text-muted-foreground">{item.origin}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
