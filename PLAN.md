# Bespoke Diamonds — Website Revamp Plan

Client: Bespoke Diamonds (Romi Tsafrir), Thornhill / Vaughan, ON · Current site: https://www.bespokediamonds.ca (Webflow, built by Variance Marketing, last published 27 May 2026)
Prepared by Kim Consultant · 3 Sep 2026 · Status: discovery complete, awaiting client confirmations + GitHub repo

Research artefacts in this folder:
- `research/html/` — raw HTML of all 11 pages · `research/text/` — readable text of each page
- `assets/source/` — 121 images/logos pulled from the live site (24 MB) · `assets/source/manifest.json` — file → source URL → page map
- `research/contact-sheet.jpg`, `research/contact-sheet-css.jpg` — thumbnails of every image

---

## 1. Snapshot of the current site

| Item | Finding |
|---|---|
| Platform | Webflow, jQuery, Open Sans body · Italiana display · Poppins utility |
| Pages (11) | Home, About Us, Our Services, Rings, Wedding Bands, Bracelets, Watches, Earrings, Necklaces, Schedule Appointment, Contact Us, Privacy Policy |
| Conversions | Podium "Text us" chat bubble · click-to-call 416-879-9387 (Google Ads phone conversion AW-11484726786) · LeadConnector (GoHighLevel) booking calendar iframe on Schedule Appointment and every collection page · Webflow contact form (name, email, phone, message) |
| Media | 2 Vimeo CAD-render videos ("We Bring Your Design To Life") · ~40 product photos across 6 collection pages · 7 partner logos · 6 testimonials (5-star) |
| Socials | facebook.com/bespokediamonds.canada · instagram.com/bespokediamonds.canada · email info@bespokediamonds.ca |
| Not on site | Street address, hours (only "6 days/week, appointment only"), Google rating, pricing, lab-grown vs natural guidance, FAQ |

### Problems the revamp fixes
1. Home page has duplicate sections (Temporary Ring, Lifetime Upgrade, Out-of-the-box request each appear twice: desktop + mobile copies in the DOM).
2. Contradictory dates: "since 1969 / 35+ years" (Home) vs "Since 1995" (About) vs "since 1999" (About wholesale). Needs one true story.
3. Collection pages are bare image grids with no names, prices, filters, or lightbox; no way to enquire about a specific piece.
4. Many product photos are lifted from other retailers (Tiffany, Brilliant Earth, Clean Origin, Cartier, Blancpain, Amazon listings, a Rolex box). Legal and credibility risk; the Watches page shows brands Romi may not sell.
5. Hero image is a 24 KB stock crop; the site loads 40 unused template backgrounds (Unsplash fashion shots, "Store-01/02/03" template store photos).
6. Currency setting is USD; site is Canadian. Typos: "pirces", "dissapointed", "finance" (fiancé), "SCHedule", "Tencer".
7. No structured data, generic meta titles, no descriptions, no Google Business tie-in.

---

## 2. Design direction (client brand, not KC's)

Modern jewellers that convert (VRAI, Mejuri, Brilliant Earth, Tiffany, Toronto's Dainty Diamond) share the same proven pattern: quiet ivory ground, one warm metal accent, a refined serif display face, generous whitespace, photography doing the talking, and a persistent "Book an appointment" CTA. We apply that pattern with Bespoke's own gold.

**Palette** (gold sampled from the logo, #F8D090, then darkened for contrast)
- Ivory ground `#FAF7F1` · Ink `#141210` · Champagne gold `#D4B36A` (accents, rules, hover) · Deep gold `#9C7A3C` (gold text on light) · Warm stone `#6F675C` (secondary text) · Hairline `#E4DCCD`
- Dark sections (footer, appointment band): Ink ground with champagne type. Gold is an accent, never a fill.

**Type**
- Display: Cormorant Garamond (light/medium) for headlines; Italiana kept for the wordmark and eyebrows so the logo still feels native.
- Body/UI: Jost (geometric, quiet, pairs with the logo's crown geometry). Tabular numerals for carat/mm figures.

**Layout & motion**
- 12-col grid, 1280 max, 88px section rhythm. Slim sticky header that turns solid on scroll with "Book appointment" always visible; sticky bottom bar on mobile: Call · Text · Book.
- Motion per KC scroll-animations playbook: fade/rise reveals, image hover-zoom on tiles, one hero moment (slow Ken-Burns on the hero photo or a scrubbed loose-diamond rotation using the three diamond PNGs). No scroll hijacking; respects `prefers-reduced-motion`.

---

## 3. Site map (URLs preserved for SEO)

```
/                      Home
/about-us              About (story, credentials, partners)
/our-services          Services (6 service blocks + collection strip)
/rings /wedding-bands /bracelets /watches /earrings /necklaces   Collections (one templated route)
/schedule-appointment  Booking (calendar embed + what to expect)
/contact-us            Contact (form, call, text, socials, service area)
/privacy-policy        Legal
```
Optional adds (recommend, small cost): `/custom-design` (the 3-step process + Vimeo renders + Raptors pendant) and an FAQ section on Home. No blog.

---

## 4. Page-by-page

### Home
1. **Hero** — full-bleed photo (hands with bracelet, or Romi's own necklace shot `css-IMG_5641-scaled.jpg`), headline "Custom diamonds, made for you." sub: 35+ years trading rough & polished diamonds · appointment-only · wholesale pricing. CTAs: Book an appointment (primary) / Text us.
2. **Trust bar** — GIA · IGI · Rapaport · Israel Diamond Exchange · Canadian Jewellers Association · Malca-Amit · Harold Weinstein logos (all in `assets/source`).
3. **"It starts with knowledge"** — split section, photo right, the Cut/symmetry/fluorescence copy tightened into a 4Cs-plus checklist.
4. **Collections** — 6 tiles with hover zoom (ring/band/bracelet/watch/earring/necklace).
5. **3-step process** — Occasion → Ideas & references → We build (numbered because it truly is a sequence). Vimeo CAD videos embedded here as "We bring your design to life".
6. **Signature promises** — 3 cards: 100% satisfaction guarantee (remake at our expense) · Free lifetime upgrade on natural loose diamonds (with the exclusions note) · 3-day Temporary Ring option.
7. **Reviews** — 6 existing testimonials in a carousel with Google rating badge (pull live rating if Romi shares the Place ID).
8. **Out-of-the-box requests** — repair, appraisal, insurance claims, adding diamonds to watches, upgrading, selling, second opinion — as a compact list with icons.
9. **Appointment band** (dark) — booking calendar or CTA.
10. **Footer** — logo, quick links, collections, socials, phone/email, "Serving the GTA by appointment", privacy.

### About Us
Hero photo (red-dress ring photo `css-79B99663…jpg`, Romi's own) + "Second-generation diamond purveyors" · timeline of the real story (dates to confirm) · Credentials grid (Diamond Bourse of Canada founding member, CJA, Israel Diamond Exchange, Rapaport trusted brand) · 3D magnified diamond-viewing technology · Wholesale heritage (Birks, European Jewellery, Calgary Jewellery, $30M+ sold — confirm) · "We promise to deliver" 4 promises · Partner logos · CTA.

### Our Services
Intro + 6 service sections, alternating photo/text: Custom Design Specialist · 3D Jewellery Designer · GIA-Certified Gemologist (appraisals) · Special requests (metals 10K–19K/platinum, ethical origin, natural vs lab-grown, milgrain/engraving, sizing) · "Help me match her style" + Temporary Ring · Curated collection strip. Each section ends in a Book CTA that pre-selects the service (query param passed to the booking page).

### Collections (one template, six data files)
Category hero line · filter chips (metal, style) · responsive masonry grid with piece name + short spec · lightbox · "Enquire about this piece" opens the contact form with the piece pre-filled · "And many more — book to see the full catalogue" · appointment band. Photos: reuse the existing grid images for now, flagged for replacement with Romi's own inventory shots (see §6).

### Schedule Appointment
Two columns: left = what to expect (private session with a diamantaire, 3D viewing tech, phone/email/in-person options, Thornhill by appointment), right = LeadConnector calendar embed (same widget ID `B6vgwBNr2oOuFdV0dC54`). Fallback Call/Text buttons. Reviews strip below.

### Contact Us
Form (name, email, phone, message, optional "piece I'm interested in") via email relay to info@bespokediamonds.ca · Call + Text buttons · socials · service-area note · privacy line.

### Privacy Policy
Existing text, corrected domain (.ca not .com), readable measure.

---

## 5. Features replicated 1:1 (and how)

| Feature | Current | New build |
|---|---|---|
| Text us chat | Podium widget script (API token in page) | Same Podium script, loaded after interaction for performance; also a "Text us" SMS deep link on mobile bar |
| Book appointment | LeadConnector iframe | Same iframe, responsive wrapper, plus service pre-selection |
| Click-to-call | tel: link + Google Ads phone conversion | Same, with gtag conversion event kept |
| Contact form | Webflow form | Email-relay form service → info@ (KC standard), spam honeypot |
| Design videos | 2 Vimeo embeds | Same embeds, lazy-loaded with poster frames |
| Reviews | 6 static quotes | Same quotes + optional live Google rating |
| Analytics | gtag AW-11484726786 | Kept; add GA4 if Romi has a property |

---

## 6. Photo inventory (all pulled from the live site into `assets/source/`)

- **Romi's own (use freely, prioritize):** red-dress ring photo, sunglasses/necklace portrait, white-blazer necklace shot, Toronto Raptors custom pendant, three loose-diamond renders (oval/radiant/round), Rolex-box photo (only if it's his stock), 5-star graphic, logo (1000×1000 PNG), 7 partner logos, Vimeo CAD renders.
- **Free stock (Unsplash/Pexels, safe):** ~25 lifestyle backgrounds from the template; a handful are usable for section backgrounds.
- **Risky (replace before launch):** ~35 product grid photos whose filenames trace to Tiffany, Brilliant Earth, Clean Origin, VRAI, Cartier, Blancpain, Amazon and a Getty/Photodune licensed image. We reuse them in the build as placeholders and ask Romi for a half-day of product photography (or his supplier's licensed images).
- Hero source is 24 KB; request originals for anything above the fold.

---

## 7. Accuracy items to confirm with Romi (before copy is final)

1. Founding story: 1969 vs 1995 vs 1999, and "second-generation".
2. Sales claims: "$30 million sold", "1000+ clients & retailers", named retailers (Birks, European Jewellery, Calgary Jewellery).
3. Memberships still current: Diamond Bourse of Canada (founding member), CJA, Israel Diamond Exchange, Rapaport.
4. Watches: does Bespoke sell Rolex/Cartier/Blancpain, or only diamond-set custom watches? Page may need reframing.
5. Lifetime upgrade and Temporary Ring terms (3 days, 2.5 mm yellow/white gold Tiffany-style, credit toward mounting).
6. Location wording (Thornhill/Vaughan, appointment-only, showroom or office?) and days/hours.
7. Google Business profile link and permission to show live rating.
8. Podium, LeadConnector and Google Ads accounts stay as-is? **Update 9 Sep:** the LeadConnector calendar (B6vgwBNr2oOuFdV0dC54) has been deleted and the live site now says "please call". Need a new calendar ID, or the booking page keeps its request form.
9. Natural vs lab-grown positioning (site sells both but upgrade excludes lab).

---

## 8. Build plan (KC standard stack)

React 19 + Vite + TypeScript strict + Tailwind + Motion · Express + Railway · Cloudflare DNS.

| Phase | Work | Output |
|---|---|---|
| 0 Discovery (done) | Crawl, inventory, this plan | `PLAN.md`, `assets/source` |
| 1 Foundations | Repo scaffold (KC build ritual), design tokens, type scale, layout shell, nav/footer, mobile CTA bar | Styleguide page |
| 2 Pages | Home → About → Services → Collections template → Booking → Contact → Privacy | Staging URL |
| 3 Integrations | Podium, LeadConnector, form relay, gtag, Vimeo, SEO meta + JSON-LD (JewelryStore), sitemap, 301 map | Working conversions |
| 4 Content & photos | Corrected copy signed off, replacement product photos dropped in via data files | Final content |
| 5 QA & launch | Playwright + axe + Lighthouse, asset cleanup, DNS cutover, Search Console | Live site |

Next step: James shares the GitHub repo → scaffold Phase 1.
