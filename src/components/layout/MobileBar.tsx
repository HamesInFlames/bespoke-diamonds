import { Link } from 'react-router-dom'
import { CalendarIcon, MessageIcon, PhoneIcon } from '@/components/ui/Icons'
import { site } from '@/data/site'
import { trackPhoneClick } from '@/lib/analytics'

const item = 'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 font-sans text-[0.62rem] uppercase tracking-[0.16em]'

/** Persistent Call · Text · Book bar on small screens. */
export function MobileBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-hairline bg-ivory/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={site.phoneHref} onClick={trackPhoneClick} className={`${item} text-ink`}>
        <PhoneIcon /> Call
      </a>
      <a href={site.smsHref} className={`${item} text-ink border-x border-hairline`}>
        <MessageIcon /> Text
      </a>
      <Link to="/schedule-appointment" className={`${item} bg-ink text-cream-text`}>
        <CalendarIcon /> Book
      </Link>
    </nav>
  )
}
