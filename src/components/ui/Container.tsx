import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  as?: ElementType
  narrow?: boolean
  children: ReactNode
}

/** Site-wide horizontal container: 1280px max, fluid gutters. */
export function Container({ as: Tag = 'div', narrow = false, className = '', children, ...rest }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-8 ${narrow ? 'max-w-4xl' : 'max-w-site'} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
