'use client'

import { useEffect, useRef, useState } from 'react'
import { SKILLS } from '@/lib/constants'

const CATEGORIES = ['backend', 'frontend', 'infrastructure'] as const

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [active, setActive] = useState<string>('backend')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = SKILLS.filter(s => s.category === active)

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative section-padding overflow-hidden"
      style={{ background: 'var(--c-black)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(139,26,26,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="rule-crimson" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.18em',
              color: 'var(--c-ash)',
              border: '1px solid var(--c-dim)',
              padding: '0.25rem 0.625rem',
              borderRadius: '2px',
            }}
          >
            02 — ARSENAL
          </span>
          <span className="rule-crimson" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2
              className="heading-display mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}
            >
              TECHNICAL<br />ARSENAL.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Production-tested tools and technologies. Every skill listed has been used in a deployed, load-tested system.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.16em',
                    padding: '0.5rem 1rem',
                    border: '1px solid',
                    borderColor: active === cat ? 'var(--c-crimson)' : 'var(--c-dim)',
                    color: active === cat ? 'var(--c-crimson-lit)' : 'var(--c-ash)',
                    background: active === cat ? 'rgba(139,26,26,0.08)' : 'transparent',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            <div
              className="p-4"
              style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}
            >
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em', marginBottom: '8px' }}>
                SYSTEM DIAGNOSTICS
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
                {filtered.length} MODULES LOADED — {active.toUpperCase()} STACK
              </p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col gap-5">
              {filtered.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', letterSpacing: '0.1em' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="relative h-px w-full"
                    style={{ background: 'var(--c-dim)' }}
                  >
                    <div
                      className="absolute top-0 left-0 h-px transition-all duration-1000"
                      style={{
                        width: revealed ? `${skill.level}%` : '0%',
                        background: 'linear-gradient(to right, var(--c-crimson-dark), var(--c-crimson-lit))',
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-1000"
                      style={{
                        left: revealed ? `${skill.level}%` : '0%',
                        background: 'var(--c-crimson-lit)',
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}