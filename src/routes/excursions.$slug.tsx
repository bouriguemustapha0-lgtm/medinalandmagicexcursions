import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MessageCircle, X } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { excursions, getExcursion } from "@/data/excursions";
import { site, whatsappLink } from "@/data/site";
import { breadcrumbSchema, faqSchema, touristTripSchema } from "@/lib/schema";

export const Route = createFileRoute("/excursions/$slug")({
  loader: ({ params }) => {
    const excursion = getExcursion(params.slug);
    if (!excursion) throw notFound();
    return { slug: excursion.slug };
  },
  head: ({ params }) => {
    const excursion = getExcursion(params.slug);
    if (!excursion) {
      return {
        meta: [{ title: "Excursion introuvable" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: excursion.title },
        { name: "description", content: excursion.description },
        { property: "og:title", content: excursion.title },
        { property: "og:description", content: excursion.description },
      ],
    };
  },
  component: ExcursionPage,
});

function ExcursionPage() {
  const { slug } = Route.useLoaderData();
  const excursion = getExcursion(slug)!;
  const related = excursion.related
    .map((item) => ({ ...item, excursion: getExcursion(item.slug) }))
    .filter((item) => item.excursion);

  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Excursions", path: "/excursions" },
    { name: excursion.name, path: `/excursions/${excursion.slug}` },
  ];

  return (
    <>
      <JsonLd data={touristTripSchema(excursion)} />
      <JsonLd data={faqSchema(excursion.faq)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        priority
        image={excursion.image}
        imageAlt={excursion.imageAlt}
        eyebrow={`${excursion.categorie} · au départ de Marrakech`}
        title={excursion.h1}
        intro={excursion.intro}
      >
        <Button asChild size="lg" className="min-h-12 text-base">
          <a href="#reserver">Réserver cette excursion</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-h-12 border-primary-foreground/40 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
        >
          <a href="#programme">Voir le programme</a>
        </Button>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <section aria-labelledby="reponse-rapide">
            <h2 id="reponse-rapide" className="font-display text-2xl font-semibold md:text-3xl">
              Réponse rapide
            </h2>
            <p className="mt-4 rounded-xl border-l-4 border-primary bg-secondary/70 p-5 text-base leading-relaxed">
              {excursion.quickAnswer}
            </p>
          </section>

          <section aria-labelledby="coup-doeil" className="mt-14">
            <h2 id="coup-doeil" className="font-display text-2xl font-semibold md:text-3xl">
              En un coup d&apos;œil
            </h2>
            <dl className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {excursion.glance.map((row) => (
                <div key={row.label} className="grid gap-1 p-4 sm:grid-cols-[200px_1fr] sm:gap-4">
                  <dt className="text-sm font-semibold text-muted-foreground">{row.label}</dt>
                  <dd className="text-base">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-muted-foreground">
              Horaires de départ et de retour indicatifs, confirmés lors de la réservation.
            </p>
          </section>

          <section id="programme" aria-labelledby="programme-titre" className="mt-14 scroll-mt-24">
            <h2 id="programme-titre" className="font-display text-2xl font-semibold md:text-3xl">
              Le programme
            </h2>
            <ol className="mt-6 space-y-6">
              {excursion.program.map((step, index) => (
                <li key={step.title} className="relative border-l-2 border-primary/30 pl-6">
                  <span className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-primary" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold">
                    <span className="sr-only">Étape {index + 1} : </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="inclus" className="mt-14">
            <h2 id="inclus" className="font-display text-2xl font-semibold md:text-3xl">
              Ce qui est inclus et non inclus
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-semibold">Inclus</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {excursion.included.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-lg font-semibold">Non inclus</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {excursion.notIncluded.map((item) => (
                    <li key={item} className="flex gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section aria-labelledby="avis" className="mt-14">
            <h2 id="avis" className="font-display text-2xl font-semibold md:text-3xl">
              Avis clients
            </h2>
            <div className="mt-6">
              <Testimonials />
            </div>
          </section>

          <section aria-labelledby="faq" className="mt-14">
            <h2 id="faq" className="font-display text-2xl font-semibold md:text-3xl">
              Questions fréquentes
            </h2>
            <div className="mt-4">
              <FAQAccordion items={excursion.faq} idPrefix={excursion.slug} />
            </div>
          </section>

          {related.length > 0 ? (
            <section aria-labelledby="similaires" className="mt-14">
              <h2 id="similaires" className="font-display text-2xl font-semibold md:text-3xl">
                À comparer avec
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.slug} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display text-lg font-semibold">{item.excursion!.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.excursion!.distanceLabel} — {item.reason}.
                    </p>
                    <Link
                      to="/excursions/$slug"
                      params={{ slug: item.slug }}
                      className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary"
                    >
                      Voir cette excursion
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside id="reserver" className="scroll-mt-24 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-border bg-secondary/60 p-5">
            <p className="font-display text-xl font-semibold">
              À partir de {excursion.priceFrom} € / personne
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tarif dégressif à partir de 4 voyageurs. {excursion.durationLabel}.
            </p>
          </div>
          <h2 className="mt-8 font-display text-xl font-semibold">Réserver</h2>
          <div className="mt-4">
            <BookingForm defaultService={excursion.name} />
          </div>
          <a
            href={whatsappLink(
              `Bonjour ${site.name}, je souhaite des informations sur l'excursion ${excursion.name}.`,
            )}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md border border-primary/40 text-sm font-semibold text-primary"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Poser une question sur WhatsApp
          </a>
        </aside>
      </div>

      <section className="bg-secondary/60 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="font-display text-2xl font-semibold">Autres excursions</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {excursions
              .filter((item) => item.slug !== excursion.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/excursions/$slug"
                    params={{ slug: item.slug }}
                    className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm font-medium hover:border-primary/50"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
