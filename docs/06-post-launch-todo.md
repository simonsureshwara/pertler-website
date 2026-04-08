# Post-Launch TODO — Nach Kundenübernahme

## 1. Cookie Banner / Tracking einrichten
- [ ] Mit Kunde klären welche Tracking-Tools genutzt werden (GA4, Meta Pixel, LinkedIn Insight, etc.)
- [ ] Cookie-Kategorien definieren: Notwendig, Statistik, Marketing
- [ ] Cookie Banner konfigurieren (Opt-in, granulare Kategorien, keine Pre-Checks)
- [ ] Tracking-Scripts nur nach Einwilligung laden (DSGVO-konform)
- [ ] Cookie-Richtlinie/Datenschutz-Seite aktualisieren mit allen eingesetzten Cookies
- [ ] Consent Management testen (alle Kombinationen: alles akzeptieren, nur notwendig, individuell)

## 2. Projekte — echte Inhalte
- [ ] Echte Projektfotos vom Kunden erhalten (Referenzprojekte)
- [ ] Projekttexte schreiben lassen oder mit Kunde abstimmen
- [ ] Placeholder-Bilder (Unsplash WebP) durch echte Fotos ersetzen
- [ ] Ferrari Showroom: echte Bilder + Detailtext vom Kunden
- [ ] Weitere Referenzprojekte hinzufügen wenn verfügbar

## 3. Google Search Console
- [ ] Property für pertler.de verifizieren (DNS oder HTML-Tag)
- [ ] Sitemap einreichen (https://www.pertler.de/sitemap-index.xml)
- [ ] Indexierung überwachen
- [ ] Core Web Vitals monitoren
- [ ] Alte URLs prüfen ob Redirects korrekt greifen

## 4. E-Mail Backend für Formulare
- [ ] E-Mail-Service einrichten (Resend, SendGrid, oder Pertlers eigener Mailserver)
- [ ] Kontaktformular → info@pertler.de
- [ ] Heizungsrechner → info@pertler.de (mit Betreff "Heizungsrechner-Anfrage")
- [ ] Badrechner → bad@pertler.de (mit Betreff "Badrechner-Anfrage")
- [ ] Buchungsstrecke → service@pertler.de (mit Betreff je nach Kategorie)
- [ ] Bestätigungs-E-Mail an User nach Absenden
- [ ] Spam-Schutz: Honeypot-Feld oder Turnstile/reCAPTCHA
- [ ] DSGVO: Datenverarbeitungshinweis in der Bestätigungs-Mail

## 5. Domain & DNS
- [ ] Domain pertler.de auf Vercel zeigen (DNS A/CNAME Records)
- [ ] SSL-Zertifikat automatisch via Vercel
- [ ] www → non-www Redirect (oder umgekehrt)
- [ ] Alte WordPress-Installation deaktivieren / Backup sichern

## 6. Sonstiges
- [ ] Google Business Profile aktualisieren (neue Website-URL wenn nötig)
- [ ] Social Media Profile Links prüfen (Facebook, Instagram, LinkedIn)
- [ ] Team-Fotos: Namen nachpflegen wenn Kunde die zuliefert
- [ ] Impressum: Handelsregisterdaten mit Kunde abgleichen
- [ ] Datenschutzerklärung: mit Anwalt oder Generator finalisieren
