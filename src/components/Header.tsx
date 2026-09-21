import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/excursions", label: "Excursions" },
  { to: "/activites", label: "Activités" },
  { to: "/transferts-aeroport", label: "Transferts" },
  { to: "/guide-prive", label: "Guide" },
  { to: "/a-propos", label: "À propos" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex flex-col leading-tight" aria-label={`${site.name} — accueil`}>
          <span className="font-display text-lg font-semibold text-primary md:text-xl">
            {site.name}
          </span>
          <span className="text-[11px] tracking-wide text-muted-foreground uppercase">
            {site.tagline}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden min-h-11 items-center gap-2 px-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary md:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Button asChild size="lg" className="hidden min-h-11 md:inline-flex">
            <Link to="/contact">Réserver</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="border-t border-border bg-card lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {[...navItems, { to: "/contact", label: "Contact & réservation" } as const].map(
              (item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-border/60 text-base font-medium text-foreground last:border-0"
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
