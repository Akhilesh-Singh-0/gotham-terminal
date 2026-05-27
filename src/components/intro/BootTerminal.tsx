'use client'

import { useEffect, useState } from 'react'

const BOOT_LINES = [
  'WAYNE SYSTEMS v9.4.1 — INITIALIZING...',
  'LOADING GOTHAM SURVEILLANCE GRID...',
  'ENCRYPTION PROTOCOLS: ACTIVE',
  'BIOMETRIC SCAN: VERIFIED',
  'CONNECTING TO BATCOMPUTER CORE...',
  'ALL SYSTEMS OPERATIONAL.',
  '> WELCOME BACK, MR. WAYNE.',
]

export default function BootTerminal() {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentText, setCurrentText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      setDone(true)
      return
    }

    const line = BOOT_LINES[lineIndex]

    if (charIndex < line.length) {
      const t = setTimeout(() => {
        setCurrentText((prev) => prev + line[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 28)
      return () => clearTimeout(t)
    } else {
    
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
        setCurrentText('')
        setCharIndex(0)
        setLineIndex((prev) => prev + 1)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [lineIndex, charIndex])

  return (
    <div
      className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-lg px-6"
      style={{ fontFamily: 'var(--font-mono)' }}
    >

      <div
        className="border p-4"
        style={{
          background:  'rgba(8, 8, 10, 0.85)',
          borderColor: 'rgba(201, 168, 76, 0.2)',
        }}
      >

        <div
          className="flex items-center gap-2 pb-3 mb-3"
          style={{ borderBottom: '1px solid rgba(201,168,76,0.15)' }}
        >
          <div className="w-2 h-2 rounded-full bg-crimson" />
          <span
            className="text-gotham-dim"
            style={{ fontSize: 'var(--fs-xs)', letterSpacing: '0.15em' }}
          >
            BATCOMPUTER — SECURE TERMINAL
          </span>
        </div>

        {visibleLines.map((line, i) => (
          <div
            key={i}
            className="flex gap-2 mb-1"
            style={{ fontSize: 'var(--fs-xs)' }}
          >
            <span style={{ color: 'var(--c-crimson-lit)' }}>›</span>
            <span style={{ color: 'var(--c-ash)' }}>{line}</span>
          </div>
        ))}

        {!done && (
          <div
            className="flex gap-2"
            style={{ fontSize: 'var(--fs-xs)' }}
          >
            <span style={{ color: 'var(--c-crimson-lit)' }}>›</span>
            <span style={{ color: 'var(--c-gold)' }}>
              {currentText}
              <span className="animate-blink">▋</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}