import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'figure'
}

/**
 * Fade-and-rise on scroll. Content is visible at rest (no opacity:0 parking):
 * with reduced motion, or before JS hydrates, it simply renders.
 * Per the KC scroll-animation playbook: never hijack scroll, always honour
 * prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const M = motion[as]
  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }
  return (
    <M
      className={className}
      initial={{ opacity: 0.001, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}
