'use client'

import { useEffect, useRef, useState } from 'react'
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

const SKILL_DETAIL: Record<string, { role: string; notes: string[] }> = {
  'Node.js':    { role: 'RUNTIME ENGINE',  notes: ['HTTP servers', 'Event loop tuning', 'Stream processing'] },
  'TypeScript': { role: 'TYPE LAYER',      notes: ['Strict mode', 'Branded types', 'Zod validation'] },
  'PostgreSQL': { role: 'PRIMARY STORE',   notes: ['Index strategy', 'Transactions', 'Analytical queries'] },
  'Redis':      { role: 'CACHE / PUB-SUB', notes: ['Lua atomics', 'Rate limiting', 'Pub/Sub channels'] },
  'WebSockets': { role: 'REAL-TIME LAYER', notes: ['Multi-tenant rooms', 'Heartbeat logic', 'Reconnect policy'] },
  'BullMQ':     { role: 'JOB QUEUE',       notes: ['Worker concurrency', 'Retry strategies', 'Priority queues'] },
  'Prisma':     { role: 'ORM',             notes: ['Schema migrations', 'Relation queries', 'Type-safe client'] },
  'Next.js':    { role: 'FULL-STACK',      notes: ['App Router', 'Server Actions', 'ISR / SSR / SSG'] },
  'React':      { role: 'UI RUNTIME',      notes: ['Server components', 'Suspense', 'Concurrent mode'] },
  'Docker':     { role: 'CONTAINERS',      notes: ['Multi-stage builds', 'Compose services', 'Prod images'] },
  'Turborepo':  { role: 'MONOREPO',        notes: ['Pipeline caching', 'Task graph', 'Shared packages'] },
  'Vercel':     { role: 'DEPLOYMENT',      notes: ['Edge functions', 'Preview URLs', 'Domain routing'] },
}

const CATEGORIES = ['backend', 'frontend', 'infrastructure'] as const

function FadeItem({ children, delay, revealed }: { children: React.ReactNode; delay: number; revealed: boolean }) {
  return (
    <div
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0)' : 'translateY(1.5rem)',
        transition: `opacity 0.9s ${delay}s var(--ease-expo), transform 0.9s ${delay}s var(--ease-expo)`,
      }}
    >
      {children}
    </div>
  )
}

export default function SkillsSection() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [active, setActive]     = useState<string>('backend')
  const [hovered, setHovered]   = useState<string | null>(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const filtered = SKILLS.filter(s => s.category === active)
  const detail   = hovered ? SKILL_DETAIL[hovered] : null

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        <FadeItem delay={0} revealed={revealed}>
          <div className="flex items-center gap-4 mb-16">
            <span className="rule-crimson" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
              02 - ARSENAL
            </span>
            <span className="rule-crimson" />
          </div>
        </FadeItem>

        {/* Sentinel */}
        <div ref={sentinelRef} style={{ height: '1px', width: '100%', marginBottom: '-1px' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <FadeItem delay={0.1} revealed={revealed}>
              <h2 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
                TECHNICAL ARSENAL.
              </h2>
            </FadeItem>

            <FadeItem delay={0.2} revealed={revealed}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Production-tested tools. Every skill listed has been used in a deployed, load-tested system.
              </p>
            </FadeItem>

            <FadeItem delay={0.3} revealed={revealed}>
              <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActive(cat); setHovered(null) }}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.16em', padding: '0.5rem 1rem', border: '1px solid', borderColor: active === cat ? 'var(--c-crimson)' : 'var(--c-dim)', color: active === cat ? 'var(--c-crimson-lit)' : 'var(--c-ash)', background: active === cat ? 'rgba(139,26,26,0.08)' : 'transparent', transition: 'all 0.2s', cursor: 'pointer' }}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </FadeItem>

            <FadeItem delay={0.4} revealed={revealed}>
              <div className="p-4" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)', minHeight: '110px' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
                    SYSTEM DIAGNOSTICS
                  </span>
                </div>
                {hovered && detail ? (
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-ghost)', letterSpacing: '0.1em' }}>{hovered}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>{detail.role}</span>
                    </div>
                    <div className="flex flex-col gap-1 mb-2">
                      {detail.notes.map(note => (
                        <span key={note} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', letterSpacing: '0.1em' }}>› {note}</span>
                      ))}
                    </div>
                    {SKILL_PROJECTS[hovered] && (
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em', marginTop: '6px' }}>
                        DEPLOYED IN: {SKILL_PROJECTS[hovered].join(', ')}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
                      {filtered.length} MODULES LOADED — {active.toUpperCase()} STACK
                    </p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em', marginTop: '6px' }}>
                      HOVER A MODULE TO INSPECT
                    </p>
                  </div>
                )}
              </div>
            </FadeItem>
          </div>

          <div>
            <FadeItem delay={0.2} revealed={revealed}>
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
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.14em' }}>ONLINE</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeItem>
          </div>

        </div>
      </div>
    </section>
  )
}