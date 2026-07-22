import { useEffect } from 'react'

export default function HeroSection({ onReady }: { onReady: () => void }) {
  const STATS = [
    { value: '15+', label: 'Projects Shipped', color: 'var(--signal)' },
    { value: '3+', label: 'Years Building', color: 'var(--mint)' },
    { value: '5', label: 'Tools Built', color: 'var(--violet)' },
  ]

  useEffect(() => {
    onReady()
  }, [onReady])

  const dotGridStyle = {
    position: 'absolute' as const,
    inset: 0,
    pointerEvents: 'none' as const,
    backgroundImage: 'radial-gradient(#000 2px, transparent 2px)',
    backgroundSize: '32px 32px',
    opacity: 0.1,
    zIndex: 0
  }

  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '120px 2rem 4rem 2rem', borderBottom: '3px solid #000' }}>
      <div style={dotGridStyle} />

      <div style={{ position: 'relative', zIndex: 10, flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center', width: '100%', maxWidth: '1400px', margin: '0 auto' }} className="hero-grid">
        
        {/* Left Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--signal)', padding: '0.4rem 1rem', border: '3px solid #000', boxShadow: '4px 4px 0px 0px #000' }}>
            <p style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: '#fff', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>
              B.Tech AI & DS · KJSCE · Batch '28
            </p>
          </div>

          <h1 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(3.5rem, 12vw, 8rem)', letterSpacing: '-0.04em', lineHeight: 0.9, color: '#000', margin: 0, textTransform: 'uppercase' }}>
            M Baqir.
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.2rem,3vw,2rem)', color: '#000', fontWeight: 900, background: 'var(--mint)', padding: '0.5rem 1rem', border: '3px solid #000', boxShadow: '4px 4px 0px 0px #000', textTransform: 'uppercase' }}>
              Full-Stack Developer
            </span>
          </div>

          <p style={{ fontFamily: '"Space Mono",monospace', fontWeight: 500, fontSize: 'clamp(0.9rem,2vw,1.2rem)', color: '#000', lineHeight: 1.5, margin: 0, maxWidth: '40rem', borderLeft: '4px solid #000', paddingLeft: '1rem', background: '#fff', padding: '1rem', border: '3px solid #000', boxShadow: '4px 4px 0px 0px #000' }}>
            I ship products that run in production, not just side projects. Full-stack web development, automation, and scalable solutions built for real teams, not portfolios.
          </p>

          <a href="#contact" className="brutal-btn" style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '1rem', textDecoration: 'none' }}>
            Say Hello ↗
          </a>
        </div>

        {/* Right Side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="brutal-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <div style={{ fontFamily: '"Space Mono",monospace', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem', background: '#000', color: '#fff', display: 'inline-block', padding: '0.2rem 0.5rem' }}>
              Currently
            </div>
            <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#000', lineHeight: 1.5, fontWeight: 700 }}>
              Tech Head at <span style={{ color: 'var(--signal)', textDecoration: 'underline' }}>KJSCE Alumni Cell</span> — built the org's tech function from scratch.
            </div>
          </div>

          <div className="brutal-card" style={{ padding: 'clamp(1rem, 3vw, 2rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
            {STATS.map((stat) => (
              <div key={stat.label} style={{ padding: '1rem', border: '3px solid #000', background: stat.color, boxShadow: '4px 4px 0px 0px #000' }}>
                <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#000', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: '"Space Mono",monospace', fontSize: '0.7rem', color: '#000', marginTop: '0.5rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="brutal-card" style={{ padding: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {['Web Dev', 'React', 'Node.js', 'Deployment', 'Team Lead'].map((tag) => (
              <span key={tag} style={{ fontFamily: '"Space Mono",monospace', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#000', border: '3px solid #000', padding: '0.5rem 1rem', background: '#fff', boxShadow: '2px 2px 0px 0px #000' }}>
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}