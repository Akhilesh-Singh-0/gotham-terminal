'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'

function SurveillanceCorners({ active }: { active: boolean }) {
  return (
    <>
      {[
        { top: 0, left: 0, borderTop: '2px solid', borderLeft: '2px solid', borderRadius: '6px 0 0 0' },
        { top: 0, right: 0, borderTop: '2px solid', borderRight: '2px solid', borderRadius: '0 6px 0 0' },
        { bottom: 0, left: 0, borderBottom: '2px solid', borderLeft: '2px solid', borderRadius: '0 0 0 6px' },
        { bottom: 0, right: 0, borderBottom: '2px solid', borderRight: '2px solid', borderRadius: '0 0 6px 0' },
      ].map((style, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          style={{ ...style, borderColor: 'var(--c-crimson)', width: 24, height: 24 }}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.5 }}
          transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </>
  )
}

function AccessSequence({ onComplete }: { onComplete: () => void }) {
  const steps = [
    'VERIFYING CLEARANCE...',
    'AUTHORIZATION GRANTED',
    'DECRYPTING FILE...',
    'ACCESS CONFIRMED',
  ]
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setStep(i)
        setProgress(((i + 1) / steps.length) * 100)
      }, i * 600))
    })
    timers.push(setTimeout(onComplete, steps.length * 600 + 300))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
      style={{ background: 'rgba(8,8,10,0.96)', borderRadius: '12px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--c-dim)', borderRadius: '12px 12px 0 0' }}>
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(to right, var(--c-crimson-dark), var(--c-crimson-lit))', borderRadius: '12px 12px 0 0' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: '1px', width: '160px', background: 'linear-gradient(to right, transparent, var(--c-crimson), transparent)', marginBottom: '20px' }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.24em', color: step >= 1 ? 'var(--c-crimson-lit)' : 'var(--c-ash)' }}>
            {steps[step]}
          </span>
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <div
                key={i}
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: i <= step ? 'var(--c-crimson-lit)' : 'var(--c-dim)',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: '1px', width: '160px', background: 'linear-gradient(to right, transparent, var(--c-crimson), transparent)', marginTop: '20px' }}
      />
    </motion.div>
  )
}

function ArchitectureFlow({ architecture, visible }: { architecture: string; visible: boolean }) {
  const nodes = architecture.split('→').map(n => n.trim())
  const [lit, setLit] = useState(0)

  useEffect(() => {
    if (!visible) return
    setLit(0)
    const timers: ReturnType<typeof setTimeout>[] = []
    nodes.forEach((_, i) => {
      timers.push(setTimeout(() => setLit(i + 1), i * 300))
    })
    return () => timers.forEach(clearTimeout)
  }, [visible])

  return (
    <div className="flex flex-wrap items-center gap-2">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-2">
          <motion.div
            animate={{
              borderColor: lit > i ? 'rgba(139,26,26,0.6)' : 'var(--c-dim)',
              background: lit > i ? 'rgba(139,26,26,0.08)' : 'transparent',
              color: lit > i ? 'var(--c-fog)' : 'var(--c-ash)',
            }}
            transition={{ duration: 0.3 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.1em',
              padding: '0.3rem 0.6rem',
              border: '1px solid',
              borderRadius: '3px',
            }}
          >
            {node}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.span
              animate={{ color: lit > i ? 'var(--c-crimson-lit)' : 'var(--c-dim)', opacity: lit > i ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '10px' }}
            >
              →
            </motion.span>
          )}
        </div>
      ))}
    </div>
  )
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid rgba(139,26,26,0.25)',
        background: 'rgba(139,26,26,0.03)',
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(to right, var(--c-crimson-dark), var(--c-crimson-lit))',
          borderRadius: '6px 6px 0 0',
        }}
      />
      <div className="flex items-center gap-1 mb-2">
        <span
          className="animate-blink"
          style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-crimson-lit)', display: 'inline-block', flexShrink: 0 }}
        />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--c-crimson-lit)', letterSpacing: '0.18em' }}>
          {label}
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--c-ghost)', lineHeight: 1 }}>
        {value}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, revealed }: { project: Project; index: number; revealed: boolean }) {
  const [status, setStatus] = useState<'closed' | 'accessing' | 'open'>('closed')
  const expanded = status === 'open'

  const handleClick = () => {
    if (status === 'open') { setStatus('closed'); return }
    if (status === 'closed') { setStatus('accessing') }
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
        background: expanded ? 'rgba(139,26,26,0.03)' : 'rgba(8,8,10,0.5)',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '12px',
        transition: 'border-color 0.4s, background 0.4s',
        boxShadow: expanded
          ? '0 0 40px rgba(139,26,26,0.08), 0 20px 60px rgba(0,0,0,0.4)'
          : '0 4px 20px rgba(0,0,0,0.2)',
      }}
      whileHover={status === 'closed' ? {
        borderColor: 'rgba(139,26,26,0.3)',
        boxShadow: '0 0 20px rgba(139,26,26,0.06), 0 8px 30px rgba(0,0,0,0.3)',
        y: -2,
      } : {}}
    >
      <SurveillanceCorners active={expanded} />

      <AnimatePresence>
        {status === 'accessing' && (
          <AccessSequence onComplete={() => setStatus('open')} />
        )}
      </AnimatePresence>

      {/* Card header — two column with padding gap */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left — text */}
        <div className="p-8 flex flex-col justify-between" style={{ minHeight: '280px' }}>
          <div>
            <div className="flex items-center gap-3 mb-5 flex-wrap">
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

            <h3 className="heading-display mb-4" style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', color: 'var(--c-ghost)' }}>
              {project.title}
            </h3>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-sm)', color: 'var(--c-silver)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 5).map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--c-ash)',
                    border: '1px solid var(--c-dim)',
                    padding: '0.2rem 0.5rem',
                    letterSpacing: '0.1em',
                    borderRadius: '3px',
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 5 && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', border: '1px solid var(--c-dim)', padding: '0.2rem 0.5rem', letterSpacing: '0.1em', borderRadius: '3px' }}>
                  +{project.tags.length - 5}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: project.status === 'active' ? 'var(--c-crimson-lit)' : 'var(--c-dim)', letterSpacing: '0.14em' }}>
              ● {project.status.toUpperCase()}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em' }}>
              — {expanded ? 'CLICK TO CLOSE' : 'CLICK TO ACCESS FILE'}
            </span>
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: expanded ? 'var(--c-crimson-lit)' : 'var(--c-ash)', marginLeft: 'auto' }}
            >
              +
            </motion.div>
          </div>
        </div>

        {/* Right — screenshot with padding */}
        {project.image && (
          <div
            className="relative hidden md:flex items-stretch p-3"
            style={{ borderLeft: '1px solid rgba(139,26,26,0.1)' }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: '8px',
                minHeight: '254px',
                border: '1px solid rgba(139,26,26,0.15)',
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 0px, 50vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  filter: expanded ? 'grayscale(0%) brightness(0.9)' : 'grayscale(40%) brightness(0.55)',
                  transition: 'filter 0.6s ease',
                  borderRadius: '8px',
                }}
              />
              {/* Left fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: expanded
                    ? 'linear-gradient(to right, rgba(8,8,10,0.3) 0%, transparent 40%)'
                    : 'linear-gradient(to right, rgba(8,8,10,0.5) 0%, transparent 50%)',
                  transition: 'background 0.6s ease',
                  borderRadius: '8px',
                }}
              />
              {/* Scanlines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
                  borderRadius: '8px',
                }}
              />
              {/* Badge */}
              <div
                className="absolute top-2 right-2"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '8px',
                  color: 'var(--c-crimson-lit)',
                  letterSpacing: '0.14em',
                  background: 'rgba(8,8,10,0.85)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '3px',
                  border: '1px solid rgba(139,26,26,0.3)',
                }}
              >
                {expanded ? '● LIVE VIEW' : '● CLASSIFIED'}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(139,26,26,0.15)' }}
          >
            <div className="p-8">

              {/* Metrics */}
              {project.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
                >
                  {project.metrics.throughput && (
                    <MetricCard label="THROUGHPUT" value={project.metrics.throughput} />
                  )}
                  {project.metrics.latency && (
                    <MetricCard label="LATENCY" value={project.metrics.latency} />
                  )}
                  {project.metrics.errorRate && (
                    <MetricCard label="ERROR RATE" value={project.metrics.errorRate} />
                  )}
                </motion.div>
              )}

              {/* Architecture */}
              {project.metrics?.architecture && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6 p-4"
                  style={{ border: '1px solid rgba(139,26,26,0.15)', background: 'rgba(8,8,10,0.5)', borderRadius: '6px' }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.14em', marginBottom: '12px' }}>
                    SYSTEM ARCHITECTURE
                  </div>
                  <ArchitectureFlow architecture={project.metrics.architecture} visible={expanded} />
                </motion.div>
              )}

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', border: '1px solid var(--c-crimson)', padding: '0.5rem 1.2rem', letterSpacing: '0.14em', textDecoration: 'none', borderRadius: '4px' }}
                  >
                    LIVE →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.5rem 1.2rem', letterSpacing: '0.14em', textDecoration: 'none', borderRadius: '4px' }}
                  >
                    GITHUB →
                  </a>
                )}
                <span
                  onClick={e => { e.stopPropagation(); setStatus('closed') }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.14em', cursor: 'pointer', marginLeft: 'auto' }}
                >
                  CLOSE FILE ×
                </span>
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

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} revealed={revealed} />
          ))}
        </div>

      </div>
    </section>
  )
}