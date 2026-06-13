'use client'

import { useEffect, useState } from 'react'
import { SKILLS } from '@/lib/constants'
import { useSentinel } from '@/lib/hooks/useSentinel'
import Panel from '@/components/ui/Panel'
import PanelContent from '@/components/ui/PanelContent'
import SectionHeader from '@/components/ui/SectionHeader'
import FadeItem from '@/components/ui/FadeItem'
import GlowCard from '@/components/ui/GlowCard'
import { SKILL_PROJECTS, SKILL_DETAIL } from '@/data/skills'
import Tag from '@/components/ui/Tag'

const CATEGORIES = [
  'backend',
  'frontend',
  'infrastructure',
  'ai',
] as const

export default function SkillsSection() {
  const { ref, visible } = useSentinel()
  const [active, setActive]   = useState<string>('backend')
  const [hovered, setHovered] = useState<string | null>(null)
  const filtered = SKILLS.filter(s => s.category === active)
  const detail   = hovered ? SKILL_DETAIL[hovered] : null

  useEffect(() => {
    const firstSkill = filtered[0]?.name
  
    if (firstSkill) {
      setHovered(firstSkill)
    }
  }, [active])

  return (
    <Panel id="skills" background="black">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(139,26,26,0.04) 0%, transparent 70%)' }} />
      <PanelContent>
      <SectionHeader index="02" label="TECH STACK" visible={visible} />

        <div ref={ref} style={{ height: '1px', width: '100%', marginBottom: '-1px' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <FadeItem delay={0.1} visible={visible}>
              <h2 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
              TECHNOLOGIES I BUILD WITH.
              </h2>
            </FadeItem>

            <FadeItem delay={0.2} visible={visible}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Technologies I use to build backend systems, real-time applications, and production infrastructure. Currently expanding into Applied AI and intelligent systems.
              </p>
            </FadeItem>

            <FadeItem delay={0.3} visible={visible}>
              <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActive(cat); setHovered(null) }}
                  >
                    <Tag variant={active === cat ? 'active' : 'default'}>
                      {cat.toUpperCase()}
                    </Tag>
                  </button>
                ))}
              </div>
            </FadeItem>

            <FadeItem delay={0.4} visible={visible}>
              <GlowCard hover={false} className="p-4" style={{ minHeight: '110px' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
                  SKILL DETAILS
                  </span>
                </div>
                {hovered && detail ? (
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-ghost)', letterSpacing: '0.1em' }}>
                        {hovered}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
                        {detail.role}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 mb-2">
                      {detail.notes.map(note => (
                        <span key={note} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', letterSpacing: '0.1em' }}>
                          › {note}
                        </span>
                      ))}
                    </div>
                    {SKILL_PROJECTS[hovered] && (
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em', marginTop: '6px' }}>
                        USED IN: {SKILL_PROJECTS[hovered].join(', ')}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
                    {filtered.length} TECHNOLOGIES IN {active.toUpperCase()}
                    </p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em', marginTop: '6px' }}>
                    HOVER OVER A TECHNOLOGY TO SEE DETAILS
                    </p>
                  </div>
                )}
              </GlowCard>
            </FadeItem>
          </div>

          <div>
            <FadeItem delay={0.2} visible={visible}>
              <GlowCard hover={false}>
                <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--border-line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>TECHNOLOGY</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>STATUS</span>
                </div>
                {filtered.map((skill, i) => (
                  <div
                  key={skill.name}
                  className="flex items-center justify-between px-4 py-3 cursor-default"
                  style={{
                    borderBottom: i < filtered.length - 1 ? '1px solid var(--border-line)' : 'none',
                    background: hovered === skill.name ? 'rgba(139,26,26,0.06)' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={() => setHovered(skill.name)}
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
                      ACTIVE
                      </span>
                    </div>
                  </div>
                ))}
              </GlowCard>
            </FadeItem>
          </div>

        </div>
      </PanelContent>
    </Panel>
  )
}