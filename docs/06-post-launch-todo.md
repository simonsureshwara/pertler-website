# Post-Launch TODO — Nach Kundenübernahme

## 0. SOFORT BEI GO-LIVE
- [ ] **noindex ENTFERNEN!** `src/layouts/BaseLayout.astro` — Zeile mit `<meta name="robots" content="noindex, nofollow" />` löschen + neu deployen
- [ ] Google Business Profile Link im Footer oder Kontaktseite einbauen
- [ ] Mehr Testimonials pro Service-Seite (2-3 statt 1, echte Kundenbewertungen)
- [ ] Emojis auf Leistungsseiten → Lucide SVG Icons (FeatureGrid Refactor)
- [ ] CTA-Texte differenzieren (intention-based statt überall "Angebot anfordern")

## 1. Tracking & Analytics einrichten
- [ ] Mit Kunde klären welche Tools: GA4, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag?
- [ ] Google Analytics 4 Property erstellen + Measurement ID eintragen
- [ ] Google Tag Manager Container anlegen (sauberer als direkte Script-Einbindung)
- [ ] Meta Pixel einrichten (wenn Facebook/Instagram Ads geplant)
- [ ] Conversion Tracking: Formular-Abschlüsse als Events tracken (Kontakt, Rechner, Buchung)
- [ ] Google Ads Conversion Tracking (wenn Ads geplant)

## 2. Cookie Banner / Consent Management
- [ ] Cookie-Kategorien definieren: Notwendig, Statistik, Marketing
- [ ] Cookie Banner konfigurieren (Opt-in, granulare Kategorien, keine Pre-Checks)
- [ ] Tracking-Scripts nur nach Einwilligung laden (DSGVO-konform)
- [ ] Cookie-Richtlinie/Datenschutz-Seite aktualisieren mit allen eingesetzten Cookies
- [ ] Consent Management testen (alle Kombinationen: alles akzeptieren, nur notwendig, individuell)
- [ ] Consent-Mode v2 für Google (falls GA4 genutzt)

## 3. E-Mail Backend für Formulare
- [ ] E-Mail-Service einrichten (Resend, SendGrid, oder Pertlers eigener Mailserver)
- [ ] Kontaktformular → info@pertler.de
- [ ] Heizungsrechner → info@pertler.de (Betreff: "Heizungsrechner-Anfrage")
- [ ] Badrechner → bad@pertler.de (Betreff: "Badrechner-Anfrage")
- [ ] Buchungsstrecke → service@pertler.de (Betreff je nach Kategorie)
- [ ] Bestätigungs-E-Mail an User nach Absenden
- [ ] Spam-Schutz: Honeypot-Feld oder Cloudflare Turnstile
- [ ] DSGVO: Datenverarbeitungshinweis in der Bestätigungs-Mail
- [ ] E-Mail-Zustellbarkeit testen (SPF, DKIM, DMARC der Absender-Domain)

## 4. Projekte — echte Inhalte
- [ ] Echte Projektfotos vom Kunden erhalten (Referenzprojekte)
- [ ] Projekttexte schreiben lassen oder mit Kunde abstimmen
- [ ] Placeholder-Bilder durch echte Fotos ersetzen
- [ ] Ferrari Showroom: echte Bilder + Detailtext vom Kunden
- [ ] Weitere Referenzprojekte hinzufügen wenn verfügbar
- [ ] Testimonials: echte Kundenbewertungen einbauen (Google Reviews, ProvenExpert)

## 5. Google Search Console & SEO
- [ ] Property für pertler.de verifizieren (DNS oder HTML-Tag)
- [ ] Sitemap einreichen (https://www.pertler.de/sitemap-index.xml)
- [ ] Indexierung überwachen — alle 26 Seiten im Index?
- [ ] Core Web Vitals monitoren
- [ ] Alte URLs prüfen ob Redirects korrekt greifen (30 Stück)
- [ ] Bing Webmaster Tools einrichten (kostenlos, wird unterschätzt)
- [ ] Schema Markup testen (schema.org Validator, Google Rich Results Test)
- [ ] Google Business Profile aktualisieren (Website-URL, Fotos, Öffnungszeiten)

## 6. Domain & DNS
- [ ] Domain pertler.de auf Vercel zeigen (DNS A/CNAME Records)
- [ ] SSL-Zertifikat automatisch via Vercel
- [ ] www → non-www Redirect (oder umgekehrt) — konsistent halten
- [ ] Alte WordPress-Installation deaktivieren / Backup sichern
- [ ] E-Mail-Routing prüfen (MX Records nicht anfassen!)
- [ ] Subdomain für Staging: staging.pertler.de (optional)

## 7. Monitoring & Uptime
- [ ] Uptime-Monitoring einrichten (UptimeRobot, BetterStack — kostenlos)
- [ ] Error-Tracking (Sentry — optional, für Form-Fehler relevant)
- [ ] Vercel Analytics aktivieren (Web Vitals Dashboard)
- [ ] Monatlicher Performance-Check (Lighthouse CI oder manuell)

## 8. Content & Marketing
- [ ] Blog starten — 2-3 Seed-Artikel für SEO (z.B. "Wärmepumpe in München", "Bad sanieren Kosten")
- [ ] Social Media Profile aktualisieren (neue Website verlinken)
- [ ] Google Ads Kampagne aufsetzen (wenn gewünscht — "Heizung München", "Notdienst Heizung München")
- [ ] Team-Fotos: Namen nachpflegen wenn Kunde die zuliefert
- [ ] Lokale Branchenverzeichnisse aktualisieren (11880, wasserwaermeluft.de, etc.)

## 9. Rechtliches (mit Kunde/Anwalt)
- [ ] Impressum: Handelsregisterdaten mit Kunde abgleichen (HRB-Nummern, USt-IdNr)
- [ ] Datenschutzerklärung: mit Anwalt oder Generator (e-recht24, IT-Recht Kanzlei) finalisieren
- [ ] AV-Verträge: mit allen Dienstleistern abschließen (Hosting/Vercel, E-Mail, Analytics)
- [ ] Widerrufsrecht: Texte mit Kunde prüfen (4 Gesellschaften)
- [ ] BFSG Barrierefreiheit: ab 2025 Pflicht — Status prüfen

## 10. Übergabe an Kunden
- [ ] Zugänge übergeben: Vercel, GitHub Repo, Google Search Console, GA4
- [ ] Dokumentation: Wie Inhalte ändern? (Markdown-Dateien, wo was liegt)
- [ ] Support-Vertrag klären: Wartung, Updates, Hosting-Kosten
- [ ] Schulung: 30min Walkthrough wie die Seite funktioniert
- [ ] Backup-Strategie: Git Repo = Backup, aber Vercel Project Settings sichern

---

## Was BEREITS implementiert ist (kein TODO):
- ✅ Security Headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- ✅ HTTPS (automatisch via Vercel)
- ✅ Cache-Control (Fonts immutable, Images 30d)
- ✅ robots.txt + Sitemap (@astrojs/sitemap)
- ✅ JSON-LD Schema (LocalBusiness, Service, FAQ, Breadcrumbs)
- ✅ Open Graph + Twitter Cards (inkl. og:image)
- ✅ 301 Redirects (30 alte URLs → neue Struktur)
- ✅ Skip-to-content Link
- ✅ aria-live auf Progress-Bars
- ✅ Self-hosted Fonts (DSGVO-konform, kein Google Fonts CDN)
- ✅ Cookie Banner Grundstruktur (Consent-Logik muss noch mit Tracking verbunden werden)
- ✅ Alle Bilder lokal (kein Unsplash, kein CDN, kein externer Bildserver)
