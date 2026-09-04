import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'

/** Dark call-to-action band that closes every page except the booking page. */
export function AppointmentBand() {
  return (
    <section className="theme-dark py-section" aria-labelledby="book-heading">
      <Container className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="eyebrow mb-4">By appointment only</p>
          <h2 id="book-heading" className="text-display-lg">
            Sit down with a diamantaire, not a salesperson.
          </h2>
          <p className="mt-5 max-w-xl text-cream-text/75">
            One client at a time, in person or by phone. Compare stones side by side under 3D magnification and leave
            with a wholesale quote, not a retail one.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap gap-4 lg:justify-end">
          <Button to="/schedule-appointment" variant="light" size="lg">
            Book an appointment
          </Button>
          <Button href={site.phoneHref} onClick={trackPhoneClick} variant="ghost" className="text-champagne">
            Call {site.phoneDisplay}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
