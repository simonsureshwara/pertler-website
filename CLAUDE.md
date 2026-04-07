# PERTLER Website — AI Instructions

## CRITICAL: Design System Usage

**NIEMALS Farben, Font-Sizes, Spacings, Border-Radii oder Schatten hart coden.**
Immer das Design System aus `src/styles/global.css` verwenden. Keine Eigenentscheidungen bei visuellen Werten.

Wenn ein Token fehlt, füge ihn zum Design System in `global.css` unter `@theme` hinzu — nicht inline oder als Einmalwert.

## Stack

- Astro (Static Site Generator)
- Tailwind CSS v4 (mit `@theme` Direktive)
- Inter (einzige Schriftart, alle Gewichte 300–900)
- Lucide Icons via `lucide-astro`

## Design System (`src/styles/global.css`)

### Farben — verwende diese Tailwind-Klassen

| Zweck | Klasse | Hex |
|---|---|---|
| **Primary** (Marke, dunkelrot) | `bg-primary`, `text-primary` | #4d0510 |
| **Primary Container** | `bg-primary-container` | #6b1c23 |
| **Secondary** (Orange) | `bg-secondary`, `text-secondary` | #944a00 |
| **Secondary Container** | `bg-secondary-container` | #fe8e30 |
| **CTA Button** | `bg-secondary`, `hover:bg-secondary-container` | #944a00 / #fe8e30 |
| **Surface** (Hintergrund) | `bg-surface` | #f9f9f7 |
| **Surface Container Low** | `bg-surface-container-low` | #f4f4f2 |
| **Surface Container** | `bg-surface-container` | #eeeeec |
| **On Surface** (Text) | `text-on-surface` | #1a1c1b |
| **Error** | `bg-error` | #ba1a1a |

Division-Akzente für Leistungskarten:
- Heizung: `border-heizung` (#8b1a1a)
- Elektro: `border-elektro` (#00834b)
- Bäder: `border-baeder` (#e87d1e)
- Kälte: `border-kaelte` (#2e3b8c)

### Typografie

- **Einzige Schriftart: Inter** — keine andere Schrift verwenden
- Headlines: `font-black` (900) oder `font-bold` (700)
- Body: `font-light` (300), `font-normal` (400), `font-medium` (500), `font-semibold` (600)
- Keine festen `px`-Werte für Font-Sizes — Tailwind-Klassen nutzen (`text-sm`, `text-base`, `text-lg`, etc.)

### Schatten (Custom Utilities)

- `card-shadow` — Standard-Kartenschatten (natürliches Licht von oben)
- `card-shadow-hover` — Hover-State für Karten
- `editorial-shadow` — Subtiler Schatten für Bilder/Container
- `glass-nav` — Backdrop-Blur für Navigation

### Buttons

- **CTA (primary action):** `bg-secondary hover:bg-secondary-container text-white rounded-md font-bold`
- **Nav CTA:** `bg-secondary-container hover:bg-secondary text-on-secondary rounded-md font-bold`
- **Ghost/Outline:** `border-2 border-white/40 text-white hover:bg-white hover:text-primary rounded-md font-bold`
- **On dark background:** `bg-white text-primary rounded-md font-bold`
- Keine Farbverläufe/Gradients auf Buttons

### Karten

- Hintergrund: `bg-surface-container-lowest rounded-xl editorial-shadow`
- Leistungskarten haben dicken farbigen Top-Border: `border-t-8 border-{division}`
- Rechner-Karten haben Bottom-Border: `border-b-4 border-{color}`

### Spacing

- Section Padding: `py-24` oder `py-24 md:py-32`
- Container: `max-w-screen-2xl mx-auto px-8`
- Keine willkürlichen Spacing-Werte — Tailwind-Scale verwenden

## Projektstruktur

```
src/
  components/    # Astro-Komponenten (Hero, Navbar, ServiceGrid, etc.)
  layouts/       # BaseLayout.astro
  pages/         # index.astro (weitere Seiten kommen)
  styles/        # global.css (Design System)
public/          # Statische Assets
docs/            # Strategie- und Designdokumentation
```

## Regeln

1. Design System zuerst — `global.css` ist die Single Source of Truth
2. Kein `style=""` oder hardcoded Hex-Werte in Komponenten
3. Neue Farben/Tokens gehören in `@theme` in `global.css`
4. Inter ist die einzige Schriftart — keine Imports anderer Fonts
5. Buttons sind einfarbig, keine Gradients
6. Schatten verwenden die Custom Utilities, nicht `shadow-lg` etc.
