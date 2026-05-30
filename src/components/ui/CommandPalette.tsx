'use client'

import { useEffect, useState, useCallback } from 'react'
import { IDENTITY } from '@/lib/constants'

interface Command {
  id:      string
  label:   string
  hint:    string
  action:  () => void
}

export default function CommandPalette() {
  const [open,  setOpen]  = useState(false)
  const [query, setQuery] = useState('')

  const commands: Command[] = [
    {
      id:     'about',
      label:  'open.dossier()',
      hint:   'View classified profile',
      action: () => scrollTo('#about'),
    },
    {
      id:     'skills',
      label:  'load.arsenal()',
      hint:   'View technical stack',
      action: () => scrollTo('#skills'),
    },
    {
      id:     'projects',
      label:  'access.operations()',
      hint:   'View mission files',
      action: () => scrollTo('#projects'),
    },
    {
      id:     'contact',
      label:  'open.channel()',
      hint:   'Send a transmission',
      action: () => scrollTo('#contact'),
    },
    {
      id:     'github',
      label:  'link.github()',
      hint:   IDENTITY.github,
      action: () => window.open(IDENTITY.github, '_blank'),
    },
    {
      id:     'linkedin',
      label:  'link.linkedin()',
      hint:   IDENTITY.linkedin,
      action: () => window.open(IDENTITY.linkedin, '_blank'),
    },
    {
      id:     'email',
      label:  'contact.email()',
      hint:   IDENTITY.email,
      action: () => window.open('mailto:' + IDENTITY.email),
    },
  ]

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.hint.toLowerCase().includes(query.toLowerCase())
  )

  const handleKey = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setOpen(v => !v)
      setQuery('')
    }
    if (e.key === 'Escape') setOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[var(--z-cursor)] flex items-start justify-center pt-[20vh]"
      style={{ background: 'rgba(8,8,10,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg mx-4"
        style={{ border: '1px solid var(--c-crimson)', background: 'var(--c-charcoal)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--c-dim)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-crimson-lit)', letterSpacing: '0.16em' }}>
            BATCOMPUTER
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
            COMMAND INTERFACE
          </span>
          <span className="ml-auto" style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
            ESC to close
          </span>
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--c-dim)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-crimson-lit)' }}>{'>'}</span>
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command..."
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-ghost)', letterSpacing: '0.08em' }}
          />
        </div>

        {/* Commands */}
        <div>
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              onClick={cmd.action}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
              style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--c-dim)' : 'none', background: 'transparent', cursor: 'pointer', transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,26,26,0.08)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)', color: 'var(--c-fog)', letterSpacing: '0.08em' }}>
                {cmd.label}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.08em' }}>
                {cmd.hint}
              </span>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2" style={{ borderTop: '1px solid var(--c-dim)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
            {filtered.length} COMMANDS AVAILABLE
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-dim)', letterSpacing: '0.1em' }}>
            ⌘K
          </span>
        </div>
      </div>
    </div>
  )
}
