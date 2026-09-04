import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useSeo } from '@/lib/seo'

export function NotFound() {
  useSeo({ title: 'Page not found' })
  return (
    <section className="py-section">
      <Container narrow className="text-center">
        <p className="eyebrow mb-5">404</p>
        <h1 className="text-display-lg">That page is not here.</h1>
        <p className="mx-auto mt-5 text-stone">The link may be old. Everything on the site is one step from the home page.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button to="/">Go home</Button>
          <Button to="/contact-us" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  )
}
