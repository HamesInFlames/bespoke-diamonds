import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
  image?: { src: string; alt: string }
  children?: ReactNode
}

/** Interior page opener: text left, optional photo right. Sized to content, not the viewport. */
export function PageHero({ eyebrow, title, lede, image, children }: PageHeroProps) {
  return (
    <section className="border-b border-hairline bg-ivory">
      <Container className={`grid items-center gap-10 py-16 lg:py-24 ${image ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="text-display-xl">{title}</h1>
          {lede && <p className="mt-6 text-lg text-stone">{lede}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
        {image && (
          <Reveal delay={0.12} as="figure" className="m-0 overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/5] w-full object-cover lg:aspect-square"
              loading="eager"
              fetchPriority="high"
            />
          </Reveal>
        )}
      </Container>
    </section>
  )
}
