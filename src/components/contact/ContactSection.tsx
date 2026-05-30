'use client'

import { useState } from 'react'
import { IDENTITY } from '@/lib/constants'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
  }

  return (
    <section id="contact" className="relative section-padding overflow-hidden" style={{ background: 'var(--c-black)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(139,26,26,0.05) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="rule-crimson" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', letterSpacing: '0.18em', color: 'var(--c-ash)', border: '1px solid var(--c-dim)', padding: '0.25rem 0.625rem', borderRadius: '2px' }}>
            04 - SECURE CHANNEL
          </span>
          <span className="rule-crimson" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="heading-display mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--c-ghost)' }}>
              OPEN A CHANNEL.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-silver)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Available for backend engineering internships, remote roles, and systems-focused opportunities.
            </p>
            <div className="flex flex-col gap-3">
              <a href={"mailto:" + IDENTITY.email} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4" style={{ border: '1px solid var(--c-dim)', textDecoration: 'none' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em', minWidth: '70px' }}>EMAIL</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)' }}>{IDENTITY.email}</span>
              </a>
              <a href={IDENTITY.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4" style={{ border: '1px solid var(--c-dim)', textDecoration: 'none' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em', minWidth: '70px' }}>GITHUB</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)' }}>Akhilesh-Singh-0</span>
              </a>
              <a href={IDENTITY.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4" style={{ border: '1px solid var(--c-dim)', textDecoration: 'none' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em', minWidth: '70px' }}>LINKEDIN</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)' }}>akhilesh-singh-dev</span>
              </a>
            </div>
          </div>
          <div>
            {status === 'sent' ? (
              <div className="p-8 flex flex-col items-center justify-center text-center" style={{ border: '1px solid var(--c-crimson)', minHeight: '400px' }}>
                <div className="w-2 h-2 rounded-full animate-blink mb-6" style={{ background: 'var(--c-crimson-lit)' }} />
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-crimson-lit)', letterSpacing: '0.18em' }}>
                  TRANSMISSION RECEIVED
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-md)', color: 'var(--c-ash)', marginTop: '1rem' }}>
                  Message delivered. Will respond within 24 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em', display: 'block', marginBottom: '6px' }}>DESIGNATION</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={{ width: '100%', background: 'rgba(8,8,10,0.8)', border: '1px solid var(--c-dim)', padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em', display: 'block', marginBottom: '6px' }}>FREQUENCY</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={{ width: '100%', background: 'rgba(8,8,10,0.8)', border: '1px solid var(--c-dim)', padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.16em', display: 'block', marginBottom: '6px' }}>TRANSMISSION</label>
                  <textarea placeholder="Your message..." rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ width: '100%', background: 'rgba(8,8,10,0.8)', border: '1px solid var(--c-dim)', padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', outline: 'none', resize: 'none' }} />
                </div>
                <button onClick={handleSubmit} disabled={status === 'sending'} className="btn-tactical" style={{ opacity: status === 'sending' ? 0.7 : 1, width: '100%' }}>
                  {status === 'sending' ? 'ENCRYPTING...' : 'SEND TRANSMISSION'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
