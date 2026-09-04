import { useSearchParams } from 'react-router-dom'
import { BookingEmbed } from '@/components/sections/BookingEmbed'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'
import { useSeo } from '@/lib/seo'

const expect = [
  ['Private session', 'One client at a time with an expert diamantaire. No walk-ins, no crowd.'],
  ['See the stones', 'Compare diamonds side by side under 3D magnified viewing.'],
  ['Your way', 'In person in Thornhill, by phone, or by email. Six days a week.'],
  ['Wholesale quote', 'Leave with a real price on the piece you actually want.'],
]

export function Schedule() {
  useSeo({ title: 'Schedule an Appointment', description: 'Book a private appointment with a Bespoke Diamonds diamantaire.' })
  const [params] = useSearchParams()
  const service = params.get('service') ?? undefined

  return (
    <section className="py-section">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow mb-5">Schedule an appointment</p>
          <h1 className="text-display-lg">Choose a time. We will prepare for you.</h1>
          <ul className="mt-10 grid gap-6">
            {expect.map(([t, b]) => (
              <li key={t} className="border-t border-hairline pt-4">
                <h2 className="font-display text-xl text-ink">{t}</h2>
                <p className="mt-1 text-sm text-stone">{b}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={site.phoneHref} onClick={trackPhoneClick} variant="outline">
              Call {site.phoneDisplay}
            </Button>
            <Button href={site.smsHref} variant="ghost">
              Text us
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <BookingEmbed service={service} />
        </Reveal>
      </Container>
    </section>
  )
}
