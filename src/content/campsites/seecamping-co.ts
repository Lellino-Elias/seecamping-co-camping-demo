import type { CampsiteConfig } from "../types";

/**
 * Seecamping Kleblach-Lind — Lengholz 15, 9753 Kleblach-Lind, Oberkärntner Drautal.
 * Alle Texte/Fakten belegt aus seecamping.co.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Seecamping-Fotos in /public/campsites/seecamping-co/
 *   (jedes verwendete Bild vor der Verwendung per Vision-Tool geprüft).
 *
 * EHRLICH:
 * - Der Platz liegt GENUIN „direkt am Badesee" (eigener Badesee/Naturteich bei der
 *   Freizeit- & Erholungsanlage Kleblach, freier Badezugang für Gäste, Stege/Liegewiese,
 *   Luftbilder zeigen die Stellplätze unmittelbar am Wasser) → „am See"-Rahmung ist belegt.
 *   Der See trägt keinen eigenen Eigennamen auf der Quelle → see = „Badesee Kleblach-Lind".
 * - PREISE sind REAL (Preis-/Buchen-Seite): pricesArePlaceholder = false. Buchungswidget-
 *   Kategorien = ehrliche „ab"-Richtpreise Nebensaison für 2 Personen; Zuschläge/Saison/
 *   Ortstaxe offen im priceNote ausgewiesen.
 * - logo bewusst WEGGELASSEN: das einzige Logo ist eine weiße Wortmarke (unsichtbar auf der
 *   weißen Footer-Logo-Fläche) → Template zeigt stattdessen die Wortmarke „SEECAMPING".
 * - mobilheime: es gibt GENAU EINEN Wood-Cube-Typ (5 identische Einheiten) → bewusst nur
 *   EINE Unterkunfts-Karte; keine erfundene Varianten (siehe REPORT.md).
 * - kinder-Sektion ausgelassen: kinderfreundliche Extras (2 Sandkisten, Beachvolleyball,
 *   Tischtennis) sind belegt, es gibt aber KEINE passenden Kinder-/Spielplatz-Fotos →
 *   keine Bild-Text-Erfindung; stattdessen im Fließtext erwähnt.
 * - awards: ein klar benanntes, auf der Seite prominent gezeigtes Abzeichen
 *   „Camping2Be Award 2024 – Seecamping Kleblach-Lind" → als einziges Award geführt.
 * - coords: explizite Koordinaten aus dem Google-Maps-Link der Quelle übernommen.
 */
const IMG = "/campsites/seecamping-co";

export const seecampingCo: CampsiteConfig = {
  name: "Seecamping Kleblach-Lind",
  shortName: "Seecamping",
  slug: "seecamping-co",
  ort: "Kleblach-Lind",
  region: "Kärnten",
  brandKind: "Camping & Mobile Homes",
  see: "Badesee Kleblach-Lind",
  regionLong: "Oberkärntner Drautal · Kärnten · Österreich",

  claim: "Camping direkt am Badesee in Oberkärnten",
  claimEmphasis: "direkt am Badesee",
  intro:
    "Großzügige Stellplätze und komfortable Wood Cubes inmitten der Natur — direkt am Badesee im Oberkärntner Drautal, mit freiem Badezugang, Bistro und herrlichem Bergblick.",

  statement: {
    text: "Bei uns ist Camping noch Erholung pur — direkt am glasklaren Badesee, mitten in der Bergwelt Oberkärntens.",
    emphasis: "Erholung pur",
  },

  pillars: [
    {
      title: "Direkt am Badesee",
      text: "Glasklares Wasser, Stege und ein geschützter Badesee mitten in der Natur — der Badezugang ist für unsere Campinggäste frei.",
      image: { src: `${IMG}/badesee-steg.webp`, alt: "Holzsteg am glasklaren Badesee beim Seecamping Kleblach-Lind mit Blick auf die Berge" },
    },
    {
      title: "Wood Cubes — Camping Deluxe",
      text: "Unsere fünf Wood Cubes verbinden die Freiheit des Campings mit dem Komfort eines voll ausgestatteten Mobile Homes.",
      image: { src: `${IMG}/woodcubes-aussen.webp`, alt: "Reihe der Wood-Cube-Mobile-Homes aus Holz am Seecamping Kleblach-Lind vor den Bergen" },
    },
    {
      title: "Bergwelt Oberkärntens",
      text: "Rund 10 km von Spittal an der Drau — Wandern, Radfahren, Paragleiten und Wassersport starten direkt vor der Tür.",
      image: { src: `${IMG}/camping-bergblick.webp`, alt: "Wohnwagen auf der Wiese mit Blick auf die Berge Oberkärntens beim Seecamping Kleblach-Lind" },
    },
  ],

  usps: [
    "Direkt am Badesee",
    "Freier Badeseezugang",
    "5 Wood Cubes — Camping Deluxe",
    "Gratis WLAN am ganzen Platz",
    "Moderne Sanitäranlagen",
    "Hunde willkommen (Leinenpflicht)",
  ],

  trust: {
    heading: "Worauf du dich beim Seecamping verlassen kannst",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Sabine Glanznig, direkt am Badesee in Kleblach-Lind: 45 gepflegte Stellplätze, fünf komfortable Wood Cubes, moderne Sanitäranlagen und freier Zugang zum Badesee — Hunde sind am Campingplatz herzlich willkommen.",
  },

  awards: [
    {
      label: "Camping2Be Award 2024",
      image: { src: `${IMG}/camping2be-award-2024.png`, alt: "Camping2Be Award 2024 für Seecamping Kleblach-Lind" },
    },
  ],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: Seecamping Kleblach-Lind mit Stellplätzen und Wood Cubes direkt am Badesee" },
  },

  camping: {
    heading: "Camping direkt am Badesee",
    intro:
      "Das Seecamping Kleblach-Lind bietet 45 gepflegte Rasenstellplätze von guten 70 m², jeweils mit Strom- und Wasseranschluss, dazu 8 Zeltplätze und gratis WLAN am gesamten Platz — neue, moderne Sanitäranlagen liegen in unmittelbarer Nähe.",
    features: [
      {
        title: "Camping direkt am See",
        text: "Morgens aufwachen mit Seeblick: gepflegte Stellplätze liegen nur wenige Schritte vom glasklaren Badesee entfernt.",
        image: { src: `${IMG}/camping-wohnwagen-see.webp`, alt: "Wohnwagen mit Pavillon auf dem Stellplatz direkt am Badesee beim Seecamping Kleblach-Lind" },
      },
      {
        title: "Gepflegte Rasenstellplätze",
        text: "45 Rasenstellplätze mit rund 70 m² und Strom- sowie Wasseranschluss — eben und gepflegt vor der Bergkulisse Oberkärntens.",
        image: { src: `${IMG}/stellplaetze.webp`, alt: "Großzügige Rasenstellplätze mit Wohnmobilen am Seecamping Kleblach-Lind vor den Bergen" },
      },
      {
        title: "Freier Badeseezugang",
        text: "Der Badezugang ist für Gäste frei — ein geschützter Badesee mit Badebetrieb von Mai bis September.",
        image: { src: `${IMG}/badesee-baden.webp`, alt: "Badegast springt in den Badesee beim Seecamping Kleblach-Lind, im Hintergrund das Bistro" },
      },
      {
        title: "Mitten in Oberkärntens Natur",
        text: "Eingebettet in die Bergwelt Oberkärntens, am östlichen Ende des oberen Drautals — Idylle pur, umgeben von Wald, Wiesen und Wasser.",
        image: { src: `${IMG}/luftbild-natur.webp`, alt: "Luftaufnahme des Badesees und der Landschaft rund um Kleblach-Lind im Drautal" },
      },
      {
        title: "Ruhe pur am Wasser",
        text: "Glasklares Wasser, Wasservögel am Morgen und echte Ruhe — einfach durchatmen und am See ankommen.",
        image: { src: `${IMG}/liegestuhl-see.webp`, alt: "Liegestuhl auf einem Holzsteg mit Blick über den ruhigen Badesee bei Kleblach-Lind" },
      },
    ],
  },

  mobilheime: {
    heading: "Wood Cubes — Camping Deluxe",
    intro:
      "Wer Camping Deluxe erleben will, wohnt in einem unserer fünf Wood Cubes: voll ausgestattete Mobile Homes für bis zu vier Personen, mitten in der Natur und nur wenige Schritte vom Badesee.",
    items: [
      {
        name: "Wood Cube",
        kind: "Mobile Home · bis 4 Personen",
        text: "33,5 m² + 21 m² Terrasse, 2 Schlafzimmer (max. 4 Pers.), Küche, Bad, SAT-TV und Klimaanlage. Bettwäsche bitte selbst mitbringen.",
        image: { src: `${IMG}/woodcubes-row.webp`, alt: "Reihe der Wood-Cube-Mobile-Homes aus Holz mit Terrassen vor der Bergkulisse am Seecamping Kleblach-Lind" },
        priceFrom: 139,
        features: ["33,5 m² + 21 m² Terrasse", "2 Schlafzimmer · max. 4 Pers.", "Küche, Bad, SAT-TV & Klimaanlage"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Genuss & Baden am See",
    intro:
      "Frühstück mit Seeblick, ein Bistro direkt am Wasser und der Sprung in den Badesee — beim Seecamping spielt sich der Urlaub am Ufer ab.",
    items: [
      {
        title: "Frühstück am See",
        text: "Mit Brötchenservice starten: bis 19 Uhr am Vorabend bestellen und morgens frisches Gebäck zum Frühstück genießen.",
        image: { src: `${IMG}/fruehstueck.webp`, alt: "Reichhaltiges Frühstück mit Gebäck, Kaffee und Saft am Seecamping Kleblach-Lind" },
      },
      {
        title: "Seecamping Bistro",
        text: "Das Bistro direkt am See verwöhnt mit Snacks wie Pizza und Toast, heißen und kalten Getränken sowie Eis für zwischendurch.",
        image: { src: `${IMG}/bistro-terrasse.webp`, alt: "Bistro-Terrasse am Badesee beim Seecamping Kleblach-Lind mit Tischen und Bergblick" },
      },
      {
        title: "Baden im Badesee",
        text: "Stege und Liegewiese laden von Mai bis September ein — glasklares Wasser in bester Naturteich-Qualität.",
        image: { src: `${IMG}/steg-see.webp`, alt: "Holzsteg am Badesee, umrahmt von Bäumen und Bergen beim Seecamping Kleblach-Lind" },
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Lengholz 15, 9753 Kleblach-Lind — im oberen Drautal, rund 10 km von der Bezirkshauptstadt Spittal an der Drau entfernt." },
      { title: "Im oberen Drautal", text: "Der idyllische Ort Kleblach-Lind liegt am östlichen Ende des oberen Drautals, eingebettet in die Bergwelt Oberkärntens." },
      { title: "Check-in & Anfrage", text: "Der Zutritt zum Campingplatz erfolgt nach Anmeldung an der Rezeption — freie Kapazitäten lassen sich vorab online prüfen oder unverbindlich anfragen." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Seecamping",
    headingEmphasis: "Seecamping",
    intro:
      "Vom Sonnenuntergang über dem Wasser bis zu den gemütlichen Wood Cubes — ein paar Eindrücke vom Seecamping Kleblach-Lind am Badesee.",
    tag: "April bis Oktober",
    images: [
      { src: `${IMG}/badesee-sonnenuntergang.webp`, alt: "Sonnenuntergang über dem Badesee beim Seecamping Kleblach-Lind" },
      { src: `${IMG}/luftbild-anlage.webp`, alt: "Luftaufnahme der gesamten Anlage mit Badesee, Stellplätzen und Wood Cubes" },
      { src: `${IMG}/woodcube-kueche.webp`, alt: "Voll ausgestattete Küche im Wood Cube am Seecamping Kleblach-Lind" },
      { src: `${IMG}/woodcube-terrasse.webp`, alt: "Überdachte Holzterrasse eines Wood Cube mit Blick auf den Badesee" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — das Team vom Seecamping Kleblach-Lind meldet sich mit deiner persönlichen Verfügbarkeit am Badesee.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Nebensaison für 2 Personen · zzgl. Strompauschale € 3/Nacht (Stell-/Zeltplatz) und Ortstaxe € 2,20 pro Person/Nacht · Hauptsaison (Juli–August) höher · Wood Cube zzgl. Endreinigung € 50 · Kinder bis 3 Jahre frei",
    highlight: {
      title: "Badezugang inklusive",
      text: "Freier Zugang zum Badesee, gratis WLAN und moderne Sanitäranlagen sind beim Camping inklusive. Kinder bis 3 Jahre übernachten kostenlos.",
    },
    categories: [
      // Reale Preisliste Seecamping Kleblach-Lind 2026 (Preise-&-Buchen-Seite), Nebensaison:
      // Stellplatz 20 € (1 Pers.) + 12 € weitere Pers. → 2 Pers. = 32 €; Zeltplatz 14 € + 10 € → 24 €;
      // Wood Cube 139 €/Nacht (Pauschale bis 4 Pers.). Hauptsaison höher (im priceNote ausgewiesen).
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 12 },
      { id: "zeltplatz", label: "Zeltplatz", perNight: 24, perExtraGuest: 10 },
      { id: "woodcube", label: "Wood Cube", perNight: 139, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    tel: "+43 4768 23320",
    telHref: "tel:+43476823320",
    mail: "info@seecamping.co.at",
    adresse: "Lengholz 15 · 9753 Kleblach-Lind · Kärnten",
    coords: { lat: 46.761824, lng: 13.320224 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Baden am See", href: "#camping" },
        { label: "Natur & Lage", href: "#camping" },
      ],
    },
    {
      label: "Wood Cubes",
      href: "#mobilheime",
      children: [
        { label: "Mobile Homes", href: "#mobilheime" },
        { label: "Ausstattung", href: "#mobilheime" },
        { label: "Camping Deluxe", href: "#mobilheime" },
      ],
    },
    {
      label: "Genuss & See",
      href: "#aktivitaeten",
      children: [
        { label: "Frühstück am See", href: "#aktivitaeten" },
        { label: "Seecamping Bistro", href: "#aktivitaeten" },
        { label: "Baden", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
      children: [
        { label: "Am Badesee", href: "#galerie" },
        { label: "Wood Cubes", href: "#galerie" },
        { label: "Anlage", href: "#galerie" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default seecampingCo;
