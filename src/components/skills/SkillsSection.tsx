'use client'

import { useRef, useState } from 'react'
import { useReveal } from '@/lib/hooks/useReveal'
import { SKILLS } from '@/lib/constants'

const SKILL_PROJECTS: Record<string, string[]> = {
  'Node.js':    ['Guardrail', 'FlowSpace', 'Luminary'],
  'TypeScript': ['Guardrail', 'FlowSpace', 'Luminary'],
  'PostgreSQL': ['Guardrail', 'FlowSpace', 'Luminary'],
  'Redis':      ['Guardrail', 'FlowSpace'],
  'WebSockets': ['Guardrail', 'FlowSpace'],
  'BullMQ':     ['Guardrail', 'FlowSpace'],
  'Prisma':     ['FlowSpace', 'Luminary'],
  'Next.js':    ['Guardrail', 'FlowSpace', 'Luminary'],
  'React':      ['Guardrail', 'FlowSpace', 'Luminary'],
  'Docker':     ['Guardrail', 'FlowSpace'],
  'Turborepo':  ['Guardrail', 'FlowSpace'],
  'Vercel':     ['Luminary'],
}

const CATEGORIES = ['backend', 'frontend', 'infrastructure'] as const

export default function SkillsSection() {
  const { ref, revealed } = useReveal()
  const [active, setActive]   = useState<string>('backend')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = SKILLS.filter(s => s.category === active)

  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden"
      style={{ background: 'var(--c-black)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(139,26,26,0.04) 0%, transparent 70%)' }}
      />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="rule-crimson" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
            02 - ARSENAL
          </span>
          <span className="rule-crimson" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(3rem)', transition: 'opacity 1.2s var(--ease-expo), transform 1.2s var(--ease-expo)' }}>
            <h2 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
              TECHNICAL ARSENAL.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Production-tested tools. Every skill listed has been used in a deployed, load-tested system.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', padding: '0.5rem 1rem', border: '1px solid', borderColor: active === cat ? 'var(--c-crimson)' : 'var(--c-dim)', color: active === cat ? 'var(--c-crimson-lit)' : 'var(--c-ash)', background: active === cat ? 'rgba(139,26,26,0.08)' : 'transparent', transition: 'all 0.2s', cursor: 'pointer' }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="p-4" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
                  SYSTEM DIAGNOSTICS
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
                {filtered.length} MODULES LOADED — {active.toUpperCase()} STACK
              </p>
              {hovered && SKILL_PROJECTS[hovered] && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', letterSpacing: '0.1em', marginTop: '6px' }}>
                  DEPLOYED IN: {SKILL_PROJECTS[hovered].join(', ')}
                </p>
              )}
            </div>
          </div>

          <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(3rem)', transition: 'opacity 1.2s 0.3s var(--ease-expo), transform 1.2s 0.3s var(--ease-expo)' }}>
            <div style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
              <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--c-dim)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>MODULE</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>STATUS</span>
              </div>
              {filtered.map((skill, i) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between px-4 py-3 cursor-default"
                  style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--c-dim)' : 'none', background: hovered === skill.name ? 'rgba(139,26,26,0.06)' : 'transparent', transition: 'background 0.2s' }}
                  onMouseEnter={() => setHovered(skill.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-center gap-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em', minWidth: '20px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: hovered === skill.name ? 'var(--c-ghost)' : 'var(--c-fog)', letterSpacing: '0.08em', transition: 'color 0.2s' }}>
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--c-crimson-lit)', boxShadow: '0 0 4px var(--c-crimson)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.14em' }}>
                      ONLINE
                    </span>
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