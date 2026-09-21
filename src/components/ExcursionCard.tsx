import { Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import type { Excursion } from "@/data/excursions";

export function ExcursionCard({ excursion }: { excursion: Excursion }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <Link
        to="/excursions/$slug"
        params={{ slug: excursion.slug }}
        className="block focus-visible:outline-none"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
          <img
            src={excursion.image}
            alt={excursion.imageAlt}
            width={1600}
            height={1067}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary">
            {excursion.categorie}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold">{excursion.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{excursion.teaser}</p>
          <dl className="mt-4 grid gap-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">Distance</dt>
              <dd>{excursion.distanceLabel}</dd>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">Durée</dt>
              <dd>{excursion.durationLabel}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm font-semibold text-primary">
            À partir de {excursion.priceFrom} € / personne
          </p>
        </div>
      </Link>
    </article>
  );
}
