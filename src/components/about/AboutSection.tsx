'use client'

import Image from 'next/image'
import { IDENTITY } from "@/lib/constants"
import { useReveal } from '@/lib/hooks/useReveal'

const FIELDS = [
  { label: "DESIGNATION", value: IDENTITY.name },
  { label: "ROLE", value: IDENTITY.role },
  { label: "LOCATION", value: IDENTITY.location },
  { label: "STATUS", value: IDENTITY.availability },
]

const LINKS = [
  { label: "GITHUB", url: IDENTITY.github },
  { label: "LINKEDIN", url: IDENTITY.linkedin },
  { label: "TWITTER", url: IDENTITY.twitter },
]

const METRICS = [
  { value: "134 req/s", label: "Peak throughput" },
  { value: "359ms", label: "p95 latency" },
  { value: "Zero", label: "Errors under load" },
  { value: "3", label: "Production systems" },
]

export default function AboutSection() {
  const { ref, revealed } = useReveal()

  return (
    <section id="about" className="relative section-padding overflow-hidden" style={{ background: "var(--c-charcoal)" }}>
      <div className="overlay-scan absolute inset-0 pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="rule-crimson" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-ash)", border: "1px solid var(--c-dim)", padding: "0.25rem 0.625rem" }}>01 — DOSSIER</span>
          <span className="rule-crimson" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — dossier card with photo */}
          <div style={{ transition: "opacity 1.2s var(--ease-expo), transform 1.2s var(--ease-expo)", opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(3rem)" }}>
            <div className="card-tactical p-8 mb-6" style={{ borderColor: "var(--c-dim)" }}>
              <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--c-dim)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-crimson-lit)", letterSpacing: "0.18em" }}>CLASSIFIED — LEVEL 5</p>
                <div className="w-2 h-2 rounded-full animate-blink" style={{ background: "var(--c-crimson-lit)" }} />
              </div>

              {/* Photo ID */}
              <div className="flex gap-6 mb-6">
                <div style={{ position: 'relative', width: '90px', height: '110px', flexShrink: 0 }}>
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l z-10" style={{ borderColor: 'var(--c-crimson)' }} />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r z-10" style={{ borderColor: 'var(--c-crimson)' }} />

                  <Image
                    src="/avatar.jpg"
                    alt="Akhilesh Singh"
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'grayscale(100%) contrast(1.15) brightness(0.65)',
                    }}
                  />
                  {/* Scanlines */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
                    }}
                  />
                  {/* Crimson tint */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{ background: 'rgba(139,26,26,0.12)' }}
                  />
                </div>

                {/* Fields next to photo */}
                <div className="flex flex-col justify-center gap-3">
                  {FIELDS.slice(0, 2).map(({ label, value }) => (
                    <div key={label}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-dim)", letterSpacing: "0.14em", marginBottom: "2px" }}>{label}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-fog)" }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Remaining fields */}
              {FIELDS.slice(2).map(({ label, value }) => (
                <div key={label} className="flex gap-4 mb-4">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-dim)", minWidth: "100px" }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-fog)" }}>{value}</span>
                </div>
              ))}

              {/* Stamp */}
              <div
                className="mt-4 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--c-dim)" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-dim)", letterSpacing: "0.14em" }}>
                  FILE ID: WS-2025-0042
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-crimson)", letterSpacing: "0.2em", border: "1px solid var(--c-crimson)", padding: "2px 6px", opacity: 0.7 }}>
                  CLASSIFIED
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {LINKS.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-ash)", border: "1px solid var(--c-dim)", padding: "0.4rem 0.8rem", textDecoration: "none", display: "inline-block" }}>
                  {label} →
                </a>
              ))}
            </div>
          </div>

          {/* Right — bio + metrics */}
          <div style={{ transition: "opacity 1.2s 0.3s var(--ease-expo), transform 1.2s 0.3s var(--ease-expo)", opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(3rem)" }}>
            <h2 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
              THE ENGINEER BEHIND THE SYSTEMS.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I started with web development but became more interested in what happened after a request left the browser. That curiosity led me into distributed systems, queues, caching, real-time communication, and backend architecture.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-ash)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Currently pursuing B.Tech in Mechanical Engineering at MITS Gwalior building production grade backend systems on the side. Meta Back-End Developer certified. PostgreSQL specialist.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map(({ value, label }) => (
                <div key={label} className="p-4" style={{ border: "1px solid var(--c-dim)", background: "rgba(8,8,10,0.5)" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: "var(--c-ghost)", lineHeight: "1" }}>{value}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-dim)", marginTop: "4px" }}>{label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}