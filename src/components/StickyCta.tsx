import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function StickyCta({ context }: { context?: string }) {
  const message = context
    ? `Bonjour, je souhaite réserver : ${context}. Pouvez-vous me confirmer les disponibilités ?`
    : "Bonjour, je souhaite réserver une excursion au départ de Marrakech.";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="flex min-h-12 flex-1 items-center justify-center rounded-md bg-primary px-4 text-base font-semibold text-primary-foreground"
        >
          Réserver
        </Link>
        <a
          href={whatsappLink(message)}
          aria-label="Écrire sur WhatsApp"
          className="flex size-12 items-center justify-center rounded-md border border-primary/40 text-primary"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
