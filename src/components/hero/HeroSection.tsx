'use client'

import { useEffect, useRef, useState } from 'react'
import { IDENTITY } from '@/lib/constants'
import Logo from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const spot = spotlightRef.current
    if (!section || !spot) return
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      spot.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(139,26,26,0.07) 0%, transparent 70%)`
    }
    section.addEventListener('mousemove', onMove)
    return () => section.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--c-black)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 70% 60%, rgba(139,26,26,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 50% 50%, rgba(139,26,26,0.03) 0%, transparent 60%)
          `,
        }}
      />
      <div ref={spotlightRef} className="absolute inset-0 pointer-events-none transition-all duration-100" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.5) 79px, rgba(255,255,255,0.5) 80px)' }}
      />
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l pointer-events-none" style={{ borderColor: 'var(--c-dim)' }} />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r pointer-events-none" style={{ borderColor: 'var(--c-dim)' }} />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l pointer-events-none" style={{ borderColor: 'var(--c-dim)' }} />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r pointer-events-none" style={{ borderColor: 'var(--c-dim)' }} />
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 pointer-events-none">
        <div className="h-16 w-px" style={{ background: 'linear-gradient(to bottom, transparent, var(--c-dim))' }} />
        <span style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.2em', color: 'var(--c-dim)', textTransform: 'uppercase' }}>
          {IDENTITY.location}
        </span>
        <div className="h-16 w-px" style={{ background: 'linear-gradient(to top, transparent, var(--c-dim))' }} />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 pointer-events-none">
        <div className="h-16 w-px" style={{ background: 'linear-gradient(to bottom, transparent, var(--c-dim))' }} />
        <span style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.2em', color: 'var(--c-dim)' }}>
          26.2183°N — 78.1828°E
        </span>
        <div className="h-16 w-px" style={{ background: 'linear-gradient(to top, transparent, var(--c-dim))' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
      <div className={cn('mb-10 transition-all duration-700', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
      <Logo size={36} />
      </div>
      <div className={cn('mb-4 transition-all duration-700 delay-[50ms]', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.22em', color: 'var(--c-crimson-lit)' }}>
      {IDENTITY.name.toUpperCase()}
      </span>
      </div>
      <div className={cn('flex items-center gap-3 mb-8 transition-all duration-700 delay-100', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
          <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-fog)' }}>
            {IDENTITY.role.toUpperCase()}
          </span>
          <span className="h-px w-8" style={{ background: 'var(--c-crimson-dark)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.14em', color: 'var(--c-ash)' }}>
            {IDENTITY.availability.toUpperCase()}
          </span>
        </div>
        <div className="overflow-hidden mb-3">
          <h1
            className={cn('heading-display transition-all duration-1000 delay-150', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full')}
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--c-ghost)' }}
          >
            ENGINEERING
          </h1>
        </div>
        <div className="overflow-hidden mb-3">
          <h1
            className={cn('heading-display transition-all duration-1000 delay-200', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full')}
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              background: 'linear-gradient(135deg, var(--c-crimson) 0%, var(--c-crimson-lit) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SYSTEMS
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className={cn('heading-display transition-all duration-1000 delay-300', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full')}
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--c-ghost)' }}
          >
            THAT SURVIVE.
          </h1>
        </div>
        <p
          className={cn('max-w-lg leading-relaxed mb-10 transition-all duration-700 delay-[400ms]', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}
          style={{ fontSize: 'var(--fs-md)', color: 'var(--c-silver)', fontFamily: 'var(--font-body)' }}
        >
          {IDENTITY.subheadline}
        </p>
        <div className={cn('flex flex-col sm:flex-row items-start gap-4 mb-16 transition-all duration-700 delay-500', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
          <button className="btn-tactical" onClick={() => scrollTo('#projects')}>
            {IDENTITY.ctaPrimary}
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('#contact')}>
            {IDENTITY.ctaSecondary}
          </button>
        </div>
        <div
          className={cn('flex flex-wrap gap-8 pt-8 transition-all duration-700 delay-[600ms]', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}
          style={{ borderTop: '1px solid var(--c-dim)' }}
        >
          {IDENTITY.stats.map(({ value, label }) => (
            <div key={label}>
              <div className="heading-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', color: 'var(--c-ghost)' }}>
                {value}
              </div>
              <div className="label-tactical mt-1" style={{ fontSize: '9px', color: 'var(--c-dim)' }}>
                {label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <div className="w-px h-8 animate-pulse" style={{ background: 'linear-gradient(to bottom, var(--c-dim), transparent)' }} />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--c-charcoal))' }}
      />
    </section>
  )
}