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

const title = "Transfert Hôtel Marrakech → Aéroport | Départ Serein";
const description =
  "Transfert privé de votre hôtel ou riad à Marrakech vers l'aéroport Marrakech-Menara. Prise en charge ponctuelle, prix fixe, réservation en ligne ou WhatsApp.";

const glance = [
  { label: "Distance", value: "~6 km depuis le centre-ville" },
  { label: "Durée moyenne", value: "15 à 25 minutes" },
  {
    label: "Prise en charge recommandée",
    value: "3h avant un vol international, 2h pour un vol domestique",
  },
  { label: "Point de rendez-vous médina", value: "Accompagnement possible depuis votre riad" },
];

const faq = [
  {
    q: "Combien de temps avant mon vol dois-je réserver le transfert ?",
    a: "Comptez une prise en charge 3 heures avant le décollage pour un vol international, 2 heures pour un vol domestique — en plus du temps de trajet (15-25 minutes).",
  },
  {
    q: "Le chauffeur vient-il jusqu'à mon riad dans la médina ?",
    a: "Si l'accès en véhicule est limité, un point de rendez-vous accessible est convenu à l'avance, avec accompagnement si nécessaire.",
  },
  {
    q: "Peut-on modifier l'heure de prise en charge après réservation ?",
    a: "Oui, contactez l'agence par WhatsApp ou téléphone dès que possible pour ajuster l'horaire.",
  },
  {
    q: "Le prix inclut-il tous les passagers du groupe ?",
    a: "Le tarif est fixé par véhicule selon la taille du groupe — précisez le nombre de passagers et de bagages à la réservation.",
  },
];

export const Route = createFileRoute("/transferts-aeroport/depart")({
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
  component: DepartPage,
});

function DepartPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Transfert hôtel Marrakech → aéroport Marrakech-Menara",
          description,
          path: "/transferts-aeroport/depart",
          price: 20,
          type: "TaxiService",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Transferts aéroport", path: "/transferts-aeroport" },
          { name: "Hôtel → aéroport", path: "/transferts-aeroport/depart" },
        ])}
      />

      <PageHero
        image={transfertsImg}
        imageAlt="Véhicule privé climatisé attendant devant un riad de Marrakech pour un départ vers l'aéroport"
        eyebrow="Transferts"
        title="Transfert de Votre Hôtel vers l'Aéroport de Marrakech"
        intro="Pas de stress de dernière minute pour trouver un taxi avant un vol : votre chauffeur vous récupère à l'heure convenue, directement à votre hôtel ou riad."
      >
        <Button asChild size="lg" className="min-h-12">
          <a
            href={whatsappLink(
              "Bonjour, je souhaite réserver un transfert hôtel → aéroport à Marrakech.",
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
            { name: "Hôtel → aéroport", path: "/transferts-aeroport/depart" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                Le trajet entre le centre de Marrakech et l&apos;aéroport Marrakech-Menara prend en
                moyenne 15 à 25 minutes, hors circulation exceptionnelle. Pour un vol international,
                il est recommandé de prévoir une prise en charge 3 heures avant le décollage ; pour un
                vol domestique ou régional, 2 heures suffisent généralement. Si votre hébergement se
                trouve dans la médina, votre chauffeur ou un accompagnateur local vous rejoint à un
                point de rendez-vous accessible en véhicule.
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
                À l&apos;heure convenue lors de la réservation, votre chauffeur se présente directement
                à votre hôtel ou riad (ou au point de rendez-vous convenu si l&apos;accès en véhicule
                jusqu&apos;à votre porte n&apos;est pas possible). Le trajet vers l&apos;aéroport
                Marrakech-Menara dure généralement entre 15 et 25 minutes. Nous recommandons une marge
                de sécurité supplémentaire en cas de circulation dense ou d&apos;imprévu,
                particulièrement aux heures de pointe ou en haute saison touristique.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Prise en charge à votre hôtel ou riad (ou point de rendez-vous convenu)",
                    "Trajet direct vers l'aéroport Marrakech-Menara",
                    "Suivi de l'heure de départ pour ajuster la prise en charge si besoin",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Non inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  <li>• Pourboire chauffeur (optionnel)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
              <div className="mt-4">
                <FAQAccordion items={faq} idPrefix="depart" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">Avant votre départ</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link to="/transferts-aeroport/arrivee" className="text-primary underline">
                    Transfert aéroport → hôtel
                  </Link>{" "}
                  pour votre arrivée.
                </li>
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "desert-agafay" }}
                    className="text-primary underline"
                  >
                    Soirée au désert d&apos;Agafay
                  </Link>{" "}
                  — possible la veille du départ.
                </li>
                <li>
                  <Link to="/faq" className="text-primary underline">
                    Questions fréquentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Donnez-nous votre heure de vol : nous calculons l&apos;heure de prise en charge.
            </p>
            <div className="mt-4">
              <BookingForm defaultService="Transfert hôtel → aéroport" />
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
