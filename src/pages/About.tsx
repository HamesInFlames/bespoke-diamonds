import { PageHero } from '@/components/sections/PageHero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Section, SectionHeading } from '@/components/ui/Section'
import { useSeo } from '@/lib/seo'

export function About() {
  useSeo({
    title: 'About Us',
    description: 'Second-generation diamond purveyors in Canada, members of the Diamond Bourse of Canada, CJA and Israel Diamond Exchange.',
  })
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Second-generation diamond purveyors."
        lede="The team behind Bespoke Diamonds has been part of the global diamond trade for decades, from rough stones to finished jewellery for Canada's best-known retailers."
        image={{ src: '/images/photos/about-hero.jpg', alt: 'Client showing her engagement ring' }}
      />
      <TrustBar />
      <Section>
        <SectionHeading
          eyebrow="Phase 2"
          title="Story, credentials and wholesale heritage go here."
          lede="Content is drafted in PLAN.md §4 and waits on Romi's confirmation of dates and claims (§7)."
        />
      </Section>
    </>
  )
}
