import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'ghost' | 'light'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.16em] text-[0.72rem] leading-none transition-colors duration-200 cursor-pointer select-none whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-cream-text hover:bg-gold-deep border border-ink hover:border-gold-deep',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-cream-text',
  ghost: 'text-gold hover:text-gold-deep underline-offset-[6px] hover:underline decoration-champagne',
  light: 'border border-champagne text-cream-text hover:bg-champagne hover:text-ink',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3.5',
  lg: 'px-8 py-4.5',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps &
  (
    | ({ to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'className'>)
    | ({ href: string; to?: never } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className'>)
    | ({ to?: never; href?: never } & Omit<ComponentPropsWithoutRef<'button'>, 'className'>)
  )

export function Button({ variant = 'primary', size = 'md', className = '', children, ...rest }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${variant === 'ghost' ? 'px-0 py-2' : sizes[size]} ${className}`
  if ('to' in rest && rest.to) {
    const { to, ...linkProps } = rest
    return (
      <Link to={to} className={cls} {...linkProps}>
        {children}
      </Link>
    )
  }
  if ('href' in rest && rest.href) {
    const { href, ...aProps } = rest
    return (
      <a href={href} className={cls} {...aProps}>
        {children}
      </a>
    )
  }
  const btnProps = rest as ComponentPropsWithoutRef<'button'>
  return (
    <button type="button" className={cls} {...btnProps}>
      {children}
    </button>
  )
}
