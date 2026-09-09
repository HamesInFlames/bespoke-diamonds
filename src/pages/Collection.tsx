import { Link } from 'react-router-dom'
import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowIcon } from '@/components/ui/Icons'
import { Reveal } from '@/components/ui/Reveal'
import { collections, type Collection } from '@/data/site'
import { collectionDetails } from '@/data/collections'
import { useSeo } from '@/lib/seo'

export function CollectionPage({ collection }: { collection: Collection }) {
  useSeo({ title: collection.name, description: collection.blurb })
  const detail = collectionDetails[collection.slug]
  return (
    <>
      <PageHero eyebrow={`The collections / ${collection.name}`} title={detail.title} lede={collection.blurb} />
      <nav aria-label="Collections" className="border-y border-hairline px-5 py-5">
        <ul className="mx-auto flex max-w-site flex-wrap justify-center gap-x-7 gap-y-3">
          {collections.map((item) => <li key={item.slug}><Link to={`/${item.slug}`} aria-current={item.slug === collection.slug ? 'page' : undefined} className={`text-xs tracking-wide ${item.slug === collection.slug ? 'text-gold underline underline-offset-8' : 'text-stone hover:text-gold'}`}>{item.name}</Link></li>)}
        </ul>
      </nav>
      <Section>
        <SectionHeading eyebrow="Find your inspiration" title="A starting point. Your own possibilities." lede="Explore a few of the styles we can discuss together. These images are design references; availability, materials and pricing are confirmed during your consultation." />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {detail.pieces.map((piece, i) => (
            <Reveal as="li" key={piece.name} delay={i * 0.05}>
              <figure className="collection-card__image"><img src={piece.image} alt={piece.name} loading="lazy" width={600} height={500} /></figure>
              <h2 className="mt-5 text-display-sm">{piece.name}</h2>
              <Button to={`/contact-us?piece=${encodeURIComponent(`${collection.name} — ${piece.name}`)}`} variant="ghost" className="mt-4">Enquire about this style <ArrowIcon /></Button>
            </Reveal>
          ))}
        </ul>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8">
          <div><h2 className="text-display-sm">Have something else in mind?</h2><p className="mt-2 text-stone">Bring a photograph, a sketch or simply an idea. We’ll explore it together.</p></div>
          <Button to={`/schedule-appointment?service=${encodeURIComponent(collection.name)}`}>Book a consultation</Button>
        </div>
      </Section>
    </>
  )
}
