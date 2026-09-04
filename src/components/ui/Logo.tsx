interface LogoProps {
  className?: string
  variant?: 'mark' | 'full'
}

/** Crown mark from the existing brand. `full` adds the wordmark in Italiana. */
export function Logo({ className = '', variant = 'full' }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img src="/images/logo-mark.png" alt="" width={44} height={30} className="h-8 w-auto object-contain" />
      {variant === 'full' && (
        <span className="font-brand text-[1.05rem] uppercase leading-none tracking-[0.28em] text-current">
          Bespoke
          <span className="block text-[0.7rem] tracking-[0.42em]">Diamonds</span>
        </span>
      )}
    </span>
  )
}
