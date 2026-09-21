import { createFileRoute, Link } from "@tanstack/react-router";
import transfertsImg from "@/assets/transferts.jpg";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const title = "Transfert Aéroport Marrakech → Hôtel | Réservation à l'Avance";
const description =
  "Transfert privé de l'aéroport de Marrakech-Menara vers votre hôtel ou riad. Chauffeur à l'arrivée, prix fixe, réservation en ligne ou par WhatsApp.";

const glance = [
  { label: "Distance aéroport → centre-ville", value: "~6 km" },
  { label: "Durée moyenne", value: "15 à 25 minutes" },
  { label: "Prix", value: "20 € par trajet (prix par véhicule, pas par personne)" },
  { label: "Suivi de vol", value: "Oui — ajustement automatique en cas de retard" },
  { label: "Accès médina", value: "Portage possible du dernier tronçon à pied" },
];

const faq = [
  {
    q: "Comment reconnaître mon chauffeur à l'aéroport ?",
    a: "Il vous attend à la sortie des arrivées avec un panneau affichant votre nom.",
  },
  {
    q: "Que se passe-t-il si mon vol est retardé ?",
    a: "Le numéro de vol communiqué lors de la réservation permet un suivi automatique — votre chauffeur ajuste son horaire d'arrivée sans supplément.",
  },
  {
    q: "Le prix est-il fixe ou par personne ?",
    a: "Le tarif est fixe par véhicule, pas par personne, contrairement à un taxi négocié sur place.",
  },
  {
    q: "Peut-on réserver un transfert seul, sans excursion ?",
    a: "Oui, le transfert aéroport peut être réservé indépendamment de toute excursion.",
  },
];

export const Route = createFileRoute("/transferts-aeroport/arrivee")({
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
  component: ArriveePage,
});

function ArriveePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Transfert aéroport Marrakech-Menara → hôtel",
          description,
          path: "/transferts-aeroport/arrivee",
          price: 20,
          type: "TaxiService",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Transferts aéroport", path: "/transferts-aeroport" },
          { name: "Aéroport → hôtel", path: "/transferts-aeroport/arrivee" },
        ])}
      />

      <PageHero
        image={transfertsImg}
        imageAlt="Chauffeur tenant une pancarte nominative à la sortie des arrivées de l'aéroport Marrakech-Menara"
        eyebrow="Transferts"
        title="Transfert Aéroport Marrakech → Votre Hôtel"
        intro="Votre chauffeur vous attend à la sortie des arrivées, pancarte à votre nom, pour un trajet direct vers votre hôtel ou riad — sans négociation de dernière minute avec un taxi après un vol long-courrier."
      >
        <Button asChild size="lg" className="min-h-12">
          <a
            href={whatsappLink(
              "Bonjour, je souhaite réserver un transfert aéroport Marrakech → hôtel.",
            )}
          >
            Réserver ce transfert
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
            { name: "Transferts aéroport", path: "/transferts-aeroport" },
            { name: "Aéroport → hôtel", path: "/transferts-aeroport/arrivee" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                Un transfert privé entre l&apos;aéroport Marrakech-Menara et le centre-ville prend
                généralement 15 à 25 minutes selon le quartier. La médina, où les véhicules ne
                peuvent pas toujours accéder directement jusqu&apos;au riad, ajoute parfois un court
                trajet à pied accompagné. Réserver ce transfert à l&apos;avance permet d&apos;avoir un
                chauffeur qui vous attend à la sortie des arrivées, à prix fixe, sans surprise et sans
                file d&apos;attente pour un taxi.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">En un coup d&apos;œil</h2>
              <dl className="mt-5 overflow-hidden rounded-xl border border-border">
                {glance.map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid gap-1 p-4 sm:grid-cols-[260px_1fr] ${
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
              <h2 className="font-display text-2xl font-semibold">Comment ça se passe</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Après votre atterrissage à l&apos;aéroport Marrakech-Menara, votre chauffeur vous
                attend à la sortie des arrivées avec un panneau à votre nom. Le numéro de vol
                communiqué à la réservation permet de suivre les éventuels retards et d&apos;ajuster
                l&apos;heure de prise en charge automatiquement — vous n&apos;avez rien à faire. Le
                trajet vers votre hôtel ou riad dure généralement entre 15 et 25 minutes selon le
                quartier. Si votre hébergement se trouve dans la médina, où la circulation automobile
                est limitée, votre chauffeur ou un accompagnateur local vous guide sur le dernier
                tronçon à pied.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Accueil à l'aéroport avec pancarte nominative",
                    "Suivi du vol et ajustement en cas de retard",
                    "Trajet direct vers votre hôtel ou riad",
                    "Aide au dernier tronçon en cas d'accès médina limité",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Non inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Excédent bagages exceptionnel (à signaler à la réservation)",
                    "Pourboire chauffeur (optionnel)",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
              <div className="mt-4">
                <FAQAccordion items={faq} idPrefix="arrivee" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">À prévoir aussi</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link to="/transferts-aeroport/depart" className="text-primary underline">
                    Transfert hôtel → aéroport
                  </Link>{" "}
                  pour votre retour.
                </li>
                <li>
                  <Link to="/guide-prive/demi-journee" className="text-primary underline">
                    Visite guidée en demi-journée
                  </Link>{" "}
                  pour votre premier jour à Marrakech.
                </li>
                <li>
                  <Link to="/excursions" className="text-primary underline">
                    Les excursions au départ de Marrakech
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Indiquez votre numéro de vol et votre hôtel : nous confirmons le tarif par WhatsApp.
            </p>
            <div className="mt-4">
              <BookingForm defaultService="Transfert aéroport → hôtel" />
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
