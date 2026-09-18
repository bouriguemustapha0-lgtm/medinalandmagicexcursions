import { site } from "@/data/site";
import type { Excursion, Faq } from "@/data/excursions";

export const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: site.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: site.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: "Marrakech-Safi, Maroc",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
};

export function faqSchema(faq: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function touristTripSchema(excursion: Excursion) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: excursion.h1,
    description: excursion.quickAnswer,
    url: `${site.url}/excursions/${excursion.slug}`,
    touristType: "Voyageurs individuels, couples, familles et petits groupes",
    itinerary: {
      "@type": "ItemList",
      itemListElement: excursion.program.map((step, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: step.title,
        description: step.text,
      })),
    },
    departureTime: excursion.glance.find((g) => g.label === "Départ")?.value,
    subjectOf: {
      "@type": "Place",
      name: excursion.name,
      address: { "@type": "PostalAddress", addressCountry: "MA" },
    },
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
      telephone: site.phone,
    },
    offers: {
      "@type": "Offer",
      price: excursion.priceFrom,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      url: `${site.url}/excursions/${excursion.slug}`,
      description: `À partir de ${excursion.priceFrom} MAD par personne, départ de Marrakech, prise en charge à l'hôtel incluse.`,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  price: number;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    areaServed: { "@type": "City", name: "Marrakech" },
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
      telephone: site.phone,
    },
    offers: {
      "@type": "Offer",
      price: opts.price,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
    },
  };
}
