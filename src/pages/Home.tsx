import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ArrowIcon } from '@/components/ui/Icons'
import { TrustBar } from '@/components/sections/TrustBar'
import { Testimonials } from '@/components/sections/Testimonials'
import { collections, site } from '@/data/site'
import { collectionDetails } from '@/data/collections'
import { useSeo } from '@/lib/seo'

const promises = [
  { title: 'Made right, for you.', body: 'Our satisfaction guarantee means that if your finished piece is not right the first time, we make another at our expense.' },
  { title: 'Room to grow.', body: 'Our lifetime upgrade programme applies to loose natural diamonds purchased from us. Lab-grown diamonds, gemstones and settings are excluded; original duty and tax are not credited.' },
  { title: 'A proposal. Then a choice.', body: 'Propose with a three-day temporary setting, then choose the final design together. The temporary mounting is credited toward your new setting.' },
]

export function Home() {
  useSeo({ title: 'Bespoke Diamonds | Custom Diamonds & Jewellery, Toronto', description: 'Discover custom diamond jewellery, personal guidance and wholesale pricing. Book a private consultation with Bespoke Diamonds in Thornhill, Ontario.' })
  return (
    <>
      <section className="editorial-hero" aria-labelledby="hero-heading">
        <div className="editorial-hero__copy">
          <p className="eyebrow mb-7">Fine jewellery. A personal experience.</p>
          <h1 id="hero-heading">Some things<br />are simply<br /><em>meant for you.</em></h1>
          <span className="editorial-rule" aria-hidden="true" />
          <p className="hero-description">An extraordinary diamond. A design that feels like you. Discover the pleasure of creating something truly personal, with a diamantaire by your side.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
            <Button to="/schedule-appointment" size="lg">Book a consultation <ArrowIcon /></Button>
            <a href="#collections" className="text-link">Explore the collections</a>
          </div>
          <p className="hero-location">{site.area} <span aria-hidden="true">·</span> By appointment</p>
        </div>
        <figure className="editorial-hero__image">
          <img src="/images/photos/solitaire-editorial-v2.png" alt="Editorial concept of an oval diamond solitaire in yellow gold, resting on ivory silk and stone" width={1122} height={1402} fetchPriority="high" />
          <figcaption><span>The art of bespoke</span><span>Uniquely yours.</span></figcaption>
        </figure>
      </section>
      <div className="border-y border-hairline">
        <Container>
          <ul className="signature-strip">
            <li><span aria-hidden="true">◇</span> Personal diamond expertise</li>
            <li><span aria-hidden="true">◇</span> Thoughtfully custom-made</li>
            <li><span aria-hidden="true">◇</span> Wholesale pricing</li>
          </ul>
        </Container>
      </div>
      <Section id="collections" className="scroll-mt-28">
        <div className="collection-heading">
          <SectionHeading eyebrow="The collections" title={<>For every chapter.<br /><em>For no reason at all.</em></>} />
          <p className="max-w-sm text-stone">A promise, a milestone, or a little everyday brilliance. Find your inspiration. We’ll make it personal.</p>
        </div>
        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, i) => {
            const detail = collectionDetails[collection.slug]
            return (
              <Reveal as="li" key={collection.slug} delay={(i % 3) * 0.05}>
                <Link to={`/${collection.slug}`} className="collection-card group">
                  <figure className="collection-card__image">
                    <img src={detail.pieces[0].image} alt={detail.pieces[0].name} loading="lazy" width={600} height={500} />
                    <span className="collection-card__index" aria-hidden="true">0{i + 1}</span>
                  </figure>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h3 className="text-display-sm">{collection.name}</h3>
                    <span className="collection-card__arrow"><ArrowIcon /></span>
                  </div>
                  <p className="mt-1 max-w-xs text-sm text-stone">{detail.shortDescription}</p>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </Section>
      <section className="atelier-section">
        <figure className="atelier-section__image">
          <img src="/images/photos/pendant-blazer.jpg" alt="A delicate diamond solitaire pendant worn with a white blazer" width={1800} height={1200} loading="lazy" />
          <figcaption>Small details. Extraordinary meaning.</figcaption>
        </figure>
        <div className="atelier-section__copy">
          <Reveal>
            <p className="eyebrow mb-6">The Bespoke experience</p>
            <h2 className="text-display-lg">It begins with a conversation.<br /><em>And a little curiosity.</em></h2>
            <p className="mt-6 text-stone">You don’t need to know everything about diamonds. That’s what we’re here for. We take the time to understand your ideas, show you the possibilities, and help you choose with confidence.</p>
            <ol className="atelier-steps">
              <li><span>01</span><div><h3>Tell us your story</h3><p>Bring your ideas, your occasion and your budget.</p></div></li>
              <li><span>02</span><div><h3>Discover your diamond</h3><p>Compare stones side by side, with expert guidance.</p></div></li>
              <li><span>03</span><div><h3>Make it yours</h3><p>Refine the design and let us bring it to life.</p></div></li>
            </ol>
            <Button to="/about-us" variant="ghost">Get to know Bespoke <ArrowIcon /></Button>
          </Reveal>
        </div>
      </section>
      <Section>
        <SectionHeading eyebrow="The care continues" title={<>Beautiful today.<br /><em>Considered for a lifetime.</em></>} align="center" />
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {promises.map((promise, i) => (
            <Reveal as="li" key={promise.title} delay={i * 0.05} className="border-t border-hairline pt-7">
              <span className="mb-5 block font-display text-3xl text-gold" aria-hidden="true">0{i + 1}</span>
              <h3 className="text-display-sm">{promise.title}</h3>
              <p className="mt-4 text-[0.95rem] text-stone">{promise.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>
      <Section tone="deep">
        <SectionHeading eyebrow="Words from our clients" title={<>Their stories.<br /><em>Our greatest compliment.</em></>} align="center" />
        <div className="mt-12"><Testimonials /></div>
      </Section>
      <TrustBar />
    </>
  )
}
