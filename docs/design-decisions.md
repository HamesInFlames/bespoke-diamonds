# Design decisions — Bespoke Diamonds

Recorded per the KC build ritual (ui-ux-pro-max `search.py`, run 3 Sep 2026). Client brand only; never KC's house brand.

## Inputs
- Logo gold sampled from `OFFICIAL_202_1_.png`: #F8D090 (light champagne). Too light for text on ivory, so it is deepened for use.
- `search.py "luxury jewelry diamond boutique appointment" --design-system --stack react` → pattern *Feature-Rich Showcase* (hero → feature cards → benefits → social proof/logos → CTA; sticky CTA + repeat), palette *Premium dark + gold accent* (#1C1917 primary, #A16207 accent, #FAFAF9 ground), typography *Luxury Serif* (Cormorant + Montserrat).
- Style hits (skeuomorphism, 3D product preview, exaggerated minimalism) were judged and rejected: too heavy, too costly, or wrong tone for a by-appointment diamantaire.

## Decisions
| Token | Value | Why |
|---|---|---|
| Ground | Ivory #FAF7F1 / deep #F3EEE3 | Warmer than the tool's #FAFAF9 so gold reads as gilt, not yellow |
| Ink | #141210 | Near-black with a warm bias; dark sections + text |
| Accent | Champagne #D4B36A (rules, eyebrows on dark), Gold #9C7A3C (gold text on light, 4.6:1 on ivory) | Derived from the logo; tool's #A16207 is close but oranger |
| Display | Cormorant Garamond 500 | Tool recommends Cormorant; Garamond cut has the better italics and numerals |
| Brand | Italiana | Already in the logo lockup on the live site; used for eyebrows only |
| Body / UI | Jost 300/500 | Tool suggests Montserrat; Jost is narrower and quieter, closer to the crown geometry, and avoids the most common luxury-template pairing |
| Rhythm | section = clamp(4rem, 8vw, 6.5rem); container 80rem | One spacing token, no per-section margins |
| Motion | Reveal (fade + 18px rise, 0.7s, luxe ease), hover scale 1.04 on tiles | KC scroll playbook; reduced-motion renders static |

## Patterns adopted
- Sticky header with persistent "Book an appointment"; mobile Call · Text · Book bar.
- Dark appointment band closes every page except the booking page.
- Trust bar of association/lab logos directly under the hero.
- Collections as 6 tiles; testimonials as 3-up quote cards with hairline tops.

## Not done
- 21st.dev components: the magic MCP was unauthenticated this session; components hand-built instead. Revisit if a key is added.
