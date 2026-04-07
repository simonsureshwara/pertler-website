# Pertler Website Rebuild — Audit & Strategy

## Target: Ernst Pertler GmbH (pertler.de)

**Business:** Building technology company in Munich — Heating, Sanitary, Electrical, Bathrooms/Wellness
**Founded:** 1984 | **Location:** München-Feldmoching (80935)
**Sub-companies:** Ernst Pertler GmbH, Ernst Pertler Service GmbH, Pertler Bad GmbH, Pertler Elektrotechnik GmbH
**Manager:** Stefan Pertler
**Awards:** Erasmus Grasser Preis 2018, Top 100 2019 (Digitalization), Bavaria's Best 50 2020

---

## 1. CURRENT SITE AUDIT

### Tech Stack (Old)
- **CMS:** WordPress 6.9.4
- **Theme:** Enfold (heavy multipurpose theme)
- **Plugins:** Popup Maker 1.21.5, Complianz Cookie v7.4.4.2, WP Emoji
- **Analytics:** GA4 (G-574GQ7STJF)
- **Hosting:** Unknown (needs check)
- **SSL:** Yes (HTTPS)

### Critical Problems Found

#### A. Technical Issues
| Issue | Severity | Impact |
|-------|----------|--------|
| WordPress + Enfold = heavy, bloated page loads | HIGH | Speed, UX, bounce rate |
| No image alt tags across the site | HIGH | Accessibility, Image SEO |
| WP Emoji script loaded (unnecessary bloat) | LOW | Performance |
| Popup Maker loaded on every page | MEDIUM | Performance, UX annoyance |
| No lazy loading indicators | MEDIUM | Initial page load |
| Attachment sitemaps exposed (2 of them) | LOW | Crawl budget waste |
| Mixed HTTP/HTTPS links (alternative-energien page) | MEDIUM | Security warnings |
| Logo is 794x117px PNG (should be SVG) | LOW | Retina display, file size |

#### B. SEO Issues
| Issue | Severity | Impact |
|-------|----------|--------|
| Meta descriptions generic/keyword-stuffed | HIGH | CTR in SERPs |
| No LocalBusiness schema markup | HIGH | Local SEO, Maps, Knowledge Panel |
| No Service schema on service pages | HIGH | Rich snippets |
| No FAQ schema (despite expertise content) | MEDIUM | Featured snippets |
| No blog/content marketing | HIGH | Organic traffic growth |
| Title tags are bland ("Heizung Sanitär - Ernst Pertler GmbH") | MEDIUM | CTR |
| No Open Graph / Twitter Card optimization | MEDIUM | Social sharing |
| Attachment pages indexed (crawl waste) | MEDIUM | Diluted authority |
| Heating calculator page not updated since 2021 | MEDIUM | Outdated content signal |

#### C. UX / Conversion Issues
| Issue | Severity | Impact |
|-------|----------|--------|
| ZERO CTAs on service pages | CRITICAL | Lost leads |
| No contact form on contact page | HIGH | Conversion barrier |
| "About Us" page completely broken (empty team sections, "Seite 1 von 0") | CRITICAL | Trust destruction |
| No interactive Google Maps embed | MEDIUM | Local trust |
| Dense text walls, no visual hierarchy | HIGH | Engagement, mobile UX |
| No testimonials/reviews displayed | HIGH | Social proof missing |
| No emergency number prominently displayed (they DO emergency service) | HIGH | Lost urgent leads |
| Award badges buried in navigation, not showcased | MEDIUM | Trust signals wasted |
| No online booking UX (booking page exists but hidden) | HIGH | Conversion loss |
| Booking flow (Buchungsstrecke) is a Typeform embed — clunky, off-brand, slow | HIGH | Conversion loss |
| Booking quiz forces image/video upload — cannot be skipped | CRITICAL | Users abandon flow |
| Two separate booking pages (Heizung/Sanitär + Elektro) — fragmented UX | HIGH | Confusion |
| No before/after project galleries | HIGH | Service proof missing |

#### D. Content Issues
| Issue | Severity | Impact |
|-------|----------|--------|
| No blog or news section | HIGH | No content marketing funnel |
| Press page exists but likely outdated | MEDIUM | Missed authority |
| No case studies / project showcases | HIGH | No proof of work |
| Job/Azubi pages exist but quality unknown | MEDIUM | Employer branding |
| No video content | MEDIUM | Engagement, time on site |

### Ads Status
- No evidence of Google Ads campaigns running
- No Facebook/Meta Pixel detected (only GA4)
- Missed opportunity in a high-intent local service market

### Current SEO Rankings
- They rank for branded terms ("Ernst Pertler", "Pertler München")
- Present in trade directories (wasserwaermeluft.de, sanitaer.org, hwk-muenchen.de)
- Listed on 11880.com, sanitaer-und-heizungsbau.com
- Mixed reviews on nicelocal, baukatastrophen.de
- ProvenExpert profile for Ingenieurbüro Pertler (5.0/5, 2 reviews)
- Social: Facebook, LinkedIn, Instagram (likely low activity)

---

## 2. COMPLETE URL MAP (Old Site — 34 Pages)

### Core Pages (must rebuild)
```
/                                    → Homepage
/heizung-sanitaer/                   → Heating & Sanitary
/kundendienst/                       → Customer Service / Emergency
/elektro/                            → Electrical / Smart Home
/baeder-fliesen-wellness/            → Bathrooms / Tiles / Wellness
/kontakt/                            → Contact
/wir-ueber-uns/                      → About Us
/firmenhistorie/                     → Company History
/jobs/                               → Jobs
/azubis/                             → Apprenticeships
```

### Tool/Interactive Pages
```
/buchungsstrecke/                    → Booking (Heating/Sanitary)
/buchungsstrecke-elektrotechnik/     → Booking (Electrical)
/heizungsrechner/                    → Heating Calculator
/badrechner/                         → Bathroom Calculator
```

### Legal Pages
```
/datenschutz/                        → Privacy Policy
/widerrufsrecht/                     → Right of Withdrawal (hub)
/widerrufsrecht-ernst-pertler-gmbh/
/widerrufsrecht-ernst-pertler-service-gmbh/
/widerrufsrecht-pertler-bad-gmbh/
/widerrufsrecht-pertler-elektrotechnik-gmbh/
/widerrufsbelehrung-werk-und-dienstleistungen-der-ernst-pertler-gmbh/
/widerrufsbelehrung-werk-und-dienstleistungen-der-ernst-pertler-service-gmbh/
/widerrufsbelehrung-werk-und-dienstleistungen-der-pertler-bad-gmbh/
/widerrufsbelehrung-werk-und-dienstleistungen-der-pertler-elektrotechnik-gmbh/
/cookie-richtlinie-eu/              → Cookie Policy
```

### Press/Awards
```
/presse/                             → Press
/bayerns-best-50/                    → Award Page
/top-100-summit-2019/                → Award Page
/erasmus-grasser-preis-2018/         → Award Page
/tag-des-handwerks-am-23-7-2017/     → Event Page
/carrier-viessmann/                  → Event Page
/viessmann-panel-talk-ish-2023-frankfurt/  → Event Page
```

### Other
```
/willkommen/                         → Welcome (duplicate of homepage?)
/wir-ueber-uns/soziale-medien/      → Social Media sub-page
```

### Redirect Strategy
- Keep ALL core page slugs identical → zero redirects needed
- Legal pages: consolidate 8 Widerrufsrecht pages into 1 with tabs/accordion → redirect old URLs
- /willkommen/ → redirect to / (duplicate)
- /homepage-2/ (actual WP homepage slug) → / (already handled by WP, keep redirect)
- Award/event pages: consolidate into /presse/ or /ueber-uns/auszeichnungen/ → redirect

---

## 3. NEW SITE ARCHITECTURE

### Tech Stack (New)
```
Framework:     Next.js 15 (App Router) OR Astro 5 (better for static/hybrid)
Styling:       Tailwind CSS 4
CMS:           Headless (Sanity / Strapi) — so they can edit content
Deployment:    Vercel (edge, global CDN, instant deploys)
Analytics:     GA4 (keep existing) + Vercel Analytics
Forms:         React Hook Form + server action / Resend for email
Maps:          Google Maps Embed API
Images:        Next/Image or Astro Image (auto WebP/AVIF, lazy load, srcset)
Icons:         Lucide React (tree-shakeable)
Animations:    Framer Motion (subtle, purposeful)
i18n:          German primary, English optional later
```

### Booking Flow Rebuild (Buchungsstrecke) — KEY DIFFERENTIATOR
The current booking is a **Typeform embed** — external, slow to load, off-brand, and forces users
through every step (including mandatory image/video upload that can't be skipped). Two separate
booking pages exist (one for Heizung/Sanitär, one for Elektrotechnik), fragmenting the experience.

**Our rebuild:**
- **Native multi-step form** — built into the site, instant load, on-brand design
- **Smart branching** — user selects category (Heizung, Sanitär, Notfall, Elektro, Bad) and flow adapts
- **Everything optional except contact info** — image/video upload available but skippable
- **Drag & drop uploads** — images, videos, with preview thumbnails
- **Progress indicator** — clear step count, back/forward navigation
- **Smart urgency detection** — "Notfall" selection triggers immediate call-CTA + priority flag
- **Instant confirmation** — thank you screen with expected response time
- **Backend:** Server action → email notification + optional CRM integration
- **Mobile-first** — thumb-friendly, large tap targets, camera-to-upload shortcut

This alone is a selling point. Their current flow loses leads. Ours converts them.

### German Legal Compliance (DSGVO / Deutsches Recht)
- **Impressum** — legally required, complete with all 4 company entities, Handelsregister, USt-IdNr
- **Datenschutzerklärung** — DSGVO-compliant privacy policy covering GA4, forms, cookies, hosting
- **Cookie Consent** — opt-in banner, granular categories (Notwendig, Statistik, Marketing), no pre-checked boxes
- **Widerrufsrecht** — consolidated but complete for all 4 entities (tabbed UI)
- **BFSG (Barrierefreiheitsstärkungsgesetz)** — accessibility compliance (WCAG 2.1 AA)
- **SSL/TLS** — enforced HTTPS everywhere
- **Data processing** — form submissions handled DSGVO-compliant (EU hosting, no US data transfer without adequacy)
- **Right to deletion** — contact form data retention policy documented
- **AV-Vertrag ready** — if using external services (analytics, email), processing agreements documented

### Recommended: Astro 5
- Static-first = blazing fast (0 JS by default)
- Islands architecture for interactive parts (calculators, booking, forms)
- Perfect for a service business site
- Easy to add blog later
- Built-in image optimization
- Score 95-100 on Lighthouse out of the box

### Site Map (New)
```
/                           Homepage (hero, services overview, trust signals, CTA)
/leistungen/
  /heizung-sanitaer/        Heating & Sanitary
  /kundendienst/            Customer Service & Emergency
  /elektrotechnik/          Electrical & Smart Home
  /baeder-wellness/         Bathrooms & Wellness
/projekte/                  Project Gallery / Case Studies (NEW)
/ueber-uns/                 About Us (team, history, awards combined)
/karriere/                  Jobs + Apprenticeships (combined)
/kontakt/                   Contact (form, map, all entities)
/blog/                      Blog / News (NEW — SEO growth engine)
/buchung/                   Online Booking (unified)
/rechner/
  /heizungsrechner/         Heating Calculator
  /badrechner/              Bathroom Calculator
/impressum/                 Legal Notice
/datenschutz/               Privacy Policy
/widerrufsrecht/            Withdrawal (single page, tabbed by entity)
```

---

## 4. THE TODO — BUILD PHASES

### Phase 1: Foundation (Days 1-2)
- [ ] Initialize Astro 5 project with Tailwind 4
- [ ] Set up project structure (layouts, components, pages)
- [ ] Design system: colors (from their brand), typography, spacing
- [ ] Create reusable components: Button, Card, Section, Container
- [ ] Set up Vercel deployment pipeline
- [ ] Configure SEO defaults (meta, OG, sitemap, robots.txt)

### Phase 2: Core Pages (Days 3-5)
- [ ] Homepage — hero, services grid, trust bar (awards), testimonial area, CTA sections
- [ ] Service pages (4x) — structured content, CTAs, related services, FAQ sections
- [ ] About Us — team grid, company timeline, awards showcase, values
- [ ] Contact — multi-entity contact cards, embedded Google Map, contact form
- [ ] Career page — jobs + apprenticeship combined, culture showcase

### Phase 3: Conversion & Interactive (Days 6-7)
- [ ] Online booking flow (unified for all service types)
- [ ] Heating calculator (rebuild, modern UX)
- [ ] Bathroom calculator (rebuild, modern UX)
- [ ] Emergency banner (sticky, prominent phone number)
- [ ] Cookie consent (lightweight, GDPR compliant)
- [ ] Contact form with email delivery

### Phase 4: SEO & Performance (Day 8)
- [ ] LocalBusiness + Service schema markup on every page
- [ ] FAQ schema on service pages
- [ ] Proper meta titles & descriptions (compelling, not keyword-stuffed)
- [ ] Open Graph + Twitter Cards
- [ ] Image optimization (WebP/AVIF, proper alt tags everywhere)
- [ ] Sitemap generation
- [ ] Canonical URLs
- [ ] 301 redirect map for changed URLs
- [ ] Lighthouse audit → target 95+ on all metrics

### Phase 5: Content & Polish (Days 9-10)
- [ ] Project gallery page with before/after images
- [ ] Blog setup (at least 3 seed articles for launch)
- [ ] Testimonial/review integration
- [ ] Social media links + sharing
- [ ] Final responsive testing (mobile, tablet, desktop)
- [ ] Cross-browser testing
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Print stylesheet for contact/legal pages

---

## 5. THE PITCH DOCUMENT (What to show them)

### Performance Comparison
| Metric | Old Site | New Site (Target) |
|--------|----------|-------------------|
| Lighthouse Performance | ~40-55 | 95+ |
| Lighthouse SEO | ~70 | 100 |
| Lighthouse Accessibility | ~60 | 95+ |
| First Contentful Paint | ~3-5s | <1s |
| Largest Contentful Paint | ~5-8s | <2s |
| Time to Interactive | ~6-10s | <2s |
| CLS | High (layout shifts) | <0.05 |
| Page Size | ~3-5MB (WordPress bloat) | <500KB |
| Requests | 50-80+ | <20 |

### What's Wrong (Evidence-Based)
1. "Your About Us page is broken — shows 'Page 1 of 0' with zero team info"
2. "Zero call-to-action buttons on any service page — visitors read, then leave"
3. "No contact form — in 2026, people expect instant contact, not hunting for email"
4. "Your emergency service isn't prominently displayed — competitors capture those calls"
5. "WordPress + Enfold loads 3-5MB of unnecessary code on every page"
6. "No Google Business schema — you're invisible in local knowledge panels"
7. "No project showcases — your competitors show their work, you don't"
8. "Mobile experience is a wall of text with no visual structure"

### Revenue Impact Framing
- "Every second of load time = 7% drop in conversions (Google data)"
- "53% of mobile users abandon sites taking >3 seconds to load"
- "Your competitors are capturing emergency leads you're missing"
- "Local SEO with proper schema = 3-5x more visibility in München searches"

---

## 6. SOCIAL & ONLINE PRESENCE

- **Facebook:** facebook.com/Pertler.GmbH/
- **LinkedIn:** linkedin.com/company/ernst-pertler/
- **Instagram:** instagram.com/pertler_gebaeudetechnik/
- **Directories:** wasserwaermeluft.de, sanitaer.org, hwk-muenchen.de, 11880.com
- **Reviews:** nicelocal (mixed), baukatastrophen.de (negative), ProvenExpert (5.0, 2 reviews)
- **No Google Ads running** — major opportunity gap
