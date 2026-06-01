'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'

// Scanning corners that animate inward on open
function SurveillanceCorners({ active }: { active: boolean }) {
  return (
    <>
      {[
        { top: 0, left: 0, borderTop: '2px solid', borderLeft: '2px solid' },
        { top: 0, right: 0, borderTop: '2px solid', borderRight: '2px solid' },
        { bottom: 0, left: 0, borderBottom: '2px solid', borderLeft: '2px solid' },
        { bottom: 0, right: 0, borderBottom: '2px solid', borderRight: '2px solid' },
      ].map((style, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          style={{ ...style, borderColor: 'var(--c-crimson)', width: 20, height: 20 }}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.5 }}
          transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </>
  )
}

// Classified file open sequence
function AccessSequence({ onComplete }: { onComplete: () => void }) {
  const steps = [
    'VERIFYING CLEARANCE...',
    'AUTHORIZATION GRANTED',
    'DECRYPTING FILE...',
    'ACCESS CONFIRMED',
  ]
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i), i * 600))
    })
    timers.push(setTimeout(onComplete, steps.length * 600 + 300))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
      style={{ background: 'rgba(8,8,10,0.92)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          width: '120px',
          background: 'linear-gradient(to right, transparent, var(--c-crimson), transparent)',
          marginBottom: '16px',
        }}
      />
      <AnimatePresence mode="wait">
        <motion.span
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.24em',
            color: step >= 1 ? 'var(--c-crimson-lit)' : 'var(--c-ash)',
          }}
        >
          {steps[step]}
        </motion.span>
      </AnimatePresence>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          width: '120px',
          background: 'linear-gradient(to right, transparent, var(--c-crimson), transparent)',
          marginTop: '16px',
        }}
      />
    </motion.div>
  )
}

function ProjectCard({ project, index, revealed }: { project: Project; index: number; revealed: boolean }) {
  const [status, setStatus] = useState<'closed' | 'accessing' | 'open'>('closed')
  const expanded = status === 'open'

  const handleClick = () => {
    if (status === 'open') {
      setStatus('closed')
      return
    }
    if (status === 'closed') {
      setStatus('accessing')
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleClick}
      style={{
        position: 'relative',
        border: '1px solid',
        borderColor: expanded ? 'rgba(139,26,26,0.5)' : 'var(--c-dim)',
        background: expanded ? 'rgba(139,26,26,0.04)' : 'rgba(8,8,10,0.5)',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'border-color 0.4s, background 0.4s',
      }}
      whileHover={status === 'closed' ? { borderColor: 'rgba(139,26,26,0.3)' } : {}}
    >
      {/* Surveillance corners */}
      <SurveillanceCorners active={expanded} />

      {/* Access sequence overlay */}
      <AnimatePresence>
        {status === 'accessing' && (
          <AccessSequence onComplete={() => setStatus('open')} />
        )}
      </AnimatePresence>

      {/* Card header */}
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
              {project.codename}
            </span>
            {expanded && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}
              >
                — FILE OPEN
              </motion.span>
            )}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em', marginLeft: 'auto' }}>
              {project.year}
            </span>
          </div>
          <h3 className="heading-display mb-2" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--c-ghost)' }}>
            {project.title}
          </h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: project.status === 'active' ? 'var(--c-crimson-lit)' : 'var(--c-dim)', letterSpacing: '0.14em' }}>
            {project.status.toUpperCase()}
          </span>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: expanded ? 'var(--c-crimson-lit)' : 'var(--c-ash)', flexShrink: 0, marginTop: '4px' }}
        >
          +
        </motion.div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--c-dim)' }}
          >
            <div className="px-6 pb-6">

              {/* Metrics — load first */}
              {project.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6"
                >
                  {project.metrics.throughput && (
                    <div className="p-3" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em', marginBottom: '4px' }}>THROUGHPUT</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--c-ghost)' }}>{project.metrics.throughput}</div>
                    </div>
                  )}
                  {project.metrics.latency && (
                    <div className="p-3" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em', marginBottom: '4px' }}>LATENCY</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--c-ghost)' }}>{project.metrics.latency}</div>
                    </div>
                  )}
                  {project.metrics.errorRate && (
                    <div className="p-3" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em', marginBottom: '4px' }}>ERROR RATE</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--c-ghost)' }}>{project.metrics.errorRate}</div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Architecture — load second */}
              {project.metrics?.architecture && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 p-4"
                  style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.14em', marginBottom: '8px' }}>ARCHITECTURE</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', letterSpacing: '0.08em' }}>{project.metrics.architecture}</div>
                </motion.div>
              )}

              {/* Description — load third */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '1.5rem' }}
              >
                {project.description}
              </motion.p>

              {/* Tags — load fourth */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.6rem', letterSpacing: '0.1em' }}>
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Links — load last */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', border: '1px solid var(--c-crimson)', padding: '0.4rem 0.8rem', letterSpacing: '0.14em', textDecoration: 'none' }}>
                    LIVE →
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.4rem 0.8rem', letterSpacing: '0.14em', textDecoration: 'none' }}>
                    GITHUB →
                  </a>
                )}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  onClick={e => { e.stopPropagation(); setStatus('closed') }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em', cursor: 'pointer', marginLeft: 'auto' }}
                >
                  CLOSE FILE ×
                </motion.span>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect() } },
      { threshold: 1.0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative section-padding overflow-hidden" style={{ background: 'var(--c-charcoal)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(139,26,26,0.04) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="rule-crimson" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
            03 - OPERATIONS
          </span>
          <span className="rule-crimson" />
        </motion.div>

        {/* Sentinel */}
        <div ref={sentinelRef} style={{ height: '1px', width: '100%', marginBottom: '-1px' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="heading-display mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
            SELECTED MISSIONS.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8' }}>
            Production systems built and deployed. Click any operation to access the classified file.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} revealed={revealed} />
          ))}
        </div>

      </div>
    </section>
  )
}