# Bespoke Diamonds — project notes for Claude

Kim Consultant client build (owner Romi Tsafrir, Thornhill ON). Load the `kim-consultant` skill for KC process; apply **the client's brand**, never KC's gold-on-black.

- Plan of record: `PLAN.md`. Open client questions: `PLAN.md` §7. Design tokens and reasoning: `docs/design-decisions.md`.
- Facts (phone, email, hours, claims) live only in `src/data/site.ts`. Items marked CONFIRM are unverified; do not present them as settled copy.
- All photos must come from the existing site (`assets/source/`, optimised copies in `public/images/`). Product photos traced to other retailers are placeholders; do not add new stock imagery.
- Keep every current URL (`/rings`, `/schedule-appointment`, etc.). No blog.
- Scroll effects follow the KC scroll-animation playbook: no scroll hijacking, honour `prefers-reduced-motion`, content visible at rest.
- Before delivery: `npm run build`, `npm run lint`, then Playwright + axe + Lighthouse.
- Commit style: short imperative subject; end with the Claude co-author trailer.
