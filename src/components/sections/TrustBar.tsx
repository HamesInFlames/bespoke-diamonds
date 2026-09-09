import { Container } from '@/components/ui/Container'
import { partners } from '@/data/site'

/** Association and lab logos — the credentials strip. */
export function TrustBar() {
  return (
    <section aria-label="Memberships and partners" className="trust-bar border-y border-hairline bg-ivory-deep py-12">
      <Container>
        <p className="eyebrow mx-auto mb-9 text-center">Members and partners</p>
        <ul className="trust-bar__logos flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-14">
          {partners.map((p) => (
            <li key={p.name} className="trust-bar__logo opacity-80">
              <img src={p.src} alt={p.name} className={`object-contain ${p.className}`} loading="lazy" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
