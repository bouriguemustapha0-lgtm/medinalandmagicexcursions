import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { excursions } from "@/data/excursions";
import { site, whatsappLink } from "@/data/site";

const services = [
  ...excursions.map((excursion) => excursion.name),
  "Chameaux à la Palmeraie",
  "Quad à la Palmeraie",
  "Vol en montgolfière",
  "Transfert aéroport → hôtel",
  "Transfert hôtel → aéroport",
  "Guide privé — demi-journée",
  "Guide privé — journée complète",
];

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [service, setService] = useState(defaultService ?? services[0]);
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const message = [
    `Bonjour ${site.name},`,
    `Je souhaite réserver : ${service}.`,
    date ? `Date souhaitée : ${date}.` : null,
    `Nombre de voyageurs : ${travellers}.`,
    name ? `Nom : ${name}.` : null,
    details ? `Précisions : ${details}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <form
      className="grid gap-5 rounded-xl border border-border bg-card p-6 shadow-soft"
      onSubmit={(event) => {
        event.preventDefault();
        window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="service">Prestation</Label>
        <select
          id="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          className="min-h-11 w-full rounded-md border border-input bg-background px-3 text-base"
        >
          {services.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="date">Date souhaitée</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="min-h-11"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="travellers">Voyageurs</Label>
          <Input
            id="travellers"
            type="number"
            min={1}
            max={40}
            value={travellers}
            onChange={(event) => setTravellers(event.target.value)}
            className="min-h-11"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="name">Nom et hôtel / riad</Label>
        <Input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex. Claire Martin — Riad Dar Anika, médina"
          className="min-h-11"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="details">Précisions (optionnel)</Label>
        <Textarea
          id="details"
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          rows={3}
          placeholder="Langue souhaitée, enfants, allergies, heure de vol…"
        />
      </div>

      <Button type="submit" size="lg" className="min-h-12 w-full text-base">
        <MessageCircle className="size-5" aria-hidden="true" />
        Envoyer ma demande sur WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground">
        Votre demande s&apos;ouvre dans WhatsApp, pré-remplie. Aucun paiement en ligne : le tarif est
        confirmé par message avant la réservation. Vous pouvez aussi appeler le{" "}
        <a href={site.phoneHref} className="font-medium text-primary underline">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
