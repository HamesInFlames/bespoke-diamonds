/**
 * Business facts for Bespoke Diamonds. Single source of truth for anything
 * that appears in more than one place. Items marked CONFIRM are awaiting
 * Romi's sign-off (see PLAN.md §7).
 */
export const site = {
  name: 'Bespoke Diamonds',
  legalName: 'Bespoke Diamonds',
  tagline: 'Custom diamonds, made for you.',
  phoneDisplay: '416-879-9387',
  phoneHref: 'tel:+14168799387',
  smsHref: 'sms:+14168799387',
  email: 'info@bespokediamonds.ca',
  area: 'Thornhill, Ontario', // CONFIRM: Thornhill vs Vaughan wording
  hours: 'Six days a week, by appointment only',
  yearsInTrade: '35+', // CONFIRM: 1969 / 1995 / 1999
  social: {
    facebook: 'https://www.facebook.com/bespokediamonds.canada/',
    instagram: 'https://www.instagram.com/bespokediamonds.canada/',
  },
  integrations: {
    // LeadConnector (GoHighLevel) booking calendar. The old widget (B6vgwBNr2oOuFdV0dC54)
    // was deleted in Sept 2026 and the live site fell back to "please call". CONFIRM a new
    // ID with Romi; until then the booking page shows a request form instead of an embed.
    bookingWidgetId: import.meta.env.VITE_BOOKING_WIDGET_ID ?? '',
    podiumToken: import.meta.env.VITE_PODIUM_TOKEN ?? '',
    gtagId: import.meta.env.VITE_GTAG_ID ?? 'AW-11484726786',
    phoneConversionLabel: import.meta.env.VITE_PHONE_CONVERSION_LABEL ?? '9U4ACITyns4ZEIKMrOQq',
    formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
  },
} as const

export type CollectionSlug =
  | 'rings'
  | 'wedding-bands'
  | 'bracelets'
  | 'watches'
  | 'earrings'
  | 'necklaces'

export interface Collection {
  slug: CollectionSlug
  name: string
  singular: string
  blurb: string
}

export const collections: Collection[] = [
  { slug: 'rings', name: 'Rings', singular: 'ring', blurb: 'Engagement and statement rings, classic or entirely your own.' },
  { slug: 'wedding-bands', name: 'Wedding Bands', singular: 'wedding band', blurb: 'Eternity, pavé and plain bands in every metal we work with.' },
  { slug: 'bracelets', name: 'Bracelets', singular: 'bracelet', blurb: 'Tennis bracelets and custom links, natural or lab-grown.' },
  { slug: 'watches', name: 'Watches', singular: 'watch', blurb: 'Diamond-set and custom-finished timepieces.' },
  { slug: 'earrings', name: 'Earrings', singular: 'pair of earrings', blurb: 'Studs, drops and halos, matched by hand.' },
  { slug: 'necklaces', name: 'Necklaces', singular: 'necklace', blurb: 'Solitaire pendants, tennis necklaces and custom pieces.' },
]

export const nav = [
  { to: '/about-us', label: 'About' },
  { to: '/our-services', label: 'Services' },
  { to: '/rings', label: 'Collections', children: collections.map((c) => ({ to: `/${c.slug}`, label: c.name })) },
  { to: '/contact-us', label: 'Contact' },
] as const

export const partners = [
  { name: 'GIA', src: '/images/partners/gia.gif' },
  { name: 'International Gemological Institute', src: '/images/partners/igi.png' },
  { name: 'Rapaport Diamond Network', src: '/images/partners/rapaport.jpg' },
  { name: 'Israel Diamond Exchange', src: '/images/partners/israel-diamond-exchange.jpg' },
  { name: 'Canadian Jewellers Association', src: '/images/partners/cja.png' },
  { name: 'Malca-Amit', src: '/images/partners/malca-amit.png' },
  { name: 'Harold Weinstein Gemological', src: '/images/partners/harold-weinstein.png' },
]

export interface Testimonial {
  name: string
  quote: string
}

export const testimonials: Testimonial[] = [
  { name: 'Howard Tencer', quote: 'Romi created and delivered a stunning pair of custom design diamond studded gold hearts for my daughters on time and on budget. I wholeheartedly recommend Bespoke Diamonds to anyone looking for quality and value.' },
  { name: 'Vidal Cagua-Acuna', quote: 'Amazing, would definitely recommend! I purchased a diamond necklace and earrings for my girlfriend, customized exactly what she wanted. Romi was very kind and knowledgeable and exceeded our expectations.' },
  { name: 'John Paul Perruzza', quote: 'Simply the best! Romi stops at nothing to ensure his clients are comfortable and extremely satisfied. Extreme quality and beauty are the only options here. Highly recommend!' },
  { name: 'Jesus Acosta', quote: 'Excellent attention and communication the whole time. I started without any knowledge about diamonds and in the end I got an awesome engagement ring and knowledge about size, clarity, shape and more. They understand what you are looking for.' },
  { name: 'Shirli D', quote: 'I contacted Bespoke Diamonds while I was shopping around for a diamond ring. Romi was very professional and knowledgeable, the process was very easy and I received exactly what I had ordered and I love it. I highly recommend.' },
  { name: 'Gaganpal Mutti', quote: 'Romi was amazing in helping me select the perfect engagement ring. He is a great person with a positive attitude, was very patient with me and worked with my budget. I would recommend him to all my friends and family.' },
]
