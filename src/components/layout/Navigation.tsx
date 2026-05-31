'use client'

import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const SECTION_LABELS: Record<string, string> = {
  '#about':    'ACCESSING DOSSIER...',
  '#skills':   'LOADING ARSENAL...',
  '#projects': 'OPENING MISSION FILES...',
  '#contact':  'ESTABLISHING SECURE CHANNEL...',
}

function TransitionFlash({ label }: { label: string }) {
  return (
    <div
      className="fixed inset-x-0 pointer-events-none flex items-center justify-center"
      style={{
        top: '56px',
        zIndex: 100,
        height: '32px',
        background: 'rgba(8,8,10,0.95)',
        borderBottom: '1px solid var(--c-crimson-dark)',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '0.24em',
        color: 'var(--c-crimson-lit)',
      }}>
        {label}
      </span>
    </div>
  )
}

export default function Navigation() {
  const [visible, setVisible]           = useState(false)
  const [progress, setProgress]         = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [flashLabel, setFlashLabel]     = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const maxY = document.body.scrollHeight - window.innerHeight
      setProgress(maxY > 0 ? (y / maxY) * 100 : 0)
      setVisible(y > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)

    const label = SECTION_LABELS[href]
    if (label) {
      setFlashLabel(label)
      setTimeout(() => setFlashLabel(null), 800)
    }

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-[var(--z-nav)] transition-transform duration-500',
          visible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div
          className="absolute top-0 left-0 h-px transition-all duration-75"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(to right, var(--c-crimson-dark), var(--c-crimson-lit))',
          }}
        />
        <nav
          className="relative flex items-center justify-between px-6 md:px-10 h-14 border-b"
          style={{
            background: 'rgba(8,8,10,0.9)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--c-dim)',
          }}
        >
          <button onClick={() => scrollTo('#hero')} className="focus:outline-none">
            <Logo size={24} />
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href, index }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--fs-xs)',
                    letterSpacing: '0.16em',
                    color: activeSection === href ? 'var(--c-crimson-lit)' : 'var(--c-ash)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'color 0.2s',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ color: 'var(--c-dim)' }}>{index}</span>
                  {label.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', color: 'var(--c-ash)' }}>
                AVAILABLE
              </span>
            </div>

            <button
              className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              onClick={() => setMobileOpen(v => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  background: 'var(--c-ash)',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: mobileOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  background: 'var(--c-ash)',
                  transition: 'opacity 0.2s',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  background: 'var(--c-ash)',
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: mobileOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div
            style={{
              background: 'rgba(8,8,10,0.98)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--c-dim)',
            }}
          >
            {NAV_ITEMS.map(({ label, href, index }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="w-full flex items-center gap-4 px-6 py-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.16em',
                  color: activeSection === href ? 'var(--c-crimson-lit)' : 'var(--c-ash)',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid var(--c-dim)',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ color: 'var(--c-dim)' }}>{index}</span>
                {label.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </header>

      {flashLabel && <TransitionFlash label={flashLabel} />}
    </>
  )
}