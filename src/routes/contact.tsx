import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/agafay.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingForm } from "@/components/BookingForm";
import { JsonLd } from "@/components/JsonLd";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbSchema, travelAgencySchema } from "@/lib/schema";

const title = `Contact & réservation — Excursions depuis Marrakech | ${site.name}`;
const description =
  "Réservez votre excursion au départ de Marrakech par WhatsApp ou par téléphone. Réponse sous 1 heure en journée, tarif confirmé avant le départ, aucun paiement en ligne.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <JsonLd data={travelAgencySchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        image={heroImg}
        imageAlt="Campement du désert d'Agafay au coucher du soleil, tentes éclairées face aux collines de pierre"
        eyebrow="Contact"
        title="Contact et réservation"
        intro="Envoyez votre demande par WhatsApp : nous confirmons la disponibilité, le véhicule et le tarif avant toute réservation. Aucun paiement en ligne."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />

        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6">
              <h2 className="font-display text-xl font-semibold">Réponse rapide</h2>
              <p className="mt-3 text-base leading-relaxed">
                Le moyen le plus rapide de réserver une excursion au départ de Marrakech est
                WhatsApp, au {site.phone}. Nous répondons en général en moins d&apos;une heure entre
                8h et 21h (heure du Maroc, UTC+1). Indiquez votre date, le nombre de voyageurs et le
                nom de votre hôtel ou riad : vous recevez en retour le tarif total, l&apos;heure de
                prise en charge et le programme détaillé. La réservation est confirmée sans paiement
                en ligne ; le règlement se fait en espèces ou par carte au chauffeur, le jour du
                départ.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: site.phone,
                  href: whatsappLink("Bonjour, je souhaite réserver une excursion depuis Marrakech."),
                },
                { icon: Phone, label: "Téléphone", value: site.phone, href: site.phoneHref },
                { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex min-h-14 items-center gap-4 rounded-xl border border-border bg-card px-5 transition-colors hover:border-primary"
                  >
                    <item.icon className="size-5 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block text-sm text-muted-foreground">{item.label}</span>
                      <span className="block text-base font-medium">{item.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold">Agence</h2>
              <ul className="mt-4 space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" aria-hidden="true" />
                  <span>
                    {site.legalName}
                    <br />
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-4 hover:text-primary"
                    >
                      {site.street}
                      <br />
                      {site.city} {site.postalCode}, Maroc
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 text-primary" aria-hidden="true" />
                  <span>
                    Bureau ouvert du lundi au samedi, 9h–19h. Assistance téléphonique et transferts
                    aéroport 24h/24, y compris le dimanche.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.license} — Langues parlées : {site.languages.join(", ")}.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-secondary/40 p-6">
              <h2 className="font-display text-xl font-semibold">Avant d&apos;écrire</h2>
              <p className="mt-2 text-base text-muted-foreground">
                Les réponses aux questions de prise en charge, d&apos;annulation et de paiement sont
                déjà réunies dans{" "}
                <Link to="/faq" className="text-primary underline">
                  la page questions fréquentes
                </Link>
                . Pour comparer les destinations, voir{" "}
                <Link to="/excursions" className="text-primary underline">
                  toutes les excursions
                </Link>
                .
              </p>
            </div>
          </div>

          <div id="reserver">
            <h2 className="font-display text-2xl font-semibold">Formulaire de réservation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cinq champs suffisent. Votre message s&apos;ouvre dans WhatsApp, déjà rédigé.
            </p>
            <div className="mt-4">
              <BookingForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
