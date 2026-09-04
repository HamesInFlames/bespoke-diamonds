import { site } from '@/data/site'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let loaded = false

/** Loads the Google Ads tag once (same AW id as the current site). */
export function loadGtag() {
  if (loaded || typeof window === 'undefined' || !site.integrations.gtagId) return
  loaded = true
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${site.integrations.gtagId}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer ?? []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', site.integrations.gtagId)
}

/** Mirrors the phone-conversion the current Webflow site reports to Google Ads. */
export function trackPhoneClick() {
  const { gtagId, phoneConversionLabel } = site.integrations
  if (window.gtag && gtagId && phoneConversionLabel) {
    window.gtag('event', 'conversion', { send_to: `${gtagId}/${phoneConversionLabel}` })
  }
}

/** Podium "Text us" widget, deferred until the visitor interacts so it never blocks first paint. */
export function loadPodium() {
  const token = site.integrations.podiumToken
  if (!token || document.getElementById('podium-widget')) return
  const s = document.createElement('script')
  s.id = 'podium-widget'
  s.defer = true
  s.src = `https://connect.podium.com/widget.js#API_TOKEN=${token}`
  s.dataset.apiToken = token
  document.body.appendChild(s)
}

export function initThirdParty() {
  const start = () => {
    loadGtag()
    loadPodium()
    events.forEach((e) => window.removeEventListener(e, start))
  }
  const events = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const
  events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }))
  window.setTimeout(start, 6000)
}
