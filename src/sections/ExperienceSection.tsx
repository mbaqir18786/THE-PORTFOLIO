import { useRef } from 'react'

const TIMELINE = [
  { year:'2026 →', role:'Tech Head', org:'Alumni Cell, KJSCE', period:'Present', type:'Leadership', color:'var(--signal)',
    bullets:['Leading the full tech team  web dev, automation, team management.','No tech infrastructure existed before me. Built the systems from zero.','Coordinating with council heads, faculty, and external vendors.'] },
  { year:'2025-2026', role:'Jt. Tech Head', org:'Alumni Cell, KJSCE', period:'Jul 2025', type:'Leadership', color:'var(--signal)',
    bullets:['Led front-end dev for all Alumni Cell web properties.','Built event portals with automated email + ticket notifications.','Coordinated 3 developers, shipped updates ahead of schedule.'] },
  
  { year:'Feb 2026 - April 2026', role:'Web Developer', org:'EllanorAI', period:'3-month internship', type:'Internship', color:'var(--alert)',
    bullets:['Startup had no website — built their full cloud services site solo.','Handled everything: design, development, deployment.'] },
    { year:'2025', role:'Internshala Student Partner', org:'Internshala', period:'May – Jul 2025', type:'Campus', color:'var(--violet)',
    bullets:['Selected as top campus leader to represent Internshala.','Ran campaigns that drove measurable sign-up growth on campus.'] },
  { year:'2024 - 2028', role:'B.Tech AI & Data Science', org:'KJ Somaiya College of Engineering', period:'Expected Feb 2028', type:'Education', color:'var(--mint)',
    bullets:['Coursework: Data Structures, Algorithms, DBMS, OOP.'] },
    { year:'2009 - 2022', role:'SSC - Maharashtra Board', org:'National English School', type:'Education', color:'var(--mint)',
    bullets:['SSC - Maharashtra Board','82.20%'] }
]

function ResponsiveStyles() {
  return (
    <style>{`
      @media (max-width: 768px) {
        .timeline-row-inner {
          flex-direction: column !important;
          gap: 1.5rem !important;
        }
        .timeline-left {
          border-right: none !important;
          border-bottom: 4px solid #000 !important;
          padding-right: 0 !important;
          padding-bottom: 1.5rem !important;
        }
      }
    `}</style>
  )
}

function CinematicStatement() {
  return (
    <div style={{ padding: '8rem 2rem', background: 'var(--alert)', borderBottom: '4px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1000px', textAlign: 'center', border: '5px solid #000', padding: 'clamp(2rem, 5vw, 4rem)', background: '#fff', boxShadow: '16px 16px 0px 0px #000' }}>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 4.5rem)', textTransform: 'uppercase', color: '#000', margin: 0, lineHeight: 1.1 }}>
          I don't make side projects.<br/>
          I build products that people actually use.
        </h2>
        <p style={{ fontFamily: '"Space Mono",monospace', fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 700, marginTop: '2.5rem', color: '#fff', textTransform: 'uppercase', background: '#000', display: 'inline-block', padding: '0.8rem 1.5rem', border: '3px solid #000', boxShadow: '6px 6px 0px 0px var(--mint)' }}>
          Real problems. Real users. Real stakes.
        </p>
      </div>
    </div>
  )
}

function TimelineRow({ item }: { item: typeof TIMELINE[0] }) {
  return (
    <div className="brutal-card timeline-row-inner" style={{ padding: '2.5rem', display: 'flex', gap: '3rem', marginBottom: '3rem', background: '#fff' }}>
      <div className="timeline-left" style={{ flex: '1 1 200px', borderRight: '4px solid #000', paddingRight: '2rem' }}>
        <div style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: '3rem', fontWeight: 900, color: '#000', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
          {item.year}
        </div>
        <div style={{ fontFamily: '"Space Mono",monospace', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', background: item.color, color: '#000', padding: '0.4rem 0.8rem', border: '3px solid #000', display: 'inline-block', boxShadow: '3px 3px 0px 0px #000' }}>
          {item.type}
        </div>
      </div>
      
      <div style={{ flex: '3 1 300px' }}>
        <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, color: '#000', textTransform: 'uppercase', margin: '0 0 0.8rem 0' }}>
          {item.role}
        </h3>
        <p style={{ fontFamily: '"Space Mono",monospace', fontSize: '1.2rem', fontWeight: 700, color: '#000', textTransform: 'uppercase', borderBottom: '4px solid #000', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'inline-block' }}>
          {item.org}
        </p>
        <ul style={{ listStyle: 'square', paddingLeft: '1.5rem', color: '#000', fontFamily: '"Space Mono",monospace', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, fontWeight: 700 }}>
          {item.bullets.map((b, j) => (
            <li key={j} style={{ marginBottom: '0.8rem' }}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <>
      <ResponsiveStyles />
      <CinematicStatement />
      <section id="experience" ref={sectionRef} style={{ background: 'var(--paper)', padding: '8rem 2rem', borderBottom: '3px solid #000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 900, fontSize: 'clamp(4rem, 10vw, 8rem)', color: '#000', textTransform: 'uppercase', borderBottom: '6px solid #000', paddingBottom: '1rem', marginBottom: '4rem', display: 'inline-block' }}>
            Timeline
          </h2>
          <div>
            {TIMELINE.map((item, i) => <TimelineRow key={i} item={item} />)}
          </div>
        </div>
      </section>
    </>
  )
}