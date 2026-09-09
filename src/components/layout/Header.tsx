import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { CloseIcon, MenuIcon, PhoneIcon } from '@/components/ui/Icons'
import { collections, nav, site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `font-sans text-[0.78rem] uppercase tracking-[0.18em] transition-colors duration-200 border-b pb-0.5 ${
    isActive ? 'text-gold border-champagne' : 'text-ink border-transparent hover:text-gold hover:border-champagne'
  }`

export function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
      if (event.key === 'Tab') {
        const links = Array.from(mobileNav.current?.querySelectorAll<HTMLElement>('a[href]') ?? [])
        const first = menuButton.current
        const last = links.at(-1)
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    menuButton.current?.focus()
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300 border-b ${
        solid ? 'bg-ivory border-hairline shadow-[0_1px_0_0_rgba(20,18,16,0.04)]' : 'bg-ivory border-transparent'
      }`}
    >
      <Container className="flex h-[88px] items-center justify-between gap-6">
        <Link to="/" aria-label="Bespoke Diamonds home" className="text-ink">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex xl:gap-8">
          {nav.map((item) =>
            'children' in item ? (
              <div
                key={item.label}
                className="relative flex"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
                onFocus={() => setMenuOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMenuOpen(false)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setMenuOpen(false)
                }}
              >
                <NavLink to={item.to} className={linkCls} aria-haspopup="true" aria-expanded={menuOpen}>
                  {item.label}
                </NavLink>
                <div
                  className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-[opacity,visibility] duration-200 ${
                    menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                  }`}
                >
                  <ul className="min-w-48 border border-hairline bg-ivory p-2 shadow-[0_18px_40px_-20px_rgba(20,18,16,0.25)]">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={c.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 font-sans text-[0.78rem] uppercase tracking-[0.16em] ${
                              isActive ? 'text-gold' : 'text-ink hover:text-gold'
                            }`
                          }
                        >
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={linkCls}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            onClick={trackPhoneClick}
            className="hidden xl:inline-flex items-center gap-2 font-sans text-[0.8rem] tracking-[0.06em] text-ink tabular hover:text-gold"
          >
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <Button to="/schedule-appointment">Book an appointment</Button>
        </div>

        <button
          ref={menuButton}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <div
        ref={mobileNav}
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[88px] bottom-0 z-40 overflow-y-auto bg-ivory lg:hidden"
      >
        <Container className="flex flex-col gap-8 py-8">
          <ul className="flex flex-col gap-4">
            {[{ to: '/', label: 'Home' }, ...nav.filter((n) => !('children' in n))].map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} className="font-display text-3xl text-ink">
                  {n.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/schedule-appointment" className="font-display text-3xl text-gold">
                Book an appointment
              </NavLink>
            </li>
          </ul>
          <div>
            <p className="eyebrow mb-3">Collections</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {collections.map((c) => (
                <li key={c.slug}>
                  <NavLink to={`/${c.slug}`} className="font-sans text-[0.85rem] uppercase tracking-[0.16em] text-ink">
                    {c.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-hairline pt-6 text-sm text-stone">
            <a href={site.phoneHref} onClick={trackPhoneClick} className="block text-ink tabular">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="block">
              {site.email}
            </a>
          </div>
        </Container>
      </div>
    </header>
  )
}
