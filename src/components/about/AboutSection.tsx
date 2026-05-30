'use client'

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
  const { ref: sectionRef, revealed } = useReveal({
    threshold: 0.2,
  })

  return (
    <section ref={sectionRef} id="about" className="relative section-padding overflow-hidden" style={{ background: "var(--c-charcoal)" }}>
      <div className="overlay-scan absolute inset-0 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="rule-crimson" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-ash)", border: "1px solid var(--c-dim)", padding: "0.25rem 0.625rem" }}>01 — DOSSIER</span>
          <span className="rule-crimson" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div style={{ transition: "all 0.7s", opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(2rem)" }}>
            <div className="card-tactical p-8 mb-6" style={{ borderColor: "var(--c-dim)" }}>
              <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid var(--c-dim)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-crimson-lit)", letterSpacing: "0.18em" }}>CLASSIFIED — LEVEL 5</p>
                <div className="w-2 h-2 rounded-full animate-blink" style={{ background: "var(--c-crimson-lit)" }} />
              </div>
              {FIELDS.map(({ label, value }) => (
                <div key={label} className="flex gap-4 mb-4">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-dim)", minWidth: "100px" }}>{label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--c-fog)" }}>{value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {LINKS.map(({ label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--c-ash)", border: "1px solid var(--c-dim)", padding: "0.4rem 0.8rem", textDecoration: "none", display: "inline-block" }}>
                  {label} →
                </a>
              ))}
            </div>
          </div>
          <div style={{ transition: "all 0.7s 0.2s", opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0)" : "translateY(2rem)" }}>
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