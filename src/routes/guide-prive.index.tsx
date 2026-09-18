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

const title = "Guide privé Marrakech — Visite médina demi-journée ou journée | Guide agréé";
const description =
  "Visite de Marrakech avec un guide privé agréé, francophone : médina, souks, Bahia, Jemaa el-Fna. Demi-journée (4h) ou journée complète (8h), rythme personnalisé.";

const glance: { label: string; value: string }[] = [
  { label: "Durée", value: "Demi-journée 4 heures · Journée complète 8 heures" },
  { label: "Prix", value: "À partir de 450 MAD la demi-journée, 700 MAD la journée (groupe entier)" },
  { label: "Groupe", value: "Privé : 1 à 8 personnes, uniquement votre groupe" },
  { label: "Langues", value: "Français, anglais, arabe, espagnol sur demande" },
  { label: "Départ", value: "Devant votre hôtel ou riad, heure de votre choix" },
  { label: "Guide", value: "Guide officiel agréé par le Ministère du Tourisme" },
];

const programs = [
  {
    title: "Demi-journée — médina historique (4 heures)",
    steps: [
      "Rendez-vous devant votre riad ou hôtel, à l'heure que vous choisissez (matin ou après-midi).",
      "Mosquée Koutoubia et ses jardins, repère visuel de la ville depuis le XIIᵉ siècle.",
      "Palais de la Bahia ou tombeaux saadiens, selon votre intérêt pour l'architecture ou l'histoire dynastique.",
      "Souks par quartiers de métiers : teinturiers, dinandiers, vanniers, avec les codes de la négociation expliqués avant d'acheter.",
      "Arrivée sur la place Jemaa el-Fna et retour accompagné jusqu'à votre hébergement.",
    ],
  },
  {
    title: "Journée complète — médina, monuments et jardins (8 heures)",
    steps: [
      "Matin : Koutoubia, médersa Ben Youssef et son patio de zellige, quartier des souks et fondouks d'artisans.",
      "Pause déjeuner sur une terrasse de la médina (repas à votre charge, le guide vous conseille selon votre budget).",
      "Début d'après-midi : palais de la Bahia et tombeaux saadiens, quartier de la Kasbah et Mellah.",
      "Fin d'après-midi : jardin Majorelle, jardin secret ou musée au choix, selon la file d'attente et vos envies.",
      "Retour vers Jemaa el-Fna à l'heure des conteurs et des étals de cuisine, puis accompagnement jusqu'à votre hôtel.",
    ],
  },
];

const faq = [
  {
    q: "Quelle est la différence entre un guide agréé et un guide informel ?",
    a: "Un guide agréé possède une carte professionnelle délivrée par le Ministère du Tourisme après formation et examen. Il a le droit d'entrer dans les monuments avec vous, connaît l'histoire de la ville et ne touche pas de commission sur vos achats, contrairement aux accompagnateurs informels de la médina.",
  },
  {
    q: "Demi-journée ou journée complète : que choisir ?",
    a: "La demi-journée de 4 heures suffit pour comprendre la structure de la médina et visiter un monument majeur. La journée complète de 8 heures permet d'ajouter la médersa Ben Youssef, les tombeaux saadiens et un jardin, avec une vraie pause déjeuner : c'est le bon choix si vous ne restez que deux ou trois jours à Marrakech.",
  },
  {
    q: "Les billets d'entrée des monuments sont-ils inclus ?",
    a: "Non. Les entrées se paient sur place et coûtent entre 70 et 100 MAD par monument et par personne. Le guide vous indique à l'avance lesquels valent votre budget et achète les billets avec vous.",
  },
  {
    q: "Le circuit est-il fixe ?",
    a: "Non, le programme est un point de départ. Vous pouvez demander une visite centrée sur l'artisanat, la photographie, la cuisine ou l'architecture, ou ralentir le rythme si vous voyagez avec des enfants ou des personnes âgées.",
  },
  {
    q: "La visite se fait-elle à pied ?",
    a: "Oui, la médina se visite à pied : comptez 4 à 6 km sur une journée, sur sol irrégulier. Chaussures fermées recommandées. Pour les trajets plus longs, vers le jardin Majorelle par exemple, un véhicule privé peut être ajouté.",
  },
  {
    q: "Le guide peut-il nous accompagner en excursion hors de Marrakech ?",
    a: "Oui. Pour les sorties à la journée ou sur plusieurs jours, nous proposons un chauffeur-guide agréé qui reste avec vous tout le séjour, de la vallée de l'Ourika jusqu'au désert de Merzouga.",
  },
];

export const Route = createFileRoute("/guide-prive/")({
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
  component: GuidePrivePage,
});

function GuidePrivePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Guide privé agréé à Marrakech — demi-journée ou journée",
          description,
          path: "/guide-prive",
          price: 450,
          type: "TouristTrip",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Guide privé", path: "/guide-prive" },
        ])}
      />

      <PageHero
        image={guideImg}
        imageAlt="Guide privé francophone expliquant l'architecture d'un patio de zellige dans la médina de Marrakech"
        eyebrow="Service à Marrakech"
        title="Guide privé à Marrakech : demi-journée ou journée complète"
        intro="Un guide officiel agréé, francophone, pour votre groupe uniquement. La médina expliquée quartier par quartier, à votre rythme, sans détour par les boutiques à commission."
      >
        <Button asChild size="lg" className="min-h-12">
          <a href={whatsappLink("Bonjour, je souhaite réserver un guide privé à Marrakech.")}>
            Réserver un guide privé
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
            { name: "Guide privé", path: "/guide-prive" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                Une visite de Marrakech avec un guide privé agréé dure 4 heures en demi-journée ou 8
                heures en journée complète, à partir de 450 MAD pour le groupe entier (jusqu&apos;à 8
                personnes). Le guide est titulaire de la carte professionnelle délivrée par le
                Ministère du Tourisme, parle français et anglais, et vient vous chercher devant votre
                hôtel ou riad à l&apos;heure de votre choix. Les entrées des monuments — entre 70 et
                100 MAD par personne et par site — se paient sur place et ne sont pas incluses. Le
                circuit est adaptable : médina et souks, monuments historiques, jardins ou
                photographie.
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

            <div className="space-y-8">
              <h2 className="font-display text-2xl font-semibold">Programmes</h2>
              {programs.map((program) => (
                <div key={program.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-lg font-semibold">{program.title}</h3>
                  <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                    {program.steps.map((step) => (
                      <li key={step}>• {step}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Guide officiel agréé, privé, pour votre groupe uniquement",
                    "Itinéraire préparé avec vous avant la visite",
                    "Prise en charge et retour à votre hôtel ou riad",
                    "Conseils pratiques : achats, restaurants, tarifs d'usage",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Non inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Entrées des monuments (70 à 100 MAD par personne et par site)",
                    "Repas et boissons",
                    "Achats personnels dans les souks",
                    "Véhicule privé pour les trajets hors médina (en option)",
                    "Pourboire au guide (libre)",
                  ].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
              <div className="mt-4">
                <FAQAccordion items={faq} idPrefix="guide" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">Prolonger la découverte</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "vallee-ourika" }}
                    className="text-primary underline"
                  >
                    Vallée de l&apos;Ourika
                  </Link>{" "}
                  — la montagne à une heure de la médina, en complément d&apos;une journée en ville.
                </li>
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "essaouira" }}
                    className="text-primary underline"
                  >
                    Essaouira
                  </Link>{" "}
                  — l&apos;autre médina classée au patrimoine mondial, au bord de l&apos;Atlantique.
                </li>
                <li>
                  <Link to="/transferts-aeroport" className="text-primary underline">
                    Transfert aéroport ↔ hôtel
                  </Link>{" "}
                  — à réserver avec votre première journée de visite.
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver un guide</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Dites-nous vos dates et vos centres d&apos;intérêt : nous confirmons le guide et le
              tarif par WhatsApp.
            </p>
            <div className="mt-4">
              <BookingForm defaultService="Guide privé — demi-journée" />
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
