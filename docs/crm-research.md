# CRM research — Bespoke Diamonds

Prepared by Kim Consultant · 9 Sep 2026 · for James, then Romi

## 1. What a CRM has to do for this business

Bespoke Diamonds is not a jewellery store in the usual sense. It is appointment-only, one diamantaire facing the client, low volume and high ticket, and it runs two businesses at once:

- **Retail custom work.** Engagement rings, custom pieces, remakes, watches with added diamonds. A job runs consult → references → stone sourcing (Rapaport Trade) → wholesale quote → deposit → CAD render → approval → manufacture → set → delivery.
- **Wholesale.** Loose diamonds to retailers (Birks, European Jewellery, Calgary Jewellery per the site), which means memo/consignment tracking and repeat B2B accounts.

Leads arrive from six places: the website form, the LeadConnector booking calendar, the Podium text bubble, phone calls from Google Ads, Instagram/Facebook DMs, and referrals. Today nothing joins them up.

The site also makes three promises that only work if records exist:

| Promise | What the CRM must hold |
|---|---|
| Free lifetime upgrade on natural loose diamonds | Every stone sold: cert number, carat, price paid, date, tax paid |
| 3-day temporary ring | A task that fires 3 days after purchase to bring the partner in |
| Appraisals and insurance claims | Appraisal date and value, so a re-appraisal reminder can go out yearly |

Add the obvious relationship triggers for a jeweller: proposal date, wedding date, anniversary, partner's birthday, ring size, metal preference, budget band.

Compliance is not optional. **CASL** requires express consent (unchecked box, recorded with date and source) before any marketing text or email, an unsubscribe link in every marketing message, and consent records kept 3 years. Appointment reminders and order updates are transactional and exempt. **PIPEDA** does not require Canadian data residency but does require a privacy policy that discloses processing by US providers, a named privacy officer (Romi), and accountability for what vendors do with the data.

## 2. What Romi already has

The current site embeds a **LeadConnector** booking calendar. LeadConnector is the white-label name of **GoHighLevel** when an agency resells it, so Romi already has a GoHighLevel sub-account, almost certainly under Variance Marketing's agency plan. GoHighLevel is a full CRM: contacts, pipelines, calendar, two-way SMS and email, automations, forms, review requests, a website chat widget, and a mobile app. He is probably using 5% of it.

He also pays for **Podium** for the text-us bubble and review requests. Podium's Core plan is $399/month, and most small businesses land at $450 to $600 a month after fees and add-ons on an annual contract. Everything Podium does for him, GoHighLevel also does.

**First question for Romi:** who owns the GoHighLevel account, and what does he pay Variance and Podium each month? The answer changes the recommendation more than any feature comparison.

## 3. The options

### A. Jewellery-specific

| Product | What it is | Cost (USD) | Fit |
|---|---|---|---|
| **Clientbook** | Clienteling platform built only for jewellery retail: client profiles with wish lists and ring sizes, a daily "who to contact" list, birthday/anniversary/90-day-dormant automations, texting, payments. Integrates with The Edge, Jewel360, Lightspeed, Shopify POS. | From about $295/month (Signature); quote required | The best jewellery data model on the market, but designed for stores with a sales floor. Worth it once Romi has staff or 100+ active clients. |
| **Jewel360** | Cloud POS for jewellers: serialized inventory, custom orders and repairs with stage tracking and customer notifications, appraisals, Clientbook bundled on some tiers. | Quote only, tiered Startup / Core / Plus | Right answer if he wants inventory, repair tickets and custom-order stages in one system. More than a CRM. |
| **The Edge** | The long-standing on-premise jewellery POS. | $4,000 to $8,000 licence plus $3,000 to $5,000 hardware, annual support | No. Windows server in the office, no mobile, wrong scale. |
| **Lightspeed Retail** | General retail POS with jewellery templates: customer profiles, ring size, purchase history. | $109 to $339 CAD/month; Lightspeed Payments mandatory at 2.6% + $0.10 | Only if he wants a POS. He is appointment-only and quotes wholesale, so POS is not his bottleneck. |
| **WJewel / Orderry** | Custom-order and repair work-order tools with CAD approval and deposit tracking. | Low hundreds/month | Niche; overlaps with what a pipeline in GoHighLevel can do. |

### B. General small-business CRMs

| Product | Cost (USD) | Notes |
|---|---|---|
| **GoHighLevel** (own account) | $97/month Starter, plus usage for SMS/email (typically $20 to $150) | Same platform he already has via LeadConnector. Unlimited contacts and users. Generic data model, but custom fields cover ring size, cert number, anniversary, consent. |
| **HubSpot** | Free CRM; Starter $20/seat/month | Excellent free tier and forms, but texting needs an add-on and automations are thin below Professional ($1,300/month). |
| **Zoho CRM** | $14 to $52/user/month | Cheapest full-featured option; Zoho One at $45/user bundles 45 apps. Steeper setup. |
| **Pipedrive** | $14 to $99/user/month | Clean visual pipeline, weak on marketing consent and SMS. |

### C. Build a custom CRM

Not recommended as the system of record. A CRM's value is the messaging, calendar, consent handling and mobile app, all of which take years to get right. What KC should build instead is the **glue**: the new site's forms and enquiry buttons post straight into the CRM with the piece, occasion and consent captured, and a small private "client and stone book" page could sit on the site later if a packaged CRM cannot hold the lifetime-upgrade records the way Romi wants.

### D. Wholesale side

Rapaport Trade (RapNet) is the marketplace, not a CRM. Memo and consignment tracking at Romi's volume fits a second pipeline in the CRM (stone → on memo → due date → returned/sold) with automatic reminders before memo expiry. Dedicated diamond-supplier software (JewelCloud and similar) only earns its cost with multi-location inventory and marketplace sync.

## 4. Recommendation

**Phase 1, now: make GoHighLevel the CRM of record and retire Podium.**

1. Confirm account ownership. If Variance owns the sub-account, either have it transferred or open a Starter account ($97/month) and move the calendar. Romi should own his client list.
2. Configure two pipelines: *Custom order* (Enquiry → Consult booked → Consulted → Quoted → Deposit → CAD approval → In production → Ready → Delivered → Review requested) and *Wholesale memo* (Requested → On memo → Due → Closed).
3. Custom fields: occasion, partner name, proposal/wedding date, anniversary, ring size, metal, budget band, stone cert number, appraisal date and value, upgrade-eligible (yes/no), CASL consent date and source.
4. Automations: booking confirmation and reminder (transactional); temporary-ring task at day 3; review request 7 days after delivery; appraisal reminder at 12 months; anniversary text at 11 months (marketing, consent required); dormant-at-180-days nudge for Romi, not the client.
5. Replace Podium's bubble with GoHighLevel's chat widget and SMS number. Google review requests come from the same place. Expected saving: roughly $400 to $600 a month.
6. Site integration (KC, Phase 3 of the build): contact form and "enquire about this piece" post to a GoHighLevel inbound webhook with the piece name and consent flag; booking page passes the selected service; phone clicks keep the Google Ads conversion.
7. Compliance: consent checkbox on every form, unchecked by default, with wording stored; unsubscribe on every marketing message; privacy policy updated to name US processing; Romi named as privacy contact.

**Phase 2, when it hurts:** if Romi hires a second person or wants wish lists and a daily contact list, add **Clientbook**. If he wants inventory, repair tickets and appraisals in one place, move to **Jewel360** (which bundles Clientbook).

## 5. Monthly cost picture (USD)

| Setup | Monthly | Comment |
|---|---|---|
| Today (est.) | Podium ~$450 + whatever Variance charges for LeadConnector | No pipeline, no records |
| Recommended | GoHighLevel $97 + usage ~$30 | One inbox, pipelines, automations, chat, reviews |
| Later, with clienteling | Add Clientbook ~$295 | Only with staff or a large active list |
| Later, with POS and inventory | Jewel360 (quote) | Replaces GoHighLevel pipelines for orders; keep GoHighLevel for marketing or consolidate |

## 6. Questions for Romi

1. Who owns the GoHighLevel (LeadConnector) account, and what does he pay Variance and Podium?
2. Volume: enquiries per month, custom orders per month, wholesale accounts active.
3. Does he use any POS or invoicing tool today (QuickBooks, Square, none)?
4. Where are past diamond sales recorded, for lifetime-upgrade eligibility?
5. Should wholesale accounts live in the same system?
6. Has he ever collected marketing consent, or would the list start from zero?

## Sources

Clientbook guides and pricing: clientbook.com/blog (2026 clienteling guide; Podium alternative), Capterra listing. Jewel360 vs The Edge comparison and pricing pages: jewel360.com. Lightspeed jewellery POS and Pavilion POS cost analysis. GoHighLevel pricing 2026: ruzuku.com, rsla.io, saleoid.com. Podium pricing 2026: socialpilot.co, astucia.io, replifast.com. HubSpot pricing 2026: resonatehq.com, engagebay.com. Zoho/Pipedrive: conduyt.com CRM pricing comparison. Custom order workflow: jewel360.com/blog/custom-jewelry-orders, wjewel.com. Wholesale/memo: jewelcloud.com diamond supplier software, rapnet.com. CASL: sendcheckit.com CASL guide, smartsmssolutions.com. PIPEDA: maximizer.com data residency, cloudorbis.com checklist.
