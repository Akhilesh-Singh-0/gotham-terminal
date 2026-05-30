'use client'

import Logo from '@/components/ui/Logo'
import { IDENTITY } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative"
      style={{ background: 'var(--c-charcoal)', borderTop: '1px solid var(--c-dim)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8" style={{ borderBottom: '1px solid var(--c-dim)' }}>
          <Logo size={28} />
          <div className="flex flex-col items-start md:items-end gap-1">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.18em' }}>
              SYSTEM STATUS: OPERATIONAL
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>
              LAST DEPLOYMENT: MAY {year}
            </span>
          </div>
        </div>

        {/* Terminal block */}
        <div className="mb-8 p-4" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.12em', marginBottom: '4px' }}>
            WAYNE SYSTEMS TERMINAL
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', letterSpacing: '0.12em', marginBottom: '4px' }}>
            {'>'} session.end()
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.12em' }}>
            SESSION TERMINATED — PRESS ⌘K TO RECONNECT
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.12em' }}>
            © {year} {IDENTITY.name.toUpperCase()} — ALL SYSTEMS CLASSIFIED
          </p>
          <div className="flex gap-6">
          {[
  { label: 'GITHUB', url: IDENTITY.github },
  { label: 'LINKEDIN', url: IDENTITY.linkedin },
  { label: 'TWITTER', url: IDENTITY.twitter },
].map(({ label, url }) => (
  <a
    key={label}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      color: 'var(--c-dim)',
      letterSpacing: '0.14em',
      textDecoration: 'none',
      transition: 'color 0.2s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = 'var(--c-crimson-lit)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'var(--c-dim)'
    }}
  >
    {label}
  </a>
))}
          </div>
        </div>

      </div>
    </footer>
  )
}
