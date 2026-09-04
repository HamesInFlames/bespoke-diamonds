import { useEffect } from 'react'
import { site } from '@/data/site'

/**
 * LeadConnector (GoHighLevel) calendar — the same booking widget the current
 * site uses. Their embed.js resizes the iframe to its content.
 */
export function BookingEmbed({ service }: { service?: string }) {
  useEffect(() => {
    if (document.querySelector('script[data-leadconnector]')) return
    const s = document.createElement('script')
    s.src = 'https://api.leadconnectorhq.com/js/embed.js'
    s.async = true
    s.dataset.leadconnector = 'true'
    document.body.appendChild(s)
  }, [])

  const src = new URL(`https://api.leadconnectorhq.com/widget/booking/${site.integrations.bookingWidgetId}`)
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
