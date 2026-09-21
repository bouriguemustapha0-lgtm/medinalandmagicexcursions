import { createFileRoute, Link } from "@tanstack/react-router";
import guideImg from "@/assets/guide-prive.jpg";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const title = "Visite Guidée Marrakech Demi-Journée | Médina & Monuments";
const description =
  "Visite guidée de Marrakech en demi-journée avec un guide francophone agréé, en petit groupe : médina, souks et un ou deux monuments majeurs.";

const glance = [
  { label: "Durée", value: "~4 heures" },
  { label: "Formule", value: "Petit groupe partagé (jusqu'à 8 personnes)" },
  { label: "Langues", value: "Français, anglais, espagnol (selon disponibilité)" },
  { label: "Idéal pour", value: "Premier jour à Marrakech, découverte orientée médina" },
];

const faq = [
  {
    q: "Quelle est la différence entre la formule demi-journée et journée complète ?",
    a: "La demi-journée (~4h) couvre la médina et 1-2 monuments. La journée complète (~8h) permet de voir davantage de sites, inclut généralement une pause déjeuner, et laisse plus de flexibilité dans le rythme.",
  },
  {
    q: "La visite est-elle privée ou en groupe ?",
    a: "Il s'agit d'une visite guidée en petit groupe partagé (jusqu'à 8 personnes). Pour une visite privée rien qu'à vous, indiquez-le à la réservation : nous proposons cette formule en option.",
  },
  {
    q: "Le guide parle-t-il français ?",
    a: "Oui, nos guides sont francophones ; anglophones et hispanophones également disponibles selon la demande.",
  },
  {
    q: "Les frais d'entrée sont-ils inclus ?",
    a: "Non, les droits d'entrée aux monuments et musées restent à votre charge, en supplément du tarif du guide.",
  },
  {
    q: "Peut-on personnaliser l'itinéraire ?",
    a: "Oui, dans la limite du programme partagé — indiquez vos centres d'intérêt lors de la réservation (histoire, artisanat, gastronomie, photographie) et le guide adapte le parcours en conséquence.",
  },
];

export const Route = createFileRoute("/guide-prive/demi-journee")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DemiJourneePage,
});

function DemiJourneePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Visite guidée de Marrakech — demi-journée (4 heures)",
          description,
          path: "/guide-prive/demi-journee",
          price: 70,
          type: "TouristTrip",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Visite guidée", path: "/guide-prive" },
          { name: "Demi-journée", path: "/guide-prive/demi-journee" },
        ])}
      />

      <PageHero
        image={guideImg}
        imageAlt="Guide agréé accompagnant des visiteurs dans les souks de la médina de Marrakech"
        eyebrow="Visite guidée"
        title="Visite Guidée — Demi-Journée à Marrakech"
        intro="Un guide agréé, en petit groupe, pour donner du sens aux ruelles de la médina — son histoire, son artisanat, ses détours cachés que l'on ne trouve pas seul."
      >
        <Button asChild size="lg" className="min-h-12">
          <a
            href={whatsappLink(
              "Bonjour, je souhaite réserver une visite guidée de Marrakech en demi-journée.",
            )}
          >
            Réserver une demi-journée
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="min-h-12">
          <a href={site.phoneHref}>Appeler {site.phone}</a>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Visite guidée", path: "/guide-prive" },
            { name: "Demi-journée", path: "/guide-prive/demi-journee" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                Une visite guidée de Marrakech en demi-journée dure généralement environ 4
                heures et permet de couvrir la médina, les souks, et un à deux monuments majeurs au
                choix (Jardin Majorelle, palais Bahia, tombeaux saadiens, mosquée Koutoubia en
                extérieur). Le guide est francophone, anglophone ou hispanophone selon disponibilité,
                et officiellement agréé. L'itinéraire reste personnalisable selon vos centres
                d'intérêt — histoire, artisanat, gastronomie ou photographie.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">En un coup d'œil</h2>
              <dl className="mt-5 overflow-hidden rounded-xl border border-border">
                {glance.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid gap-1 p-4 sm:grid-cols-[200px_1fr] ${
                      index % 2 === 0 ? "bg-card" : "bg-secondary/40"
                    }`}
                  >
                    <dt className="text-sm font-semibold tracking-wide uppercase">{row.label}</dt>
                    <dd className="text-base">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Ce que vous pouvez voir</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Le guide s'adapte au rythme du groupe et à vos priorités. Parmi les
                incontournables généralement inclus dans une demi-journée : la médina et ses souks
                organisés par corporation (teinturiers, tanneurs, ferronniers, tapis), un ou deux
                monuments emblématiques (Jardin Majorelle, palais Bahia, tombeaux saadiens), et un
                passage devant la mosquée Koutoubia. L'itinéraire peut être ajusté selon vos
                envies — plus orienté artisanat, histoire, ou simplement flânerie photographique.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Guide agréé pour la durée de la formule, en petit groupe",
                    "Itinéraire personnalisable selon vos centres d'intérêt",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Non inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Frais d'entrée aux monuments et musées",
                    "Transport (à pied dans la médina ; véhicule en option pour les sites excentrés)",
                    "Déjeuner ou collations",
                    "Pourboire guide (optionnel)",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
              <div className="mt-4">
                <FAQAccordion items={faq} idPrefix="guide-demi" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">Aller plus loin</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link to="/guide-prive/journee-complete" className="text-primary underline">
                    Visite guidée — journée complète
                  </Link>{" "}
                  pour voir 4 à 6 sites majeurs.
                </li>
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "vallee-ourika" }}
                    className="text-primary underline"
                  >
                    Vallée de l'Ourika
                  </Link>{" "}
                  — la montagne à une heure de la médina.
                </li>
                <li>
                  <Link to="/transferts-aeroport/arrivee" className="text-primary underline">
                    Transfert aéroport → hôtel
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Indiquez vos dates et vos centres d'intérêt.
            </p>
            <div className="mt-4">
              <BookingForm defaultService="Visite guidée — demi-journée" />
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
