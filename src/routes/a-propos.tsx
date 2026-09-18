import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-atlas.jpg";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { breadcrumbSchema, travelAgencySchema } from "@/lib/schema";

const title = `À propos de ${site.name} — Agence d'excursions privées à Marrakech`;
const description =
  "Agence locale d'excursions privées basée à Marrakech : chauffeurs-guides agréés francophones, véhicules climatisés, petits groupes, tarifs confirmés avant le départ.";

const chiffres = [
  { value: "7", label: "destinations au départ de Marrakech" },
  { value: "8 pers.", label: "taille maximale d'un groupe privé" },
  { value: "4 langues", label: "français, anglais, arabe, espagnol" },
  { value: "24h/24", label: "réponse WhatsApp et transferts" },
];

export const Route = createFileRoute("/a-propos")({
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
  component: AProposPage,
});

function AProposPage() {
  return (
    <>
      <JsonLd data={travelAgencySchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
        ])}
      />

      <PageHero
        image={heroImg}
        imageAlt="Route de montagne du Haut Atlas au lever du jour, véhicule d'excursion au départ de Marrakech"
        eyebrow="L'agence"
        title={`À propos de ${site.name}`}
        intro="Une agence locale installée à Marrakech, spécialisée dans les excursions privées vers l'Atlas, le désert et la côte atlantique."
      >
        <Button asChild size="lg" className="min-h-12">
          <Link to="/contact">Nous contacter</Link>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "À propos", path: "/a-propos" },
          ]}
        />

        <section className="mt-10 space-y-12">
          <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
            <h2 className="font-display text-xl font-semibold">Qui nous sommes</h2>
            <p className="mt-3 text-base leading-relaxed">
              {site.name} est une agence d&apos;excursions privées basée à Marrakech, quartier
              Guéliz. Nous organisons des sorties à la journée et des circuits de deux à trois jours
              au départ de Marrakech, avec nos propres véhicules climatisés et des chauffeurs-guides
              agréés. Chaque départ est privé : vous voyagez uniquement avec les personnes de votre
              groupe, et l&apos;itinéraire s&apos;adapte à votre rythme plutôt qu&apos;à un horaire
              de bus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chiffres.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                <p className="font-display text-2xl font-semibold text-primary">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold">Notre façon de travailler</h2>
            {[
              {
                title: "Des chauffeurs-guides du pays",
                text: "Nos chauffeurs-guides sont originaires de Marrakech, de la vallée de l'Ourika ou du Draa. Ils parlent français et anglais, souvent l'espagnol, et connaissent les routes de montagne et de désert en toutes saisons.",
              },
              {
                title: "Un prix annoncé, puis confirmé",
                text: "Le tarif est communiqué par message avant la réservation et ne change pas sur place. Il n'y a ni paiement en ligne, ni acompte obligatoire, ni détour imposé par des boutiques à commission.",
              },
              {
                title: "Des groupes volontairement petits",
                text: "Un départ privé compte au maximum 8 personnes en véhicule standard. Pour les familles nombreuses et les groupes d'amis, nous utilisons un minibus jusqu'à 16 places avec le même principe : un seul groupe à bord.",
              },
              {
                title: "Un tourisme utile aux villages traversés",
                text: "Nous déjeunons chez des familles et des maisons d'hôtes locales, achetons l'argan directement dans les coopératives féminines et travaillons avec des guides de village à Setti Fatma, Aït Ben Haddou et Merzouga.",
              },
            ].map((bloc) => (
              <div key={bloc.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">{bloc.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{bloc.text}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Nos coordonnées</h2>
            <p className="mt-3 text-base leading-relaxed">
              {site.legalName} — {site.street}, {site.city} {site.postalCode}, Maroc. Téléphone et
              WhatsApp : {site.phone}. E-mail : {site.email}. {site.license}. Langues parlées :{" "}
              {site.languages.join(", ")}.
            </p>
          </div>
        </section>
      </div>

      <Testimonials />

      <div className="mx-auto max-w-4xl px-4 pb-4 md:px-8">
        <div className="rounded-xl border border-border bg-secondary/40 p-6">
          <h2 className="font-display text-xl font-semibold">Et maintenant</h2>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <Link to="/excursions" className="text-primary underline">
                Voir les 7 excursions au départ de Marrakech
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-primary underline">
                Lire les questions fréquentes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary underline">
                Demander un devis par WhatsApp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
