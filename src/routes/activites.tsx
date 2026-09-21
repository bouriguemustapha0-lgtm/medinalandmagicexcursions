import { createFileRoute, Link } from "@tanstack/react-router";
import chameauxImg from "@/assets/palmeraie-chameaux.jpg";
import quadImg from "@/assets/palmeraie-quad.jpg";
import montgolfiereImg from "@/assets/montgolfiere.jpg";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const title = "Activités à Marrakech : chameaux, quad à la Palmeraie & montgolfière";
const description =
  "Balade à dos de chameau (25 €) et quad (35 €) dans la Palmeraie de Marrakech, vol en montgolfière au lever du soleil (160 €). Prise en charge à l'hôtel, réservation WhatsApp.";

export const activites = [
  {
    id: "chameaux-palmeraie",
    name: "Balade à dos de chameau à la Palmeraie",
    price: 25,
    unit: "par personne",
    duration: "1 heure environ",
    image: chameauxImg,
    imageAlt:
      "Caravane de chameaux avec tapis berbères sur une piste de la Palmeraie de Marrakech au coucher du soleil",
    quick:
      "La Palmeraie de Marrakech se trouve à 15 minutes du centre-ville et compte environ 100 000 palmiers-dattiers. La balade à dos de chameau dure environ 1 heure, coûte 25 € par personne, se fait accompagnée d'un chamelier et convient à tous les âges, sans expérience préalable.",
    details: [
      "Prise en charge à votre hôtel ou riad et retour inclus",
      "Chamelier accompagnateur et turban berbère prêté pour les photos",
      "Pause thé à la menthe sous une tente berbère",
      "Départs possibles le matin ou en fin d'après-midi, meilleure lumière au coucher du soleil",
    ],
  },
  {
    id: "quad-palmeraie",
    name: "Quad dans la Palmeraie de Marrakech",
    price: 35,
    unit: "par personne",
    duration: "1 heure de pilotage",
    image: quadImg,
    imageAlt:
      "Deux quads roulant sur une piste poussiéreuse entre les palmiers de la Palmeraie de Marrakech",
    quick:
      "La sortie quad dans la Palmeraie dure 1 heure de pilotage et coûte 35 € par personne. Le briefing de sécurité, le casque et l'accompagnement par un moniteur sont inclus ; aucun permis n'est exigé et les débutants pilotent sans difficulté sur les pistes de terre.",
    details: [
      "Briefing de sécurité, casque et équipement fournis",
      "Moniteur en tête de groupe sur des pistes de terre et de sable",
      "Pause thé à la menthe à mi-parcours",
      "Prise en charge à l'hôtel et retour inclus",
    ],
  },
  {
    id: "montgolfiere",
    name: "Vol en montgolfière au lever du soleil",
    price: 160,
    unit: "par personne",
    duration: "matinée complète · 45 à 60 minutes de vol",
    image: montgolfiereImg,
    imageAlt:
      "Montgolfières survolant la plaine près de Marrakech au lever du soleil avec le Haut Atlas enneigé en arrière-plan",
    quick:
      "Le vol en montgolfière au départ de Marrakech coûte 160 € par personne et dure 45 à 60 minutes en l'air, pour une sortie d'environ 4 heures au total. Le décollage a lieu au lever du soleil dans la plaine au nord de la ville, avec vue sur le Haut Atlas, suivi d'un petit-déjeuner berbère et d'un certificat de vol.",
    details: [
      "Prise en charge à l'hôtel vers 5h00–6h00 selon la saison",
      "45 à 60 minutes de vol au-dessus de la plaine et des villages berbères",
      "Petit-déjeuner berbère sous tente après l'atterrissage",
      "Certificat de vol et retour à votre hôtel inclus",
      "Vol soumis aux conditions météo : report ou remboursement en cas d'annulation",
    ],
  },
] as const;

const faq = [
  {
    q: "Combien coûtent ces activités à Marrakech ?",
    a: "La balade à dos de chameau dans la Palmeraie coûte 25 € par personne, la sortie quad 35 € par personne et le vol en montgolfière 160 € par personne. Ces tarifs incluent la prise en charge à votre hôtel ou riad et le retour.",
  },
  {
    q: "Faut-il de l'expérience pour le quad ?",
    a: "Non. Un briefing de sécurité précède chaque départ, le casque est fourni et un moniteur guide le groupe. Les pistes de la Palmeraie sont plates et larges : les débutants pilotent seuls après quelques minutes.",
  },
  {
    q: "À quelle heure part le vol en montgolfière ?",
    a: "La prise en charge à l'hôtel a lieu entre 5h00 et 6h00 selon la saison, pour un décollage au lever du soleil, quand l'air est le plus stable. Le retour à l'hôtel se fait en général vers 10h00.",
  },
  {
    q: "Que se passe-t-il si la météo empêche le vol ?",
    a: "Le vol est reporté au lendemain si votre séjour le permet, sinon il est remboursé intégralement. La décision est prise par le pilote le matin même, pour des raisons de sécurité.",
  },
  {
    q: "Ces activités peuvent-elles se combiner avec une excursion ?",
    a: "Oui. Chameaux et quad à la Palmeraie durent une demi-journée et se combinent facilement avec une visite guidée de la médina. La montgolfière occupe la matinée et se marie bien avec une soirée dans le désert d'Agafay le même jour.",
  },
];

export const Route = createFileRoute("/activites")({
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
  component: ActivitesPage,
});

function ActivitesPage() {
  return (
    <>
      {activites.map((activite) => (
        <JsonLd
          key={activite.id}
          data={serviceSchema({
            name: activite.name,
            description: activite.quick,
            path: `/activites#${activite.id}`,
            price: activite.price,
          })}
        />
      ))}
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Activités à Marrakech", path: "/activites" },
        ])}
      />

      <PageHero
        image={chameauxImg}
        imageAlt="Balade à dos de chameau dans la Palmeraie de Marrakech au coucher du soleil"
        eyebrow="Activités courtes à Marrakech"
        title="Chameaux, quad et montgolfière à Marrakech"
        intro="Trois sorties courtes à faire sans quitter Marrakech : une heure de chameau ou de quad dans la Palmeraie, et un vol en montgolfière au lever du soleil face au Haut Atlas."
      >
        <Button asChild size="lg" className="min-h-12">
          <a href="#reserver-activite">Réserver une activité</a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="min-h-12">
          <a href={site.phoneHref}>Appeler {site.phone}</a>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Activités à Marrakech", path: "/activites" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                Trois activités se font à moins de 30 minutes du centre de Marrakech : la balade à dos
                de chameau dans la Palmeraie (1 heure, 25 € par personne), la sortie quad sur les
                pistes de la Palmeraie (1 heure de pilotage, 35 € par personne) et le vol en
                montgolfière au lever du soleil au-dessus de la plaine (45 à 60 minutes de vol, 160 €
                par personne). Les trois incluent la prise en charge à votre hôtel ou riad et le
                retour, et se réservent la veille par WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Tarifs des activités</h2>
              <dl className="mt-5 overflow-hidden rounded-xl border border-border">
                {activites.map((activite, index) => (
                  <div
                    key={activite.id}
                    className={`grid gap-1 p-4 sm:grid-cols-[1fr_200px] ${
                      index % 2 === 0 ? "bg-card" : "bg-secondary/40"
                    }`}
                  >
                    <dt className="text-base font-semibold">{activite.name}</dt>
                    <dd className="text-base">
                      {activite.price} € {activite.unit} · {activite.duration}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {activites.map((activite) => (
              <article
                key={activite.id}
                id={activite.id}
                className="scroll-mt-24 overflow-hidden rounded-xl border border-border bg-card"
              >
                <img
                  src={activite.image}
                  alt={activite.imageAlt}
                  width={1280}
                  height={864}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold">{activite.name}</h2>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-primary uppercase">
                    {activite.price} € {activite.unit} · {activite.duration}
                  </p>
                  <p className="mt-4 text-base leading-relaxed">{activite.quick}</p>
                  <ul className="mt-4 space-y-2 text-base text-muted-foreground">
                    {activite.details.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="mt-6 min-h-12">
                    <a href="#reserver-activite">Réserver — {activite.price} €</a>
                  </Button>
                </div>
              </article>
            ))}

            <div>
              <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
              <div className="mt-4">
                <FAQAccordion items={faq} idPrefix="activites" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">À combiner avec</h2>
              <ul className="mt-3 space-y-2 text-base">
                <li>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: "desert-agafay" }}
                    className="text-primary underline"
                  >
                    Soirée dans le désert d&apos;Agafay
                  </Link>{" "}
                  — chameaux, quad et dîner spectacle à 40 minutes de la ville.
                </li>
                <li>
                  <Link to="/guide-prive" className="text-primary underline">
                    Visite guidée de Marrakech
                  </Link>{" "}
                  — une demi-journée dans la médina l&apos;après-midi du vol en montgolfière.
                </li>
                <li>
                  <Link to="/excursions" className="text-primary underline">
                    Toutes les excursions au départ de Marrakech
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <aside id="reserver-activite" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-xl font-semibold">Réserver une activité</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choisissez l&apos;activité et la date : nous confirmons l&apos;horaire de prise en
              charge par WhatsApp.
            </p>
            <div className="mt-4">
              <BookingForm defaultService="Chameaux à la Palmeraie" />
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
