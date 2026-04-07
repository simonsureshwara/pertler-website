# Pertler Website — Sitemap, Navigation & Link Map

## Navigation Structure

### Main Header Navigation

```
[LOGO]                                    [📞 089 / 35 89 49 78]  [Termin buchen]

─────────────────────────────────────────────────────────────────────────────────
🔴 Notfall? Sofort anrufen: 089 / 35 89 49 78-10  |  24h Notdienst
─────────────────────────────────────────────────────────────────────────────────

Leistungen ▾         Rechner ▾         Über uns ▾        Karriere    Kontakt
├─ Heizung & Sanitär  ├─ Heizungsrechner  ├─ Unser Team
├─ Kundendienst        └─ Badrechner       ├─ Firmenhistorie
├─ Elektrotechnik                          └─ Auszeichnungen
├─ Bäder & Wellness
└─ Notdienst
```

### Mobile Navigation

```
[LOGO]          [📞]  [☰ Menu]

Hamburger opens:
├─ Leistungen (expandable)
│   ├─ Heizung & Sanitär
│   ├─ Kundendienst
│   ├─ Elektrotechnik
│   ├─ Bäder & Wellness
│   └─ Notdienst
├─ Rechner (expandable)
│   ├─ Heizungsrechner
│   └─ Badrechner
├─ Über uns (expandable)
│   ├─ Unser Team
│   ├─ Firmenhistorie
│   └─ Auszeichnungen
├─ Karriere
├─ Kontakt
└─ [🔴 Notfall anrufen] (sticky red button)

Sticky bottom bar (mobile):
[📞 Anrufen]  [📅 Termin]  [💬 WhatsApp]
```

### Footer Navigation

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  PERTLER                   Leistungen          Rechner & Service     │
│  ───────                   ──────────          ──────────────────     │
│  Heizung / Sanitär / Kälte Heizung & Sanitär   Heizungsrechner      │
│                            Kundendienst         Badrechner           │
│  📍 Wilhelmine-Reichard-   Elektrotechnik       Online Buchung       │
│     Str. 24                Bäder & Wellness                          │
│     80935 München          Notdienst            Unternehmen          │
│                                                 ─────────────        │
│  📞 089 / 35 89 49 78      Karriere             Über uns             │
│  ✉️  info@pertler.de       ────────             Firmenhistorie       │
│                            Stellenangebote      Auszeichnungen       │
│  [Facebook] [Instagram]    Ausbildung           Presse               │
│  [LinkedIn]                                                          │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  © 2026 Ernst Pertler GmbH  |  Impressum  |  Datenschutz  |         │
│  Widerrufsrecht  |  Cookie-Einstellungen                             │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Complete Link Map

### URL Structure (New Site)

```
/                                         Homepage
│
├── /leistungen/
│   ├── /leistungen/heizung-sanitaer/     Heizung & Sanitär
│   ├── /leistungen/kundendienst/         Kundendienst & Wartung
│   ├── /leistungen/elektrotechnik/       Elektrotechnik & Smart Home
│   ├── /leistungen/baeder-wellness/      Bäder, Fliesen & Wellness
│   └── /leistungen/notdienst/            Notdienst (NEW — high-intent SEO page)
│
├── /rechner/
│   ├── /rechner/heizungsrechner/         Heizungsrechner Quiz
│   └── /rechner/badrechner/              Badrechner Quiz
│
├── /buchung/                             Online-Terminbuchung (unified)
│
├── /projekte/                            Projekt-Galerie (NEW)
│
├── /ueber-uns/                           Über uns (Team, Story, Werte)
├── /firmenhistorie/                      Firmenhistorie / Timeline
├── /auszeichnungen/                      Auszeichnungen & Presse
│
├── /karriere/                            Karriere Hub
│   ├── /karriere/stellenangebote/        Jobs
│   └── /karriere/ausbildung/             Azubis / Ausbildung
│
├── /kontakt/                             Kontakt (Form, Map, alle Gesellschaften)
│
├── /impressum/                           Impressum (legal requirement)
├── /datenschutz/                         Datenschutzerklärung
└── /widerrufsrecht/                      Widerrufsbelehrung (tabbed, alle 4 GmbHs)
```

---

## Redirect Map (Old URL → New URL)

### 1:1 Matches (no redirect needed if we keep slug)
```
OLD                                    → NEW                              STATUS
/heizung-sanitaer/                     → /leistungen/heizung-sanitaer/    301 redirect
/kundendienst/                         → /leistungen/kundendienst/        301 redirect
/elektro/                              → /leistungen/elektrotechnik/      301 redirect
/baeder-fliesen-wellness/              → /leistungen/baeder-wellness/     301 redirect
/kontakt/                              → /kontakt/                        KEEP (no redirect)
/wir-ueber-uns/                        → /ueber-uns/                      301 redirect
/firmenhistorie/                       → /firmenhistorie/                 KEEP (no redirect)
/jobs/                                 → /karriere/stellenangebote/       301 redirect
/azubis/                               → /karriere/ausbildung/            301 redirect
/datenschutz/                          → /datenschutz/                    KEEP (no redirect)
```

### Consolidations (many → one)
```
OLD                                              → NEW                    STATUS
/widerrufsrecht/                                 → /widerrufsrecht/       KEEP
/widerrufsrecht-ernst-pertler-gmbh/              → /widerrufsrecht/       301 redirect
/widerrufsrecht-ernst-pertler-service-gmbh/      → /widerrufsrecht/       301 redirect
/widerrufsrecht-pertler-bad-gmbh/                → /widerrufsrecht/       301 redirect
/widerrufsrecht-pertler-elektrotechnik-gmbh/     → /widerrufsrecht/       301 redirect
/widerrufsbelehrung-werk-und-dienstleistungen-*  → /widerrufsrecht/       301 redirect (x4)
```

### Tool Pages
```
/heizungsrechner/                      → /rechner/heizungsrechner/        301 redirect
/badrechner/                           → /rechner/badrechner/             301 redirect
/buchungsstrecke/                      → /buchung/                        301 redirect
/buchungsstrecke-elektrotechnik/       → /buchung/                        301 redirect
```

### Press & Awards (consolidate)
```
/presse/                               → /auszeichnungen/                301 redirect
/bayerns-best-50/                      → /auszeichnungen/                301 redirect
/top-100-summit-2019/                  → /auszeichnungen/                301 redirect
/erasmus-grasser-preis-2018/           → /auszeichnungen/                301 redirect
/tag-des-handwerks-am-23-7-2017/       → /auszeichnungen/                301 redirect
/carrier-viessmann/                    → /auszeichnungen/                301 redirect
/viessmann-panel-talk-ish-2023-frankfurt/ → /auszeichnungen/             301 redirect
```

### Remove / Redirect to Home
```
/willkommen/                           → /                               301 redirect
/homepage-2/                           → /                               301 redirect
/wir-ueber-uns/soziale-medien/         → /ueber-uns/                     301 redirect
/cookie-richtlinie-eu/                 → /datenschutz/                   301 redirect
```

### Redirect Summary
| Type | Count |
|------|-------|
| Keep (no redirect) | 4 |
| 301 Redirects | ~26 |
| New pages (no old equivalent) | 3 (/notdienst, /projekte, /buchung) |

---

## Page Inventory (New Site — 18 Pages Total)

| # | Page | Priority | Content Source |
|---|------|----------|----------------|
| 1 | Homepage | P0 | New build |
| 2 | Heizung & Sanitär | P0 | Rewrite from old content |
| 3 | Kundendienst | P0 | Rewrite from old content |
| 4 | Elektrotechnik | P0 | Rewrite from old content |
| 5 | Bäder & Wellness | P0 | Rewrite from old content |
| 6 | Notdienst | P0 | NEW — high-intent landing page |
| 7 | Heizungsrechner | P0 | Native rebuild (quiz) |
| 8 | Badrechner | P0 | Native rebuild (quiz) |
| 9 | Online Buchung | P1 | Native rebuild (from Typeform) |
| 10 | Projekte / Galerie | P1 | NEW — placeholder until real photos |
| 11 | Über uns | P0 | Rewrite + fix broken team section |
| 12 | Firmenhistorie | P1 | Rewrite as timeline |
| 13 | Auszeichnungen | P1 | Consolidate 6 old pages |
| 14 | Karriere / Jobs | P1 | Merge jobs + azubis pages |
| 15 | Ausbildung | P2 | From old /azubis/ content |
| 16 | Kontakt | P0 | Rebuild with form + map |
| 17 | Impressum | P0 | Legal — required |
| 18 | Datenschutz | P0 | Legal — required |
| 19 | Widerrufsrecht | P1 | Consolidate 8 pages into 1 tabbed |

---

## Quiz Specifications

### Heizungsrechner (Heating Calculator Quiz)

**Purpose:** Collect project info → Pertler reviews → sends quote by email/phone
**Current tool:** Lokalleads embed (external, slow, off-brand)
**New:** Native multi-step form, on-brand, fast

#### Steps:

```
Step 1: Gebäudetyp (Building Type)
────────────────────────────────────
[🏠 Einfamilienhaus]  [🏢 Mehrfamilienhaus]  [🏗️ Gewerbe/Industrie]

Step 2: Baujahr & Zustand (Year Built & Condition)
────────────────────────────────────
Baujahr:        [Dropdown: vor 1970 / 1970-1990 / 1990-2010 / nach 2010 / Neubau]
Saniert?        [Ja, komplett / Teilweise / Nein]
Gedämmt?        [Ja / Teilweise / Nein / Weiß nicht]

Step 3: Wohnfläche (Living Area)
────────────────────────────────────
Wohnfläche:     [_____ m²]  (number input with slider)
Stockwerke:     [1 / 2 / 3 / 4+]

Step 4: Aktuelle Heizung (Current Heating)
────────────────────────────────────
Heizungstyp:    [Gas / Öl / Fernwärme / Wärmepumpe / Elektro / Holz-Pellet / Keine / Weiß nicht]
Baujahr Heizung: [Dropdown: vor 2000 / 2000-2010 / 2010-2020 / nach 2020 / Weiß nicht]

Step 5: Gewünschte Heizung (Desired Heating)
────────────────────────────────────
[🔥 Gasheizung]  [♨️ Wärmepumpe]  [🌡️ Fernwärme]  [🪵 Pellet/Holz]
[☀️ Solar-Kombi]  [❓ Beratung gewünscht]

Step 6: Standort der Heizung (Heating Location)
────────────────────────────────────
[🏚️ Keller]  [🏠 Dachboden]  [📦 Hauswirtschaftsraum]  [🏗️ Außenaufstellung]

Step 7: Zusatzinfos (Optional — skippable)
────────────────────────────────────
Weitere Details:  [Freitext textarea]
Fotos hochladen:  [📎 Drag & Drop Zone — optional]
                   (max 5 Bilder, je 10MB, JPG/PNG/HEIC)

Step 8: Kontaktdaten
────────────────────────────────────
Name:*           [________________]
E-Mail:*         [________________]
Telefon:*        [________________]
Bevorzugte Kontaktart: [📧 E-Mail / 📞 Telefon / 💬 Egal]
Wunschtermin:    [Datepicker — optional]

Step 9: Zusammenfassung & Absenden
────────────────────────────────────
[Übersicht aller Angaben — editierbar]
[✅ Datenschutz akzeptieren]*
[📨 Anfrage absenden]

→ Bestätigung: "Vielen Dank! Wir melden uns innerhalb von 24h bei Ihnen."
→ Email an: info@pertler.de (+ internal notification)
```

#### Technical Notes:
- Progress bar: "Schritt X von 9"
- Back/Forward navigation on every step
- All steps except Kontaktdaten are optional/skippable with "Überspringen" link
- Responsive: cards become stacked on mobile
- Visual cards with icons for selection steps (not radio buttons)
- Auto-save to localStorage (resume if user comes back)
- Submit: Server action → email to Pertler + confirmation email to user
- DSGVO: consent checkbox, link to Datenschutzerklärung, no data stored beyond email delivery

---

### Badrechner (Bathroom Calculator Quiz)

**Purpose:** Collect bathroom project info → Pertler sends quote
**Current tool:** Unknown embed (external)
**New:** Native multi-step form

#### Steps:

```
Step 1: Art des Projekts (Project Type)
────────────────────────────────────
[🔄 Badsanierung]  [🆕 Neues Bad]  [🏗️ Teilrenovierung]  [♿ Barrierefreier Umbau]

Step 2: Badgröße (Bathroom Size)
────────────────────────────────────
Fläche:          [_____ m²]  (number input with slider, or)
                 [Klein <5m² / Mittel 5-10m² / Groß 10-15m² / Sehr groß >15m²]

Step 3: Aktuelle Ausstattung (Current Equipment)
────────────────────────────────────
Was ist aktuell vorhanden? (Mehrfachauswahl)
[🛁 Badewanne]  [🚿 Dusche]  [🚽 WC]  [🪞 Waschtisch]
[🔥 Fußbodenheizung]  [🪟 Fenster]  [👴 Barrierefreie Elemente]

Step 4: Gewünschte Ausstattung (Desired Equipment)
────────────────────────────────────
Was möchten Sie? (Mehrfachauswahl)
[🛁 Badewanne]  [🚿 Ebenerdige Dusche]  [🚽 WC]  [🚽 Dusch-WC]
[🪞 Einzelwaschtisch]  [🪞 Doppelwaschtisch]  [🔥 Fußbodenheizung]
[💡 Beleuchtungskonzept]  [🪨 Naturstein/Fliesen]  [♿ Barrierefreie Elemente]

Step 5: Stil & Geschmack (Style Preference)
────────────────────────────────────
Welcher Stil gefällt Ihnen? (Bildauswahl)
[📷 Modern/Minimalistisch]  [📷 Klassisch/Zeitlos]
[📷 Luxuriös/Wellness]      [📷 Weiß nicht — beraten Sie mich]

Step 6: Budget-Rahmen (Budget Range — optional, skippable)
────────────────────────────────────
[💰 Bis 10.000€]  [💰 10.000-20.000€]  [💰 20.000-40.000€]
[💰 Über 40.000€]  [❓ Noch keine Vorstellung]

Step 7: Zeitrahmen (Timeline)
────────────────────────────────────
Wann soll das Projekt starten?
[🗓️ So bald wie möglich]  [🗓️ In 1-3 Monaten]
[🗓️ In 3-6 Monaten]       [🗓️ Später / Nur Planung]

Step 8: Fotos & Details (Optional — skippable)
────────────────────────────────────
Fotos vom aktuellen Bad:  [📎 Drag & Drop Zone — optional]
                          (max 10 Bilder, je 10MB, JPG/PNG/HEIC)
Grundriss vorhanden?      [Ja, lade ich hoch / Nein]
Besondere Wünsche:        [Freitext textarea]

Step 9: Kontaktdaten
────────────────────────────────────
Name:*           [________________]
E-Mail:*         [________________]
Telefon:*        [________________]
Adresse/PLZ:     [________________]  (optional — for service area check)
Bevorzugte Kontaktart: [📧 E-Mail / 📞 Telefon / 💬 Egal]

Step 10: Zusammenfassung & Absenden
────────────────────────────────────
[Übersicht aller Angaben — editierbar]
[✅ Datenschutz akzeptieren]*
[📨 Anfrage absenden]

→ Bestätigung: "Vielen Dank! Unser Bad-Team meldet sich innerhalb von 48h bei Ihnen."
→ Email an: bad@pertler.de (+ internal notification)
```

---

## Buchungsstrecke (Booking Flow — Unified)

**Replaces:** /buchungsstrecke/ + /buchungsstrecke-elektrotechnik/
**New URL:** /buchung/

```
Step 1: Was brauchen Sie? (What do you need?)
────────────────────────────────────
[🔧 Reparatur / Störung]           → shows urgency options
[🔄 Wartung / Inspektion]          → standard flow
[📋 Beratung / Planung]            → consultation flow
[🚨 Notfall — Sofort Hilfe]        → shows phone number immediately + priority flag

Step 2: Welcher Bereich? (Which area?)
────────────────────────────────────
[🔥 Heizung]  [🚿 Sanitär]  [⚡ Elektro]  [🛁 Bad]  [❄️ Kälte/Klima]

Step 3: Beschreibung (Description)
────────────────────────────────────
Was ist das Problem / Was brauchen Sie?
[Freitext textarea]
Fotos/Videos:  [📎 Optional Upload — skippable]

Step 4: Wunschtermin (Preferred Date)
────────────────────────────────────
[📅 Datepicker]  [🕐 Tageszeit: Vormittag / Nachmittag / Flexibel]

Step 5: Kontaktdaten
────────────────────────────────────
Name:*    E-Mail:*    Telefon:*    Adresse:*
[✅ Datenschutz]*
[📨 Termin anfragen]

→ Bestätigung + erwartete Rückmeldung
→ Email an: service@pertler.de
→ Bei Notfall: extra "Rufen Sie jetzt an" CTA bleibt sichtbar
```

---

## Shared UI Components Across Quizzes

All three quiz flows (Heizungsrechner, Badrechner, Buchung) share:

1. **Progress bar** — "Schritt X von Y" with filled segments
2. **Back/Forward buttons** — "Zurück" (ghost) | "Weiter" (primary orange)
3. **Skip link** — "Überspringen →" on optional steps
4. **Visual card selection** — icon + label cards instead of radio buttons
5. **Drag & drop upload** — with preview thumbnails, remove button, file size indicator
6. **Auto-save** — localStorage persistence so users can return
7. **Summary step** — editable overview before submit
8. **DSGVO consent** — checkbox with link, required
9. **Confirmation** — success screen with response time expectation
10. **Mobile optimized** — full-width cards, large touch targets, camera shortcut for uploads

### Reusable Quiz Component Architecture
```
<QuizShell>              — layout, progress bar, navigation
  <QuizStep>             — individual step wrapper
    <CardSelect>         — visual card multi/single selection
    <SliderInput>        — number input with range slider
    <FileUpload>         — drag & drop with preview
    <TextArea>           — free text input
    <DatePicker>         — date selection
    <ContactForm>        — name, email, phone, consent
    <Summary>            — review all answers, edit links
  </QuizStep>
</QuizShell>
```

Build the quiz components ONCE, reuse across all 3 flows. Only the step definitions (questions, options, icons) differ per quiz.
