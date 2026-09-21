import { createFileRoute, Link } from "@tanstack/react-router";
import transfertsImg from "@/assets/transferts.jpg";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const title = "Transfert aéroport Marrakech ↔ hôtel | Chauffeur privé, prix fixe";
const description =
  "Transfert privé entre l'aéroport Marrakech-Ménara et votre hôtel ou riad : accueil avec panneau nominatif, véhicule climatisé, prix fixe confirmé à l'avance, 24h/24.";

const glance: { label: string; value: string }[] = [
  { label: "Trajet", value: "Aéroport Marrakech-Ménara (RAK) ↔ hôtel, riad ou villa" },
  { label: "Distance", value: "6 km jusqu'au centre · 15 à 25 minutes selon la circulation" },
  { label: "Prix", value: "20 € par trajet (prix par véhicule, pas par personne)" },
  { label: "Véhicules", value: "Berline 1–3 pers. · Minivan 4–7 pers. · Minibus jusqu'à 16 pers." },
  { label: "Disponibilité", value: "24h/24, 7j/7, y compris vols de nuit" },
  { label: "Attente incluse", value: "60 minutes après l'atterrissage, suivi du vol en temps réel" },
];

const faq = [
  {
    q: "Combien de temps faut-il entre l'aéroport de Marrakech et le centre-ville ?",
    a: "L'aéroport Marrakech-Ménara se trouve à 6 km du centre. Comptez 15 minutes jusqu'à Guéliz ou l'Hivernage et 20 à 25 minutes jusqu'à la médina, où le véhicule s'arrête au point d'accès le plus proche de votre riad.",
  },
  {
    q: "Où se fait l'accueil à l'arrivée ?",
    a: "Le chauffeur vous attend dans le hall des arrivées, après la douane, avec un panneau portant votre nom. Il porte vos bagages jusqu'au véhicule et vous accompagne à pied jusqu'à la porte du riad si celui-ci n'est pas accessible en voiture.",
  },
  {
    q: "Que se passe-t-il si mon vol est retardé ?",
    a: "Nous suivons le numéro de vol que vous nous communiquez. Le chauffeur adapte son heure de présence au retard et 60 minutes d'attente sont incluses après l'atterrissage, sans supplément.",
  },
  {
    q: "Le tarif est-il par personne ou par véhicule ?",
    a: "Le tarif est fixé par véhicule, quel que soit le nombre de passagers dans la limite de sa capacité. Il est confirmé par message avant votre arrivée et ne change pas sur place.",
  },
  {
    q: "Les sièges enfants sont-ils disponibles ?",
    a: "Oui, siège bébé et rehausseur sont fournis gratuitement sur demande à la réservation. Précisez l'âge des enfants dans votre message.",
  },
  {
    q: "Puis-je réserver le retour vers l'aéroport en même temps ?",
    a: "Oui. Indiquez votre heure de vol retour : nous calculons l'heure de prise en charge à l'hôtel, en général 3 heures avant un vol international et 2 heures avant un vol intérieur.",
  },
];

export const Route = createFileRoute("/transferts-aeroport/")({
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
  component: TransfertsPage,
});

function TransfertsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Transfert privé aéroport Marrakech-Ménara ↔ hôtel",
          description,
          path: "/transferts-aeroport",
          price: 20,
          type: "TaxiService",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Transferts aéroport", path: "/transferts-aeroport" },
        ])}
      />

      <PageHero
        image={transfertsImg}
        imageAlt="Chauffeur privé attendant des voyageurs devant l'aéroport Marrakech-Ménara, véhicule climatisé"
        eyebrow="Service à Marrakech"
        title="Transfert aéroport Marrakech ↔ hôtel avec chauffeur privé"
        intro="Un chauffeur vous attend dans le hall des arrivées avec votre nom, vous conduit directement à votre hôtel ou riad, à prix fixe confirmé avant votre départ."
      >
        <Button asChild size="lg" className="min-h-12">
          <a href="#reserver-transfert">Réserver mon transfert</a>
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
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                L&apos;aéroport Marrakech-Ménara (code RAK) est situé à 6 km du centre de Marrakech,
                soit 15 à 25 minutes de route selon votre quartier. Un transfert privé coûte à partir
                de 20 € par trajet et par véhicule, quel que soit le nombre de passagers, et s&apos;organise
                24h/24. Le chauffeur vous accueille dans le hall des arrivées avec un panneau
                nominatif, suit votre numéro de vol en cas de retard et vous dépose directement
                devant votre hébergement — ou au point d&apos;accès véhicule le plus proche
                lorsqu&apos;il se trouve dans la médina.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">En un coup d&apos;œil</h2>
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
              <h2 className="font-display text-2xl font-semibold">Comment se déroule le transfert</h2>
              <ol className="mt-5 space-y-5">
                {[
                  {
                    title: "Avant le départ",
                    text: "Vous nous envoyez votre numéro de vol, votre heure d'atterrissage, le nom de votre hôtel et le nombre de voyageurs. Nous confirmons le véhicule et le tarif par message.",
                  },
                  {
                    title: "À l'arrivée",
                    text: "Le chauffeur est présent dans le hall des arrivées avec un panneau à votre nom. Aucune file d'attente, aucune négociation de prix : le tarif est déjà fixé.",
                  },
                  {
                    title: "Sur la route",
                    text: "Véhicule climatisé, eau minérale offerte, bagages et sièges enfants inclus. Le chauffeur parle français et anglais et peut vous donner les premiers repères pratiques de la ville.",
                  },
                  {
                    title: "Retour vers l'aéroport",
                    text: "Nous calculons l'heure de prise en charge à partir de votre vol : 3 heures avant un vol international, 2 heures avant un vol intérieur. Le chauffeur attend devant l'hôtel 10 minutes avant l'heure convenue.",
                  },
                ].map((step) => (
                  <li key={step.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Véhicule privé climatisé et chauffeur professionnel",
                    "Accueil avec panneau nominatif dans le hall des arrivées",
                    "Suivi du vol et 60 minutes d'attente après l'atterrissage",
                    "Bagages, siège bébé ou rehausseur sur demande",
                    "Eau minérale à bord",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Non inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Pourboire au chauffeur (libre)",
                    "Attente supplémentaire au-delà de 60 minutes",
                    "Arrêts intermédiaires non prévus (supplément selon la durée)",
                    "Repas et visites",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
              <div className="mt-4">
                <FAQAccordion items={faq} idPrefix="transferts" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">À combiner avec</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link to="/guide-prive" className="text-primary underline">
                    Visite guidée de Marrakech
                  </Link>{" "}
                  — pour votre première demi-journée dans la médina, juste après l&apos;arrivée.
                </li>
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "desert-agafay" }}
                    className="text-primary underline"
                  >
                    Soirée dans le désert d&apos;Agafay
                  </Link>{" "}
                  — à 40 minutes de l&apos;aéroport, idéale dès le soir de l&apos;arrivée.
                </li>
                <li>
                  <Link to="/excursions" className="text-primary underline">
                    Toutes les excursions au départ de Marrakech
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside id="reserver-transfert" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver un transfert</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Indiquez votre vol et votre hôtel : nous confirmons le tarif par WhatsApp.
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
