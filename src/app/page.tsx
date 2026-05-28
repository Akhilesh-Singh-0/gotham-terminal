'use client'

import { useState, useCallback } from 'react'
import { useLenis } from '@/lib/hooks/useLenis'
import { cn } from '@/lib/utils'
import IntroSequence from '@/components/intro/IntroSequence'

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  useLenis(introComplete)

  return (
    <>
      {!introComplete && (
        <IntroSequence onComplete={handleIntroComplete} />
      )}

      <main className={cn(
        'transition-opacity duration-1000',
        introComplete ? 'opacity-100' : 'opacity-0'
      )}>
        <section
          className="min-h-screen flex items-center justify-center"
          style={{ background: 'var(--c-black)' }}
        >
          <p className="label-tactical" style={{ color: 'var(--c-crimson-lit)' }}>
            GOTHAM SYSTEMS — ONLINE
          </p>
        </section>
      </main>
    </>
  )
}