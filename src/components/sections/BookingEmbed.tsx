import { useEffect, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'

const field =
  'w-full border-0 border-b border-hairline bg-transparent py-3 font-sans text-[0.95rem] text-ink placeholder:text-stone/70 focus:border-champagne focus:outline-none'
const label = 'font-sans text-[0.7rem] uppercase tracking-[0.18em] text-stone'

/**
 * Booking calendar. Renders the LeadConnector (GoHighLevel) widget when a
 * widget ID is configured; otherwise a request form that reaches Romi by
 * email. The original calendar (B6vgwBNr2oOuFdV0dC54) was removed from
 * LeadConnector in September 2026, so the ID must be re-confirmed before
 * the embed is switched back on (PLAN.md §7).
 */
export function BookingEmbed({ service }: { service?: string }) {
  const widgetId = site.integrations.bookingWidgetId
  return widgetId ? <CalendarFrame widgetId={widgetId} service={service} /> : <RequestForm service={service} />
}

function CalendarFrame({ widgetId, service }: { widgetId: string; service?: string }) {
  useEffect(() => {
    if (document.querySelector('script[data-leadconnector]')) return
    const s = document.createElement('script')
    s.src = 'https://api.leadconnectorhq.com/js/embed.js'
    s.async = true
    s.dataset.leadconnector = 'true'
    document.body.appendChild(s)
  }, [])

  const src = new URL(`https://api.leadconnectorhq.com/widget/booking/${widgetId}`)
  if (service) src.searchParams.set('service', service)

  return (
    <div className="border border-hairline bg-white">
      <iframe
        src={src.toString()}
        title="Schedule an appointment with Bespoke Diamonds"
        id="msgsndr-calendar"
        scrolling="no"
        className="block min-h-[720px] w-full border-0"
        loading="lazy"
      />
    </div>
  )
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

function RequestForm({ service }: { service?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const endpoint = site.integrations.formEndpoint

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('company')) return // honeypot
    const summary = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Preferred: ${data.get('preferred')}`,
      `How: ${data.get('mode')}`,
      service ? `Service: ${service}` : '',
      '',
      `${data.get('notes') ?? ''}`,
    ]
      .filter((l) => l !== undefined)
      .join('\n')

    if (!endpoint) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Appointment request')}&body=${encodeURIComponent(summary)}`
      return
    }
    setStatus('sending')
    try {
      data.set('subject', 'Appointment request')
      if (service) data.set('service', service)
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="border border-hairline bg-ivory-deep p-6 sm:p-8">
      <p className="eyebrow mb-3">Request an appointment</p>
      <h2 className="text-display-sm">Tell us when suits you. We confirm within a business day.</h2>
      {service && <p className="mt-2 text-sm text-stone">About: {service}</p>}
      <form onSubmit={onSubmit} className="mt-8 grid gap-6">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="bk-name" className={label}>Name</label>
            <input id="bk-name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="bk-phone" className={label}>Phone</label>
            <input id="bk-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
          </div>
          <div>
            <label htmlFor="bk-email" className={label}>Email</label>
            <input id="bk-email" name="email" type="email" autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="bk-preferred" className={label}>Preferred day and time</label>
            <input id="bk-preferred" name="preferred" placeholder="e.g. Thursday afternoon" className={field} />
          </div>
        </div>
        <fieldset className="grid gap-2">
          <legend className={label}>How would you like to meet?</legend>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {['In person', 'By phone', 'By email'].map((m, i) => (
              <label key={m} className="inline-flex items-center gap-2">
                <input type="radio" name="mode" value={m} defaultChecked={i === 0} className="accent-[#9c7a3c]" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="bk-notes" className={label}>What would you like to discuss? (optional)</label>
          <textarea id="bk-notes" name="notes" rows={3} className={field} />
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Button type="submit" size="lg" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : endpoint ? 'Request appointment' : 'Continue in email'}
          </Button>
          {!endpoint && <p className="text-sm text-stone">Opens your email app with the request ready to send.</p>}
          {status === 'sent' && <p className="text-sm text-gold">Thank you. We will confirm your time shortly.</p>}
          {status === 'error' && (
            <p className="text-sm text-stone">
              The request did not send. Please call{' '}
              <a href={site.phoneHref} onClick={trackPhoneClick} className="text-ink underline tabular">
                {site.phoneDisplay}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
