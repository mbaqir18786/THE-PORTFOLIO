import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoLoop from '../components/LogoLoop'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  { name: 'HTML', color: 'var(--signal)' },
  { name: 'CSS', color: 'var(--mint)' },
  { name: 'JavaScript', color: 'var(--violet)' },
  { name: 'React', color: 'var(--alert)' },
  { name: 'Next.js', color: 'var(--signal)' },
  { name: 'TypeScript', color: 'var(--mint)' },
  { name: 'Node.js', color: 'var(--violet)' },
  { name: 'Python', color: 'var(--alert)' },
   { name: 'MongoDB', color: 'var(--signal)' },
  { name: 'Email Design', color: 'var(--mint)' },
  { name: 'Express.js', color: 'var(--violet)' },
  { name: 'SCSS', color: 'var(--alert)' },
  { name: 'Java', color: 'var(--signal)' },
  { name: 'C', color: 'var(--mint)' },
  { name: 'Backend', color: 'var(--violet)' },
  { name: 'Admin Panel', color: 'var(--alert)' },
  { name: 'Fullstack', color: 'var(--signal)' },
  { name: 'UI/UX', color: 'var(--mint)' },
  { name: 'Web Design', color: 'var(--violet)' },
  { name: 'Web Development', color: 'var(--alert)' },
  { name: 'Linux', color: 'var(--signal)' },
  { name: 'Git', color: 'var(--mint)' },
  { name: 'GitHub', color: 'var(--violet)' },
  { name: 'VS Code', color: 'var(--alert)' },
  { name: 'Figma', color: 'var(--signal)' },
  { name: 'Photoshop', color: 'var(--mint)' },
  { name: 'Team Work', color: 'var(--violet)' },
  { name: 'Problem Solving', color: 'var(--alert)' },
  { name: 'Automation', color: 'var(--signal)' },
  { name: 'Creativity', color: 'var(--mint)' },
  { name: 'Critical Thinking', color: 'var(--violet)' },
  { name: 'Adaptability', color: 'var(--alert)' },
  { name: 'Time Management', color: 'var(--signal)' },
  { name: 'Full stack', color: 'var(--mint)' },
  { name: 'Collaboration', color: 'var(--violet)' },
  { name: 'Project Management', color: 'var(--alert)' },
  { name: 'Lenis', color: 'var(--signal)' },
  { name: 'GSAP', color: 'var(--mint)' },
  { name: 'Vite', color: 'var(--violet)' },
  { name: 'Tailwind', color: 'var(--alert)' },
  { name: 'PostgreSQL', color: 'var(--signal)' },
  { name: 'Google Apps Script', color: 'var(--mint)' },
  { name: 'Gmail API', color: 'var(--violet)' },
  { name: 'UPI Flow', color: 'var(--alert)' }
]

function ProjectChip({ name }: { name: string }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 4rem)', color: '#000', whiteSpace: 'nowrap', textTransform: 'uppercase' }}>
      {name}
      <span style={{ fontSize: '1rem', color: '#000' }}>✦</span>
    </span>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={sectionRef} style={{ background: 'var(--violet)', padding: '2rem 0', overflow: 'hidden', borderBottom: '3px solid #000', position: 'relative', zIndex: 2 }}>
      
      <div style={{ marginBottom: '1.25rem' }}>
        <LogoLoop
          logos={PROJECTS.map(p => ({ node: <ProjectChip name={p.name} /> }))}
          speed={55}
          gap={32}
          fadeOut={false}
          pauseOnHover
        />
      </div>
      <LogoLoop
        logos={[...PROJECTS].reverse().map(p => ({ node: <ProjectChip name={p.name} /> }))}
        speed={42}
        direction="right"
        gap={32}
        fadeOut={false}
        pauseOnHover
      />
    </div>
  )
}
