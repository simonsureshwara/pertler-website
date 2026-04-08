# PERTLER Website — Interne Dokumentation

> Diese Doku ist für uns (Entwickler/Maintainer). Wenn wir in 6 Monaten zurückkommen,
> soll alles sofort klar sein: wie die Seite funktioniert, wo was liegt, wie man Änderungen macht.

---

## 1. Tech Stack

| Was | Technologie | Version |
|-----|------------|---------|
| Framework | Astro | 6.x (Static Site Generator) |
| Styling | Tailwind CSS | 4.x (@tailwindcss/vite Plugin) |
| Fonts | Manrope (Headlines) + Inter (Body) | Self-hosted via @fontsource |
| Icons | lucide-astro | Tree-shakeable SVG Icons |
| Image Processing | sharp | 0.34.x (für Build-Time, Team-Foto-Download-Script) |
| Sitemap | @astrojs/sitemap | Auto-generiert bei Build |
| Deployment | Vercel | Free Tier, Static Output |
| Node | 22.x | Minimum required |

**Kein React, kein Vue, kein Client-JS-Framework.** Die Seite ist 100% static HTML/CSS mit minimalem Vanilla JS für:
- Mobile Menu Toggle
- Team-Foto Expand/Collapse (deferred loading)
- Quiz-Formulare (Step-Navigation)
- Cookie Banner

---

## 2. Projektstruktur

```
pertler-website/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro         # Haupt-Layout (Head, Meta, JSON-LD, Cookie Banner)
│   │   └── ServiceLayout.astro      # Layout für Leistungsseiten (Breadcrumb, FAQ-Schema)
│   ├── components/
│   │   ├── Navbar.astro             # Navigation (Desktop Mega-Menu + Mobile Accordion)
│   │   ├── Footer.astro             # Footer (4 Gesellschaften, Rechtliches, Social)
│   │   ├── EmergencyBanner.astro    # Roter Notdienst-Banner oben
│   │   ├── CookieBanner.astro       # Cookie Consent (DSGVO)
│   │   ├── Hero.astro               # Homepage Hero
│   │   ├── ServiceHero.astro        # Hero für Leistungsseiten
│   │   ├── ServiceGrid.astro        # Bento Grid (Homepage Services)
│   │   ├── TrustBar.astro           # Awards-Leiste
│   │   ├── TrustStats.astro         # Statistik-Grid (40+ Jahre, etc.)
│   │   ├── About.astro              # Über-uns Teaser (Homepage)
│   │   ├── Projects.astro           # 3 Projekt-Karten (Homepage)
│   │   ├── Testimonials.astro       # Review-Slider (6 Reviews, Google Badge, Swipe, Filter-Prop)
│   │   ├── RechnerTeaser.astro      # Heizungsrechner + Badrechner Cards
│   │   ├── CTASection.astro         # Maroon-Gradient CTA Banner
│   │   ├── ContactCTA.astro         # Kontakt-CTA (auf Unterseiten)
│   │   ├── TeamDepartment.astro     # Expand/Collapse Foto-Grid pro Abteilung
│   │   ├── Timeline.astro           # Firmenhistorie Timeline
│   │   ├── AwardCards.astro         # Auszeichnungen Detail-Cards
│   │   ├── FeatureGrid.astro        # Service-Feature-Grid (auf Leistungsseiten)
│   │   ├── FAQSection.astro         # FAQ Accordion (mit JSON-LD Schema)
│   │   ├── ProcessSteps.astro       # Prozess-Schritte Darstellung
│   │   ├── RelatedServices.astro    # "Weitere Leistungen" Cross-Links
│   │   └── Breadcrumb.astro         # Breadcrumb-Navigation
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   ├── kontakt.astro            # Kontaktformular + Map
│   │   ├── ueber-uns.astro          # Über uns + Team (100+ Fotos)
│   │   ├── karriere.astro           # Jobs & Ausbildung
│   │   ├── projekte.astro           # Projekt-Hub (6 Projekte)
│   │   ├── projekte/[slug].astro    # Projekt-Einzelseiten (Dynamic Route)
│   │   ├── buchung.astro            # Buchungsstrecke (5-Step Quiz)
│   │   ├── auszeichnungen.astro     # Awards & Presse
│   │   ├── firmenhistorie.astro     # Firmenhistorie
│   │   ├── impressum.astro          # Legal: Impressum
│   │   ├── datenschutz.astro        # Legal: Datenschutz
│   │   ├── widerrufsrecht.astro     # Legal: Widerrufsrecht (tabbed, 4 GmbHs)
│   │   ├── 404.astro                # 404 Error Page
│   │   ├── leistungen/
│   │   │   ├── index.astro          # Leistungsübersicht
│   │   │   ├── heizung-sanitaer.astro
│   │   │   ├── kundendienst.astro
│   │   │   ├── elektrotechnik.astro
│   │   │   ├── baeder-wellness.astro
│   │   │   └── notdienst.astro
│   │   └── rechner/
│   │       ├── heizungsrechner.astro  # 9-Step Quiz
│   │       └── badrechner.astro       # 10-Step Quiz
│   └── styles/
│       └── global.css               # Design System (Tailwind @theme + Custom Utilities)
├── public/
│   ├── images/
│   │   ├── team/                    # 100+ Mitarbeiter-Fotos (400x400 WebP, ~12KB/Stk)
│   │   │   ├── heizung/             # 39 Fotos
│   │   │   ├── kundendienst/        # 23 Fotos
│   │   │   ├── azubis/              # 19 Fotos
│   │   │   ├── baeder/              # 16 Fotos
│   │   │   ├── bauleitung/          # 6 Fotos
│   │   │   ├── elektro/             # 6 Fotos
│   │   │   ├── kaelte/              # 1 Foto
│   │   │   ├── leitung/             # 12 Fotos (GF, Verwaltung, Gründer)
│   │   │   └── misc/                # 4 Fotos (Gruppenbild, Logos, Urkunde)
│   │   ├── homepage-hero.webp       # Hero-Bild Homepage
│   │   ├── heizung-hero.webp        # Hero-Bild Leistungsseiten
│   │   ├── elektro-hero.webp
│   │   ├── baeder-hero.webp
│   │   ├── kundendienst-hero.webp
│   │   ├── about-techniker.webp     # Über-uns Bild
│   │   ├── service-heizung.webp     # Bento-Grid Bilder
│   │   ├── service-baeder.webp
│   │   ├── project-*.webp           # 9 Projekt-Bilder
│   │   └── og-image.jpg             # Social Sharing Bild (1200x630)
│   ├── fonts/
│   │   └── inter-latin-wght-normal.woff2
│   ├── favicon.svg                  # "P" + Maroon Bar
│   ├── favicon.ico
│   ├── robots.txt
│   └── _redirects                   # 30 301-Redirects (alte pertler.de URLs)
├── docs/
│   ├── 01-audit-and-strategy.md     # Ursprünglicher Audit der alten Seite
│   ├── 02-brand-identity.md         # Farben, Fonts, Logo-Analyse
│   ├── 03-competitor-analysis.md    # 5 Münchner Wettbewerber
│   ├── 04-design-patterns.md        # UI/UX Patterns
│   ├── 05-sitemap-and-navigation.md # URL-Map, Redirects, Quiz-Specs
│   ├── 06-post-launch-todo.md       # Checkliste nach Kundenübernahme
│   └── 07-internal-documentation.md # Diese Datei
├── scripts/
│   └── download-team-photos.mjs     # Script zum Download + WebP-Konvertierung
├── astro.config.mjs                 # Astro Config (Tailwind Plugin, Sitemap, Site URL)
├── vercel.json                      # Security Headers + Cache-Control
├── package.json
├── tsconfig.json
└── CLAUDE.md                        # AI-Instruktionen (Design System Regeln)
```

---

## 3. Design System

### Farben
Alle Farben sind in `src/styles/global.css` unter `@theme` definiert. Niemals Hex-Werte hardcoden.

| Rolle | CSS Variable | Hex | Verwendung |
|-------|-------------|-----|------------|
| Primary | `--color-primary` | #4d0510 | Dunkel-Maroon, Text, Links |
| Primary Container | `--color-primary-container` | #6b1c23 | Hero-Gradient, Footer, CTA |
| Secondary | `--color-secondary` | #944a00 | CTA Buttons (dunkel-orange) |
| Secondary Container | `--color-secondary-container` | #fe8e30 | CTA Hover, Badges |
| Surface | `--color-surface` | #f9f9f7 | Seitenhintergrund |
| Surface Container Low | `--color-surface-container-low` | #f4f4f2 | Section-Alternierung |
| Surface Container Lowest | `--color-surface-container-lowest` | #ffffff | Karten |
| On Surface | `--color-on-surface` | #1a1c1b | Textfarbe |
| Error | `--color-error` | #ba1a1a | Notdienst-Banner |

### Division-Farben (für Leistungskarten)
| Division | Variable | Hex |
|----------|---------|-----|
| Heizung | `--color-heizung` | #8b1a1a |
| Sanitär/Kundendienst | `--color-sanitaer` | #2e3b8c |
| Elektro | `--color-elektro` | #00834b |
| Bäder | `--color-baeder` | #e87d1e |
| Kälte | `--color-kaelte` | #2e3b8c |

### Custom CSS Utilities
```css
@utility glass-nav     → Backdrop Blur für Navigation
@utility editorial-shadow → 0px 24px 48px rgba(26,28,27,0.06)
@utility ghost-border  → 1px solid rgba(219,192,192,0.15)
@utility cta-gradient  → linear-gradient(135deg, #944a00, #fe8e30)
@utility maroon-gradient → linear-gradient(135deg, #6b1c23, #4a1218)
```

### Typografie
- **Manrope 700/800** → Alle Headings (h1-h4), font-headline
- **Inter 300-600** → Body, Labels, Buttons, font-body
- Keine andere Font verwenden!

---

## 4. Wie man Inhalte ändert

### Texte ändern
Alle Texte sind direkt in den `.astro`-Dateien. Einfach die Datei öffnen, Text ändern, committen.

### Team-Fotos hinzufügen/entfernen
1. Neues Foto als WebP (400x400) in `public/images/team/{abteilung}/` legen
2. Dateiname: `{abteilung}-{nummer}.webp` (z.B. `heizung-40.webp`)
3. In `src/pages/ueber-uns.astro` die Foto-Anzahl im `departments` Array aktualisieren:
   ```
   photos: getPhotos("heizung", 40)  // war 39, jetzt 40
   ```
4. Build + Deploy

### Neues Projekt hinzufügen
1. In `src/pages/projekte.astro` — neues Objekt zum `projects` Array hinzufügen
2. In `src/pages/projekte/[slug].astro` — neues Objekt zum `projects` Record + slug in `getStaticPaths` hinzufügen
3. Bild als WebP in `public/images/` legen
4. Build + Deploy

### Neue Leistungsseite
1. Neue Datei `src/pages/leistungen/{name}.astro` erstellen
2. `ServiceLayout` importieren (wie die anderen Leistungsseiten)
3. FAQ-Daten, Features, Statistiken definieren
4. In Navbar + Footer verlinken
5. Redirect in `public/_redirects` falls alte URL existiert

### Impressum/Datenschutz ändern
Direkt in `src/pages/impressum.astro` bzw. `src/pages/datenschutz.astro`. Reiner Text/HTML.

---

## 5. Formulare & Quizzes

### Kontaktformular (`/kontakt/`)
- Felder: Name, E-Mail, Telefon, Nachricht, Datenschutz-Checkbox
- Aktuell: Nur Frontend, kein Backend!
- TODO: Server Action oder API Route für E-Mail-Versand

### Heizungsrechner (`/rechner/heizungsrechner/`)
- 9-Step Quiz: Gebäudetyp → Baujahr → Fläche → aktuelle Heizung → gewünschte Heizung → Standort → Fotos → Kontakt → Absenden
- Vanilla JS, kein Framework
- State in lokalen Variablen (kein localStorage)
- `showStep()` Funktion steuert Navigation + scrollIntoView

### Badrechner (`/rechner/badrechner/`)
- 10-Step Quiz: Projektart → Größe → aktuelle Ausstattung → gewünschte Ausstattung → Stil → Budget → Zeitrahmen → Fotos → Kontakt → Absenden
- Gleiche Architektur wie Heizungsrechner

### Buchungsstrecke (`/buchung/`)
- 5-Step Flow: Was brauchen Sie → Welcher Bereich → Beschreibung → Wunschtermin → Kontakt
- "Notfall" Selection zeigt sofort Telefonnummer

### Alle Formulare
- Datenschutz-Checkbox ist required
- Aktuell KEIN Backend — Form Submit geht ins Leere
- Post-Launch: Astro Server Actions oder API Route + E-Mail-Service einrichten

---

## 6. Testimonials / Reviews Slider

### Komponente
`src/components/Testimonials.astro` — wiederverwendbarer Review-Slider mit Google Badge.

### Features
- **6 Reviews** mit Kategorien: heizung, kundendienst, baeder, elektro
- **Google Badge** oben rechts: echtes Google "G" SVG + 5 gelbe Sterne
- **Google Icon** auf jeder Karte (authentischer Look)
- **Slider**: 1 Karte Mobile, 2 Tablet, 3 Desktop
- **Touch Swipe** auf Mobile
- **Dot Navigation** + Pfeil-Buttons (Desktop)
- **Filter-Prop**: zeigt nur Reviews einer Kategorie

### Verwendung
```astro
<!-- Homepage: alle Reviews -->
<Testimonials />

<!-- Leistungsseite: nur passende Reviews -->
<Testimonials filter="heizung" />
<Testimonials filter="baeder" />
<Testimonials filter="elektro" />
<Testimonials filter="kundendienst" />
```

### Reviews ändern/hinzufügen
Im `reviews` Array in `Testimonials.astro`:
- `name`: Kundenname
- `location`: Stadtteil
- `text`: Review-Text
- `rating`: 1-5 (immer 5 für uns)
- `service`: Leistungs-Label
- `category`: Filter-Schlüssel (heizung/baeder/elektro/kundendienst)
- `timeAgo`: "vor X Monaten" (manuell, wird nicht berechnet)

### Technik
- `<script is:inline>` — nicht von Astro gebundlet (wegen CSS-Hashing-Problem)
- Slide-Breiten werden per JS gesetzt (`100 / perView + '%'`)
- Dots als inline-styled `<button>` Elements (kein Tailwind-Klassen-Toggle)
- Touch: `touchstart`/`touchend` mit 50px Swipe-Threshold

---

## 7. Team-Fotos System

### Woher kommen die Fotos?
Alle von pertler.de heruntergeladen und als 400x400 WebP konvertiert.

### Download-Script
`scripts/download-team-photos.mjs` — kann erneut ausgeführt werden wenn neue Fotos auf pertler.de erscheinen.

### Deferred Loading (Performance)
- Pro Abteilung zeigen wir initial 8 Fotos (`loading="lazy"`)
- Rest hat `data-src` statt `src` — wird erst bei Klick auf "+X weitere" geladen
- JS in `src/pages/ueber-uns.astro` setzt `src = data-src` beim Expand
- Initialer Page Load: ~350KB statt ~1.2MB

### Foto-Zuordnung
| Verzeichnis | Abteilung | Anzahl |
|-------------|-----------|--------|
| team/heizung/ | Heizung & Sanitär | 39 |
| team/kundendienst/ | Kundendienst & Wartung | 23 |
| team/azubis/ | Auszubildende | 19 |
| team/baeder/ | Bäder & Wellness | 16 |
| team/leitung/ | Geschäftsführung + Verwaltung | 12 |
| team/bauleitung/ | Bau- & Projektleitung | 6 |
| team/elektro/ | Elektrotechnik | 6 |
| team/kaelte/ | Klima- & Kältetechnik | 1 |
| team/misc/ | Gruppenbild, Logos | 4 |

---

## 8. Redirects

30 301-Redirects in `public/_redirects`. Format: `/alte-url /neue-url 301`

Wichtigste:
- `/heizung-sanitaer/` → `/leistungen/heizung-sanitaer/`
- `/elektro/` → `/leistungen/elektrotechnik/`
- `/wir-ueber-uns/` → `/ueber-uns/`
- `/buchungsstrecke/` → `/buchung/`
- 8× Widerrufsrecht → `/widerrufsrecht/`
- 6× Awards/Presse → `/auszeichnungen/`

---

## 9. SEO & Schema

### JSON-LD auf jeder Seite
- **LocalBusiness** — in BaseLayout.astro (Name, Adresse, Telefon, Öffnungszeiten)
- **Service** — auf jeder Leistungsseite (via ServiceLayout)
- **FAQPage** — auf Leistungsseiten mit FAQ-Section
- **BreadcrumbList** — via Breadcrumb-Komponente

### Meta Tags
- Unique Title + Description pro Seite
- Open Graph (og:title, og:description, og:image, og:locale)
- Twitter Cards (summary_large_image)
- Canonical URL
- hreflang de-DE + x-default

### Sitemap
- Auto-generiert bei Build via @astrojs/sitemap
- URL: /sitemap-index.xml
- Referenziert in robots.txt

---

## 10. Deployment

### Vercel (Free Tier)
```bash
# Erstmaliges Setup
npm i -g vercel
vercel login
vercel link            # Projekt verknüpfen
vercel --prod          # Production Deploy

# Danach: jeder Push auf main deployt automatisch
```

### Build-Befehl
```bash
npm run build          # → dist/ (Static HTML)
npm run preview        # → lokaler Preview des Builds
```

### Umgebungsvariablen (falls später nötig)
- Keine aktuell
- Post-Launch: E-Mail-API-Keys, Analytics-IDs

---

## 11. Bekannte Limitierungen

1. **Kein CMS** — Inhalte sind in .astro-Dateien hardcoded. Änderungen erfordern Code-Änderung + Deploy. Für den Kunden reicht das (wir hosten & pflegen), aber falls er selbst editieren will → Headless CMS (Sanity, Storyblok) nachrüsten.

2. **Formulare ohne Backend** — Submit-Buttons zeigen Erfolgs-Screen, aber es wird keine E-Mail versendet. Muss post-launch eingerichtet werden (Astro Server Actions + E-Mail-Service).

3. **Projekt-Bilder sind Platzhalter** — Lokale WebP-Dateien, aber generische Architektur-/Bad-Fotos. Echte Projekt-Fotos müssen vom Kunden kommen.

4. **Team-Fotos ohne Namen** — Wir haben 100+ Porträts aber keine Name-Zuordnung. Wenn der Kunde Namen liefert, können wir die unter die Fotos setzen.

5. **Cookie Banner Basic** — Consent-Logik ist da, aber noch nicht mit echtem Tracking verbunden. Erst relevant wenn GA4/Pixel eingerichtet werden.

---

## 12. Kontakt & Eckdaten des Kunden

| Info | Wert |
|------|------|
| Firma | Ernst Pertler GmbH |
| GF | Stefan Pertler |
| Adresse | Wilhelmine-Reichard-Str. 24, 80935 München |
| Telefon | 089 / 35 89 49 78 |
| E-Mail | info@pertler.de |
| Web (alt) | www.pertler.de (WordPress) |
| Facebook | facebook.com/Pertler.GmbH/ |
| Instagram | instagram.com/pertler_gebaeudetechnik/ |
| LinkedIn | linkedin.com/company/ernst-pertler/ |
| Gesellschaften | Ernst Pertler GmbH, Ernst Pertler Service GmbH, Pertler Bad GmbH, Pertler Elektrotechnik GmbH |
| Gründung | 1984 |
| Mitarbeiter | ~100 |
