import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Clock, MapPin, ShieldCheck, UserRound } from "lucide-react";
import heroImg from "@/assets/hero-atlas.jpg";
import { PageHero } from "@/components/PageHero";
import { ExcursionCard } from "@/components/ExcursionCard";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { excursions } from "@/data/excursions";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Excursions depuis Marrakech — Désert, Atlas & Côte | " + site.name,
      },
      {
        name: "description",
        content:
          "Excursions en petits groupes au départ de Marrakech : Ourika, Ouzoud, Ouarzazate, Essaouira, Zagora, Merzouga, Agafay. Prise en charge à l'hôtel, chauffeur-guide agréé, réservation par WhatsApp.",
      },
      {
        property: "og:title",
        content: "Excursions en petits groupes au départ de Marrakech — Désert, Atlas & Côte",
      },
      {
        property: "og:description",
        content:
          "7 excursions au départ de Marrakech, transferts privés aéroport et visite guidée francophone. Prise en charge à votre hôtel ou riad.",
      },
    ],
  }),
  component: Home,
});

const atouts = [
  {
    icon: Car,
    title: "Prise en charge à l'hôtel",
    text: "Chaque excursion démarre devant votre hôtel ou riad à Marrakech, y compris dans la médina, au point d'accès véhicule le plus proche.",
  },
  {
    icon: UserRound,
    title: "Chauffeurs-guides agréés",
    text: "Nos chauffeurs-guides parlent français, anglais et arabe, avec l'espagnol sur demande. L'agence est déclarée comme tour-opérateur.",
  },
  {
    icon: ShieldCheck,
    title: "Prix confirmé à l'avance",
    text: "Le tarif est confirmé par message avant le départ, sans paiement en ligne ni négociation sur place.",
  },
  {
    icon: Clock,
    title: "Petits groupes partagés",
    text: "Vous partagez un véhicule climatisé avec d'autres voyageurs : 8 personnes maximum en voiture, jusqu'à 16 en minibus. Loin des bus de 40 places, avec un chauffeur-guide dédié à la conduite.",
  },
];

function Home() {
  return (
    <>
      <PageHero
        priority
        image={heroImg}
        imageAlt="Route de montagne et village berbère en pisé dans le Haut Atlas au sud de Marrakech au lever du soleil"
        eyebrow="Marrakech · Atlas · Sahara · Atlantique"
        title="Excursions en petits groupes au départ de Marrakech"
        intro="Sept destinations, une seule agence : la vallée de l'Ourika à une heure de la ville, les cascades d'Ouzoud, Ouarzazate et Aït Ben Haddou, Essaouira, les déserts de Zagora, de Merzouga et d'Agafay. Transferts privés aéroport et visite guidée francophone également disponibles."
      >
        <Button asChild size="lg" className="min-h-12 text-base">
          <Link to="/contact">Réserver ou demander un devis</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-h-12 border-primary-foreground/40 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <Link to="/excursions">Voir les 7 excursions</Link>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          Toutes nos excursions au départ de Marrakech
        </h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Les distances sont réelles et les durées annoncées incluent les temps de route : l&apos;Ourika
          est à 60 km de Marrakech, Ouzoud à 150 km, Essaouira à 170 km, Ouarzazate à 200 km, Zagora
          à 360 km et Merzouga à 560 km. Agafay, le désert rocheux, est à 40 km seulement.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((excursion) => (
            <ExcursionCard key={excursion.slug} excursion={excursion} />
          ))}
        </div>
      </section>

      <div className="zellige-rule" aria-hidden="true" />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">
          Pourquoi réserver avec nous
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {atouts.map((atout) => (
            <div key={atout.title} className="rounded-xl border border-border bg-card p-6">
              <atout.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold">{atout.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{atout.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            Transferts privés et visite guidée
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold">Transferts aéroport ↔ hôtel</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Un transfert privé entre l&apos;aéroport Marrakech-Menara et le centre-ville prend 15 à
                25 minutes selon le quartier. Chauffeur à la sortie des arrivées avec une pancarte à
                votre nom, prix fixe par véhicule.
              </p>
              <Link
                to="/transferts-aeroport"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Détails et tarifs des transferts
              </Link>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold">Visite guidée de Marrakech</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Une demi-journée (environ 4 heures) couvre la médina, les souks et un ou deux
                monuments majeurs. La journée complète (environ 8 heures) ajoute un déjeuner et
                davantage de sites, au rythme du visiteur.
              </p>
              <Link
                to="/guide-prive"
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
              >
                <UserRound className="size-4" aria-hidden="true" />
                Découvrir les formules de visite guidée
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">Avis de nos voyageurs</h2>
        <p className="mt-3 text-muted-foreground">
          Note moyenne de {site.rating.value}/5 sur {site.rating.count} avis.
        </p>
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>
    </>
  );
}
