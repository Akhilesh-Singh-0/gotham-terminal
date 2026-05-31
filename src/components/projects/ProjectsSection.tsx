'use client'

import { useState } from 'react'
import { useReveal } from '@/lib/hooks/useReveal'
import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{ border: '1px solid var(--c-dim)', background: expanded ? 'rgba(139,26,26,0.04)' : 'rgba(8,8,10,0.5)', transition: 'all 0.4s', cursor: 'pointer' }}
      onClick={() => setExpanded(v => !v)}
    >
      <div className="p-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
              {project.codename}
            </span>
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
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--c-ash)', transition: 'transform 0.3s', transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0, marginTop: '4px' }}>
          +
        </div>
      </div>
      {expanded && (
        <div className="px-6 pb-6" style={{ borderTop: '1px solid var(--c-dim)' }}>
          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
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
            </div>
          )}
          {project.metrics?.architecture && (
            <div className="mb-6 p-4" style={{ border: '1px solid var(--c-dim)', background: 'rgba(8,8,10,0.5)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.14em', marginBottom: '8px' }}>ARCHITECTURE</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', letterSpacing: '0.08em' }}>{project.metrics.architecture}</div>
            </div>
          )}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.6rem', letterSpacing: '0.1em' }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', border: '1px solid var(--c-crimson)', padding: '0.4rem 0.8rem', letterSpacing: '0.14em', textDecoration: 'none' }}>
                LIVE
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.4rem 0.8rem', letterSpacing: '0.14em', textDecoration: 'none' }}>
                GITHUB
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  const { ref, revealed } = useReveal()

  return (
    <section id="projects" className="relative section-padding overflow-hidden" style={{ background: 'var(--c-charcoal)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(139,26,26,0.04) 0%, transparent 70%)' }} />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="rule-crimson" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
            03 - OPERATIONS
          </span>
          <span className="rule-crimson" />
        </div>
        <div style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(3rem)', transition: 'opacity 1.2s var(--ease-expo), transform 1.2s var(--ease-expo)', marginBottom: '3rem' }}>
          <h2 className="heading-display mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
            SELECTED MISSIONS.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8' }}>
            Production systems built and deployed. Click any operation to access the classified file.
          </p>
        </div>
        <div className="flex flex-col gap-4" style={{ opacity: revealed ? 1 : 0, transform: revealed ? 'translateY(0)' : 'translateY(3rem)', transition: 'opacity 1.2s 0.3s var(--ease-expo), transform 1.2s 0.3s var(--ease-expo)' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}