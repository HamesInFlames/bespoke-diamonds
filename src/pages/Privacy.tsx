import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { useSeo } from '@/lib/seo'

const h = 'font-display text-2xl text-ink mt-10 mb-3'

/** Existing policy text, corrected to the .ca domain and set at a readable measure. */
export function Privacy() {
  useSeo({ title: 'Privacy Policy' })
  return (
    <section className="py-section">
      <Container narrow>
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="text-display-lg">Privacy policy</h1>
        <div className="mt-8 text-[0.98rem] text-ink-soft [&_p]:mb-4">
          <p>
            Bespoke Diamonds is committed to safeguarding the personally identifiable information that you share with us
            online. Generally, you can browse our website, www.bespokediamonds.ca (this “Site”), without sharing any
            personal information. However, should you wish to submit a form or book an appointment, you will be
            required to voluntarily submit personal information. We may also collect information on how you use this
            Site, such as pages browsed, the frequency and duration of visits, and your source Internet Protocol (“IP”)
            address.
          </p>
          <h2 className={h}>What information we collect</h2>
          <p>
            <strong>Personally identifiable information</strong> is information that may be used to identify you as an
            individual, such as your e-mail address, name, address, or telephone number. We collect it through the
            contact form, the appointment booking form, text messages sent through our website widget, and email
            messages to any bespokediamonds.ca address.
          </p>
          <p>
            <strong>Non-personally identifiable information</strong> does not by itself identify a specific individual,
            such as how you use this Site, the frequency and duration of visits, and your source IP address.
          </p>
          <h2 className={h}>Cookies</h2>
          <p>
            A cookie is a data file that certain websites write to your computer when you visit. We may collect
            information from your web sessions by using cookies to determine, for example, user traffic patterns and the
            effectiveness of our navigation. Most browsers accept cookies automatically, but you can change your browser
            settings to warn before accepting a cookie or to refuse all cookies. You do not need cookies to use this
            Site.
          </p>
          <h2 className={h}>How we use your information</h2>
          <p>
            If you choose to provide Bespoke Diamonds with your personal information, we may use it to contact you about
            your enquiry or appointment. We may periodically send email for sales, marketing, and administrative
            purposes. We may disclose information about our users when we believe, in good faith, that the disclosure is
            required by law.
          </p>
          <h2 className={h}>Remarketing</h2>
          <p>
            This Site uses Google remarketing or similar audiences to advertise online, which means third-party vendors,
            including Google, may show our ads on sites across the Internet and use cookies to serve ads based on past
            visits to our website. You can opt out of Google’s use of cookies at Google’s Ads Settings, or of a
            third-party vendor’s use of cookies at the Network Advertising Initiative opt-out page.
          </p>
          <h2 className={h}>Sharing your information</h2>
          <p>
            We do not disclose, sell, exchange, nor trade your personally identifiable information to commercial mailing
            lists. Where web usage reports are shared with service providers, your personal information remains
            anonymous.
          </p>
          <h2 className={h}>Maintaining your information</h2>
          <p>
            Any personally identifiable information is stored and protected with adequate security measures. We will
            cease all communication and use of personally identifiable information upon your request.
          </p>
          <h2 className={h}>Links to other sites</h2>
          <p>
            This Site contains links to other websites. Bespoke Diamonds is not responsible for the privacy practices of
            other sites. This Privacy Policy applies solely to information collected by this Site.
          </p>
          <h2 className={h}>Changes to this statement</h2>
          <p>
            If there are changes to this Privacy Policy, we will post them here before implementing the change. If you
            would like to learn more, please contact us at{' '}
            <a href={`mailto:${site.email}`} className="text-gold underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
