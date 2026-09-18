import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExcursionCard } from "@/components/ExcursionCard";
import { JsonLd } from "@/components/JsonLd";
import { excursions } from "@/data/excursions";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/data/site";

export const Route = createFileRoute("/excursions/")({
  head: () => ({
    meta: [
      { title: "Excursions au Départ de Marrakech — 7 Destinations | " + site.name },
      {
        name: "description",
        content:
          "Comparez nos 7 excursions au départ de Marrakech : Ourika, Ouzoud, Ouarzazate, Essaouira, Zagora, Merzouga et Agafay. Distances, durées et tarifs indicatifs.",
      },
      { property: "og:title", content: "Nos 7 excursions au départ de Marrakech" },
      {
        property: "og:description",
        content:
          "Montagne, cascades, kasbahs, océan et désert : toutes nos excursions privées au départ de Marrakech, avec distances et durées réelles.",
      },
    ],
  }),
  component: ExcursionsIndex,
});

const filters = ["Toutes", "Journée", "Demi-journée / soirée", "Plusieurs jours"] as const;

function ExcursionsIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Toutes");
  const visible =
    filter === "Toutes" ? excursions : excursions.filter((e) => e.categorie === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Excursions", path: "/excursions" },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", path: "/" },
          { name: "Excursions", path: "/excursions" },
        ]}
      />

      <h1 className="text-balance-title mt-6 font-display text-3xl font-semibold md:text-4xl">
        Excursions au départ de Marrakech
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
        Sept excursions privées, de la demi-journée au circuit de trois jours. Toutes incluent la
        prise en charge à votre hôtel ou riad à Marrakech et un chauffeur-guide agréé. Les distances
        indiquées sont les distances routières réelles depuis le centre-ville.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer par durée">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors ${
              filter === item
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary/50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((excursion) => (
          <ExcursionCard key={excursion.slug} excursion={excursion} />
        ))}
      </div>

      <section className="mt-16 rounded-xl border border-border bg-secondary/60 p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold">Agafay, Zagora ou Merzouga ?</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Agafay est un désert rocheux situé à 40 km de Marrakech, sans dunes de sable, accessible en
          une demi-journée. Zagora, à 360 km, associe hamada et petites dunes et se visite en 2 jours
          avec une nuit en bivouac. Merzouga, à 560 km, est le seul de nos itinéraires à atteindre
          les grandes dunes de l&apos;Erg Chebbi, dont certaines dépassent 150 mètres : comptez 3 jours
          minimum.
        </p>
      </section>
    </div>
  );
}
