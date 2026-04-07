# Design Patterns & Inspiration for Pertler Rebuild

## Best-in-Class Trade Websites

### Awwwards-Level Examples
1. **The Pink Plumber** (thepinkplumber.com) — phone number TWICE in header, bold brand color
2. **SPS Plumbers** (spsplumbers.com.au) — 20+ year heritage as trust signal, strong SEO
3. **Allgood Plumbing & Electric** (allgoodplumbingandelectric.com) — multi-service on one site
4. **Furnasman** (furnasmanright-time.ca) — sticky CTAs, priority scheduling for maintenance customers
5. **Absolute Home Services** — 5,117% increase in organic traffic after redesign, trust badges front-center

### German SHK Award Winners
- **Handwerkerseite des Jahres** (MyHammer award) — evaluates Design, Content, User-friendliness
- **WebHammer Award** (handwerk.com) — weekly winners

---

## Must-Have Design Patterns

### 1. Hero Section (Above the Fold)
- Clear headline: what you do + where you serve
- One primary CTA ("Termin vereinbaren" / "Kostenlose Beratung")
- Phone number visible (click-to-call on mobile)
- Trust badges: Google rating, years in business (seit 1984), awards
- Optional: video background with real team (NOT stock)

### 2. Sticky Header
- Persistent phone number + CTA button while scrolling
- Compact on scroll (shrink logo, reduce padding)
- Emergency/Notdienst banner above main nav (red, always visible)

### 3. Emergency Banner
- Full-width bar, contrasting red color
- "Notfall? Rufen Sie uns an: 089 / 35 89 49 78"
- Click-to-call on mobile
- Conversion rate: 1-5% for full-width vs 0.5-1.5% for sidebar

### 4. Service Cards (Homepage)
- 4 division cards with color-coded accents (matching logo bars)
- Icon + title + 2-line description + "Mehr erfahren" link
- Equal visual weight for all 4 divisions
- Hover effect: subtle lift + color accent reveal

### 5. Trust Bar
- Horizontal strip with: "Seit 1984" | "Top 100" | "Bavaria's Best 50" | "X+ Mitarbeiter"
- Logo/badge format, subtle background
- Between hero and services section

### 6. Conversion Elements (per page)
- **Every service page needs:** at least 2 CTAs (top + bottom)
- **"Kostenlos anfragen"** button — orange (brand CTA color)
- **Phone number** — always in header + footer + contact sections
- **Online Buchung** link — in nav and on service pages

### 7. Contact Section (on every page)
- Mini contact strip before footer: phone, email, booking link
- "Wir beraten Sie gerne" with portrait photo of contact person

---

## The Multi-Division Solution

### Recommended: Option B — One Site, Color-Coded Divisions

Each division gets a subtle color accent matching the logo bars:
- **Heizung:** Dark red accents (`#8B1A1A`)
- **Sanitär:** Blue accents (`#2E3B8C`)
- **Elektro:** Green accents (`#00834B`)
- **Bäder:** Orange accents (`#E87D1E`)

Implementation:
- Homepage: 4 equal cards, each with division color
- Service pages: top border or sidebar accent in division color
- Breadcrumbs tinted with division color
- Shared nav, header, footer across all

---

## Page-by-Page Design Notes

### Homepage
1. Hero with headline + CTA + trust badges
2. Emergency banner (red, sticky or top)
3. 4x Service division cards (color-coded)
4. Trust bar (awards, years, stats)
5. Featured project showcase (3 cards with images)
6. Testimonial section (Google reviews or ProvenExpert)
7. Booking CTA section (full-width, orange background)
8. Team teaser (3-4 team members with photos)
9. FAQ accordion (3-5 common questions)
10. Footer (all 4 entities, contact info, map, social links)

### Service Pages (x4)
1. Hero with service-specific headline + CTA
2. Service overview (what we do)
3. Detailed service list (cards or accordion)
4. Project gallery (before/after if available)
5. FAQ section (service-specific questions)
6. Related services cross-links
7. Booking/contact CTA

### Contact Page
1. All 4 entities with full contact details
2. Contact form (name, email, phone, service type, message, optional upload)
3. Embedded Google Map with pin
4. Business hours
5. Emergency number prominently displayed

### About Page
1. Company story / history timeline
2. Team grid with photos + roles
3. Awards showcase
4. Values/mission statement
5. Stats (years, projects, employees)

### Booking Page
1. Multi-step form with smart branching
2. Service type selection (visual cards)
3. Problem description (free text)
4. Optional image/video upload (drag & drop, skippable)
5. Contact details
6. Preferred date/time
7. Confirmation with expected response time

---

## Mobile-Specific Patterns
- Click-to-call everywhere (phone numbers are buttons)
- Hamburger menu with prominent "Notfall" button
- Sticky bottom bar: Phone | Booking | WhatsApp (optional)
- Camera shortcut for image upload in booking flow
- Larger touch targets (48px minimum)
- Simplified hero (no video on mobile, poster image)

---

## Booking/Scheduling Tools (German Market)
- eTermin, SuperSaaS, SimplyBook.me — popular in German trades
- HalloPetra — AI phone assistant for SHK/Elektro firms
- Custom form + email (our approach — native, fastest, on-brand)

## Sources
- Hook Agency (hookagency.com/blog/hvac-websites/)
- ServiceTitan (servicetitan.com/blog/hvac-websites)
- Deutsche Handwerks Zeitung (handwerker best homepages)
- Awwwards (plumber/contractor nominees)
- Comrade Web (contractor websites)
