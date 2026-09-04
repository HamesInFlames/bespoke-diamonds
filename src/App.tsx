import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { CollectionPage } from '@/pages/Collection'
import { Schedule } from '@/pages/Schedule'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { Styleguide } from '@/pages/Styleguide'
import { NotFound } from '@/pages/NotFound'
import { collections } from '@/data/site'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-services" element={<Services />} />
        {collections.map((c) => (
          <Route key={c.slug} path={c.slug} element={<CollectionPage collection={c} />} />
        ))}
        <Route path="schedule-appointment" element={<Schedule />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="styleguide" element={<Styleguide />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
