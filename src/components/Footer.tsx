import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { excursions } from "@/data/excursions";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-primary">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Agence d&apos;excursions privées basée à Marrakech. {site.license}.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" aria-hidden="true" />
              <span>
                {site.street}, {site.city} {site.postalCode}, Maroc
              </span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex min-h-11 items-center gap-2 hover:text-primary"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink("Bonjour, je souhaite des informations sur vos excursions.")}
                className="flex min-h-11 items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Excursions</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {excursions.map((excursion) => (
              <li key={excursion.slug}>
                <Link
                  to="/excursions/$slug"
                  params={{ slug: excursion.slug }}
                  className="inline-flex min-h-9 items-center text-muted-foreground hover:text-primary"
                >
                  {excursion.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Services & infos</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/activites", label: "Chameaux, quad & montgolfière" },
              { to: "/transferts-aeroport", label: "Transferts aéroport" },
              { to: "/guide-prive", label: "Guide privé à Marrakech" },
              { to: "/a-propos", label: "À propos de l'agence" },
              { to: "/faq", label: "Questions fréquentes" },
              { to: "/contact", label: "Contact & réservation" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex min-h-9 items-center text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="zellige-rule" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} {site.legalName} — Excursions au départ de Marrakech.
      </div>
    </footer>
  );
}
