'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IDENTITY } from '@/lib/constants'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

const CONTACT_LINKS = [
  { label: 'EMAIL',    value: IDENTITY.email,         href: 'mailto:' + IDENTITY.email },
  { label: 'GITHUB',   value: 'Akhilesh-Singh-0',     href: IDENTITY.github },
  { label: 'LINKEDIN', value: 'akhilesh-singh-dev',   href: IDENTITY.linkedin },
]

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function FadeItem({
  children,
  delay,
  revealed,
}: {
  children: React.ReactNode
  delay: number
  revealed: boolean
}) {
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

export default function ContactSection() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [form, setForm]         = useState({ name: '', email: '', message: '' })
  const [status, setStatus]     = useState<FormState>('idle')

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

  const canSubmit =
    status !== 'sending' &&
    form.name.trim().length > 0 &&
    isValidEmail(form.email) &&
    form.message.trim().length > 0

  const handleSubmit = async () => {
    if (!canSubmit) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New transmission from ${form.name} — Gotham Terminal`,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      style={{ background: 'var(--c-black)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(139,26,26,0.05) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        <FadeItem delay={0} revealed={revealed}>
          <div className="flex items-center gap-4 mb-16">
            <span className="rule-crimson" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
              04 - SECURE CHANNEL
            </span>
            <span className="rule-crimson" />
          </div>
        </FadeItem>

        {/* Sentinel */}
        <div ref={sentinelRef} style={{ height: '1px', width: '100%', marginBottom: '-1px' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — info */}
          <div>
            <FadeItem delay={0.1} revealed={revealed}>
              <h2
                className="heading-display mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}
              >
                OPEN A CHANNEL.
              </h2>
            </FadeItem>

            <FadeItem delay={0.2} revealed={revealed}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Available for backend engineering internships, remote roles, and systems-focused opportunities.
              </p>
            </FadeItem>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map(({ label, value, href }, i) => (
                <FadeItem key={label} delay={0.3 + i * 0.1} revealed={revealed}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span className="contact-link-label">{label}</span>
                    <span className="contact-link-value">{value}</span>
                    <span className="contact-link-arrow">→</span>
                  </a>
                </FadeItem>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center p-8"
                  style={{ border: '1px solid var(--c-crimson)', minHeight: '400px' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="w-2 h-2 rounded-full mb-6"
                    style={{ background: 'var(--c-crimson-lit)' }}
                  />
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-crimson-lit)', letterSpacing: '0.18em', marginBottom: '1rem' }}>
                    TRANSMISSION RECEIVED
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-ash)' }}>
                    Message delivered. Will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FadeItem delay={0.2} revealed={revealed}>
                    <div className="flex flex-col gap-4">

                      <div>
                        <label className="input-label">DESIGNATION</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="input-tactical"
                        />
                      </div>

                      <div>
                        <label className="input-label">FREQUENCY</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          className="input-tactical"
                        />
                      </div>

                      <div>
                        <label className="input-label">TRANSMISSION</label>
                        <textarea
                          placeholder="Your message..."
                          rows={5}
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          className="input-tactical"
                        />
                      </div>

                      <AnimatePresence>
                        {status === 'error' && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.14em' }}
                          >
                            TRANSMISSION FAILED — TRY AGAIN
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <motion.button
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="btn-tactical"
                        style={{ width: '100%', opacity: canSubmit ? 1 : 0.4, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                        whileHover={canSubmit ? { scale: 1.01 } : {}}
                        whileTap={canSubmit ? { scale: 0.99 } : {}}
                      >
                        {status === 'sending' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                      </motion.button>

                    </div>
                  </FadeItem>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}