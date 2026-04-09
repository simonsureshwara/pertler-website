# PERTLER — Gebäudetechnik München

Website-Rebuild für Ernst Pertler GmbH (pertler.de). Meisterbetrieb für Heizung, Sanitär, Elektrotechnik, Bäder und Kältetechnik in München seit 1984.

## Stack

- **Framework:** Astro 6 (Static Site Generator)
- **Styling:** Tailwind CSS 4
- **Fonts:** Inter (alle Gewichte 300–900) — self-hosted, DSGVO-konform
- **Icons:** Lucide (tree-shakeable SVG)
- **Deployment:** Vercel

## Setup

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # → Production Build nach dist/
npm run preview  # → Preview des Production Builds
```

## Struktur

```
src/
├── pages/          21 Seiten (Homepage, 5 Leistungen, 6 Projekte, Rechner, Kontakt, etc.)
├── components/     23+ Komponenten (Navbar, Hero, ServiceGrid, TeamDepartment, etc.)
├── layouts/        BaseLayout + ServiceLayout
├── styles/         global.css (Design System + Tailwind)
public/
├── images/         WebP-Assets, selbst gehostet
│   └── team/       100+ Mitarbeiter-Fotos (400x400 WebP, ~12KB/Stk)
├── fonts/          Self-hosted Inter + Manrope (.woff2)
├── _redirects      30 301-Redirects (alte pertler.de URLs)
├── robots.txt
docs/               Strategie, Audit, Wettbewerber, Design System, Sitemap
```

## Seiten

| Route | Seite |
|---|---|
| `/` | Homepage |
| `/leistungen/` | Leistungsübersicht |
| `/leistungen/heizung-sanitaer/` | Heizung & Sanitär |
| `/leistungen/kundendienst/` | Kundendienst & Wartung |
| `/leistungen/elektrotechnik/` | Elektrotechnik & Smart Home |
| `/leistungen/baeder-wellness/` | Bäder & Wellness |
| `/leistungen/notdienst/` | 24h Notdienst |
| `/rechner/heizungsrechner/` | Heizungsrechner (Multi-Step Quiz) |
| `/rechner/badrechner/` | Badrechner (Multi-Step Quiz) |
| `/buchung/` | Online-Terminbuchung |
| `/projekte/` | Projekt-Galerie |
| `/ueber-uns/` | Über uns + Team (100+ Fotos, Department Mosaic) |
| `/auszeichnungen/` | Awards & Presse |
| `/karriere/` | Stellenangebote & Ausbildung |
| `/kontakt/` | Kontakt (Formular + Map) |
| `/impressum/` | Impressum |
| `/datenschutz/` | Datenschutzerklärung |
| `/widerrufsrecht/` | Widerrufsbelehrung (4 GmbHs, tabbed) |

## Design System

- **Primary:** #4d0510 (Pertler Maroon)
- **Secondary/CTA:** #944a00 / #fe8e30 (Orange)
- **Division-Farben:** Heizung #8b1a1a, Elektro #00834b, Bäder #e87d1e, Kälte #2e3b8c
- **Surface:** #f9f9f7 (warm off-white)
- Vollständiges Design System in `docs/DESIGN.md` und `src/styles/global.css`

## DSGVO & Recht

- Self-hosted Fonts (kein Google Fonts CDN)
- Cookie Banner mit Opt-in
- Impressum, Datenschutz, Widerrufsrecht für alle 4 Gesellschaften
- Kein externes Tracking ohne Einwilligung
