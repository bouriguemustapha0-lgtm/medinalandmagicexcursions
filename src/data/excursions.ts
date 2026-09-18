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
    priceFrom: 350,
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
    priceFrom: 450,
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
    priceFrom: 600,
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
    priceFrom: 450,
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
    h1: "Excursion au Désert de Zagora depuis Marrakech — 2 jours / 1 nuit",
    title: "Excursion Désert de Zagora 2 Jours / 1 Nuit depuis Marrakech",
    description:
      "2 jours dans le désert de Zagora : col du Tizi n'Tichka, Aït Ben Haddou, vallée du Drâa, balade à dos de chameau au coucher du soleil et nuit en bivouac.",
    image: zagoraImg,
    imageAlt:
      "Caravane de chameaux au coucher du soleil sur les petites dunes et la hamada du désert de Zagora",
    durationLabel: "2 jours / 1 nuit",
    durationIso: "P2D",
    distanceLabel: "360 km · 6 à 7h de route",
    priceFrom: 900,
    categorie: "Plusieurs jours",
    teaser:
      "La nuit au désert la plus accessible depuis Marrakech : vallée du Drâa, chameaux au coucher du soleil et bivouac berbère.",
    intro:
      "Zagora est la formule désert la plus courte au départ de Marrakech : deux jours suffisent pour traverser le Haut Atlas, longer la plus longue palmeraie du Maroc et dormir sous tente au milieu du silence. Le paysage est fait de plaines caillouteuses et de petites dunes, pas des grandes vagues de sable de l'Erg Chebbi — c'est précisément ce qui permet d'y aller et d'en revenir en un week-end.",
    quickAnswer:
      "Zagora se trouve à environ 360 km au sud de Marrakech, soit 6 à 7 heures de route via le col du Tizi n'Tichka et Ouarzazate. Contrairement à Merzouga, le désert de Zagora est composé de hamada (plaines caillouteuses) et de dunes de taille modeste plutôt que de grandes dunes de sable — ce qui permet d'y passer une nuit en seulement 2 jours au départ de Marrakech. Le programme inclut la traversée de la vallée du Drâa (la plus longue palmeraie du Maroc), une balade à dos de chameau au coucher du soleil, et une nuit sous tente dans un bivouac berbère avec dîner et animation musicale.",
    glance: [
      { label: "Distance", value: "360 km · 6 à 7h de route" },
      { label: "Durée", value: "2 jours / 1 nuit" },
      { label: "Départ", value: horaires.zagora.depart },
      { label: "Retour", value: horaires.zagora.retour },
      { label: "Type de désert", value: "Hamada et petites dunes (pas l'Erg Chebbi)" },
      { label: "Nuit", value: "Bivouac berbère, dîner et musique inclus" },
    ],
    program: [
      {
        title: "Jour 1 — Marrakech, Tizi n'Tichka, Aït Ben Haddou",
        text: "Prise en charge à votre hôtel le matin. Traversée du Haut Atlas par le col du Tizi n'Tichka (2 260 m), puis arrêt à la kasbah d'Aït Ben Haddou, classée au patrimoine mondial de l'UNESCO. Déjeuner libre en route avant de continuer vers Ouarzazate.",
      },
      {
        title: "Jour 1 — Vallée du Drâa et bivouac",
        text: "Route vers le sud à travers la vallée du Drâa, la plus longue palmeraie du Maroc, jusqu'à Zagora. Balade à dos de chameau d'environ une heure jusqu'au bivouac, au coucher du soleil. Dîner sous tente et soirée musicale berbère autour du feu.",
      },
      {
        title: "Jour 2 — Lever de soleil et retour",
        text: "Lever de soleil sur le désert, petit-déjeuner au bivouac, puis retour à dos de chameau ou en 4x4. Route de retour vers Marrakech via Ouarzazate et le Tizi n'Tichka, avec arrêts photo. Arrivée en soirée à votre hôtel.",
      },
    ],
    included: [
      "Prise en charge et retour à votre hôtel ou riad à Marrakech",
      "Transport en véhicule climatisé avec chauffeur-guide",
      "Balade à dos de chameau au coucher du soleil",
      "Nuit en bivouac berbère, dîner et petit-déjeuner inclus",
    ],
    notIncluded: [
      "Déjeuners des deux journées",
      "Boissons hors repas du bivouac",
      "Guide local à Aït Ben Haddou",
      "Pourboires",
    ],
    faq: [
      {
        q: "Y a-t-il de grandes dunes à Zagora ?",
        a: "Non. Le désert de Zagora est principalement une hamada (plaine caillouteuse) ponctuée de dunes de taille modeste. Pour de grandes dunes de sable, il faut aller à Merzouga, dans l'Erg Chebbi.",
      },
      {
        q: "Quelle est la différence avec Merzouga ?",
        a: "Zagora est deux fois plus proche de Marrakech (360 km contre 560 km) et se visite en 2 jours, mais ses dunes sont petites. Merzouga demande au minimum 3 jours et offre les grandes dunes de l'Erg Chebbi.",
      },
      {
        q: "Combien de route par jour ?",
        a: "Comptez 6 à 7 heures de route à l'aller et autant au retour, arrêts compris.",
      },
      {
        q: "Le bivouac est-il confortable ?",
        a: "Les tentes berbères sont équipées de lits, matelas et couvertures, avec sanitaires communs. Des bivouacs de catégorie supérieure, avec tentes privatives et salle de bain, sont disponibles en supplément.",
      },
      {
        q: "Quelle est la meilleure saison ?",
        a: "De septembre à mai, lorsque les températures diurnes restent agréables. En été, les journées sont très chaudes et le départ se fait plus tôt.",
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
    priceFrom: 1500,
    categorie: "Plusieurs jours",
    teaser:
      "Les plus hautes dunes du Sahara marocain, les gorges du Todra et deux nuits sur la route du désert.",
    intro:
      "Merzouga, c'est le vrai Sahara : des dunes qui dépassent 150 mètres, un silence total au coucher du soleil, et une nuit sous les étoiles au milieu de l'Erg Chebbi. Le trajet fait partie du voyage — Tizi n'Tichka, Aït Ben Haddou, vallée du Dadès ou gorges du Todra selon l'itinéraire.",
    quickAnswer:
      "Merzouga se trouve à environ 560 km au sud-est de Marrakech. C'est ici que se trouve l'Erg Chebbi, l'un des plus hauts champs de dunes du Sahara marocain (certaines dunes dépassent 150 m), contrairement au désert de Zagora qui n'offre que de petites dunes. Le trajet traverse le col du Tizi n'Tichka, la kasbah d'Aït Ben Haddou, les gorges du Todra ou du Dadès selon l'itinéraire, avant d'arriver à dos de chameau au bivouac dans les dunes pour la nuit, avec dîner sous les étoiles et musique berbère autour du feu.",
    glance: [
      { label: "Distance", value: "~560 km depuis Marrakech" },
      { label: "Durée", value: "3 jours / 2 nuits (formules 2 et 4 jours possibles)" },
      { label: "Départ", value: horaires.merzouga.depart },
      { label: "Retour", value: horaires.merzouga.retour },
      { label: "Dunes", value: "Erg Chebbi, certaines dunes dépassent 150 m" },
      { label: "Étapes", value: "Aït Ben Haddou, vallée du Dadès, gorges du Todra" },
    ],
    program: [
      {
        title: "Jour 1 — Marrakech → vallée du Dadès",
        text: "Départ tôt de Marrakech, traversée du Haut Atlas par le col du Tizi n'Tichka (2 260 m), arrêt à la kasbah d'Aït Ben Haddou (UNESCO), puis Ouarzazate et la vallée des Roses. Nuit en hôtel ou maison d'hôtes dans la vallée du Dadès.",
      },
      {
        title: "Jour 2 — Gorges du Todra → Erg Chebbi",
        text: "Route par les gorges du Dadès et du Todra, aux parois hautes de plus de 200 mètres, puis traversée des oasis et des villages de la vallée du Ziz jusqu'à Merzouga. En fin d'après-midi, balade à dos de chameau vers le bivouac au cœur des dunes, coucher de soleil sur l'Erg Chebbi, dîner et musique berbère autour du feu. Nuit sous tente.",
      },
      {
        title: "Jour 3 — Lever de soleil et retour",
        text: "Lever de soleil sur les dunes, petit-déjeuner au bivouac, retour à dos de chameau. Route de retour vers Marrakech via Ouarzazate et le Tizi n'Tichka, avec arrêts déjeuner et photo. Arrivée en soirée.",
      },
    ],
    included: [
      "Prise en charge et retour à votre hôtel ou riad à Marrakech",
      "Transport en 4x4 ou minibus climatisé avec chauffeur-guide",
      "Balade à dos de chameau au coucher et au lever du soleil",
      "Nuit en bivouac dans les dunes et nuit en hébergement sur la route, dîners et petits-déjeuners inclus",
    ],
    notIncluded: [
      "Déjeuners",
      "Boissons hors repas inclus",
      "Guides locaux sur les sites",
      "Pourboires",
    ],
    faq: [
      {
        q: "Combien de temps de route jusqu'à Merzouga ?",
        a: "Environ 560 km depuis Marrakech, soit 8 à 9 heures de route réparties sur deux journées avec visites et arrêts.",
      },
      {
        q: "Quelle est la différence entre le circuit 2, 3 et 4 jours ?",
        a: "Le circuit 2 jours impose de longues journées de route et très peu de temps sur place. Le circuit 3 jours est le meilleur équilibre : une nuit sur la route, une nuit dans les dunes. Le circuit 4 jours ajoute des étapes comme la vallée des Roses, Skoura ou une seconde nuit au désert.",
      },
      {
        q: "Les dunes sont-elles vraiment plus grandes qu'à Zagora ?",
        a: "Oui. L'Erg Chebbi est un véritable champ de dunes de sable dont certaines dépassent 150 mètres, alors que Zagora se compose de hamada et de dunes basses.",
      },
      {
        q: "Le bivouac de luxe vaut-il le prix ?",
        a: "Le bivouac de luxe offre une tente privative avec vrai lit et salle de bain, un dîner servi à table et un service plus soigné. Si vous voyagez en couple ou en famille et souhaitez bien dormir, le supplément est justifié ; en groupe, le bivouac standard suffit.",
      },
      {
        q: "Quelle est la meilleure saison ?",
        a: "De mi-septembre à fin mai. En plein été, les températures dans les dunes dépassent souvent 40 °C en journée ; les nuits d'hiver, à l'inverse, peuvent descendre près de 0 °C.",
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
    priceFrom: 550,
    categorie: "Demi-journée / soirée",
    teaser:
      "Le désert à 40 minutes de Marrakech : chameaux, quad ou buggy, puis dîner marocain sous tente avec spectacle.",
    intro:
      "Agafay est la sortie désert la plus rapide depuis Marrakech : quarante minutes de route suffisent pour quitter la ville et se retrouver au milieu de collines pierreuses, face à l'Atlas. Pas de grandes dunes de sable ici, mais des couchers de soleil spectaculaires, des activités concentrées sur une demi-journée et un dîner sous tente pour finir la soirée.",
    quickAnswer:
      "Le désert d'Agafay se trouve à environ 40 km de Marrakech, soit 40 à 45 minutes de route — la sortie désert la plus rapide depuis la ville. Contrairement au Sahara, Agafay est un désert rocheux, sans dunes de sable, mais qui offre les mêmes couchers de soleil spectaculaires. Les formules les plus demandées combinent balade à dos de chameau, quad ou buggy, et un dîner marocain sous tente avec spectacle (musique gnawa, danseurs, parfois feu de scène). Une excursion idéale pour les voyageurs qui n'ont pas le temps d'aller jusqu'au Sahara.",
    glance: [
      { label: "Distance", value: "40 km · 40 à 45 min de route" },
      { label: "Durée", value: "Demi-journée ou soirée · 5 à 7 heures" },
      { label: "Départ", value: horaires.agafay.depart },
      { label: "Retour", value: horaires.agafay.retour },
      { label: "Type de désert", value: "Désert rocheux, sans dunes de sable" },
      { label: "Activités", value: "Chameau, quad ou buggy, dîner spectacle" },
    ],
    program: [
      {
        title: "Après-midi — Départ de Marrakech",
        text: "Prise en charge à votre hôtel ou riad en milieu d'après-midi. Quarante minutes de route vers le sud-ouest, par la route de Guemassa, jusqu'aux collines d'Agafay.",
      },
      {
        title: "Quad ou buggy",
        text: "Session d'environ une heure de quad ou de buggy sur les pistes du désert d'Agafay, avec briefing, casque et accompagnateur. Accessible aux débutants ; le buggy permet de rouler à deux.",
      },
      {
        title: "Balade à dos de chameau au coucher du soleil",
        text: "Balade d'environ 30 à 45 minutes à dos de chameau sur les crêtes pierreuses, au moment où la lumière descend sur les sommets de l'Atlas — le meilleur créneau photo de la sortie.",
      },
      {
        title: "Dîner spectacle sous tente",
        text: "Thé à la menthe à l'arrivée au camp, puis dîner marocain (salades, tagine ou couscous, dessert) sous tente caïdale, accompagné de musique gnawa et de danseurs. Retour à Marrakech en fin de soirée.",
      },
    ],
    included: [
      "Prise en charge et retour à votre hôtel ou riad à Marrakech",
      "Véhicule climatisé avec chauffeur",
      "Balade à dos de chameau au coucher du soleil",
      "Session de quad ou de buggy avec équipement et accompagnateur",
      "Dîner marocain sous tente avec spectacle",
    ],
    notIncluded: ["Boissons supplémentaires", "Pourboires", "Activités additionnelles sur place"],
    faq: [
      {
        q: "Y a-t-il des dunes de sable à Agafay ?",
        a: "Non. Agafay est un désert rocheux, fait de collines de pierre et d'argile. Pour des dunes de sable, il faut aller à Zagora (petites dunes) ou à Merzouga (Erg Chebbi).",
      },
      {
        q: "Combien de temps dure l'excursion ?",
        a: "Entre 5 et 7 heures selon la formule, transferts compris. La formule soirée part en milieu d'après-midi et revient à Marrakech après le dîner.",
      },
      {
        q: "Le dîner spectacle est-il inclus dans toutes les formules ?",
        a: "Non. Il est inclus dans la formule soirée ; les formules demi-journée sans dîner s'arrêtent après les activités et le thé au camp.",
      },
      {
        q: "Le quad est-il sécurisé pour les débutants ?",
        a: "Oui : briefing avant le départ, casque fourni et accompagnateur en tête de groupe sur des pistes larges. Le permis n'est pas exigé pour le quad tout-terrain.",
      },
      {
        q: "Que porter ?",
        a: "Des vêtements couvrants et des chaussures fermées pour le quad, des lunettes de soleil, et une veste légère : les soirées dans le désert rocheux sont nettement plus fraîches qu'en ville.",
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
