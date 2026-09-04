import { Container } from '@/components/ui/Container'
import { partners } from '@/data/site'

/** Association and lab logos — the credentials strip. */
export function TrustBar() {
  return (
    <section aria-label="Memberships and partners" className="border-y border-hairline bg-ivory-deep py-8">
      <Container>
        <p className="eyebrow mb-6 text-center">Members and partners</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <li key={p.name} className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <img src={p.src} alt={p.name} className="h-9 w-auto max-w-[140px] object-contain" loading="lazy" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
