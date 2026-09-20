/**
 * Informations agence (NAP) — identiques sur toutes les pages.
 * ⚠️ Valeurs par défaut à remplacer par les données réelles de l'agence.
 */
export const site = {
  name: "Medina land magic excursions",
  legalName: "Medina land magic excursions",
  tagline: "Excursions privées au départ de Marrakech",
  parentName: "Riad Dar Medina Land",
  parentUrl: "https://www.riaddarmedinaland.com/",
  license: "Licence de tour-opérateur n° [à compléter]",
  phone: "+212 600 000 000",
  phoneHref: "tel:+212600000000",
  whatsapp: "212600000000",
  email: "contact@atlas-dunes.ma",
  street: "Avenue Mohammed V, Guéliz",
  city: "Marrakech",
  postalCode: "40000",
  country: "MA",
  geo: { lat: 31.6295, lng: -7.9811 },
  priceRange: "300–2500 MAD",
  rating: { value: 4.9, count: 128 },
  languages: ["Français", "Anglais", "Espagnol", "Arabe"],
  url: "https://project--0147db8a-7062-4ec0-b5a5-b28a4a1c69be.lovable.app",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Horaires par défaut — repères de marché, modifiables ici en un seul endroit.
 * (Correspondent aux valeurs entre crochets du contenu rédactionnel.)
 */
export const horaires = {
  ourika: { depart: "09h00", retour: "17h00–18h00" },
  ouzoud: { depart: "08h30", retour: "19h00–20h00" },
  ouarzazate: { depart: "07h00", retour: "19h00–20h00" },
  essaouira: { depart: "08h00", retour: "19h00–20h00" },
  zagora: { depart: "08h00", retour: "J+2 en soirée" },
  merzouga: { depart: "07h00", retour: "J+3 en soirée" },
  agafay: { depart: "15h30", retour: "22h30" },
} as const;
