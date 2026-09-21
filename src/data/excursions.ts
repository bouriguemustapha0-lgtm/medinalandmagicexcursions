import ourikaImg from "@/assets/ourika.jpg";
import ouzoudImg from "@/assets/ouzoud.jpg";
import ouarzazateImg from "@/assets/ouarzazate.jpg";
import essaouiraImg from "@/assets/essaouira.jpg";
import zagoraImg from "@/assets/zagora.jpg";
import merzougaImg from "@/assets/merzouga.jpg";
import agafayImg from "@/assets/agafay.jpg";
import { horaires } from "./site";

export type Faq = { q: string; a: string };

export type Excursion = {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  durationLabel: string;
  durationIso: string;
  distanceLabel: string;
  priceFrom: number;
  categorie: "Journée" | "Demi-journée / soirée" | "Plusieurs jours";
  teaser: string;
  intro: string;
  quickAnswer: string;
  glance: { label: string; value: string }[];
  program: { title: string; text: string }[];
  included: string[];
  notIncluded: string[];
  faq: Faq[];
  related: { slug: string; reason: string }[];
};

export const excursions: Excursion[] = [
  {
    slug: "vallee-ourika",
    name: "Vallée de l'Ourika",
    shortName: "Ourika",
    h1: "Excursion à la Vallée de l'Ourika depuis Marrakech",
    title: "Excursion Vallée de l'Ourika depuis Marrakech | Cascades & Villages Berbères",
    description:
      "Excursion d'une journée dans la vallée de l'Ourika au départ de Marrakech : cascades de Setti Fatma, villages berbères, coopérative d'argan. Prise en charge hôtel incluse.",
    image: ourikaImg,
    imageAlt:
      "Cascade de Setti Fatma dans la vallée de l'Ourika, cafés au bord de la rivière sous les noyers",
    durationLabel: "Journée complète · ~8 heures",
    durationIso: "PT8H",
    distanceLabel: "60 km · environ 1h de route",
    priceFrom: 20,
    categorie: "Journée",
    teaser:
      "L'échappée montagne la plus proche de Marrakech : villages berbères, coopérative d'argan et cascades de Setti Fatma.",
    intro:
      "À une heure de route de Marrakech, la vallée de l'Ourika est l'échappée montagne la plus proche de la ville. Ici, les palmiers cèdent la place aux terrasses vertes, aux villages berbères accrochés aux collines, et à une rivière qui dévale le Haut Atlas jusqu'aux cascades de Setti Fatma. C'est le contraste express : ruelles animées de la médina le matin, air de montagne et pieds dans l'eau l'après-midi.",
    quickAnswer:
      "La vallée de l'Ourika se trouve à environ 60 km au sud de Marrakech, soit 1 heure de route. L'excursion à la journée inclut généralement un arrêt dans une coopérative d'huile d'argan, la traversée de villages berbères construits en pisé, et une randonnée optionnelle d'environ 45 minutes jusqu'aux cascades de Setti Fatma, à 1 500 mètres d'altitude. Le lundi, le marché hebdomadaire berbère de Tnin Ourika ajoute une étape supplémentaire riche en couleurs. Départ le matin, retour à Marrakech en fin d'après-midi.",
    glance: [
      { label: "Distance", value: "60 km · environ 1h de route" },
      { label: "Durée", value: "Journée complète · ~8 heures" },
      { label: "Départ", value: horaires.ourika.depart },
      { label: "Retour", value: horaires.ourika.retour },
      { label: "Transport", value: "Véhicule climatisé, chauffeur francophone" },
      { label: "Point fort", value: "Cascades de Setti Fatma, marché du lundi" },
    ],
    program: [
      {
        title: "Matin — Départ et coopérative d'argan",
        text: "Prise en charge à votre hôtel ou riad à Marrakech. La route traverse la plaine du Haouz avant de grimper doucement vers les contreforts du Haut Atlas. Premier arrêt dans une coopérative féminine d'huile d'argan : démonstration du procédé d'extraction traditionnel, entièrement manuel, et possibilité d'achat direct auprès des productrices.",
      },
      {
        title: "Fin de matinée — Entrée dans la vallée",
        text: "Le paysage change progressivement : gorges rouges, terrasses cultivées, noyers centenaires et villages berbères construits à flanc de colline. Si votre excursion tombe un lundi, arrêt au marché hebdomadaire de Tnin Ourika — un vrai souk local, loin des circuits touristiques classiques.",
      },
      {
        title: "Midi — Setti Fatma",
        text: "Arrivée au village de Setti Fatma, point de départ de la randonnée vers les cascades. Deux options : marcher jusqu'à la première cascade (environ 45 minutes aller, sentier rocailleux, difficulté modérée, chaussures fermées recommandées) accompagné d'un guide local, ou profiter du bord de rivière et du village sans effort particulier.",
      },
      {
        title: "Déjeuner",
        text: "Tagine berbère, grillades et thé à la menthe dans l'un des cafés au bord de l'eau, sous les noyers — une adresse incontournable de la vallée. Comptez entre 60 et 120 MAD par personne (non inclus dans le prix de l'excursion).",
      },
      {
        title: "Après-midi — Temps libre",
        text: "Baignade dans les vasques naturelles de la rivière si la saison le permet, visite d'une maison berbère traditionnelle pour un thé à la menthe, ou simple flânerie le long des étals artisanaux.",
      },
      {
        title: "Retour",
        text: "Départ en milieu d'après-midi. La lumière dorée sur les parois rouges de la vallée rend le trajet retour particulièrement photogénique. Dépose à votre hôtel ou sur la place Jemaa el-Fna.",
      },
    ],
    included: [
      "Prise en charge et retour à votre hôtel ou riad",
      "Véhicule climatisé, chauffeur francophone/anglophone",
      "Arrêt à la coopérative d'huile d'argan",
      "Journée complète dans la vallée de l'Ourika",
    ],
    notIncluded: [
      "Déjeuner et boissons (60–120 MAD sur place)",
      "Guide local pour la randonnée vers les cascades (petit forfait, payé sur place)",
      "Don pour la visite d'une maison berbère (optionnel)",
      "Pourboire chauffeur (optionnel)",
    ],
    faq: [
      {
        q: "Combien de temps dure le trajet jusqu'à l'Ourika ?",
        a: "Environ 1 heure depuis le centre de Marrakech, pour 60 km de route.",
      },
      {
        q: "La randonnée vers les cascades est-elle difficile ?",
        a: "Modérée : environ 45 minutes de marche sur un sentier rocailleux et irrégulier. Des chaussures fermées et une bonne condition physique de base sont recommandées. Il n'est pas nécessaire de faire la randonnée pour profiter de la vallée.",
      },
      {
        q: "Que se passe-t-il si mon excursion tombe un lundi ?",
        a: "Vous avez la chance de découvrir le marché hebdomadaire berbère de Tnin Ourika, une étape ajoutée au programme ce jour-là : épices, produits locaux, artisanat et scènes de vie authentiques.",
      },
      {
        q: "Peut-on se baigner dans la rivière ?",
        a: "Oui, il existe des vasques naturelles le long de la rivière. L'eau reste fraîche toute l'année, car elle provient directement de la montagne.",
      },
      {
        q: "Que dois-je prévoir comme équipement ?",
        a: "Chaussures de marche fermées si vous comptez faire la randonnée, une couche supplémentaire (la vallée est plus fraîche que Marrakech), crème solaire, chapeau, et un maillot de bain en option.",
      },
    ],
    related: [
      { slug: "cascades-ouzoud", reason: "si vous préférez de vraies grandes chutes d'eau" },
      { slug: "desert-agafay", reason: "si vous cherchez une sortie courte en fin de journée" },
    ],
  },
  {
    slug: "cascades-ouzoud",
    name: "Cascades d'Ouzoud",
    shortName: "Ouzoud",
    h1: "Excursion aux Cascades d'Ouzoud depuis Marrakech",
    title: "Excursion Cascades d'Ouzoud au Départ de Marrakech | Journée Complète",
    description:
      "Excursion d'une journée aux cascades d'Ouzoud (110 m) depuis Marrakech : baignade, balade en barque, singes macaques et déjeuner face aux chutes. Transport inclus.",
    image: ouzoudImg,
    imageAlt:
      "Cascades d'Ouzoud de 110 mètres sur trois paliers avec arc-en-ciel dans les embruns et terrasses de cafés",
    durationLabel: "Journée complète",
    durationIso: "PT11H",
    distanceLabel: "150 km · environ 3h de route",
    priceFrom: 30,
    categorie: "Journée",
    teaser:
      "Les plus hautes cascades d'Afrique du Nord : 110 mètres sur trois paliers, baignade, barque et singes magots en liberté.",
    intro:
      "Les plus hautes cascades d'Afrique du Nord se trouvent à trois heures de route de Marrakech — et elles valent chaque minute du trajet. 110 mètres d'eau qui tombent sur trois paliers dans une gorge verdoyante, des singes magots en liberté dans les arbres, et assez de temps libre sur place pour nager, marcher, prendre une barque, ou simplement s'installer en terrasse face aux chutes.",
    quickAnswer:
      "Les cascades d'Ouzoud se situent à environ 150 km au nord-est de Marrakech, soit 3 heures de route à travers les oliveraies de la plaine du Tadla. Hautes de 110 mètres sur trois paliers, ce sont les plus hautes chutes d'eau d'Afrique du Nord. Le site abrite des singes magots (macaques de Barbarie) en liberté dans la végétation environnante. Sur place, plusieurs heures de temps libre permettent de descendre à pied jusqu'au bassin, se baigner, faire une balade en barque sous les embruns, et déjeuner en terrasse au-dessus des chutes.",
    glance: [
      { label: "Distance", value: "150 km · environ 3h de route" },
      { label: "Hauteur des chutes", value: "110 m sur 3 paliers" },
      { label: "Durée", value: "Journée complète" },
      { label: "Départ", value: horaires.ouzoud.depart },
      { label: "Retour", value: horaires.ouzoud.retour },
      { label: "Faune", value: "Singes magots (macaques de Barbarie)" },
    ],
    program: [
      {
        title: "Matin — Départ vers Ouzoud",
        text: "Prise en charge à l'hôtel. La route traverse la plaine du Tadla, ses champs d'oliviers et de pêchers, en direction des contreforts du Moyen Atlas. Arrêt confort à mi-parcours.",
      },
      {
        title: "Arrivée au village de Tanaghmeilt",
        text: "Vous descendez à pied par des sentiers ombragés à travers les oliveraies jusqu'aux points de vue sur les chutes. La brume des cascades crée souvent un arc-en-ciel permanent en fin de matinée — gardez l'appareil photo à portée de main. En chemin, il n'est pas rare de croiser des singes magots dans les arbres.",
      },
      {
        title: "Au pied des chutes",
        text: "Baignade dans les bassins naturels (eau fraîche toute l'année), balade en barque en option sous les embruns directs des cascades, ou simple observation depuis les terrasses.",
      },
      {
        title: "Déjeuner",
        text: "Restaurants en terrasse surplombant les chutes, ambiance sonore garantie par le grondement de l'eau. Tagines berbères, grillades, salades marocaines et thé à la menthe. Comptez 80 à 120 MAD par personne.",
      },
      {
        title: "Après-midi — Remontée et temps libre",
        text: "Retour à pied vers le village (20 à 30 minutes), avec un passage possible par les petits étals d'artisanat local et de produits d'argan.",
      },
      {
        title: "Retour vers Marrakech",
        text: "Départ en fin d'après-midi pour un trajet retour de 3 heures. Arrivée en soirée à votre hôtel.",
      },
    ],
    included: [
      "Prise en charge et retour à votre hôtel",
      "Véhicule climatisé, chauffeur francophone/anglophone",
      "Plusieurs heures de temps libre sur le site",
    ],
    notIncluded: [
      "Guide local sur place (petit forfait optionnel)",
      "Balade en barque (environ 20 MAD, optionnelle)",
      "Déjeuner et boissons (80–120 MAD, sur place)",
      "Pourboire chauffeur (optionnel)",
    ],
    faq: [
      {
        q: "Combien de temps dure le trajet jusqu'à Ouzoud ?",
        a: "Environ 3 heures dans chaque sens, pour 150 km de route depuis Marrakech.",
      },
      {
        q: "Peut-on nager aux cascades d'Ouzoud ?",
        a: "Oui, il y a des bassins naturels au pied des chutes. L'eau est fraîche toute l'année — rafraîchissante en été. Les rochers peuvent être glissants, prudence recommandée.",
      },
      {
        q: "Y a-t-il vraiment des singes sur place ?",
        a: "Oui, des singes magots (macaques de Barbarie) vivent en liberté dans la végétation autour des chutes. Ils sont généralement peu farouches — gardez vos distances et ne les nourrissez pas.",
      },
      {
        q: "La balade en barque est-elle incluse ?",
        a: "Non, c'est une option payante sur place (environ 20 MAD), qui permet de passer sous les embruns directs des cascades.",
      },
      {
        q: "Que dois-je porter ?",
        a: "Des chaussures avec une bonne adhérence (sentiers en pente, parfois glissants), un chapeau, de la crème solaire, et un maillot de bain si vous comptez vous baigner.",
      },
    ],
    related: [
      { slug: "vallee-ourika", reason: "si vous voulez rester à une heure de Marrakech" },
      { slug: "essaouira", reason: "si vous préférez l'océan à la montagne" },
    ],
  },
  {
    slug: "ouarzazate-ait-ben-haddou",
    name: "Ouarzazate & Aït Ben Haddou",
    shortName: "Ouarzazate",
    h1: "Excursion à Ouarzazate et à la Kasbah d'Aït Ben Haddou",
    title: "Excursion Ouarzazate & Kasbah d'Aït Ben Haddou depuis Marrakech",
    description:
      "Journée complète vers Ouarzazate et la kasbah d'Aït Ben Haddou (UNESCO) : col du Tizi n'Tichka, studios de cinéma, villages berbères. Excursion au départ de Marrakech.",
    image: ouarzazateImg,
    imageAlt:
      "Kasbah fortifiée d'Aït Ben Haddou en pisé vue depuis le lit de la rivière en fin d'après-midi",
    durationLabel: "10 à 12 heures",
    durationIso: "PT12H",
    distanceLabel: "~200 km (x2)",
    priceFrom: 30,
    categorie: "Journée",
    teaser:
      "Le col du Tizi n'Tichka (2 260 m), la kasbah UNESCO d'Aït Ben Haddou et les studios de cinéma de Ouarzazate en une journée.",
    intro:
      "Une kasbah fortifiée en pisé qui a servi de décor à Gladiator, Lawrence d'Arabie et Game of Thrones, un col de montagne à plus de 2 000 mètres d'altitude, et la ville qui a vu naître le cinéma marocain : cette excursion condense en une journée les paysages les plus spectaculaires de la route du Sud.",
    quickAnswer:
      "Ouarzazate se trouve à environ 200 km au sud-est de Marrakech, via le col du Tizi n'Tichka (2 260 m), le plus haut col routier du Maroc. Sur le trajet, la kasbah fortifiée d'Aït Ben Haddou est classée au patrimoine mondial de l'UNESCO depuis 1987 et a servi de décor à de nombreux films et séries internationales, dont Gladiator, Lawrence d'Arabie et Game of Thrones. À Ouarzazate, la kasbah de Taourirt (17e siècle) et les studios de cinéma de la ville complètent la visite. Comptez 10 à 12 heures pour l'aller-retour complet depuis Marrakech.",
    glance: [
      { label: "Distance", value: "~200 km (x2) · environ 10-12h aller-retour" },
      { label: "Col traversé", value: "Tizi n'Tichka, 2 260 m" },
      { label: "Site UNESCO", value: "Kasbah d'Aït Ben Haddou (depuis 1987)" },
      { label: "Départ", value: horaires.ouarzazate.depart },
      { label: "Disponibilité", value: "Tous les jours" },
    ],
    program: [
      {
        title: "Matin — La traversée de l'Atlas",
        text: "Départ tôt de Marrakech pour profiter de la fraîcheur matinale sur la route de montagne. La route grimpe à travers le Haut Atlas, passant par des villages berbères en terrasses, jusqu'au col du Tizi n'Tichka à 2 260 mètres d'altitude — le plus haut col routier du Maroc, avec des panoramas sur les sommets environnants.",
      },
      {
        title: "Aït Ben Haddou",
        text: "Arrêt à la kasbah d'Aït Ben Haddou, ksar fortifié en pisé classé au patrimoine mondial de l'UNESCO. Traversée du lit de la rivière, exploration des ruelles labyrinthiques, montée jusqu'au grenier collectif pour la vue d'ensemble. Un guide local optionnel permet d'approfondir l'histoire du site et ses nombreux tournages de cinéma.",
      },
      {
        title: "Ouarzazate",
        text: "Arrivée à Ouarzazate, surnommée le « Hollywood de l'Afrique » pour ses studios de cinéma. Visite de la kasbah de Taourirt (17e siècle), ancienne résidence de la famille Glaoui, avant un déjeuner (non inclus, sur demande) et un temps libre optionnel aux studios de cinéma.",
      },
      {
        title: "Retour",
        text: "Reprise de la route vers Marrakech en fin d'après-midi, avec un nouveau passage par le Tizi n'Tichka sous une lumière différente. Arrivée à Marrakech en soirée.",
      },
    ],
    included: [
      "Transport avec chauffeur-guide",
      "Véhicule climatisé (4x4 ou minibus selon le nombre de participants)",
      "Assurance transport et responsabilité civile professionnelle",
    ],
    notIncluded: [
      "Déjeuner (sur demande)",
      "Guide local à la kasbah",
      "Frais d'entrée aux studios de cinéma et à la kasbah de Taourirt",
      "Pourboires",
    ],
    faq: [
      {
        q: "Combien de temps dure l'excursion ?",
        a: "Entre 10 et 12 heures aller-retour depuis Marrakech, en comptant les arrêts photo, la visite d'Aït Ben Haddou et le temps à Ouarzazate.",
      },
      {
        q: "Le col du Tizi n'Tichka est-il impressionnant ?",
        a: "Oui — c'est le plus haut col routier du Maroc (2 260 m), avec de nombreux virages en épingle et des panoramas sur le Haut Atlas. La route est goudronnée et régulièrement empruntée.",
      },
      {
        q: "Peut-on visiter les studios de cinéma d'Ouarzazate ?",
        a: "Oui, en option et moyennant un droit d'entrée non inclus dans le prix de base de l'excursion.",
      },
      {
        q: "La kasbah d'Aït Ben Haddou se visite-t-elle avec un guide ?",
        a: "Un guide local est disponible sur place, en supplément, pour raconter l'histoire du site et ses nombreux tournages.",
      },
      {
        q: "Que voir à Ouarzazate en dehors d'Aït Ben Haddou ?",
        a: "La kasbah de Taourirt (17e siècle), les studios de cinéma, et un aperçu de l'architecture en pisé typique du Sud marocain.",
      },
    ],
    related: [
      { slug: "desert-zagora", reason: "si vous voulez ajouter une nuit dans le désert" },
      { slug: "desert-merzouga", reason: "si vous cherchez les grandes dunes de l'Erg Chebbi" },
    ],
  },
  {
    slug: "essaouira",
    name: "Essaouira",
    shortName: "Essaouira",
    h1: "Excursion à Essaouira depuis Marrakech",
    title: "Excursion à Essaouira depuis Marrakech | Journée Côtière Complète",
    description:
      "Excursion d'une journée à Essaouira (Mogador) depuis Marrakech : remparts, médina, port aux poissons, coopérative d'argan et temps libre sur la plage.",
    image: essaouiraImg,
    imageAlt:
      "Barques de pêche bleues dans le port d'Essaouira devant les remparts de la Skala et la médina blanche",
    durationLabel: "9 à 10 heures",
    durationIso: "PT10H",
    distanceLabel: "170 km · environ 2h30-3h de route",
    priceFrom: 25,
    categorie: "Journée",
    teaser:
      "Vent atlantique, remparts portugais, port aux poissons et 4 à 5 heures de temps libre dans la médina UNESCO.",
    intro:
      "Un vent atlantique frais, des remparts portugais du 18e siècle, un port aux poissons animé et une médina classée UNESCO où le bois de cèdre s'exporte depuis des siècles : Essaouira offre un contraste total avec l'agitation de Marrakech, à seulement quelques heures de route.",
    quickAnswer:
      "Essaouira se trouve à environ 170 km à l'ouest de Marrakech, soit 2h30 à 3h de route. L'excursion type inclut un arrêt dans une coopérative féminine d'huile d'argan — avec la traditionnelle observation des chèvres perchées dans les arganiers — puis plusieurs heures de temps libre dans la médina classée au patrimoine mondial de l'UNESCO : remparts de la Skala, port aux poissons, quartier de la marqueterie de bois de thuya et de cèdre. Un déjeuner de poisson frais en bord de mer complète naturellement la journée. Retour à Marrakech en soirée.",
    glance: [
      { label: "Distance", value: "170 km · environ 2h30-3h de route" },
      { label: "Durée totale", value: "9 à 10 heures" },
      { label: "Départ", value: horaires.essaouira.depart },
      { label: "Temps libre sur place", value: "~4 à 5 heures" },
      { label: "Spécialité", value: "Poisson grillé, artisanat du bois de cèdre" },
    ],
    program: [
      {
        title: "Matin — Départ et coopérative d'argan",
        text: "Prise en charge à votre hôtel. En route vers la côte, traversée de nombreuses forêts d'arganiers — l'occasion, si la saison s'y prête, d'observer des chèvres perchées dans les branches pour se nourrir des fruits. Arrêt dans une coopérative féminine où l'huile d'argan est encore extraite à la main.",
      },
      {
        title: "Arrivée à Essaouira",
        text: "Depuis la terrasse du bastion nord (la Skala), vue sur le port et l'océan. Le quartier voisin regroupe les meilleurs artisans travaillant le bois de cèdre en marqueterie. La rue Derb Laalouj mène au musée Sidi Mohammed Ben Abdallah (instruments de musique andalouse, armes, costumes traditionnels). Au nord, le quartier du Mellah (ancien quartier juif) borde un marché animé jusqu'à Bab Doukkala.",
      },
      {
        title: "Déjeuner",
        text: "Poisson frais du jour, spécialité incontournable d'Essaouira, dans un restaurant en bord de mer ou directement au port.",
      },
      {
        title: "Après-midi — Temps libre",
        text: "Balade dans les ruelles de la médina, shopping dans les souks (bijoux, articles en bois de cèdre, textiles), détente sur la plage. En option, balade en chameau sur la plage ou sortie en quad dans les environs.",
      },
      {
        title: "Retour",
        text: "Départ en fin d'après-midi pour Marrakech, arrivée en soirée.",
      },
    ],
    included: [
      "Transport avec chauffeur-guide",
      "Véhicule climatisé (4x4 ou minibus)",
      "Assurance transport et responsabilité civile professionnelle",
    ],
    notIncluded: [
      "Déjeuner (sur demande)",
      "Guide local dans la médina",
      "Pourboires",
      "Activités optionnelles (balade en chameau, quad)",
    ],
    faq: [
      {
        q: "Combien de temps de route pour Essaouira ?",
        a: "Entre 2h30 et 3h dans chaque sens, pour 170 km depuis Marrakech.",
      },
      {
        q: "Combien de temps libre a-t-on sur place ?",
        a: "Environ 4 à 5 heures, suffisant pour explorer la médina, déjeuner et profiter de la plage ou des souks.",
      },
      {
        q: "Que manger à Essaouira ?",
        a: "Le poisson fraîchement pêché est la spécialité locale — sardines grillées, calamars, poisson du jour au port ou dans les restaurants de la médina.",
      },
      {
        q: "Peut-on faire du chameau ou du quad à Essaouira ?",
        a: "Oui, en option, généralement non incluse dans le tarif de base : balade en chameau sur la plage (environ 1h) ou sortie en quad sur des terrains variés (environ 2h).",
      },
      {
        q: "Faut-il un guide pour visiter la médina ?",
        a: "Ce n'est pas obligatoire — la médina se visite facilement à pied — mais un guide local permet d'approfondir l'histoire du site et de mieux s'orienter dans les souks.",
      },
    ],
    related: [
      { slug: "cascades-ouzoud", reason: "si vous préférez la montagne et l'eau douce" },
      { slug: "vallee-ourika", reason: "si vous n'avez qu'une demi-journée de route à faire" },
    ],
  },
  {
    slug: "desert-zagora",
    name: "Désert de Zagora",
    shortName: "Zagora",
    h1: "Excursion au Désert de Zagora — 2 Jours / 1 Nuit",
    title: "Excursion Désert de Zagora 2 Jours / 1 Nuit depuis Marrakech",
    description:
      "2 jours dans le désert de Zagora : col du Tizi n'Tichka, Aït Ben Haddou, vallée du Drâa, balade à dos de chameau au coucher du soleil et nuit en bivouac.",
    image: zagoraImg,
    imageAlt:
      "Caravane de chameaux au coucher du soleil sur les petites dunes et la hamada du désert de Zagora",
    durationLabel: "2 jours / 1 nuit",
    durationIso: "P2D",
    distanceLabel: "360 km · 6-7h de route par jour",
    priceFrom: 65,
    categorie: "Plusieurs jours",
    teaser:
      "La nuit au désert la plus accessible depuis Marrakech : vallée du Drâa, chameaux au coucher du soleil et bivouac berbère.",
    intro:
      "Le moyen le plus rapide de dormir dans le désert au départ de Marrakech. En 48 heures, cette excursion traverse le Haut Atlas, s'arrête à la kasbah d'Aït Ben Haddou, longe la vallée du Drâa — la plus longue palmeraie du Maroc — et se termine par une nuit sous tente berbère, précédée d'une balade à dos de chameau au coucher du soleil.",
    quickAnswer:
      "Zagora se trouve à environ 360 km au sud de Marrakech, soit 6 à 7 heures de route via le col du Tizi n'Tichka et Ouarzazate. Contrairement à Merzouga, le désert de Zagora est composé de hamada (plaines caillouteuses) et de dunes de taille modeste plutôt que de grandes dunes de sable — ce qui permet d'y passer une nuit en seulement deux jours depuis Marrakech. Le programme inclut la traversée de la vallée du Drâa, la plus longue palmeraie du Maroc, une balade à dos de chameau au coucher du soleil, et une nuit sous tente dans un bivouac berbère avec dîner et animation musicale.",
    glance: [
      { label: "Distance", value: "360 km · 6-7h de route par jour" },
      { label: "Durée", value: "2 jours / 1 nuit" },
      { label: "Col traversé", value: "Tizi n'Tichka, 2 260 m" },
      { label: "Départ", value: horaires.zagora.depart },
      { label: "Hébergement", value: "Bivouac berbère, tente privée, demi-pension" },
      {
        label: "Type de désert",
        value: "Hamada + dunes modestes (pas les grandes dunes du Sahara)",
      },
    ],
    program: [
      {
        title: "Jour 1 — Matin : la traversée de l'Atlas",
        text: "Départ matinal de Marrakech, montée vers le Haut Atlas via le col du Tizi n'Tichka (2 260 m), avec arrêts photo sur des points de vue panoramiques.",
      },
      {
        title: "Jour 1 — Aït Ben Haddou et Ouarzazate",
        text: "Visite de la kasbah UNESCO d'Aït Ben Haddou, puis courte étape à Ouarzazate pour le déjeuner (non inclus).",
      },
      {
        title: "Jour 1 — Après-midi : la vallée du Drâa",
        text: "La route franchit le col de Tizi n'Tinififft puis redescend dans la palmeraie du Drâa : des centaines de milliers de palmiers-dattiers, des kasbahs en pisé, des villages fortifiés le long d'un ruban de verdure qui s'étire jusqu'au désert.",
      },
      {
        title: "Jour 1 — Soirée : chameau et bivouac",
        text: "Arrivée à Zagora en fin d'après-midi, rencontre avec les chameaux pour une balade au coucher du soleil dans le désert (environ 1 heure). Arrivée au bivouac berbère : tente privée, dîner marocain traditionnel, musique aux percussions berbères autour du feu, et un ciel étoilé loin de toute pollution lumineuse.",
      },
      {
        title: "Jour 2 — Matin : lever de soleil",
        text: "Balade à dos de chameau au lever du soleil, puis petit-déjeuner au campement.",
      },
      {
        title: "Jour 2 — Retour vers Ouarzazate",
        text: "La vallée du Drâa sous la lumière du matin, arrêt à la kasbah de Taourirt à Ouarzazate.",
      },
      {
        title: "Jour 2 — Retour à Marrakech",
        text: "Nouvelle traversée du Tizi n'Tichka en fin d'après-midi, arrivée à Marrakech en soirée.",
      },
    ],
    included: [
      "Transport en véhicule climatisé avec chauffeur-guide",
      "Prise en charge et retour à votre hôtel",
      "Une nuit au bivouac désert : tente privée, dîner et petit-déjeuner",
      "Balade à dos de chameau au coucher et au lever du soleil",
      "Animation musicale au campement",
    ],
    notIncluded: [
      "Déjeuners et boissons",
      "Upgrade tente de luxe avec salle de bain privée (en option)",
      "Guide local à Aït Ben Haddou (optionnel)",
      "Pourboires",
      "Assurance voyage (recommandée)",
    ],
    faq: [
      {
        q: "Y a-t-il de grandes dunes de sable à Zagora ?",
        a: "Non — le désert de Zagora est principalement composé de hamada (plaines rocailleuses) avec quelques dunes de taille modeste. Pour les grandes dunes de sable typiques du Sahara, l'excursion vers Merzouga (Erg Chebbi) est le meilleur choix.",
      },
      {
        q: "Quelle est la différence entre Zagora et Merzouga ?",
        a: "Zagora est plus proche de Marrakech (2 jours suffisent) mais offre un désert de hamada. Merzouga demande davantage de route (3 jours minimum) mais offre les grandes dunes de l'Erg Chebbi, certaines dépassant 150 mètres.",
      },
      {
        q: "Combien de route par jour ?",
        a: "Environ 6 à 7 heures de route chaque jour, avec des arrêts réguliers (Aït Ben Haddou, panoramas, pauses).",
      },
      {
        q: "Le bivouac est-il confortable ?",
        a: "La formule standard offre une tente privée avec lit, literie et sanitaires communs. Une formule de luxe avec tente équipée d'une salle de bain privée et eau chaude est disponible en supplément.",
      },
      {
        q: "Peut-on voyager seul(e) sur cette excursion ?",
        a: "Oui, les voyageurs solo représentent une part importante des départs. Le format en petit groupe favorise les rencontres.",
      },
      {
        q: "Quelle est la meilleure saison pour cette excursion ?",
        a: "Le printemps (mars à mai) et l'automne (septembre à novembre) offrent les conditions les plus agréables — journées chaudes, nuits douces. L'été peut dépasser 40 °C en journée, et l'hiver apporte des nuits fraîches (prévoir des vêtements chauds).",
      },
    ],
    related: [
      { slug: "desert-merzouga", reason: "si vous cherchez de plus grandes dunes" },
      { slug: "desert-agafay", reason: "si vous manquez de temps" },
    ],
  },
  {
    slug: "desert-merzouga",
    name: "Désert de Merzouga",
    shortName: "Merzouga",
    h1: "Excursion au Désert de Merzouga depuis Marrakech — Erg Chebbi",
    title: "Excursion Désert de Merzouga — Erg Chebbi depuis Marrakech",
    description:
      "Circuit au départ de Marrakech vers les grandes dunes de l'Erg Chebbi à Merzouga : gorges du Todra, vallée du Drâa, bivouac et balade à dos de chameau au coucher du soleil.",
    image: merzougaImg,
    imageAlt:
      "Caravane de chameaux sur la crête d'une grande dune de l'Erg Chebbi à Merzouga au lever du soleil",
    durationLabel: "3 jours / 2 nuits",
    durationIso: "P3D",
    distanceLabel: "~560 km",
    priceFrom: 85,
    categorie: "Plusieurs jours",
    teaser:
      "Les plus hautes dunes du Sahara marocain, les gorges du Todra et deux nuits sur la route du désert.",
    intro:
      "Les plus grandes dunes du Sahara marocain accessibles depuis Marrakech. Ce circuit traverse le Haut Atlas, les gorges spectaculaires du Sud marocain et la vallée du Drâa avant d'atteindre l'Erg Chebbi, où le désert prend enfin la forme que l'on imagine : des dunes dorées à perte de vue, hautes de plus de 150 mètres par endroits.",
    quickAnswer:
      "Merzouga se trouve à environ 560 km au sud-est de Marrakech. C'est ici que se trouve l'Erg Chebbi, l'un des plus hauts champs de dunes du Sahara marocain, contrairement au désert de Zagora qui n'offre que de petites dunes. Le trajet traverse le col du Tizi n'Tichka, la kasbah d'Aït Ben Haddou, les gorges du Todra ou du Dadès selon l'itinéraire, avant d'arriver à dos de chameau au bivouac dans les dunes pour la nuit, avec dîner sous les étoiles et musique berbère autour du feu. Le circuit est proposé sur 2, 3 ou 4 jours selon le rythme souhaité.",
    glance: [
      { label: "Distance", value: "~560 km depuis Marrakech" },
      { label: "Durée", value: "2, 3 ou 4 jours selon formule" },
      { label: "Site principal", value: "Erg Chebbi (dunes jusqu'à 150 m+)" },
      {
        label: "Étapes intermédiaires",
        value: "Aït Ben Haddou, gorges du Todra/Dadès, vallée du Drâa",
      },
      { label: "Hébergement désert", value: "Bivouac de luxe, tente privée, demi-pension" },
      { label: "Départ", value: horaires.merzouga.depart },
    ],
    program: [
      {
        title: "Jour 1 — Marrakech → Aït Ben Haddou → Dadès",
        text: "Traversée du Haut Atlas via le Tizi n'Tichka, visite de la kasbah d'Aït Ben Haddou, puis route vers la vallée du Dadès, réputée pour ses formations rocheuses spectaculaires (les « doigts de singe »). Nuit en hôtel avec dîner et petit-déjeuner.",
      },
      {
        title: "Jour 2 — Dadès → Gorges du Todra → Merzouga",
        text: "Le matin, exploration des gorges du Todra, des parois calcaires s'élevant à 300 mètres au-dessus d'un lit de rivière praticable à pied. Continuation vers Erfoud (marbre fossilisé) et Rissani, ville sainte berceau de la dynastie alaouite. En fin d'après-midi, arrivée aux portes de l'Erg Chebbi : balade à dos de chameau au coucher du soleil jusqu'au bivouac de luxe (tente privée avec salle de bain, douche chaude, vrais lits). Dîner marocain sous les étoiles, percussions berbères autour du feu.",
      },
      {
        title: "Jour 3 — Lever de soleil et retour",
        text: "Balade à dos de chameau au lever du soleil sur les dunes, petit-déjeuner au camp, puis retour vers Marrakech via la vallée du Ziz ou le même itinéraire selon la formule choisie.",
      },
      {
        title: "Formules 2 et 4 jours",
        text: "Les circuits 2 et 4 jours suivent la même trame avec des étapes en plus ou en moins (la formule 4 jours ajoute notamment l'oasis de Skoura, la vallée du Drâa au retour, et la kasbah de Telouet — sans jamais repasser deux fois par la même route).",
      },
    ],
    included: [
      "Véhicule 4x4 ou minibus privé climatisé avec chauffeur-guide dédié",
      "Prise en charge et retour porte-à-porte à Marrakech",
      "Hébergement en demi-pension chaque nuit (hôtel + bivouac de luxe désert)",
      "Balade à dos de chameau au coucher et au lever du soleil sur l'Erg Chebbi",
    ],
    notIncluded: [
      "Déjeuners et boissons supplémentaires",
      "Droits d'entrée éventuels (gorges, sites)",
      "Guides locaux sur les sites (disponibles sur demande)",
      "Activités optionnelles : quad, sandboard, circuit 4x4 dans les dunes",
      "Pourboires",
      "Assurance voyage (recommandée)",
    ],
    faq: [
      {
        q: "Combien de temps de route jusqu'à Merzouga ?",
        a: "Environ 560 km depuis Marrakech, répartis sur 2 à 4 jours de route selon la formule choisie, avec des étapes régulières.",
      },
      {
        q: "Quelle est la différence entre le circuit 2, 3 et 4 jours ?",
        a: "La formule 2 jours est la plus condensée (longues journées de route). La formule 3 jours est l'itinéraire classique, équilibré. La formule 4 jours ajoute des étapes supplémentaires (Skoura, vallée du Drâa, kasbah de Telouet) avec des trajets quotidiens plus courts et aucune route repassée deux fois.",
      },
      {
        q: "Les dunes sont-elles vraiment plus grandes qu'à Zagora ?",
        a: "Oui — l'Erg Chebbi à Merzouga offre de véritables dunes de sable, certaines dépassant 150 mètres de hauteur, contrairement au désert de Zagora qui est principalement constitué de hamada (plaines caillouteuses).",
      },
      {
        q: "Le bivouac de luxe vaut-il le supplément ?",
        a: "Il inclut une tente privée avec salle de bain, douche chaude, vrais lits et linge de qualité — un vrai confort après une longue journée de route, particulièrement apprécié par les voyageurs qui ne souhaitent pas de sanitaires partagés.",
      },
      {
        q: "Quelle est la meilleure saison pour ce circuit ?",
        a: "Le printemps et l'automne offrent les températures les plus agréables. L'été peut être très chaud dans le désert (journées à 40 °C+), l'hiver apporte des nuits fraîches à froides — prévoir des couches chaudes dans tous les cas pour la soirée au camp.",
      },
    ],
    related: [
      { slug: "desert-zagora", reason: "si vous n'avez que deux jours" },
      { slug: "desert-agafay", reason: "si vous voulez le désert en une soirée" },
    ],
  },
  {
    slug: "desert-agafay",
    name: "Désert d'Agafay",
    shortName: "Agafay",
    h1: "Excursion au Désert d'Agafay — Chameaux, Quad et Dîner Spectacle",
    title: "Excursion Désert d'Agafay — Chameaux, Quad & Dîner Spectacle",
    description:
      "Désert d'Agafay à 40 minutes de Marrakech : balade à dos de chameau, quad biking, buggy et dîner spectacle sous les étoiles. Formules demi-journée ou soirée.",
    image: agafayImg,
    imageAlt:
      "Tentes blanches éclairées par des lanternes dans le désert rocheux d'Agafay au crépuscule, Atlas en arrière-plan",
    durationLabel: "Demi-journée ou soirée · 5 à 7 heures",
    durationIso: "PT6H",
    distanceLabel: "40 km · 40 à 45 min de route",
    priceFrom: 50,
    categorie: "Demi-journée / soirée",
    teaser:
      "Le désert à 40 minutes de Marrakech : chameaux, quad ou buggy, puis dîner marocain sous tente avec spectacle.",
    intro:
      "Pas besoin de deux jours de route pour voir un coucher de soleil désertique. Le désert d'Agafay se trouve à 40 minutes de Marrakech — assez proche pour une sortie demi-journée, assez spectaculaire pour rivaliser avec le Sahara le temps d'une soirée : dunes de pierre, chameaux, quad, et dîner sous tente avec spectacle.",
    quickAnswer:
      "Le désert d'Agafay se trouve à environ 40 km de Marrakech, soit 40 à 45 minutes de route — la sortie désert la plus rapide depuis la ville. Contrairement au Sahara, Agafay est un désert rocheux, sans dunes de sable, mais offrant les mêmes couchers de soleil spectaculaires. Les formules les plus demandées combinent balade à dos de chameau, quad ou buggy, et un dîner marocain sous tente avec spectacle (musique gnawa, danseurs, parfois feu de scène). Une excursion idéale pour les voyageurs qui n'ont pas le temps d'aller jusqu'au Sahara mais veulent vivre une soirée désert authentique.",
    glance: [
      { label: "Distance", value: "40 km · 40-45 min de route" },
      { label: "Type de désert", value: "Rocheux (pas de dunes de sable)" },
      { label: "Durée", value: "Demi-journée à soirée selon formule" },
      { label: "Activités", value: "Chameau, quad, buggy, dîner spectacle" },
      { label: "Idéal pour", value: "Voyageurs pressés, soirée romantique, groupes" },
      { label: "Départ", value: horaires.agafay.depart },
    ],
    program: [
      {
        title: "Balade à dos de chameau au coucher du soleil (~1h)",
        text: "La façon la plus classique et la plus paisible de découvrir le paysage lunaire d'Agafay — collines de pierre, lumière dorée, silence.",
      },
      {
        title: "Quad biking (1h ou 2h)",
        text: "Parcours guidés sur des pistes variées à travers les collines rocheuses, avec équipement de sécurité et briefing inclus. Adapté aux débutants comme aux pilotes expérimentés.",
      },
      {
        title: "Buggy (1h ou 2h)",
        text: "Une alternative plus sportive au quad, avec plus de puissance et de stabilité — idéale pour explorer plus loin dans le désert.",
      },
      {
        title: "Dîner spectacle sous les étoiles",
        text: "En fin de journée, tente berbère dressée dans le désert pour un dîner marocain traditionnel accompagné de musique live (souvent gnawa) et parfois d'un spectacle de feu. Une expérience particulièrement demandée en soirée ou pour les occasions spéciales.",
      },
      {
        title: "Formules combinées",
        text: "Les packages les plus populaires associent chameau + quad + dîner, ou buggy + chameau, pour une expérience complète en une seule sortie — la formule recommandée pour les visiteurs qui n'ont qu'un après-midi ou une soirée à consacrer au désert.",
      },
    ],
    included: [
      "Prise en charge et retour à votre hôtel (transport partagé ; transport privé en option)",
      "Balade à dos de chameau (~1h)",
      "Session de quad ou buggy encadrée",
      "Dîner marocain avec spectacle sous tente berbère",
    ],
    notIncluded: [
      "Boissons alcoolisées",
      "Transport privé (supplément)",
      "Photos/vidéos professionnelles (souvent proposées en option sur place)",
      "Pourboires",
    ],
    faq: [
      {
        q: "Y a-t-il des dunes de sable à Agafay ?",
        a: "Non — contrairement au Sahara (Zagora, Merzouga), Agafay est un désert rocheux fait de collines de pierre et de plateaux arides. L'ambiance et les couchers de soleil restent spectaculaires, mais il ne faut pas s'attendre à de grandes dunes de sable.",
      },
      {
        q: "Combien de temps dure l'excursion ?",
        a: "Cela dépend de la formule choisie : de 1 heure (balade chameau seule) à une soirée complète (activité + dîner spectacle, généralement 4 à 6 heures avec le transport).",
      },
      {
        q: "Le dîner spectacle est-il inclus dans toutes les formules ?",
        a: "Non, uniquement dans les formules qui le mentionnent explicitement. Il peut aussi être réservé seul, sans activité en journée.",
      },
      {
        q: "Le quad est-il sécurisé pour les débutants ?",
        a: "Oui, un briefing de sécurité et l'équipement de protection sont fournis avant chaque session, quel que soit le niveau d'expérience.",
      },
      {
        q: "Que dois-je porter ?",
        a: "Des chaussures fermées, des lunettes de soleil, un foulard léger contre la poussière (surtout pour le quad/buggy), et une couche plus chaude pour la soirée — les températures chutent rapidement après le coucher du soleil.",
      },
    ],
    related: [
      { slug: "desert-zagora", reason: "si vous voulez vraiment dormir dans le désert" },
      { slug: "vallee-ourika", reason: "si vous préférez la montagne à la journée" },
    ],
  },
];

export function getExcursion(slug: string) {
  return excursions.find((e) => e.slug === slug);
}
