import { PageHero } from '@/components/sections/PageHero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Section, SectionHeading } from '@/components/ui/Section'
import { useSeo } from '@/lib/seo'
import { Button } from '@/components/ui/Button'

export function About() {
  useSeo({
    title: 'About Us',
    description: 'Second-generation diamond purveyors in Canada, members of the Diamond Bourse of Canada, CJA and Israel Diamond Exchange.',
  })
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A personal approach.<br /><em>A world of experience.</em></>}
        lede="The team behind Bespoke Diamonds has been part of the global diamond trade for decades, from rough stones to finished jewellery for Canada's best-known retailers."
        image={{ src: '/images/photos/pendant-blazer.jpg', alt: 'A solitaire diamond pendant worn with a white blazer' }}
      />
      <TrustBar />
      <Section>
        <SectionHeading
          eyebrow="The people behind the piece"
          title="Expertise shared. Possibilities opened."
          lede="Our experience in rough and polished diamonds shapes every conversation. We help you understand what makes each stone different, then work with you to find the right balance of beauty, design and budget."
        />
        <div className="mt-12 grid gap-10 border-t border-hairline pt-8 md:grid-cols-2">
          <div><h3 className="text-display-sm">Knowledge comes first.</h3><p className="mt-4 text-stone">From cut and clarity to the way a diamond catches the light, we explain the details in plain language. Compare your options, ask every question, and choose with confidence.</p></div>
          <div><h3 className="text-display-sm">The experience is yours.</h3><p className="mt-4 text-stone">Appointments give us time to focus on what matters to you. Whether you are creating something new, reimagining an heirloom or seeking a second opinion, it begins with a conversation.</p></div>
        </div>
        <Button to="/schedule-appointment" className="mt-10">Meet with a diamantaire</Button>
      </Section>
    </>
  )
}
