# EXCURTION MEDINA LAND

J'ai joint 3 fichiers de référence à ce projet : prompt-lovable-excursions-maroc.md (direction UI/UX, stack, SEO/GEO), brief-seo-geo-excursions-maroc.md (mots-clés et structure SEO par page) et contenu-site-excursions-maroc.md (le texte rédactionnel complet des 11 pages, en français, prêt à l'emploi).

Construis le site en suivant strictement prompt-lovable-excursions-maroc.md pour le design, l'UX et la stack technique. Utilise le contenu déjà rédigé dans contenu-site-excursions-maroc.md mot pour mot pour chaque page (ne réécris pas les textes, intègre-les tels quels dans les composants). Applique les title, meta description, FAQ et structure de mots-clés de brief-seo-geo-excursions-maroc.md pour le SEO technique et les balises JSON-LD.

Les éléments entre crochets [...] dans le contenu (horaires) sont des repères à laisser modifiables facilement — ne les invente pas comme des données définitives, affiche-les comme valeurs par défaut éditables.

Commence par les 7 pages d'excursions (Ourika, Ouzoud, Ouarzazate, Essaouira, Zagora, Merzouga, Agafay), puis les pages Transferts et Guide privé, puis Accueil/À propos/Contact/FAQ.  Prompt à coller dans Lovable

Tu es un designer produit + développeur front-end senior, spécialisé dans les sites vitrines pour agences d'excursions et de tourisme au Maroc. Tu maîtrises la direction artistique (UI), l'expérience utilisateur (UX) et le SEO/GEO (Generative Engine Optimization — être repris par ChatGPT, Perplexity, Google AI Overviews, Gemini).

Priorité absolue : design et expérience utilisateur. Le SEO/GEO est une exigence technique non négociable mais ne doit jamais dicter le visuel : les données structurées et le contenu riche doivent être invisibles pour le visiteur et visibles pour les moteurs.

0. Le projet

Construis un site vitrine de 7 pages pour une agence d'excursions basée à Marrakech, proposant :

Vallée de l'Ourika — excursion journée

Cascades d'Ouzoud — excursion journée

Ouarzazate — excursion journée/2 jours

Essaouira — excursion journée

Désert de Zagora — excursion 2-3 jours

Désert de Merzouga — excursion 3 jours

Agafay — désert + chameaux + quad + dîner spectacle (excursion demi-journée/soirée)

Transferts aéroport → hôtel

Transferts hôtel → aéroport

Demi-journée avec guide privé

Journée complète avec guide privé

Note : il y a 11 offres pour 7 pages. Structure-les en 7 pages réelles : une page d'accueil, une page "Excursions" en liste/filtrable qui contient les fiches détaillées des 7 destinations (Ourika, Ouzoud, Ouarzazate, Essaouira, Zagora, Merzouga, Agafay) via des sections ancrées ou des sous-routes légères (/excursions/ourika, etc. si le routing est simple), une page "Transferts" regroupant aéroport→hôtel et hôtel→aéroport, une page "Guide privé" regroupant demi-journée et journée complète, une page "À propos", une page "Contact/Réservation" et une page "FAQ". Si le budget de 7 pages doit rester strict, fusionne intelligemment (ex : Transferts + Guide privé sur une seule page "Services sur mesure") mais garde une fiche complète et distincte pour chacune des 7 excursions phares.

Chaque excursion doit avoir sa propre fiche avec : durée, points de départ/retour, ce qui est inclus/exclu, itinéraire heure par heure, prix indicatif (par personne et à partir de X pax), photos, et CTA de réservation.

1. Direction artistique — à définir et appliquer AVANT tout code

Choisis et applique un système de design cohérent, puis résume-le en 5-6 lignes en tête de ta réponse (palette, typographies, ambiance, pourquoi ce choix pour une agence d'excursions vs un riad/hôtel).

Palette

1 couleur primaire ancrée dans l'identité marocaine (suggestion : terracotta profond ou bleu Majorelle — le terracotta convient mieux à une identité "désert/aventure", le bleu Majorelle à une identité "Marrakech chic") — à choisir selon le positionnement

1 neutre chaud pour les fonds : jamais de blanc pur, préférer un ivoire/sable (ex. #FAF6F0 ou équivalent)

1 couleur d'accent réservée aux CTA, utilisée avec parcimonie

Contraste texte/fond conforme WCAG AA minimum (4.5:1) partout, vérifié pour chaque paire couleur/fond utilisée

Typographie

Une serif/display avec du caractère pour les titres (évoquant l'artisanat sans cliché orientaliste générique — éviter les polices "arabisantes" décoratives)

Une sans-serif très lisible pour le corps de texte

Échelle typographique claire (ratio 1.25 ou 1.333), line-height 1.5–1.7 pour le corps

Jamais plus de 2 familles de police au total

Grille & espacement

Espacement cohérent en multiples de 4px ou 8px

Marges généreuses, sections aérées — l'authenticité premium se lit dans le white space

Grille responsive : 12 colonnes desktop, empilement simple mobile

Photographie

Traitement photo cohérent : même température de couleur, même style de recadrage sur toutes les images

Hero pleine largeur avec overlay subtil garantissant la lisibilité du texte

Éviter toute photo de stock générique si possible ; si des placeholders sont utilisés, le signaler clairement dans ta réponse

Composants signature

Motifs géométriques marocains (zellige, moucharabieh) comme éléments graphiques discrets : séparateurs de section, bordures, petits accents — jamais en fond texturé qui nuit à la lisibilité

Une seule bibliothèque d'icônes, style ligne fine, cohérente partout (lucide-react convient bien)

2. Direction UX — parcours et interactions obligatoires

Parcours prioritaire du visiteur

Comprendre en 3 secondes : quelle excursion, où, pour qui, combien de temps

Se projeter : voir l'itinéraire, les photos, le prix

Se rassurer : avis clients, FAQ, réponses aux objections (annulation, météo, niveau physique requis, paiement sur place ou en ligne)

Réserver ou contacter en 1-2 clics depuis n'importe quelle section

Règles UX non négociables

CTA de réservation visible en permanence : bouton sticky mobile + header collant desktop

Un seul CTA primaire par écran ("Réserver" ou "Demander un devis") ; actions secondaires (galerie, avis) en style visuellement secondaire

Formulaire de réservation/contact court : jamais plus de 5 champs visibles d'un coup, dates et nombre de voyageurs en priorité

Navigation : 5 à 7 items maximum au menu

Galerie photo : swipe natif mobile (pas de lightbox qui casse le flow), grille ou carrousel léger desktop

Chargement perçu : skeleton ou fade-in léger sur les images, jamais d'écran blanc

Micro-interactions discrètes (hover cartes, transition douce au scroll), jamais d'animation qui ralentit la lecture

Accessibilité clavier complète (tab order logique, focus visible), hiérarchie de titres cohérente pour lecteurs d'écran

Mobile-first non négociable

Conçois d'abord l'expérience mobile (70%+ du trafic touristique), puis étends au desktop

Zones tactiles ≥ 44×44px, espacement suffisant entre liens

Numéro de téléphone et WhatsApp cliquables directement (tel:, wa.me), pas seulement affichés en texte

3. Stack technique

React + Tailwind CSS (stack native Lovable), composants shadcn/ui où pertinent

Mobile-first, responsive, optimisé Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms)

Images en loading="lazy" sauf le hero, dimensions explicites (width/height) pour éviter le layout shift

Structure de composants claire et réutilisable (ex. ExcursionCard, BookingForm, Testimonial, FAQAccordion)

4. Exigences SEO (techniques, non optionnelles)

<title> et <meta description> uniques par page, avec ville + type d'excursion + mot-clé différenciant

Hiérarchie de titres logique : un seul <h1> par page, <h2> par section, pas de saut de niveau

Attributs alt descriptifs sur toutes les images (décrire la scène réelle, pas "photo excursion")

Données structurées Schema.org JSON-LD adaptées :

TouristTrip ou Product/Offer pour chaque excursion (prix, durée, lieu de départ)

TravelAgency ou LocalBusiness pour l'agence, avec address, geo, priceRange, aggregateRating si avis

FAQPage pour la section FAQ

BreadcrumbList puisque le site est multi-pages

sitemap.xml et robots.txt de base

URLs propres et lisibles (/excursions/vallee-ourika, /transferts-aeroport, etc.)

Balises hreflang si le site est multilingue (prévoir FR/EN minimum, AR/ES en option)

Balises Open Graph + Twitter Card avec image dédiée pensée pour ces formats (pas le hero recadré à l'arrache)

5. Exigences GEO (pour être cité par les IA génératives)

Contenu en phrases déclaratives auto-suffisantes : chaque paragraphe doit pouvoir être extrait et cité seul sans perdre son sens

Répondre directement aux questions dans le texte courant, pas seulement en FAQ (ex. "La vallée de l'Ourika se trouve à environ 1h de route au sud de Marrakech")

Données concrètes et vérifiables : distances en km/minutes, durée exacte, taille max du groupe, ce qui est inclus/exclu

Information structurée en listes et tableaux (inclus/non inclus, horaires, tarifs par nombre de personnes)

Éviter le jargon marketing vague ("une expérience inoubliable") sans fait concret pour l'appuyer

Fichier llms.txt à la racine résumant l'agence et ses excursions en langage simple

Cohérence du nom/adresse/téléphone (NAP) identique sur toutes les pages

6. Contenu

Rédige un contenu réel en français pour les 7 excursions et 4 services (pas de lorem ipsum), avec des données concrètes (durées, distances, ce qui est inclus)

Formulaire de réservation fonctionnel visuellement, qui redirige vers WhatsApp par défaut (pas de vraie base de données, pas de vrai système de paiement)

7. Ce que j'attends dans ta réponse

Un court résumé de direction artistique (palette, typographies, ambiance, pourquoi)

Le site complet fonctionnel (les 7 pages, navigation, formulaire de réservation vers WhatsApp, JSON-LD intégré)

Un court résumé final : mots-clés ciblés + recommandations SEO/GEO restantes (Google Business Profile, avis clients, backlinks)     Brief SEO / GEO — Contenu par page (excursions Marrakech)

Basé sur l'analyse de 7 fiches concurrentes (Marrakech Desert Trips, Traces Berbères, Agafay Desert) pour identifier les mots-clés courts et longue traîne réellement utilisés sur ce marché, et structurer chaque page pour le SEO classique + le GEO (citation par ChatGPT, Perplexity, Google AI Overviews).

Comment utiliser ce document

Pour chaque page : un mot-clé principal (short-tail, fort volume, concurrence élevée), 5-8 mots-clés longue traîne (intention claire, plus faciles à ranker), un title/meta suggérés, une structure de "réponse rapide" en haut de page (le bloc que les IA génératives aiment citer), et les questions FAQ à couvrir. Adapte les prix/distances aux tarifs réels de ton client — ceux ci-dessous viennent de la concurrence et servent de repère de marché.

1. Vallée de l'Ourika

Mot-clé principal : excursion vallée de l'Ourika depuis Marrakech Longue traîne :

cascades Setti Fatma depuis Marrakech

marché berbère Ourika lundi (Tnin Ourika)

excursion Ourika prix / combien coûte

randonnée cascade Ourika difficulté

excursion 1 jour Marrakech montagne Atlas

coopérative huile d'argan Ourika

que faire à Ourika en une journée

Title (≤60 car.) : Excursion Vallée de l'Ourika depuis Marrakech | Cascades & Villages Berbères Meta description (≤155 car.) : Excursion d'une journée dans la vallée de l'Ourika au départ de Marrakech : cascades de Setti Fatma, villages berbères, coopérative d'argan. Prise en charge hôtel incluse.

Bloc "réponse rapide" (à placer en haut de page, style GEO) :

La vallée de l'Ourika se trouve à environ 60 km au sud de Marrakech, soit 1 heure de route — l'excursion la plus proche de la ville. Le programme type inclut un arrêt dans une coopérative d'huile d'argan, la traversée de villages berbères, et une randonnée optionnelle (~45 min) jusqu'aux cascades de Setti Fatma. Le lundi, le marché berbère hebdomadaire de Tnin Ourika ajoute une dimension culturelle forte. Retour à Marrakech en fin d'après-midi.

Données concrètes à intégrer dans le texte (GEO) : distance (60 km / 1h), durée de la rando vers les cascades (45 min, difficulté modérée), jour du marché (lundi), altitude de Setti Fatma (~1 500 m), ce qui est inclus/exclu.

FAQ à couvrir : Combien de temps dure le trajet ? La randonnée est-elle difficile ? Peut-on se baigner ? Que se passe-t-il un lundi ? Faut-il un guide pour la cascade ? Que porter ?

Schema.org : TouristTrip + FAQPage

2. Cascades d'Ouzoud

Mot-clé principal : excursion cascades d'Ouzoud depuis Marrakech Longue traîne :

cascades d'Ouzoud combien de temps depuis Marrakech

plus grande cascade d'Afrique du Nord

singes macaques Ouzoud

excursion Ouzoud à la journée prix

balade en bateau cascades Ouzoud

se baigner cascades Ouzoud

Marrakech Ouzoud distance km

Title : Excursion Cascades d'Ouzoud au Départ de Marrakech | Journée Complète Meta description : Excursion d'une journée aux cascades d'Ouzoud (110 m) depuis Marrakech : baignade, balade en barque, singes macaques et déjeuner face aux chutes. Transport inclus.

Bloc réponse rapide :

Les cascades d'Ouzoud se trouvent à environ 150 km au nord-est de Marrakech, soit 3 heures de route à travers les oliveraies de la plaine du Tadla. Hautes de 110 mètres sur trois paliers, ce sont les plus hautes cascades d'Afrique du Nord. Le site abrite des singes magots (macaques de Barbarie) en liberté. Une fois sur place, il est possible de descendre à pied jusqu'au bassin, se baigner, prendre une balade en barque sous les embruns, et déjeuner dans l'un des cafés en terrasse surplombant les chutes.

Données concrètes : distance (150 km / 3h), hauteur (110 m, 3 paliers), faune (macaques de Barbarie), activités (baignade, barque ~20 MAD), horaires type (départ matin, retour en soirée).

FAQ à couvrir : Combien de temps de route ? Peut-on nager ? Y a-t-il vraiment des singes ? La balade en barque est-elle incluse ? Y a-t-il des restaurants sur place ? Que porter comme chaussures ?

Schema.org : TouristTrip + FAQPage

3. Ouarzazate & Aït Ben Haddou

Mot-clé principal : excursion Ouarzazate Ait Ben Haddou depuis Marrakech Longue traîne :

kasbah Ait Ben Haddou UNESCO

col Tizi n'Tichka altitude

studios de cinéma Ouarzazate

excursion 1 jour Ouarzazate prix

Ait Ben Haddou Game of Thrones tournage

kasbah Taourirt Ouarzazate

Marrakech Ouarzazate distance km

Title : Excursion Ouarzazate & Kasbah d'Aït Ben Haddou depuis Marrakech Meta description : Journée complète vers Ouarzazate et la kasbah d'Aït Ben Haddou (UNESCO) : col du Tizi n'Tichka, studios de cinéma, villages berbères. Excursion au départ de Marrakech.

Bloc réponse rapide :

Ouarzazate se trouve à environ 200 km au sud-est de Marrakech, via le col du Tizi n'Tichka (2 260 m d'altitude), le plus haut col routier du Maroc. L'excursion passe par la kasbah fortifiée d'Aït Ben Haddou, classée au patrimoine mondial de l'UNESCO depuis 1987 et utilisée comme décor pour Gladiator, Lawrence d'Arabie et Game of Thrones. À Ouarzazate, la kasbah de Taourirt (17e siècle) et les studios de cinéma complètent la visite. Trajet aller-retour : environ 10 à 12 heures.

Données concrètes : distance (~200-204 km), altitude du col (2 260 m), année classement UNESCO (1987), films tournés sur place (liste courte), durée totale (10-12h).

FAQ à couvrir : Combien de temps dure l'excursion ? Le col est-il impressionnant/dangereux ? Peut-on visiter les studios de cinéma ? La kasbah se visite-t-elle avec un guide local ? Que voir à Ouarzazate en plus d'Aït Ben Haddou ?

Schema.org : TouristTrip + FAQPage (+ mention TouristAttraction pour Aït Ben Haddou si contenu dédié)

4. Essaouira

Mot-clé principal : excursion Essaouira depuis Marrakech Longue traîne :

Essaouira 1 jour au départ de Marrakech

distance Marrakech Essaouira km

excursion Essaouira temps libre

coopérative argan route Essaouira

chèvres qui grimpent aux arganiers

balade chameau plage Essaouira

que faire à Essaouira en une journée

meilleur restaurant poisson port Essaouira

Title : Excursion à Essaouira depuis Marrakech | Journée Côtière Complète Meta description : Excursion d'une journée à Essaouira (Mogador) depuis Marrakech : remparts, médina, port aux poissons, coopérative d'argan et temps libre sur la plage.

Bloc réponse rapide :

Essaouira se trouve à environ 170 km à l'ouest de Marrakech, soit 2h30 à 3h de route. L'excursion type inclut un arrêt dans une coopérative féminine d'huile d'argan (avec l'incontournable photo des chèvres perchées dans les arganiers), puis plusieurs heures de temps libre dans la médina classée UNESCO : remparts de la Skala, port aux poissons, quartier de la marqueterie de bois de thuya et de cèdre. Un déjeuner de poisson frais en bord de mer est une étape quasi obligatoire. Retour à Marrakech en soirée.

Données concrètes : distance (170 km / 2h30-3h), durée totale journée (9-10h), temps libre sur place (~4-5h), spécialité culinaire (poisson grillé), activités optionnelles (balade en chameau sur la plage, quad).

FAQ à couvrir : Combien de temps de route ? Combien de temps libre sur place ? Que manger à Essaouira ? Le déjeuner est-il inclus ? Peut-on faire du quad ou du chameau ? Faut-il un guide dans la médina ?

Schema.org : TouristTrip + FAQPage

5. Désert de Zagora

Mot-clé principal : excursion désert de Zagora 2 jours depuis Marrakech Longue traîne :

Zagora désert dunes ou pas

nuit sous tente désert Zagora prix

vallée du Drâa excursion

bivouac désert Zagora 1 nuit

Zagora vs Merzouga différence

excursion chameau coucher de soleil Zagora

combien de km Marrakech Zagora

Title : Excursion Désert de Zagora 2 Jours / 1 Nuit depuis Marrakech Meta description : 2 jours dans le désert de Zagora : col du Tizi n'Tichka, Aït Ben Haddou, vallée du Drâa, balade à dos de chameau au coucher du soleil et nuit en bivouac.

Bloc réponse rapide :

Zagora se trouve à environ 360 km au sud de Marrakech, soit 6 à 7 heures de route via le col du Tizi n'Tichka et Ouarzazate. Contrairement à Merzouga, le désert de Zagora est composé de hamada (plaines caillouteuses) et de dunes de taille modeste plutôt que de grandes dunes de sable — ce qui permet d'y passer une nuit en seulement 2 jours au départ de Marrakech. Le programme inclut la traversée de la vallée du Drâa (la plus longue palmeraie du Maroc), une balade à dos de chameau au coucher du soleil, et une nuit sous tente dans un bivouac berbère avec dîner et animation musicale.

Données concrètes : distance (360 km / 6-7h), type de désert (hamada + petites dunes, à différencier de Merzouga), durée trek chameau (~1h coucher + 1h lever), ce qui est inclus (dîner, petit-déjeuner, tente).

FAQ à couvrir : Y a-t-il de grandes dunes à Zagora ? Quelle est la différence avec Merzouga ? Combien de route par jour ? Le bivouac est-il confortable ? Peut-on voyager seul(e) ? Meilleure saison ?

Schema.org : TouristTrip + FAQPage

6. Désert de Merzouga

Mot-clé principal : excursion désert de Merzouga depuis Marrakech Longue traîne :

Erg Chebbi grandes dunes Merzouga

Marrakech Merzouga combien de km

circuit désert Merzouga 3 jours vs 2 jours

bivouac de luxe Merzouga prix

vallée du Dadès gorges Todra Merzouga

balade chameau lever soleil Erg Chebbi

meilleur circuit désert Maroc

Title : Excursion Désert de Merzouga — Erg Chebbi depuis Marrakech Meta description : Circuit au départ de Marrakech vers les grandes dunes de l'Erg Chebbi à Merzouga : gorges du Todra, vallée du Drâa, bivouac et balade à dos de chameau au coucher du soleil.

Bloc réponse rapide :

Merzouga se trouve à environ 560 km au sud-est de Marrakech. C'est ici que se trouve l'Erg Chebbi, l'un des plus hauts champs de dunes du Sahara marocain (certaines dunes dépassent 150 m), contrairement au désert de Zagora qui n'offre que de petites dunes. Le trajet traverse le col du Tizi n'Tichka, la kasbah d'Aït Ben Haddou, les gorges du Todra ou du Dadès selon l'itinéraire, avant d'arriver à dos de chameau au bivouac dans les dunes pour la nuit, avec dîner sous les étoiles et musique berbère autour du feu.

Données concrètes : distance (~560 km), hauteur des dunes de l'Erg Chebbi, durée du trajet réparti sur plusieurs jours (2, 3 ou 4 jours selon formule), étapes intermédiaires (gorges du Todra/Dadès, vallée du Drâa, Skoura), ce qui différencie Merzouga de Zagora et d'Agafay.

FAQ à couvrir : Combien de temps de route jusqu'à Merzouga ? Quelle est la différence entre le circuit 2, 3 et 4 jours ? Les dunes sont-elles vraiment plus grandes qu'à Zagora ? Le bivouac de luxe vaut-il le prix ? Quelle est la meilleure saison ?

Schema.org : TouristTrip + FAQPage

7. Désert d'Agafay (chameaux + quad + dîner)

Mot-clé principal : excursion désert d'Agafay depuis Marrakech Longue traîne :

Agafay quad biking prix

dîner spectacle désert Agafay

balade chameau coucher soleil Agafay

Agafay combien de km de Marrakech

Agafay ou Zagora quelle différence

excursion Agafay demi-journée

dîner sous les étoiles Marrakech désert

Title : Excursion Désert d'Agafay — Chameaux, Quad & Dîner Spectacle Meta description : Désert d'Agafay à 40 minutes de Marrakech : balade à dos de chameau, quad biking, buggy et dîner spectacle sous les étoiles. Formules demi-journée ou soirée.

Bloc réponse rapide :

Le désert d'Agafay se trouve à environ 40 km de Marrakech, soit 40 à 45 minutes de route — la sortie désert la plus rapide depuis la ville. Contrairement au Sahara, Agafay est un désert rocheux, sans dunes de sable, mais qui offre les mêmes couchers de soleil spectaculaires. Les formules les plus demandées combinent balade à dos de chameau, quad ou buggy, et un dîner marocain sous tente avec spectacle (musique gnawa, danseurs, parfois feu de scène). Une excursion idéale pour les voyageurs qui n'ont pas le temps d'aller jusqu'au Sahara.

Données concrètes : distance (40 km / 40-45 min), type de désert (rocheux, pas de dunes de sable — à préciser pour éviter toute confusion avec le Sahara), durée type des formules (demi-journée à soirée), ce qui distingue Agafay de Zagora/Merzouga.

FAQ à couvrir : Y a-t-il des dunes de sable à Agafay ? Combien de temps dure l'excursion ? Le dîner spectacle est-il inclus dans toutes les formules ? Le quad est-il sécurisé pour les débutants ? Que porter ?

Schema.org : TouristTrip + FAQPage

8-9. Transferts (Aéroport → Hôtel / Hôtel → Aéroport)

Mot-clé principal : transfert aéroport Marrakech hôtel Longue traîne :

transfert privé aéroport Marrakech prix

navette aéroport Marrakech Menara

réserver transfert aéroport Marrakech à l'avance

transfert aéroport Marrakech médina

taxi ou transfert privé aéroport Marrakech

transfert aéroport Casablanca Marrakech (si pertinent)

Title : Transfert Aéroport Marrakech ↔ Hôtel | Réservation à l'Avance Meta description : Transfert privé entre l'aéroport de Marrakech-Menara et votre hôtel ou riad. Chauffeur à l'arrivée, prix fixe, réservation en ligne ou par WhatsApp.

Bloc réponse rapide :

Un transfert privé entre l'aéroport Marrakech-Menara et le centre-ville prend généralement 15 à 25 minutes selon le quartier (la médina, où les véhicules ne peuvent pas toujours entrer jusqu'au riad, ajoute un temps de marche à pied). Réserver un transfert à l'avance permet d'avoir un chauffeur qui vous attend à la sortie des arrivées avec une pancarte à votre nom, à prix fixe et sans négociation avec un taxi.

Données concrètes : distance aéroport-centre (~6 km), durée moyenne (15-25 min), particularité médina (accès véhicule limité).

FAQ à couvrir : Comment reconnaître mon chauffeur à l'aéroport ? Que faire si mon vol est retardé ? Le prix est-il fixe ou par personne ? Peut-on réserver un transfert seul, sans excursion ?

Schema.org : Service ou TaxiService + FAQPage

10-11. Guide privé (demi-journée / journée complète)

Mot-clé principal : guide privé Marrakech demi-journée / journée Longue traîne :

visite guidée médina Marrakech prix

guide privé français Marrakech

visite privée Jardin Majorelle et médina

que voir à Marrakech en une demi-journée

guide touristique agréé Marrakech

Title : Guide Privé à Marrakech — Demi-Journée ou Journée Complète Meta description : Visite guidée privée de Marrakech avec un guide francophone agréé : médina, souks, jardins et monuments. Formule demi-journée ou journée complète, sur mesure.

Bloc réponse rapide :

Une visite avec guide privé à Marrakech en demi-journée (environ 4 heures) permet de couvrir la médina, les souks et un ou deux monuments majeurs (Jardin Majorelle, palais Bahia, tombeaux saadiens). La formule journée complète (environ 8 heures) ajoute un déjeuner et davantage de sites, avec un rythme plus flexible et adapté aux centres d'intérêt du visiteur (histoire, artisanat, gastronomie, photographie).

Données concrètes : durée exacte de chaque formule, nombre de sites couverts en moyenne, langues parlées par les guides, agrément officiel (mentionner le numéro de licence de l'agence).

FAQ à couvrir : Quelle est la différence entre demi-journée et journée complète ? Le guide parle-t-il français/anglais/espagnol ? Les frais d'entrée sont-ils inclus ? Peut-on personnaliser l'itinéraire ?

Schema.org : TouristTrip ou Service + FAQPage

Recommandations transverses (toutes pages)

Structure de titre H1/H2 type par page excursion :

H1 : nom de l'excursion + "depuis Marrakech"

H2 : Aperçu / En un coup d'œil (distance, durée, prix)

H2 : Programme / itinéraire heure par heure

H2 : Ce qui est inclus / non inclus

H2 : Avis clients

H2 : Questions fréquentes

H2 : Réserver

Maillage interne : chaque fiche doit linker vers 2-3 autres excursions complémentaires (ex. la page Zagora doit linker vers Merzouga "si vous cherchez de plus grandes dunes" et vers Agafay "si vous manquez de temps") — c'est aussi un signal GEO fort (les IA génératives citent plus facilement un site qui structure clairement les différences entre offres proches).

Mots-clés transverses à répéter naturellement sur tout le site (cohérence NAP + positionnement) :

"excursion depuis Marrakech" / "au départ de Marrakech"

"prise en charge à l'hôtel" / "hotel pickup"

nom de la ville + "excursion 1 jour" / "2 jours" / "3 jours"

"chauffeur guide agréé" / "licence de tour-opérateur"

Pages à fort potentiel de trafic informationnel (contenu blog complémentaire, pas dans les 7 pages mais à prévoir) :

"Agafay vs Zagora vs Merzouga : quelle différence ?" — requête comparative à fort volume

"Meilleure période pour visiter le désert marocain"

"Que mettre dans sa valise pour une excursion dans le désert"

"Combien de jours pour voir le désert depuis Marrakech ?"

Ces contenus comparatifs sont ceux que les moteurs génératifs (ChatGPT, Perplexity) citent le plus souvent, car ils répondent directement à une décision que l'utilisateur doit prendre. Contenu rédactionnel complet — Site d'excursions Marrakech

À lire avant publication : tous les prix, horaires exacts et numéros affichés entre crochets [...] sont des repères de marché (issus de l'analyse concurrentielle) à remplacer par les données réelles de l'agence. Le reste du texte est rédigé pour être publié tel quel. Chaque fiche suit la structure GEO/SEO définie dans le brief précédent : réponse rapide en haut de page, données vérifiables, FAQ.

PAGE 1 — Vallée de l'Ourika

Title : Excursion Vallée de l'Ourika depuis Marrakech | Cascades & Villages Berbères Meta description : Excursion d'une journée dans la vallée de l'Ourika au départ de Marrakech : cascades de Setti Fatma, villages berbères, coopérative d'argan. Prise en charge hôtel incluse.

H1 : Excursion à la Vallée de l'Ourika depuis Marrakech

À une heure de route de Marrakech, la vallée de l'Ourika est l'échappée montagne la plus proche de la ville. Ici, les palmiers cèdent la place aux terrasses vertes, aux villages berbères accrochés aux collines, et à une rivière qui dévale le Haut Atlas jusqu'aux cascades de Setti Fatma. C'est le contraste express : ruelles animées de la médina le matin, air de montagne et pieds dans l'eau l'après-midi.

Réponse rapide

La vallée de l'Ourika se trouve à environ 60 km au sud de Marrakech, soit 1 heure de route. L'excursion à la journée inclut généralement un arrêt dans une coopérative d'huile d'argan, la traversée de villages berbères construits en pisé, et une randonnée optionnelle d'environ 45 minutes jusqu'aux cascades de Setti Fatma, à 1 500 mètres d'altitude. Le lundi, le marché hebdomadaire berbère de Tnin Ourika ajoute une étape supplémentaire riche en couleurs. Départ le matin, retour à Marrakech en fin d'après-midi.

En un coup d'œil

Distance60 km · environ 1h de routeDuréeJournée complète · ~8 heuresDépart[09h00]Retour[17h00–18h00]TransportVéhicule climatisé, chauffeur francophonePoint fortCascades de Setti Fatma, marché du lundi

Le programme de la journée

Matin — Départ et coopérative d'argan. Prise en charge à votre hôtel ou riad à Marrakech. La route traverse la plaine du Haouz avant de grimper doucement vers les contreforts du Haut Atlas. Premier arrêt dans une coopérative féminine d'huile d'argan : démonstration du procédé d'extraction traditionnel, entièrement manuel, et possibilité d'achat direct auprès des productrices.

Fin de matinée — Entrée dans la vallée. Le paysage change progressivement : gorges rouges, terrasses cultivées, noyers centenaires et villages berbères construits à flanc de colline. Si votre excursion tombe un lundi, arrêt au marché hebdomadaire de Tnin Ourika — un vrai souk local, loin des circuits touristiques classiques.

Midi — Setti Fatma. Arrivée au village de Setti Fatma, point de départ de la randonnée vers les cascades. Deux options : marcher jusqu'à la première cascade (environ 45 minutes aller, sentier rocailleux, difficulté modérée, chaussures fermées recommandées) accompagné d'un guide local, ou profiter du bord de rivière et du village sans effort particulier.

Déjeuner. Tagine berbère, grillades et thé à la menthe dans l'un des cafés au bord de l'eau, sous les noyers — une adresse incontournable de la vallée. Comptez entre 60 et 120 MAD par personne (non inclus dans le prix de l'excursion).

Après-midi — Temps libre. Baignade dans les vasques naturelles de la rivière si la saison le permet, visite d'une maison berbère traditionnelle pour un thé à la menthe, ou simple flânerie le long des étals artisanaux.

Retour. Départ en milieu d'après-midi. La lumière dorée sur les parois rouges de la vallée rend le trajet retour particulièrement photogénique. Dépose à votre hôtel ou sur la place Jemaa el-Fna.

Inclus / non inclus

Inclus :

Prise en charge et retour à votre hôtel ou riad

Véhicule climatisé, chauffeur francophone/anglophone

Arrêt à la coopérative d'huile d'argan

Journée complète dans la vallée de l'Ourika

Non inclus :

Déjeuner et boissons (60–120 MAD sur place)

Guide local pour la randonnée vers les cascades (petit forfait, payé sur place)

Don pour la visite d'une maison berbère (optionnel)

Pourboire chauffeur (optionnel)

FAQ

Combien de temps dure le trajet jusqu'à l'Ourika ? Environ 1 heure depuis le centre de Marrakech, pour 60 km de route.

La randonnée vers les cascades est-elle difficile ? Modérée : environ 45 minutes de marche sur un sentier rocailleux et irrégulier. Des chaussures fermées et une bonne condition physique de base sont recommandées. Il n'est pas nécessaire de faire la randonnée pour profiter de la vallée.

Que se passe-t-il si mon excursion tombe un lundi ? Vous avez la chance de découvrir le marché hebdomadaire berbère de Tnin Ourika, une étape ajoutée au programme ce jour-là : épices, produits locaux, artisanat et scènes de vie authentiques.

Peut-on se baigner dans la rivière ? Oui, il existe des vasques naturelles le long de la rivière. L'eau reste fraîche toute l'année, car elle provient directement de la montagne.

Que dois-je prévoir comme équipement ? Chaussures de marche fermées si vous comptez faire la randonnée, une couche supplémentaire (la vallée est plus fraîche que Marrakech), crème solaire, chapeau, et un maillot de bain en option.

PAGE 2 — Cascades d'Ouzoud

Title : Excursion Cascades d'Ouzoud au Départ de Marrakech | Journée Complète Meta description : Excursion d'une journée aux cascades d'Ouzoud (110 m) depuis Marrakech : baignade, balade en barque, singes macaques et déjeuner face aux chutes. Transport inclus.

H1 : Excursion aux Cascades d'Ouzoud depuis Marrakech

Les plus hautes cascades d'Afrique du Nord se trouvent à trois heures de route de Marrakech — et elles valent chaque minute du trajet. 110 mètres d'eau qui tombent sur trois paliers dans une gorge verdoyante, des singes magots en liberté dans les arbres, et assez de temps libre sur place pour nager, marcher, prendre une barque, ou simplement s'installer en terrasse face aux chutes.

Réponse rapide

Les cascades d'Ouzoud se situent à environ 150 km au nord-est de Marrakech, soit 3 heures de route à travers les oliveraies de la plaine du Tadla. Hautes de 110 mètres sur trois paliers, ce sont les plus hautes chutes d'eau d'Afrique du Nord. Le site abrite des singes magots (macaques de Barbarie) en liberté dans la végétation environnante. Sur place, plusieurs heures de temps libre permettent de descendre à pied jusqu'au bassin, se baigner, faire une balade en barque sous les embruns, et déjeuner en terrasse au-dessus des chutes.

En un coup d'œil

Distance150 km · environ 3h de routeHauteur des chutes110 m sur 3 paliersDuréeJournée complèteDépart[08h30]Retour[19h00–20h00]FauneSinges magots (macaques de Barbarie)

Le programme de la journée

Matin — Départ vers Ouzoud. Prise en charge à l'hôtel. La route traverse la plaine du Tadla, ses champs d'oliviers et de pêchers, en direction des contreforts du Moyen Atlas. Arrêt confort à mi-parcours.

Arrivée au village de Tanaghmeilt. Vous descendez à pied par des sentiers ombragés à travers les oliveraies jusqu'aux points de vue sur les chutes. La brume des cascades crée souvent un arc-en-ciel permanent en fin de matinée — gardez l'appareil photo à portée de main. En chemin, il n'est pas rare de croiser des singes magots dans les arbres.

Au pied des chutes. Baignade dans les bassins naturels (eau fraîche toute l'année), balade en barque en option sous les embruns directs des cascades, ou simple observation depuis les terrasses.

Déjeuner. Restaurants en terrasse surplombant les chutes, ambiance sonore garantie par le grondement de l'eau. Tagines berbères, grillades, salades marocaines et thé à la menthe. Comptez 80 à 120 MAD par personne.

Après-midi — Remontée et temps libre. Retour à pied vers le village (20 à 30 minutes), avec un passage possible par les petits étals d'artisanat local et de produits d'argan.

Retour vers Marrakech. Départ en fin d'après-midi pour un trajet retour de 3 heures. Arrivée en soirée à votre hôtel.

Inclus / non inclus

Inclus :

Prise en charge et retour à votre hôtel

Véhicule climatisé, chauffeur francophone/anglophone

Plusieurs heures de temps libre sur le site

Non inclus :

Guide local sur place (petit forfait optionnel)

Balade en barque (environ 20 MAD, optionnelle)

Déjeuner et boissons (80–120 MAD, sur place)

Pourboire chauffeur (optionnel)

FAQ

Combien de temps dure le trajet jusqu'à Ouzoud ? Environ 3 heures dans chaque sens, pour 150 km de route depuis Marrakech.

Peut-on nager aux cascades d'Ouzoud ? Oui, il y a des bassins naturels au pied des chutes. L'eau est fraîche toute l'année — rafraîchissante en été. Les rochers peuvent être glissants, prudence recommandée.

Y a-t-il vraiment des singes sur place ? Oui, des singes magots (macaques de Barbarie) vivent en liberté dans la végétation autour des chutes. Ils sont généralement peu farouches — gardez vos distances et ne les nourrissez pas.

La balade en barque est-elle incluse ? Non, c'est une option payante sur place (environ 20 MAD), qui permet de passer sous les embruns directs des cascades.

Que dois-je porter ? Des chaussures avec une bonne adhérence (sentiers en pente, parfois glissants), un chapeau, de la crème solaire, et un maillot de bain si vous comptez vous baigner.

PAGE 3 — Ouarzazate & Kasbah d'Aït Ben Haddou

Title : Excursion Ouarzazate & Kasbah d'Aït Ben Haddou depuis Marrakech Meta description : Journée complète vers Ouarzazate et la kasbah d'Aït Ben Haddou (UNESCO) : col du Tizi n'Tichka, studios de cinéma, villages berbères. Excursion au départ de Marrakech.

H1 : Excursion à Ouarzazate et à la Kasbah d'Aït Ben Haddou

Une kasbah fortifiée en pisé qui a servi de décor à Gladiator, Lawrence d'Arabie et Game of Thrones, un col de montagne à plus de 2 000 mètres d'altitude, et la ville qui a vu naître le cinéma marocain : cette excursion condense en une journée les paysages les plus spectaculaires de la route du Sud.

Réponse rapide

Ouarzazate se trouve à environ 200 km au sud-est de Marrakech, via le col du Tizi n'Tichka (2 260 m), le plus haut col routier du Maroc. Sur le trajet, la kasbah fortifiée d'Aït Ben Haddou est classée au patrimoine mondial de l'UNESCO depuis 1987 et a servi de décor à de nombreux films et séries internationales, dont Gladiator, Lawrence d'Arabie et Game of Thrones. À Ouarzazate, la kasbah de Taourirt (17e siècle) et les studios de cinéma de la ville complètent la visite. Comptez 10 à 12 heures pour l'aller-retour complet depuis Marrakech.

En un coup d'œil

Distance~200 km (x2) · environ 10-12h aller-retourCol traverséTizi n'Tichka, 2 260 mSite UNESCOKasbah d'Aït Ben Haddou (depuis 1987)Départ[07h00]DisponibilitéTous les jours

Le programme de la journée

Matin — La traversée de l'Atlas. Départ tôt de Marrakech pour profiter de la fraîcheur matinale sur la route de montagne. La route grimpe à travers le Haut Atlas, passant par des villages berbères en terrasses, jusqu'au col du Tizi n'Tichka à 2 260 mètres d'altitude — le plus haut col routier du Maroc, avec des panoramas sur les sommets environnants.

Aït Ben Haddou. Arrêt à la kasbah d'Aït Ben Haddou, ksar fortifié en pisé classé au patrimoine mondial de l'UNESCO. Traversée du lit de la rivière, exploration des ruelles labyrinthiques, montée jusqu'au grenier collectif pour la vue d'ensemble. Un guide local optionnel permet d'approfondir l'histoire du site et ses nombreux tournages de cinéma.

Ouarzazate. Arrivée à Ouarzazate, surnommée le « Hollywood de l'Afrique » pour ses studios de cinéma. Visite de la kasbah de Taourirt (17e siècle), ancienne résidence de la famille Glaoui, avant un déjeuner (non inclus, sur demande) et un temps libre optionnel aux studios de cinéma.

Retour. Reprise de la route vers Marrakech en fin d'après-midi, avec un nouveau passage par le Tizi n'Tichka sous une lumière différente. Arrivée à Marrakech en soirée.

Inclus / non inclus

Inclus :

Transport avec chauffeur-guide

Véhicule climatisé (4x4 ou minibus selon le nombre de participants)

Assurance transport et responsabilité civile professionnelle

Non inclus :

Déjeuner (sur demande)

Guide local à la kasbah

Frais d'entrée aux studios de cinéma et à la kasbah de Taourirt

Pourboires

FAQ

Combien de temps dure l'excursion ? Entre 10 et 12 heures aller-retour depuis Marrakech, en comptant les arrêts photo, la visite d'Aït Ben Haddou et le temps à Ouarzazate.

Le col du Tizi n'Tichka est-il impressionnant ? Oui — c'est le plus haut col routier du Maroc (2 260 m), avec de nombreux virages en épingle et des panoramas sur le Haut Atlas. La route est goudronnée et régulièrement empruntée.

Peut-on visiter les studios de cinéma d'Ouarzazate ? Oui, en option et moyennant un droit d'entrée non inclus dans le prix de base de l'excursion.

La kasbah d'Aït Ben Haddou se visite-t-elle avec un guide ? Un guide local est disponible sur place, en supplément, pour raconter l'histoire du site et ses nombreux tournages.

Que voir à Ouarzazate en dehors d'Aït Ben Haddou ? La kasbah de Taourirt (17e siècle), les studios de cinéma, et un aperçu de l'architecture en pisé typique du Sud marocain.

PAGE 4 — Essaouira

Title : Excursion à Essaouira depuis Marrakech | Journée Côtière Complète Meta description : Excursion d'une journée à Essaouira (Mogador) depuis Marrakech : remparts, médina, port aux poissons, coopérative d'argan et temps libre sur la plage.

H1 : Excursion à Essaouira depuis Marrakech

Un vent atlantique frais, des remparts portugais du 18e siècle, un port aux poissons animé et une médina classée UNESCO où le bois de cèdre s'exporte depuis des siècles : Essaouira offre un contraste total avec l'agitation de Marrakech, à seulement quelques heures de route.

Réponse rapide

Essaouira se trouve à environ 170 km à l'ouest de Marrakech, soit 2h30 à 3h de route. L'excursion type inclut un arrêt dans une coopérative féminine d'huile d'argan — avec la traditionnelle observation des chèvres perchées dans les arganiers — puis plusieurs heures de temps libre dans la médina classée au patrimoine mondial de l'UNESCO : remparts de la Skala, port aux poissons, quartier de la marqueterie de bois de thuya et de cèdre. Un déjeuner de poisson frais en bord de mer complète naturellement la journée. Retour à Marrakech en soirée.

En un coup d'œil

Distance170 km · environ 2h30-3h de routeDurée totale9 à 10 heuresDépart[08h00]Temps libre sur place~4 à 5 heuresSpécialitéPoisson grillé, artisanat du bois de cèdre

Le programme de la journée

Matin — Départ et coopérative d'argan. Prise en charge à votre hôtel. En route vers la côte, traversée de nombreuses forêts d'arganiers — l'occasion, si la saison s'y prête, d'observer des chèvres perchées dans les branches pour se nourrir des fruits. Arrêt dans une coopérative féminine où l'huile d'argan est encore extraite à la main.

Arrivée à Essaouira. Depuis la terrasse du bastion nord (la Skala), vue sur le port et l'océan. Le quartier voisin regroupe les meilleurs artisans travaillant le bois de cèdre en marqueterie. La rue Derb Laalouj mène au musée Sidi Mohammed Ben Abdallah (instruments de musique andalouse, armes, costumes traditionnels). Au nord, le quartier du Mellah (ancien quartier juif) borde un marché animé jusqu'à Bab Doukkala.

Déjeuner. Poisson frais du jour, spécialité incontournable d'Essaouira, dans un restaurant en bord de mer ou directement au port.

Après-midi — Temps libre. Balade dans les ruelles de la médina, shopping dans les souks (bijoux, articles en bois de cèdre, textiles), détente sur la plage. En option, balade en chameau sur la plage ou sortie en quad dans les environs.

Retour. Départ en fin d'après-midi pour Marrakech, arrivée en soirée.

Inclus / non inclus

Inclus :

Transport avec chauffeur-guide

Véhicule climatisé (4x4 ou minibus)

Assurance transport et responsabilité civile professionnelle

Non inclus :

Déjeuner (sur demande)

Guide local dans la médina

Pourboires

Activités optionnelles (balade en chameau, quad)

FAQ

Combien de temps de route pour Essaouira ? Entre 2h30 et 3h dans chaque sens, pour 170 km depuis Marrakech.

Combien de temps libre a-t-on sur place ? Environ 4 à 5 heures, suffisant pour explorer la médina, déjeuner et profiter de la plage ou des souks.

Que manger à Essaouira ? Le poisson fraîchement pêché est la spécialité locale — sardines grillées, calamars, poisson du jour au port ou dans les restaurants de la médina.

Peut-on faire du chameau ou du quad à Essaouira ? Oui, en option, généralement non incluse dans le tarif de base : balade en chameau sur la plage (environ 1h) ou sortie en quad sur des terrains variés (environ 2h).

Faut-il un guide pour visiter la médina ? Ce n'est pas obligatoire — la médina se visite facilement à pied — mais un guide local permet d'approfondir l'histoire du site et de mieux s'orienter dans les souks.  i will send an other 5 pages but use these ones first

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://medinalandmagicexcursions.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0147db8a-7062-4ec0-b5a5-b28a4a1c69be).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
