# Pertler Brand Identity Extraction

## Logos

### Current Logo (2018, still used on site)
- **Source:** https://www.pertler.de/wp-content/uploads/2018/02/Haupt-logo.png (794x117px)
- **Format:** PNG (should be SVG for new site)
- **Structure:**
  - "PERTLER" — bold uppercase, heavy weight, medium gray
  - Four colored division bars underneath (equal width, horizontal)
  - "Gebäudetechnik" — lighter gray, regular weight, smaller size

### NEW Logo (March 2026 — recent rebrand in progress!)
- **Source:** https://www.pertler.de/wp-content/uploads/2026/03/neues-Logo-2.jpg
- **Created by:** "Stephie" in Canva
- **Structure:**
  - "PERTLER" — bold italic uppercase, medium gray (slightly bolder than old)
  - **Single dark red/maroon bar** underneath (no more 4-color bars)
  - "Heizung / Sanitär / Kälte" — lighter gray, regular weight
- **Key changes:**
  - 4 division colors → single maroon bar (simplified)
  - "Gebäudetechnik" → "Heizung / Sanitär / Kälte" (more specific, added cooling/refrigeration)
  - Elektro and Bäder dropped from tagline (may still be services, just not in logo)
  - Made in Canva = they don't have a professional designer → OPPORTUNITY

### Strategic Decision Needed
The new logo suggests they're evolving. We have two options:
1. **Use the new logo** — align with their direction, shows we're current
2. **Propose a professional redesign** — their Canva logo is amateur, we could offer a proper version as part of the package (upsell opportunity)

**Recommendation:** Use their new logo direction (single bar, maroon accent) but offer a professionally executed SVG version as added value. The Canva quality won't hold up on a premium site.

## Brand Colors (extracted from logo)

### Division Colors (the 4 bars)
| Division | Color | Approximate Hex | Usage |
|----------|-------|-----------------|-------|
| Heizung (Heating) | Dark Red / Maroon | `#8B1A1A` | Division accent |
| Sanitär (Plumbing) | Blue | `#2E3B8C` | Division accent |
| Elektrotechnik (Electrical) | Green | `#00834B` | Division accent |
| Bäder/Wellness (Bathrooms) | Orange | `#E87D1E` | Division accent |

### Core Brand Colors
| Role | Color | Hex | Notes |
|------|-------|-----|-------|
| Primary Text / Logo | Medium Gray | `#808080` | "PERTLER" wordmark |
| Secondary Text | Light Gray | `#A0A0A0` | "Gebäudetechnik" subtitle |
| Dark UI (buttons, footer) | Charcoal | `#32373c` / `#35383c` | WordPress theme defaults |
| Body Text | Near Black | `#313131` | Content text |
| Backgrounds | White | `#ffffff` | Page backgrounds |

### Design System Recommendation (New Site)
We should **evolve** their existing palette, not replace it. The 4-color division system is strong brand equity.

```
--color-primary:        #32373c    (charcoal — headers, nav, footer)
--color-text:           #1a1a1a    (near black — body text, better contrast)
--color-text-muted:     #6b7280    (gray-500 — secondary text)
--color-bg:             #ffffff    (white — primary background)
--color-bg-warm:        #f9f7f5    (warm off-white — section alternation)
--color-bg-dark:        #1e2024    (dark sections, footer)

--color-heizung:        #8B1A1A    (dark red — heating division)
--color-sanitaer:       #2E3B8C    (blue — plumbing division)
--color-elektro:        #00834B    (green — electrical division)
--color-baeder:         #E87D1E    (orange — bathroom division)

--color-emergency:      #DC2626    (bright red — Notdienst banner)
--color-cta:            #E87D1E    (orange — primary CTA buttons, warm + action-oriented)
--color-cta-hover:      #D06D15    (darker orange — CTA hover state)
--color-success:        #16a34a    (green — form success states)
```

## Typography

### Current Site
- Enfold theme defaults (system fonts, no custom web fonts loaded)
- Icon font: entypo-fontello (custom icon set)
- No Google Fonts detected

### Recommendation (New Site)
German-friendly, professional, highly readable:

**Option A: Inter + Source Serif** (Modern Professional)
- Headings: Inter (700, 600) — clean, geometric, excellent German character support
- Body: Inter (400, 500) — same family, great readability
- Accent/Quotes: Source Serif 4 (italic) — editorial touch for testimonials

**Option B: Plus Jakarta Sans** (Warmer, Friendlier)
- All text: Plus Jakarta Sans — slightly rounded, approachable, still professional
- Good for a trades company that wants to feel human

**Option C: DM Sans + DM Serif Display** (Premium)
- Headings: DM Serif Display — elegant, trustworthy
- Body: DM Sans — clean companion

**Recommendation:** Option A (Inter) — it's the safest, most versatile, and has perfect German umlaut support (ä, ö, ü, ß).

## Visual Style

### Current
- Generic WordPress theme aesthetic
- No visual identity beyond the logo
- Dense text blocks, no visual hierarchy
- Team photos exist but are broken/not loading
- Stock-like imagery

### Recommended Direction
- **Clean, modern, slightly warm** — not cold corporate, not too playful
- **Photo-forward** — real team, real projects, real buildings
- **White space focused** — let content breathe
- **Division color coding** — subtle color accents per service section
- **Card-based layouts** — services, team members, projects as cards
- **Subtle animations** — scroll reveals, hover states, nothing flashy
- **Dark header/footer** — charcoal (#1e2024) for frame, white content areas
- **Emergency banner** — red (#DC2626) persistent bar for Notdienst

## Social Media Presence
- **Facebook:** facebook.com/Pertler.GmbH/ (couldn't fetch — likely low activity)
- **LinkedIn:** linkedin.com/company/ernst-pertler/
- **Instagram:** instagram.com/pertler_gebaeudetechnik/ (couldn't fetch — likely project photos)
- Brand voice likely: professional, German-formal, technical

## Logo Handling for New Site
1. Recreate as SVG for crisp rendering at all sizes
2. Maintain the 4-color bar system — it's the strongest brand element
3. Consider a compact/icon version (just "P" + 4 bars) for favicon/mobile
4. Dark version (white text) for dark backgrounds
5. Ensure the logo works at small sizes (mobile header ~40px height)
