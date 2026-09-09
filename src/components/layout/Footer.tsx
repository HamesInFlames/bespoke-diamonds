import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { collections, site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'

const quick = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About us' },
  { to: '/our-services', label: 'Our services' },
  { to: '/schedule-appointment', label: 'Schedule an appointment' },
  { to: '/contact-us', label: 'Contact us' },
  { to: '/privacy-policy', label: 'Privacy policy' },
]

const colHeading = 'font-brand text-[0.72rem] uppercase tracking-[0.24em] text-champagne mb-5'
const link = 'text-[0.9rem] text-cream-text/80 hover:text-champagne transition-colors'

export function Footer() {
  return (
    <footer className="theme-dark pb-24 lg:pb-0">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block text-cream-text" aria-label="Bespoke Diamonds home">
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-[0.95rem] text-cream-text/75">
            Second-generation diamantaires. {site.yearsInTrade} years in rough and polished diamonds. {site.area},{' '}
            {site.hours.toLowerCase()}.
          </p>
          <div className="mt-6 flex flex-col gap-1.5">
            <a href={site.phoneHref} onClick={trackPhoneClick} className="tabular text-cream-text hover:text-champagne">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="text-cream-text hover:text-champagne">
              {site.email}
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <p className={colHeading}>Quick links</p>
          <ul className="flex flex-col gap-2.5">
            {quick.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className={link}>
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Collections">
          <p className={colHeading}>Collections</p>
          <ul className="flex flex-col gap-2.5">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}`} className={link}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={colHeading}>Follow</p>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener" className={link}>
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.facebook} target="_blank" rel="noopener" className={link}>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream-text/10">
        <Container className="flex flex-col gap-2 py-6 text-[0.78rem] text-cream-text/55 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <span>
            Site by{' '}
            <a href="https://kimconsultant.net" className="hover:text-champagne" target="_blank" rel="noopener">
              Kim Consultant
            </a>
          </span>
        </Container>
      </div>
    </footer>
  )
}
