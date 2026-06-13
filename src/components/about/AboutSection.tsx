'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { IDENTITY } from '@/lib/constants'
import { useSentinel } from '@/lib/hooks/useSentinel'
import Panel from '@/components/ui/Panel'
import PanelContent from '@/components/ui/PanelContent'
import SectionHeader from '@/components/ui/SectionHeader'
import FadeItem from '@/components/ui/FadeItem'
import GlowCard from '@/components/ui/GlowCard'

const FIELDS = [
  { label: 'NAME', value: IDENTITY.name },
  { label: 'FOCUS', value: 'Backend Engineering • Applied AI' },
  { label: 'LOCATION', value: IDENTITY.location },
  { label: 'CURRENTLY', value: 'Building systems and learning Applied AI' },
]

const LINKS = [
  { label: 'GITHUB', url: IDENTITY.github },
  { label: 'LINKEDIN', url: IDENTITY.linkedin },
  { label: 'TWITTER', url: IDENTITY.twitter },
]

const METRICS = [
  { value: '134 req/s', label: 'Peak throughput' },
  { value: '359ms', label: 'p95 latency' },
  { value: 'Zero', label: 'Errors under load' },
  { value: '3', label: 'Production systems' },
]

export default function AboutSection() {
  const { ref, visible } = useSentinel()

  return (
    <Panel id="about" background="charcoal">
      <div className="overlay-scan absolute inset-0 pointer-events-none" />
      <PanelContent>
      <SectionHeader index="01" label="ABOUT" visible={visible} />

        <div ref={ref} style={{ height: '1px', width: '100%', marginBottom: '-1px' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <FadeItem delay={0.1} visible={visible}>
              <GlowCard hover className="card-tactical p-8 mb-6">
                <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--border-line)' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-crimson-lit)', letterSpacing: '0.18em' }}>
                  ABOUT ME
                  </p>
                  <div className="w-2 h-2 rounded-full animate-blink" style={{ background: 'var(--c-crimson-lit)' }} />
                </div>

                <div className="flex gap-6 mb-6">
                  <div style={{ position: 'relative', width: '180px', height: '220px', flexShrink: 0 }}>
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                    <Image
                      src="/avatar.jpg"
                      alt="Akhilesh Singh"
                      fill
                      sizes="120px"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                    <div className="absolute inset-0 z-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)' }} />
                    <div className="absolute inset-0 z-10 pointer-events-none" />
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    {FIELDS.slice(0, 2).map(({ label, value }) => (
                      <div key={label}>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em', marginBottom: '2px' }}>{label}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)' }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {FIELDS.slice(2).map(({ label, value }) => (
                  <div key={label} className="flex gap-4 mb-4">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', minWidth: '100px' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)' }}>{value}</span>
                  </div>
                ))}

                <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border-line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>
                  BUILDING SYSTEMS SINCE 2024
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson)', letterSpacing: '0.2em', border: '1px solid var(--c-crimson)', padding: '2px 6px', opacity: 0.7 }}>
                  AVAILABLE
                  </span>
                </div>
              </GlowCard>
            </FadeItem>

            <FadeItem delay={0.3} visible={visible}>
              <div className="flex flex-wrap gap-3">
                {LINKS.map(({ label, url }) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', border: '1px solid var(--border-line)', padding: '0.4rem 0.8rem', textDecoration: 'none', display: 'inline-block', borderRadius: 'var(--radius-sm)' }}
                    whileHover={{ color: 'var(--c-crimson-lit)', borderColor: 'var(--c-crimson)', y: -2, boxShadow: '0 4px 12px rgba(139,26,26,0.15)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {label} →
                  </motion.a>
                ))}
              </div>
            </FadeItem>
          </div>

          <div>
            <FadeItem delay={0.2} visible={visible}>
              <h2 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
              MITS GWALIOR • INDIA
              </h2>
            </FadeItem>

            <FadeItem delay={0.35} visible={visible}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I build backend systems focused on reliability, scalability, and real-world performance. My interests lie in distributed systems, queues, caching, databases, real-time communication, and the engineering tradeoffs that make software dependable under load.

              Over the last year, I've built production-focused projects involving PostgreSQL, Redis, BullMQ, WebSockets, and TypeScript. While backend engineering remains my foundation, I am now expanding into Applied AI and exploring how intelligent systems can be integrated into practical products.
              </p>
            </FadeItem>

            <FadeItem delay={0.5} visible={visible}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-ash)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Currently pursuing B.Tech at MITS Gwalior while building production-focused backend projects. Alongside backend engineering, I am actively moving toward Applied AI and exploring how intelligent systems can be integrated into real-world products.
              </p>
            </FadeItem>

            <div className="grid grid-cols-2 gap-4">
              {METRICS.map(({ value, label }, i) => (
                <FadeItem key={label} delay={0.65 + i * 0.1} visible={visible}>
                  <GlowCard className="p-4">
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--c-ghost)', lineHeight: '1' }}>
                      {value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', marginTop: '4px' }}>
                      {label.toUpperCase()}
                    </div>
                  </GlowCard>
                </FadeItem>
              ))}
            </div>
          </div>

        </div>
      </PanelContent>
    </Panel>
  )
}