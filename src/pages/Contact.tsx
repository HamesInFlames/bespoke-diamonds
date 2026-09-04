import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'
import { useSeo } from '@/lib/seo'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full border-0 border-b border-hairline bg-transparent py-3 font-sans text-[0.95rem] text-ink placeholder:text-stone/70 focus:border-champagne focus:outline-none'
const label = 'font-sans text-[0.7rem] uppercase tracking-[0.18em] text-stone'

export function Contact() {
  useSeo({ title: 'Contact Us', description: `Email ${site.email} or call ${site.phoneDisplay}. We reply within one business day.` })
  const [params] = useSearchParams()
  const [status, setStatus] = useState<Status>('idle')
  const piece = params.get('piece') ?? ''

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('company')) return // honeypot
    const endpoint = site.integrations.formEndpoint
    if (!endpoint) {
      // No relay configured yet: fall back to the visitor's mail client.
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nPiece: ${data.get('piece') ?? ''}\n\n${data.get('message')}`,
      )
      window.location.href = `mailto:${site.email}?subject=Website enquiry&body=${body}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-section">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-5">Contact us</p>
          <h1 className="text-display-lg">Email, call or text. We answer within a business day.</h1>
          <dl className="mt-10 grid gap-6">
            <div>
              <dt className={label}>By email</dt>
              <dd className="mt-1 text-lg">
                <a href={`mailto:${site.email}`} className="text-ink hover:text-gold">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className={label}>By phone or text</dt>
              <dd className="mt-1 text-lg tabular">
                <a href={site.phoneHref} onClick={trackPhoneClick} className="text-ink hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className={label}>Visits</dt>
              <dd className="mt-1 text-stone">
                {site.area}. {site.hours}.
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="grid gap-7" noValidate={false}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
              <div>
                <label htmlFor="phone" className={label}>
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
              </div>
              <div>
                <label htmlFor="piece" className={label}>
                  Piece you are interested in (optional)
                </label>
                <input id="piece" name="piece" defaultValue={piece} className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={label}>
                Your message
              </label>
              <textarea id="message" name="message" rows={5} required className={field} />
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Button size="lg" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
              {status === 'sent' && <p className="text-sm text-gold">Thank you. We will be in touch shortly.</p>}
              {status === 'error' && (
                <p className="text-sm text-stone">
                  The message did not send. Please email{' '}
                  <a href={`mailto:${site.email}`} className="text-ink underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}
