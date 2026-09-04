import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ArrowIcon } from '@/components/ui/Icons'
import { TrustBar } from '@/components/sections/TrustBar'
import { Testimonials } from '@/components/sections/Testimonials'
import { collections, site } from '@/data/site'
import { useSeo } from '@/lib/seo'

const collectionImages: Record<string, string> = {
  rings: '/images/photos/hands-rings.jpg',
  'wedding-bands': '/images/photos/hands-rings.jpg',
  bracelets: '/images/photos/hero-bracelet.jpg',
  watches: '/images/photos/showroom-01.jpg',
  earrings: '/images/photos/necklace-portrait.jpg',
  necklaces: '/images/photos/pendant-blazer.jpg',
}

const promises = [
  {
    title: '100% satisfaction guarantee',
    body: 'If the finished piece is not right the first time, we make another at our expense.',
  },
  {
    title: 'Free lifetime diamond upgrade',
    body: 'Trade any natural loose diamond bought from us toward a larger one, any time. Lab-grown stones, gemstones and settings excluded.',
  },
  {
    title: '3-day temporary ring',
    body: 'Propose with the stone in a classic mount, then bring your partner in to choose the final setting. The mount is credited in full.',
  },
]

export function Home() {
  useSeo({
    title: 'Bespoke Diamonds | Custom Diamonds & Jewellery, Toronto',
    description:
      'Custom-made diamonds and jewellery from second-generation diamantaires. Wholesale pricing, GIA-certified expertise, by appointment in Thornhill, Ontario.',
  })

  return (
    <>
      {/* Hero — sized to content; photo carries it */}
      <section className="relative isolate overflow-hidden bg-ink text-cream-text">
        <img
          src="/images/photos/necklace-portrait.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_30%] opacity-70"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/20" aria-hidden="true" />
        <Container className="flex min-h-[70vh] flex-col justify-end pb-16 pt-32 lg:pb-24">
          <Reveal>
            <p className="eyebrow eyebrow--light mb-5">{site.yearsInTrade} years in rough and polished diamonds</p>
            <h1 className="text-display-xl max-w-3xl text-cream-text">{site.tagline}</h1>
            <p className="mt-6 max-w-xl text-lg text-cream-text/80">
              Design, buy, sell or remake. One diamantaire, one client at a time, at wholesale rates and by appointment
              only.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/schedule-appointment" variant="light" size="lg">
                Book an appointment
              </Button>
              <Button href={site.smsHref} variant="ghost" className="text-champagne">
                Text us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <TrustBar />

      {/* Knowledge first */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal as="figure" className="m-0 order-last lg:order-first">
            <img
              src="/images/photos/pendant-blazer.jpg"
              alt="Solitaire pendant on a white blazer"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <SectionHeading
              eyebrow="It starts with knowledge"
              title="You cannot compare what you have never seen side by side."
              lede="Cut, symmetry, polish, fluorescence, tint, inclusions, crown angle. We put the stones in front of you under 3D magnification and explain what each one means for the piece and the price."
            />
            <ul className="mt-8 grid gap-3 text-[0.95rem] sm:grid-cols-2">
              {['Wholesale quote once you choose', 'Natural and lab-grown, explained plainly', 'GIA and IGI certified stones', 'Second opinions welcome'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 border-t border-hairline pt-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-champagne" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <Button to="/about-us" variant="ghost" className="mt-8">
              How we work <ArrowIcon />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Collections */}
      <Section tone="deep">
        <SectionHeading eyebrow="Collections" title="Classic pieces, or the start of your own." align="center" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 0.05}>
              <Link to={`/${c.slug}`} className="group block">
                <figure className="m-0 overflow-hidden bg-hairline">
                  <img
                    src={collectionImages[c.slug]}
                    alt=""
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </figure>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-display-sm">{c.name}</h3>
                  <span className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-gold">View</span>
                </div>
                <p className="mt-1 text-sm text-stone">{c.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Promises */}
      <Section>
        <SectionHeading eyebrow="Our promises" title="Three things nobody else in the trade offers together." />
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.06} className="border-t border-ink pt-6">
              <h3 className="text-display-sm">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] text-stone">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Reviews */}
      <Section tone="deep">
        <SectionHeading eyebrow="Client reviews" title="Word of mouth built this business." align="center" />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>
    </>
  )
}
