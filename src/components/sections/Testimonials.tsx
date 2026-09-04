import { Reveal } from '@/components/ui/Reveal'
import { StarIcon } from '@/components/ui/Icons'
import { testimonials, type Testimonial } from '@/data/site'

function Stars() {
  return (
    <span className="inline-flex gap-0.5 text-champagne" aria-label="Five stars">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  )
}

function Card({ t, i }: { t: Testimonial; i: number }) {
  return (
    <Reveal as="li" delay={i * 0.06} className="flex flex-col gap-4 border-t border-hairline pt-6">
      <Stars />
      <blockquote className="font-display text-[1.35rem] leading-snug text-ink">“{t.quote}”</blockquote>
      <cite className="mt-auto font-sans text-[0.72rem] not-italic uppercase tracking-[0.18em] text-stone">
        {t.name}
      </cite>
    </Reveal>
  )
}

export function Testimonials({ limit = 3 }: { limit?: number }) {
  return (
    <ul className="grid gap-10 md:grid-cols-3">
      {testimonials.slice(0, limit).map((t, i) => (
        <Card key={t.name} t={t} i={i} />
      ))}
    </ul>
  )
}
