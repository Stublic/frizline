export const metadata = {
  title: 'Frizline - Online naručivanje',
  description: 'Online naručivanje za frizerske salone. Ubrzajte svoje poslovanje uz automatske rezervacije termina.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
