import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ArrowIcon, CalendarIcon, DiamondIcon, MessageIcon, PhoneIcon } from '@/components/ui/Icons'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrustBar } from '@/components/sections/TrustBar'
import { useSeo } from '@/lib/seo'

const swatches = [
  ['Ivory', 'bg-ivory', '#FAF7F1', 'ground'],
  ['Ivory deep', 'bg-ivory-deep', '#F3EEE3', 'alternate section'],
  ['Ink', 'bg-ink', '#141210', 'text, dark sections'],
  ['Stone', 'bg-stone', '#6F675C', 'secondary text'],
  ['Hairline', 'bg-hairline', '#E4DCCD', 'rules, borders'],
  ['Champagne', 'bg-champagne', '#D4B36A', 'accent, rules on dark'],
  ['Gold', 'bg-gold', '#9C7A3C', 'gold text on light'],
  ['Gold deep', 'bg-gold-deep', '#7A5F2E', 'hover'],
] as const

/** Internal reference for the design tokens. Not linked from navigation. */
export function Styleguide() {
  useSeo({ title: 'Styleguide' })
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Internal"
          title="Bespoke Diamonds styleguide"
          lede="Every token used on the site. Gold is an accent: rules, eyebrows, hover states and one primary button per view."
        />

        <h2 className="text-display-md mt-16 mb-6">Colour</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map(([name, cls, hex, role]) => (
            <li key={name} className="border border-hairline">
              <div className={`h-20 ${cls}`} />
              <div className="p-3">
                <p className="font-sans text-sm font-medium text-ink">{name}</p>
                <p className="tabular text-xs text-stone">
                  {hex} · {role}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-display-md mt-16 mb-6">Type</h2>
        <div className="grid gap-8 border border-hairline p-8">
          <p className="eyebrow">Eyebrow · Italiana · 0.22em tracking</p>
          <p className="text-display-xl">Display XL · Cormorant Garamond 500</p>
          <p className="text-display-lg">Display LG · headings on every section</p>
          <p className="text-display-md">Display MD · sub-sections</p>
          <p className="text-display-sm">Display SM · card titles</p>
          <p className="text-lg text-stone">Lede · Jost 300 · 1.125rem · stone</p>
          <p>
            Body · Jost 300 · 1rem · ink-soft. Keep running text near 66 characters. Carat and millimetre figures use
            tabular numerals: <span className="tabular">1.52 ct · 2.5 mm · 416-879-9387</span>.
          </p>
          <p className="font-sans text-[0.78rem] uppercase tracking-[0.18em]">Nav and button label · Jost 500 · 0.16–0.18em</p>
        </div>

        <h2 className="text-display-md mt-16 mb-6">Buttons</h2>
        <div className="flex flex-wrap items-center gap-5">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">
            Ghost <ArrowIcon />
          </Button>
          <Button size="lg">Large primary</Button>
        </div>
        <div className="theme-dark mt-4 flex flex-wrap items-center gap-5 p-6">
          <Button variant="light">Light on dark</Button>
          <Button variant="ghost" className="text-champagne">
            Ghost on dark
          </Button>
        </div>

        <h2 className="text-display-md mt-16 mb-6">Icons</h2>
        <div className="flex gap-6 text-ink">
          <PhoneIcon size={24} />
          <MessageIcon size={24} />
          <CalendarIcon size={24} />
          <DiamondIcon size={24} />
          <ArrowIcon size={24} />
        </div>
      </Section>

      <TrustBar />

      <Section tone="deep">
        <SectionHeading eyebrow="Component" title="Testimonials" />
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      <Section>
        <Container className="px-0">
          <SectionHeading eyebrow="Spacing" title="Section rhythm" lede="Every section uses the same vertical padding token, clamp(4rem, 8vw, 6.5rem). Containers are 1280px with fluid gutters." />
        </Container>
      </Section>
    </>
  )
}
