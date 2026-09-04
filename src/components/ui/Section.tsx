import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  tone?: 'ivory' | 'deep' | 'dark'
  flush?: boolean
  narrow?: boolean
  children: ReactNode
}

const tones = {
  ivory: 'bg-ivory',
  deep: 'bg-ivory-deep',
  dark: 'theme-dark',
}

/** Vertical rhythm unit. `flush` removes the container for full-bleed children. */
export function Section({ tone = 'ivory', flush = false, narrow = false, className = '', children, ...rest }: SectionProps) {
  return (
    <section className={`${tones[tone]} py-section ${className}`} {...rest}>
      {flush ? children : <Container narrow={narrow}>{children}</Container>}
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, lede, align = 'left', className = '' }: SectionHeadingProps) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-display-lg">{title}</h2>
      {lede && <p className={`mt-5 text-lg text-stone ${center ? 'mx-auto' : ''}`}>{lede}</p>}
    </div>
  )
}
