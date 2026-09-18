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

const title = "Guide Privé Marrakech Journée Complète | Visite Sur Mesure";
const description =
  "Journée complète avec un guide privé francophone à Marrakech : médina, monuments, déjeuner et rythme flexible adapté à vos envies.";

const glance = [
  { label: "Durée", value: "~8 heures" },
  { label: "Formule", value: "Privée — vous et votre groupe uniquement" },
  { label: "Langues", value: "Français, anglais, espagnol (selon disponibilité)" },
  { label: "Idéal pour", value: "Découverte approfondie, visiteurs curieux, familles" },
];

const faq = [
  {
    q: "La formule journée complète inclut-elle le déjeuner ?",
    a: "Le guide vous recommande et réserve un lieu adapté à vos goûts, mais le repas reste généralement à votre charge, sauf mention contraire lors de la réservation.",
  },
  {
    q: "Peut-on combiner cette formule avec une excursion hors de Marrakech ?",
    a: "La formule journée complète avec guide est conçue pour rester dans Marrakech et ses environs immédiats. Pour les excursions à la journée (Ourika, Ouzoud, Essaouira, etc.), consultez nos fiches dédiées.",
  },
  {
    q: "Combien de sites peut-on voir en une journée ?",
    a: "Cela dépend du rythme souhaité — en moyenne 4 à 6 sites majeurs, entrecoupés de temps libre dans les souks et d'une pause déjeuner.",
  },
  {
    q: "Le guide peut-il aussi organiser du shopping dans les souks ?",
    a: "Oui, de nombreux visiteurs demandent un accompagnement dédié au shopping (tapis, cuir, épices, artisanat) avec l'aide du guide pour évaluer la qualité et négocier.",
  },
];

export const Route = createFileRoute("/guide-prive/journee-complete")({
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
  component: JourneeCompletePage,
});

function JourneeCompletePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Guide privé à Marrakech — journée complète (8 heures)",
          description,
          path: "/guide-prive/journee-complete",
          price: 700,
          type: "TouristTrip",
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Guide privé", path: "/guide-prive" },
          { name: "Journée complète", path: "/guide-prive/journee-complete" },
        ])}
      />

      <PageHero
        image={guideImg}
        imageAlt="Visiteurs et guide privé dans le patio d'un palais historique de Marrakech orné de zellige"
        eyebrow="Guide privé"
        title="Guide Privé — Journée Complète à Marrakech"
        intro="Une journée entière avec un guide agréé, pour explorer Marrakech en profondeur sans se presser — médina, monuments, pause déjeuner, et le temps de s'arrêter là où ça vous plaît."
      >
        <Button asChild size="lg" className="min-h-12">
          <a
            href={whatsappLink(
              "Bonjour, je souhaite réserver un guide privé à Marrakech pour une journée complète.",
            )}
          >
            Réserver une journée
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
            { name: "Journée complète", path: "/guide-prive/journee-complete" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                La formule journée complète avec guide privé dure environ 8 heures et ajoute, par
                rapport à la demi-journée, davantage de sites visités, un déjeuner, et un rythme plus
                flexible adapté aux centres d&apos;intérêt du visiteur — histoire, artisanat,
                gastronomie ou photographie. C&apos;est la formule recommandée pour une première
                découverte approfondie de Marrakech ou pour les visiteurs qui souhaitent combiner
                médina, jardins et quartiers excentrés (Palmeraie, Ville Nouvelle) en une seule
                journée.
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
              <h2 className="font-display text-2xl font-semibold">Ce que vous pouvez voir</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                La journée complète permet de combiner la médina historique (souks, mosquée Koutoubia,
                palais Bahia, tombeaux saadiens) avec des sites plus excentrés comme le Jardin
                Majorelle, le quartier de la Ville Nouvelle (Gueliz), ou encore un aperçu de la
                Palmeraie. Une pause déjeuner dans un riad ou un restaurant local est généralement
                intégrée au programme, avec la possibilité de découvrir la gastronomie marocaine
                accompagnée des explications du guide.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-semibold">Inclus</h2>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                  {[
                    "Guide privé agréé pour la journée complète",
                    "Itinéraire personnalisable selon vos centres d'intérêt",
                    "Recommandation de restaurant pour le déjeuner",
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
                    "Déjeuner (sur demande, réservable via le guide)",
                    "Transport pour les sites excentrés (en option)",
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
                <FAQAccordion items={faq} idPrefix="guide-journee" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">Autres formules</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link to="/guide-prive/demi-journee" className="text-primary underline">
                    Guide privé — demi-journée
                  </Link>{" "}
                  si vous n&apos;avez qu&apos;une matinée.
                </li>
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "essaouira" }}
                    className="text-primary underline"
                  >
                    Essaouira
                  </Link>{" "}
                  — l&apos;autre médina classée, au bord de l&apos;Atlantique.
                </li>
                <li>
                  <Link to="/excursions" className="text-primary underline">
                    Toutes les excursions depuis Marrakech
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Dites-nous vos dates et vos envies de visite.
            </p>
            <div className="mt-4">
              <BookingForm defaultService="Guide privé — journée complète" />
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
