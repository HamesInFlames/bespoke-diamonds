import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Testimonials } from '@/components/sections/Testimonials'
import type { Collection } from '@/data/site'
import { useSeo } from '@/lib/seo'

/** One template for all six collections; photos and pieces will come from data files in Phase 2. */
export function CollectionPage({ collection }: { collection: Collection }) {
  useSeo({ title: collection.name, description: collection.blurb })
  return (
    <>
      <PageHero eyebrow="Collection" title={collection.name} lede={collection.blurb} />
      <Section>
        <SectionHeading
          eyebrow="Phase 2"
          title={`Filterable ${collection.name.toLowerCase()} grid with lightbox and “enquire about this piece”.`}
          lede="Existing site photos are placeholders pending Romi's own product photography."
        />
      </Section>
      <Section tone="deep">
        <Testimonials />
      </Section>
    </>
  )
}
