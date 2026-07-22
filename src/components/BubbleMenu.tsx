import { useState } from 'react';

export interface BubbleMenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  onClick?: () => void;
}

interface BubbleMenuProps {
  logo?: React.ReactNode;
  items?: BubbleMenuItem[];
}

export default function BubbleMenu({ logo, items = [] }: BubbleMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        background: '#fff',
        borderBottom: '4px solid #000',
        boxShadow: '0px 6px 0px 0px rgba(0,0,0,1)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(1rem, 4vw, 3rem)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          background: 'var(--mint)', 
          padding: '0.2rem 1rem', 
          border: '3px solid #000', 
          boxShadow: '3px 3px 0px 0px #000',
          transform: 'rotate(-2deg)'
        }}>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 900, fontSize: '1.2rem', textTransform: 'uppercase', color: '#000' }}>
            {logo}
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: '1.5rem' }}>
          {items.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#000',
                textDecoration: 'none',
                padding: '0.4rem 0.8rem',
                border: '3px solid transparent',
                transition: 'all 0.1s ease-out'
              }}
              className="hover:bg-signal hover:text-white hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden brutal-btn" 
          style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--paper)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          borderBottom: '4px solid #000'
        }}>
          {items.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
                setIsOpen(false);
              }}
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '2.5rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#000',
                textDecoration: 'none',
                padding: '1.5rem 1rem',
                borderBottom: '3px solid #000',
                transition: 'all 0.2s ease-out'
              }}
              className="hover:bg-mint hover:translate-x-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
