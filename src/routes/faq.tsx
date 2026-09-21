import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/merzouga.jpg";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Faq } from "@/data/excursions";

const title = `Questions fréquentes — Excursions depuis Marrakech | ${site.name}`;
const description =
  "Prise en charge à l'hôtel, tarifs, paiement, annulation, saisons, enfants, bagages : toutes les réponses pratiques sur nos excursions en petits groupes au départ de Marrakech.";

const sections: { heading: string; items: Faq[] }[] = [
  {
    heading: "Réservation et paiement",
    items: [
      {
        q: "Comment réserver une excursion au départ de Marrakech ?",
        a: "Envoyez votre demande par WhatsApp au " +
          site.phone +
          " avec la date, le nombre de voyageurs et le nom de votre hôtel. Nous confirmons la disponibilité, le tarif total et l'heure de prise en charge par message. Aucune réservation n'est enregistrée sans cette confirmation écrite.",
      },
      {
        q: "Combien de temps à l'avance faut-il réserver ?",
        a: "48 heures suffisent pour une excursion à la journée en saison normale. Comptez une semaine pour les circuits de 2 ou 3 jours vers Zagora et Merzouga, et deux à trois semaines pendant les vacances de Noël, de Pâques et la première semaine d'août.",
      },
      {
        q: "Faut-il payer un acompte ou payer en ligne ?",
        a: "Non. Il n'y a aucun paiement en ligne sur ce site. Le règlement se fait le jour du départ, directement au chauffeur, en dirhams en espèces ou par carte bancaire selon le véhicule. Les circuits de plusieurs jours peuvent demander un acompte pour réserver l'hébergement dans le désert.",
      },
      {
        q: "Quelle est la politique d'annulation ?",
        a: "Une annulation jusqu'à 24 heures avant le départ est gratuite pour les excursions à la journée, et jusqu'à 72 heures avant pour les circuits de plusieurs jours. En cas de météo dangereuse (crue, route de montagne fermée), nous reportons la sortie ou remboursons intégralement.",
      },
      {
        q: "Les prix affichés sont-ils par personne ou par véhicule ?",
        a: "Les excursions et les activités sont indiquées par personne. Les transferts aéroport (20 € par trajet) et la visite guidée (70 € la demi-journée, 100 € la journée pour 1 à 4 personnes) sont facturés par véhicule ou par groupe, quel que soit le nombre de participants dans la limite de la capacité.",
      },
      {
        q: "Quels sont vos tarifs pour chaque excursion ?",
        a: "Vallée de l'Ourika 20 €, cascades d'Ouzoud 30 €, Ouarzazate et Aït Ben Haddou 30 €, Essaouira 25 €, désert de Zagora 2 jours 65 €, désert de Merzouga 85 €, désert d'Agafay avec chameaux, quad et dîner 50 € — par personne, prise en charge à l'hôtel incluse. Côté activités courtes : chameaux à la Palmeraie 25 €, quad à la Palmeraie 35 €, vol en montgolfière 160 € par personne.",
      },
    ],
  },
  {
    heading: "Prise en charge et déroulement",
    items: [
      {
        q: "Où a lieu la prise en charge ?",
        a: "Devant votre hôtel, riad ou villa à Marrakech. Si votre riad est dans une ruelle inaccessible en voiture, le chauffeur vous attend au point d'accès véhicule le plus proche — en général à moins de 5 minutes à pied — et vous en informe la veille par message.",
      },
      {
        q: "À quelle heure part-on ?",
        a: "Les excursions en montagne partent entre 8h et 9h, les longues distances (Ouarzazate, Essaouira, désert) entre 7h et 8h, et les soirées à Agafay en milieu d'après-midi. Les horaires exacts figurent sur chaque page d'excursion et peuvent être ajustés d'une heure sur demande.",
      },
      {
        q: "Combien de personnes dans le véhicule ?",
        a: "Nos excursions se font en petits groupes partagés : jusqu'à 8 personnes en véhicule standard et 16 en minibus. Vous partagez le véhicule avec d'autres voyageurs, mais jamais avec les grands bus de 40 places. Les transferts aéroport, eux, restent privés : un véhicule rien que pour vous.",
      },
      {
        q: "Les excursions conviennent-elles aux enfants ?",
        a: "Oui. Sièges bébé et rehausseurs sont fournis gratuitement sur demande. Les journées longues comme Ouarzazate (10 à 12 heures de sortie) sont fatigantes pour les moins de 6 ans : l'Ourika, Agafay ou Ouzoud sont mieux adaptées.",
      },
      {
        q: "Les repas sont-ils inclus ?",
        a: "Le déjeuner est à votre charge sur les excursions à la journée : comptez 80 à 150 MAD par personne dans les restaurants où nous nous arrêtons. Sur les circuits vers le désert, les dîners et petits-déjeuners au campement et en maison d'hôtes sont inclus.",
      },
    ],
  },
  {
    heading: "Pratique et saisons",
    items: [
      {
        q: "Quelle est la meilleure période pour partir en excursion depuis Marrakech ?",
        a: "Mars à mai et septembre à novembre offrent les meilleures conditions : 22 à 30 °C en plaine et des nuits supportables dans le désert. En juillet et août, partez tôt et privilégiez Essaouira (25 °C sur la côte) ou Ouzoud. De décembre à février, les nuits dans les dunes descendent à 5 °C et la neige peut fermer le col du Tichka.",
      },
      {
        q: "Que faut-il emporter ?",
        a: "Chaussures fermées pour les sentiers, chapeau, crème solaire, une bouteille d'eau, un pull ou une veste pour les soirées en montagne et dans le désert, et un maillot de bain pour l'Ourika, Ouzoud et Essaouira. Une pièce d'identité est nécessaire pour les nuits en hébergement.",
      },
      {
        q: "Quelles langues parlent les chauffeurs-guides ?",
        a: "Français, anglais et arabe pour tous nos chauffeurs-guides, espagnol sur demande à la réservation. Les guides accompagnant les visites de monuments à Marrakech sont agréés par le Ministère du Tourisme.",
      },
      {
        q: "Peut-on personnaliser l'itinéraire ?",
        a: "Dans la limite du programme partagé, oui : vous pouvez demander un arrêt photo, allonger une pause ou sauter la coopérative d'argan. Pour une personnalisation totale (itinéraire, horaires, destination), réservez le véhicule en formule privée — indiquez-le dans votre message de réservation.",
      },
      {
        q: "Les véhicules sont-ils assurés ?",
        a: "Oui. Nos véhicules sont assurés pour le transport de voyageurs, contrôlés régulièrement et climatisés. L'agence est déclarée comme tour-opérateur au Maroc.",
      },
    ],
  },
];

const allFaq = sections.flatMap((section) => section.items);

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />

      <PageHero
        image={heroImg}
        imageAlt="Dunes de l'erg Chebbi à Merzouga au lever du soleil, caravane de dromadaires sur la crête"
        eyebrow="Informations pratiques"
        title="Questions fréquentes sur nos excursions depuis Marrakech"
        intro="Prise en charge, tarifs, paiement, annulation, saisons, enfants : les réponses aux questions que l'on nous pose chaque jour."
      >
        <Button asChild size="lg" className="min-h-12">
          <Link to="/contact">Poser une autre question</Link>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]}
        />

        <div className="mt-10 space-y-12">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
              <div className="mt-4">
                <FAQAccordion items={section.items} idPrefix={section.heading} />
              </div>
            </section>
          ))}

          <div className="rounded-xl border border-border bg-secondary/40 p-6">
            <h2 className="font-display text-xl font-semibold">Une question sur une destination ?</h2>
            <p className="mt-2 text-base text-muted-foreground">
              Chaque page d&apos;excursion contient sa propre section de questions fréquentes :{" "}
              <Link to="/excursions" className="text-primary underline">
                voir les 7 excursions
              </Link>
              ,{" "}
              <Link to="/transferts-aeroport" className="text-primary underline">
                les transferts aéroport
              </Link>{" "}
              ou{" "}
              <Link to="/guide-prive" className="text-primary underline">
                la visite guidée de Marrakech
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
