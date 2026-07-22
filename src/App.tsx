import { useState } from 'react'
import useLenis from './hooks/useLenis'
import useCursor from './hooks/useCursor'
import { getLenis } from './hooks/useLenis'
import BubbleMenu from './components/BubbleMenu'
import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import WorkSection from './sections/WorkSection'
import ExperienceSection from './sections/ExperienceSection'
import ContactSection from './sections/ContactSection'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const lenis = getLenis()
  const offset = 64
  if (lenis) lenis.scrollTo(el, { duration: 1.2, offset: -offset })
  else {
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const NAV_ITEMS = [
  { label: 'home', href: '#top', onClick: () => scrollToId('top') },
  { label: 'work', href: '#work', onClick: () => scrollToId('work') },
  { label: 'experience', href: '#experience', onClick: () => scrollToId('experience') },
  { label: 'contact', href: '#contact', onClick: () => scrollToId('contact') },
]

export default function App() {
  const [navVisible, setNavVisible] = useState(false)
  useLenis()
  useCursor()

  return (
    <div style={{ fontFamily:'"Space Mono", monospace', background:'var(--paper)' }}>
      <div style={{ opacity: navVisible ? 1 : 0, transition: 'opacity 0.2s ease' }}>
        <BubbleMenu
          items={NAV_ITEMS}
          logo={<span style={{ fontFamily:'"Space Grotesk",sans-serif', fontSize:20, color:'#000', fontWeight:900, textTransform:'uppercase' }}>MBAQIR</span>}
        />
      </div>
      <HeroSection onReady={() => setNavVisible(true)} />
      <MarqueeSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
