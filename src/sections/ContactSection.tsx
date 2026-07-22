import { useRef } from 'react'

const LINKS = [
  { label:'LinkedIn', value:'Mohammed Baqir B', href:'https://www.linkedin.com/in/mohammed-baqir-bandarkar/', color:'var(--signal)' },
  { label:'GitHub', value:'mbaqir18786', href:'https://github.com/mbaqir18786', color:'var(--violet)' },
  { label:'Phone', value:'+91 76200 09616', href:'tel:+917620009616', color:'var(--mint)' },
]

function ContactLink({ link }: { link: typeof LINKS[0] }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className="brutal-btn" style={{ display: 'block', padding: '1.5rem', marginBottom: '1.5rem', textDecoration: 'none', background: '#fff', border: '4px solid #000', boxShadow: '6px 6px 0px 0px #000', color: '#000' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <p style={{ fontFamily: '"Space Mono",monospace', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem', background: '#000', color: '#fff', display: 'inline-block', padding: '0.2rem 0.5rem' }}>
            {link.label}
          </p>
          <p style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: 0, textTransform: 'uppercase' }}>
            {link.value}
          </p>
        </div>
        <div style={{ fontFamily: '"Space Mono",monospace', fontSize: '2rem', fontWeight: 900 }}>
          ↗
        </div>
      </div>
    </a>
  )
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const STATS = [
    { label:'Products shipped', value:'15+', color:'var(--signal)' },
    { label:'Years building', value:'3+', color:'var(--violet)' }
  ]

  return (
    <section id="contact" ref={sectionRef} style={{ background: 'var(--paper)', padding: '8rem 2rem 4rem 2rem', borderBottom: '3px solid #000' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(4rem, 12vw, 10rem)', color: '#000', textTransform: 'uppercase', borderBottom: '8px solid #000', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block', lineHeight: 0.9 }}>
          LET'S BUILD.
        </h2>
        
        <p style={{ fontFamily: '"Space Mono",monospace', fontSize: '1.2rem', fontWeight: 700, color: '#000', maxWidth: '40rem', lineHeight: 1.6, marginBottom: '4rem', background: '#fff', padding: '1.5rem', border: '4px solid #000', boxShadow: '8px 8px 0px 0px #000', textTransform: 'uppercase' }}>
          Open to internships, freelance builds, and problems worth solving. If you have something real — reach out.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '6rem' }}>
          {STATS.map(stat => (
            <div key={stat.label} style={{ border: '5px solid #000', padding: '2rem', background: stat.color, boxShadow: '8px 8px 0px 0px #000', flex: '1 1 250px' }}>
              <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 4rem)', color: '#000', lineHeight: 1, marginBottom: '0.5rem' }}>{stat.value}</div>
              <div style={{ fontFamily: '"Space Mono",monospace', fontSize: '1.2rem', fontWeight: 700, color: '#000', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
          {LINKS.map(l => <ContactLink key={l.label} link={l} />)}
        </div>

        <div style={{ borderTop: '5px solid #000', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: '"Space Mono",monospace', fontSize: '1rem', fontWeight: 700, color: '#000', textTransform: 'uppercase', background: 'var(--mint)', padding: '0.5rem 1rem', border: '3px solid #000' }}>
            M Baqir © 2026
          </span>
          <span style={{ fontFamily: '"Space Mono",monospace', fontSize: '1rem', fontWeight: 700, color: '#000', textTransform: 'uppercase' }}>
            Built with React & Vite
          </span>
        </div>

      </div>
    </section>
  )
}
