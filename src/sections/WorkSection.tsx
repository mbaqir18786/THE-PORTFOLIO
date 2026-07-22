import { useRef } from 'react'

interface Product {
  num: string
  name: string
  type: string
  org: string
  year: string
  desc: string
  stack: string[]
  color: string
  link?: string
}

const PRODUCTS: Product[] = [
  {
    num: '01',
    name: 'Alumni Cell — Event Portals',
    type: 'Web + Automation',
    org: 'KJSCE Alumni Cell',
    year: '2025',
    desc: 'Multiple event registration portals. Google Sheets backend, automated email + ticket PDFs via Gmail on every signup. Zero manual work for organisers.',
    stack: ['React', 'Google Apps Script', 'Vercel', 'MailApp'],
    color: 'var(--signal)',
    link: 'https://kickstart-26.vercel.app/',
  },
  {
    num: '02',
    name: 'Kickstart — Paid Event Site',
    type: 'Web + Payments',
    org: 'KJSCE Alumni Cell',
    year: '2025',
    desc: 'End-to-end ticketed event website. Students register, pay via UPI, submit transaction ID  system validates and fires a ticket PDF to their inbox.',
    stack: ['React', 'Apps Script', 'UPI Flow', 'Gmail API'],
    color: 'var(--alert)',
    link: 'https://kickstart-26.vercel.app/',
  },
  {
    num: '03',
    name: 'Professor Portfolio + CMS',
    type: 'Website + Admin Panel',
    org: 'KJSCE Faculty',
    year: '2024',
    desc: 'Fully editable portfolio for a professor no coding needed. Custom admin panel where every section is editable in-browser. Live on save.',
    stack: ['React', 'Node.js', 'MongoDB', 'Custom CMS'],
    color: 'var(--violet)',
    link: 'https://dr-v-v.vercel.app/',
  },
  {
    num: '04',
    name: 'College Learning Platform',
    type: 'Full Product',
    org: 'KJSCE Internal',
    year: '2024',
    desc: 'Coursera-style LMS. Upload courses, MCQ, T/F, Match the Following, Fill in the Blank, Lab Activity, short/long answers. Full admin CRUD. Led a 5-person team.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    color: 'var(--mint)',
    link: 'https://lms-self-theta.vercel.app/',
  },
  {
    num: '05',
    name: 'Personal Portfolio',
    type: 'Interactive Web Experience',
    org: 'Personal',
    year: '2025',
    desc: 'This site. Built and rebuilt from scratch  custom WebGL/Three.js scenes, GSAP scroll choreography, Lenis-smoothed scrolling, and physics-based interactions, with every bug traced down to root cause.',
    stack: ['React', 'Three.js', 'GSAP', 'Lenis', 'TypeScript'],
    color: 'var(--violet)',
    link: '#',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="brutal-card" style={{ padding: 'clamp(1.5rem, 4vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '4px solid #000', paddingBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: 900, background: product.color, color: '#fff', padding: '0.2rem 0.8rem', border: '3px solid #000', boxShadow: '4px 4px 0px 0px #000' }}>
            {product.num}
          </span>
          <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.2rem, 4vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', color: '#000', margin: 0 }}>
            {product.name}
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', fontWeight: 700, textTransform: 'uppercase', background: '#000', color: '#fff', padding: '0.4rem 0.8rem' }}>{product.type}</span>
          <span style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', fontWeight: 700, textTransform: 'uppercase', border: '3px solid #000', padding: '0.4rem 0.8rem' }}>{product.year}</span>
        </div>
      </div>
      
      <p style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: '#000', lineHeight: 1.5, margin: 0 }}>
        {product.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        {product.stack.map(s => (
          <span key={s} style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', fontWeight: 700, textTransform: 'uppercase', color: '#000', border: '2px solid #000', padding: '0.4rem 0.8rem', background: '#f4f4f0', boxShadow: '2px 2px 0px 0px #000' }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <a href={product.link || '#'} className="brutal-btn" style={{ padding: '1rem 2rem', textDecoration: 'none', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }} target={product.link && product.link !== '#' ? '_blank' : undefined} rel={product.link && product.link !== '#' ? 'noopener noreferrer' : undefined}>
          View Project ↗
        </a>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="work" ref={sectionRef} style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)', background: 'var(--paper)', borderBottom: '3px solid #000' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 10vw, 8rem)', color: '#000', textTransform: 'uppercase', borderBottom: '6px solid #000', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block' }}>
          Products
        </h2>
        <br/>
        <p style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4rem', background: 'var(--mint)', color: '#000', padding: '0.8rem 1.5rem', display: 'inline-block', border: '3px solid #000', boxShadow: '6px 6px 0px 0px #000' }}>
          — THINGS ACTUALLY USED BY REAL PEOPLE
        </p>

        <div>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.num} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}