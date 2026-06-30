import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { splitChars, splitWords } from '../utils/splitText'

gsap.registerPlugin(ScrollTrigger)

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

// Mobile-only overrides, injected once. Desktop layout/styles are untouched.
function ResponsiveStyles() {
  return (
    <style>{`
      @media (max-width: 640px) {
        .product-row {
          flex-direction: column !important;
          gap: 0.85rem !important;
        }
        .product-num {
          min-width: auto !important;
          font-size: 2.4rem !important;
        }
        .product-meta-row {
          gap: 0.5rem !important;
        }
        .product-meta-row > span:last-child {
          margin-left: 0 !important;
        }
        
        .product-card {
          padding: 1.75rem 0 !important;
        }

        .product-link-btn {
          width: 100% !important;
          justify-content: space-between !important;
        }
      }

      @media (max-width: 420px) {
        .product-name {
          font-size: 1.3rem !important;
        }
        .product-desc {
          font-size: 0.82rem !important;
        }
      }

      .product-link-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        overflow: hidden;
        background: transparent;
        cursor: pointer;
        text-decoration: none;
        padding: 0.55rem 1rem 0.55rem 1.1rem;
        border-radius: 999px;
        border: 1px solid var(--line);
        isolation: isolate;
      }

      .product-link-fill {
        position: absolute;
        inset: 0;
        border-radius: 999px;
        transform: scale(0);
        transform-origin: center;
        z-index: -1;
        pointer-events: none;
      }

      .product-link-arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transform: translate(0, 0);
      }

      .product-link-arrow svg {
        display: block;
      }
    `}</style>
  )
}

function ProductLinkButton({ product }: { product: Product }) {
  const btnRef = useRef<HTMLAnchorElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const btn = btnRef.current
    const fill = fillRef.current
    const label = labelRef.current
    const arrow = arrowRef.current
    if (!btn || !fill || !label || !arrow) return

    const tl = gsap.timeline({ paused: true })
    tl.to(fill, { scale: 1, duration: 0.5, ease: 'power3.out' }, 0)
      .to(label, { color: 'var(--paper)', duration: 0.3, ease: 'power2.out' }, 0.05)
      .to(arrow, { x: 4, color: 'var(--paper)', duration: 0.45, ease: 'power3.out' }, 0)
      .to(btn, { borderColor: product.color, duration: 0.4, ease: 'power2.out' }, 0)

    let raf = 0
    const handleEnter = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const originX = ((e.clientX - rect.left) / rect.width) * 100
      const originY = ((e.clientY - rect.top) / rect.height) * 100
      gsap.set(fill, { transformOrigin: `${originX}% ${originY}%` })
      tl.play()
    }
    const handleLeave = () => {
      tl.reverse()
    }
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect()
        const relX = (e.clientX - rect.left - rect.width / 2) * 0.18
        const relY = (e.clientY - rect.top - rect.height / 2) * 0.4
        gsap.to(btn, { x: relX, y: relY, duration: 0.4, ease: 'power3.out' })
      })
    }
    const handleMoveLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
    }

    btn.addEventListener('mouseenter', handleEnter)
    btn.addEventListener('mouseleave', handleLeave)
    btn.addEventListener('mousemove', handleMove)
    btn.addEventListener('mouseleave', handleMoveLeave)

    return () => {
      btn.removeEventListener('mouseenter', handleEnter)
      btn.removeEventListener('mouseleave', handleLeave)
      btn.removeEventListener('mousemove', handleMove)
      btn.removeEventListener('mouseleave', handleMoveLeave)
      cancelAnimationFrame(raf)
      tl.kill()
      gsap.killTweensOf([btn, fill, label, arrow])
    }
  }, [product.color])

  return (
    <a
      ref={btnRef}
      href={product.link || '#'}
      target={product.link && product.link !== '#' ? '_blank' : undefined}
      rel={product.link && product.link !== '#' ? 'noopener noreferrer' : undefined}
      className="product-link-btn"
      aria-label={`View ${product.name}`}
    >
      <span
        ref={fillRef}
        className="product-link-fill"
        style={{ background: product.color }}
      />
      <span
        ref={labelRef}
        style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        View Project
      </span>
      <span ref={arrowRef} className="product-link-arrow" style={{ color: 'var(--ink)', position: 'relative', zIndex: 1 }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M2 11L11 2M11 2H4M11 2V9"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}

function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const proofRef = useRef<HTMLDivElement>(null)
  const stackRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const ySmooth = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), { stiffness: 60, damping: 18 })

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseEnter = () => {
      gsap.to(numRef.current, { color: product.color, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
      gsap.to(lineRef.current, { background: product.color, duration: 0.3, overwrite: 'auto' })
    }
    const handleMouseLeave = () => {
      gsap.to(numRef.current, { color: 'var(--line-strong)', duration: 0.5, overwrite: 'auto' })
      gsap.to(lineRef.current, { background: 'var(--line)', duration: 0.4, overwrite: 'auto' })
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
      gsap.killTweensOf([numRef.current, lineRef.current])
    }
  }, [product.color])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          scroller: window,
        },
        defaults: { ease: 'power3.out' },
      })

      tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.9, transformOrigin: 'left' }, 0)
      tl.fromTo(numRef.current, { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, 0.08)

      if (nameRef.current) {
        const chars = splitChars(nameRef.current)
        tl.fromTo(chars, { y: '115%', rotateZ: 3 }, { y: '0%', rotateZ: 0, duration: 0.85, stagger: 0.018 }, 0.18)
      }
      if (descRef.current) {
        const words = splitWords(descRef.current)
        tl.fromTo(words, { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.7, stagger: 0.035 }, 0.42)
      }

      tl.fromTo(proofRef.current, { x: -14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, 0.58)
      tl.fromTo(stackRef.current, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.68)
      tl.fromTo(linkRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, 0.78)
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="product-card" style={{ position: 'relative', padding: 'clamp(2rem,5vw,3.5rem) 0', cursor: 'default' }}>
      <div
        ref={lineRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'var(--line)',
          transformOrigin: 'left',
        }}
      />

      <div className="product-row" style={{ display: 'flex', gap: 'clamp(1.2rem,4vw,3rem)', alignItems: 'flex-start' }}>
        <span
          ref={numRef}
          className="product-num"
          style={{
            fontFamily: '"Space Mono",monospace',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem,7vw,6rem)',
            letterSpacing: '-0.06em',
            color: 'var(--line-strong)',
            lineHeight: 1,
            flexShrink: 0,
            minWidth: 'clamp(3rem,8vw,7rem)',
            transition: 'color 0.4s',
            opacity: 0,
          }}
        >
          {product.num}
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="product-meta-row" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: '"Space Mono",monospace',
                fontSize: '0.6rem',
                color: product.color,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: `1px solid ${product.color}`,
                padding: '0.2rem 0.6rem',
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              {product.type}
            </span>
            <span
              style={{
                fontFamily: '"Space Mono",monospace',
                fontSize: '0.6rem',
                color: 'var(--ink-faint)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {product.org}
            </span>
            <span style={{ fontFamily: '"Space Mono",monospace', fontSize: '0.6rem', color: 'var(--ink-faint)', marginLeft: 'auto' }}>
              {product.year}
            </span>
          </div>

          <h3
            ref={nameRef}
            className="product-name"
            style={{
              fontFamily: '"Space Mono",monospace',
              fontWeight: 700,
              fontSize: 'clamp(1.1rem,2.8vw,2rem)',
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
              lineHeight: 1.1,
              marginBottom: '0.85rem',
              margin: 0,
              wordBreak: 'break-word',
            }}
          >
            {product.name}
          </h3>

          <p
            ref={descRef}
            className="product-desc"
            style={{
              fontFamily: '"Space Grotesk",sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(0.85rem,1.4vw,1rem)',
              color: 'var(--ink-soft)',
              lineHeight: 1.7,
              maxWidth: '44rem',
              marginBottom: '1.1rem',
              margin: 0,
            }}
          >
            {product.desc}
          </p>

          <div ref={stackRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', opacity: 0, marginBottom: '1.2rem' }}>
            {product.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: '"Space Mono",monospace',
                  fontSize: '0.58rem',
                  color: 'var(--ink-faint)',
                  background: 'var(--paper-dim)',
                  padding: '0.22rem 0.6rem',
                  borderRadius: 3,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  border: '1px solid var(--line)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <div ref={linkRef} style={{ opacity: 0 }}>
            <ProductLinkButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const chars = splitChars(headingRef.current)
        gsap.fromTo(
          chars,
          { y: '115%', rotateZ: 2 },
          {
            y: '0%',
            rotateZ: 0,
            duration: 1.1,
            stagger: 0.035,
            ease: 'power4.out',
            scrollTrigger: { trigger: headingRef.current, start: 'top 88%', scroller: window },
          }
        )
      }

      gsap.fromTo(
        subRef.current,
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: subRef.current, start: 'top 90%', scroller: window },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        background: 'var(--paper)',
        scrollMarginTop: 88,
        padding: 'clamp(5.5rem,12vw,9rem) clamp(1.25rem,4vw,4rem) clamp(2rem,6vw,4rem)',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      <ResponsiveStyles />
      <h2
        ref={headingRef}
        style={{
          fontFamily: '"Space Mono",monospace',
          fontWeight: 700,
          fontSize: 'clamp(3rem,11vw,11rem)',
          letterSpacing: '-0.05em',
          lineHeight: 0.88,
          color: 'var(--ink)',
          marginBottom: '0.6rem',
          margin: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Products
      </h2>

      <p
        ref={subRef}
        style={{
          fontFamily: '"Space Mono",monospace',
          fontSize: '0.6rem',
          color: 'var(--ink-faint)',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          marginBottom: 'clamp(2rem,6vw,4rem)',
          opacity: 0,
          margin: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        — things actually used by real people
      </p>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.num} product={product} />
        ))}
        <div style={{ height: 1, background: 'var(--line)' }} />
      </div>
    </section>
  )
}