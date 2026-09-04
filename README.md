# Bespoke Diamonds — website

Rebuild of [bespokediamonds.ca](https://www.bespokediamonds.ca) by Kim Consultant.

## Stack
React 19 · Vite · TypeScript (strict) · Tailwind v4 · Motion · Express (Railway).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
npm start          # serves dist/ on $PORT (Railway)
```

## Where things live
- `PLAN.md` — discovery audit and page-by-page plan; §7 is the client-confirmation list.
- `docs/design-decisions.md` — tokens and the reasoning behind them.
- `src/data/site.ts` — business facts, navigation, collections, testimonials, integration IDs.
- `src/index.css` — Tailwind theme tokens.
- `src/components/` — `ui` (primitives), `layout` (header, footer, mobile bar), `sections` (reusable page blocks).
- `src/pages/` — one file per route. `/styleguide` is an internal reference route.
- `public/images/` — optimised logo, partner logos and Romi's own photos.
- `assets/source/` — every image pulled from the live site with `manifest.json` (source URL → page). Not served.
- `research/` — crawl text for each page.

## Integrations
Configured in `.env` (see `.env.example`): LeadConnector booking widget, Podium text widget, Google Ads tag + phone conversion, email-relay form endpoint. Defaults match the live site; the form falls back to `mailto:` until an endpoint is set.
