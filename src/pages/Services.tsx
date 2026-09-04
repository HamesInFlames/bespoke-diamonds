import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { useSeo } from '@/lib/seo'

export function Services() {
  useSeo({
    title: 'Our Services',
    description: 'Custom design, 3D visualisation, GIA-certified appraisals, repairs, upgrades and special requests.',
  })
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Pick the service. We route you to the right specialist."
        lede="Custom design, 3D visualisation, GIA-certified appraisals, special requests and a curated selection to choose from."
        image={{ src: '/images/photos/hands-rings.jpg', alt: 'Hands wearing diamond rings' }}
      />
      <Section>
        <SectionHeading eyebrow="Phase 2" title="Six service blocks with pre-selected booking." lede="Drafted in PLAN.md §4." />
      </Section>
    </>
  )
}
