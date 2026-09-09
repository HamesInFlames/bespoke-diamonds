import { PageHero } from '@/components/sections/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import { useSeo } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { ArrowIcon } from '@/components/ui/Icons'

const services = [
  ['Custom design', 'An idea, a meaningful detail, a design you have imagined for years. Work with us to create a piece that feels entirely your own.'],
  ['Jewellery remodelling', 'Give a much-loved piece a new chapter. Explore a fresh setting or design, with 3D visualisation to help you see the possibilities.'],
  ['Gemstone advice & appraisals', 'Understand the stones you own or are considering. Speak with a gemologist about identification, grading and appraisal.'],
  ['Repairs & refinements', 'From ring sizing and repairs to engraving, finishes and gemstone accents, discuss the details that make your jewellery feel right.'],
  ['Engagement ring guidance', 'Explore stones and settings together, or ask about our three-day temporary ring option so your partner can help choose the final design.'],
  ['Finding your next piece', 'Discover rings, wedding bands, bracelets, timepieces, earrings and necklaces. We help you narrow the possibilities to what you will love wearing.'],
]

export function Services() {
  useSeo({
    title: 'Our Services',
    description: 'Custom design, 3D visualisation, GIA-certified appraisals, repairs, upgrades and special requests.',
  })
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Your ideas.<br /><em>In expert hands.</em></>}
        lede="Create something new. Reimagine something treasured. Our specialists help you find the possibilities in every piece."
        image={{ src: '/images/photos/pendant-blazer.jpg', alt: 'A diamond pendant on a fine chain' }}
      />
      <Section>
        <SectionHeading eyebrow="At your service" title="A little guidance. An extraordinary result." />
        <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([name, description], i) => (
            <li key={name} className="flex flex-col items-start border-t border-hairline pt-7">
              <span className="mb-6 font-display text-3xl text-gold" aria-hidden="true">0{i + 1}</span>
              <h3 className="text-display-sm">{name}</h3>
              <p className="mb-6 mt-4 text-stone">{description}</p>
              <Button to={`/schedule-appointment?service=${encodeURIComponent(name ?? '')}`} variant="ghost" className="mt-auto">Let’s discuss it <ArrowIcon /></Button>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
