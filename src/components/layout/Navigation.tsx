'use client'

import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '@/lib/constants'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

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
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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
                className={cn(
                  'flex items-center gap-2 transition-colors duration-200',
                  activeSection === href ? 'text-crimson-lit' : ''
                )}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.16em',
                  color: activeSection === href ? 'var(--c-crimson-lit)' : 'var(--c-ash)',
                }}
              >
                <span style={{ color: 'var(--c-dim)' }}>{index}</span>
                {label.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', color: 'var(--c-ash)' }}>
            AVAILABLE
          </span>
        </div>
      </nav>
    </header>
  )
}