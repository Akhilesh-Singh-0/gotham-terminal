'use client'

import { useState, useCallback } from 'react'
import { useLenis } from '@/lib/hooks/useLenis'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  useLenis(introComplete)

  return (
    <main>
      
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--c-black)' }}
      >
        <p
          className="label-tactical"
          style={{ color: 'var(--c-crimson-lit)' }}
        >
          GOTHAM SYSTEMS — ONLINE
        </p>
      </section>
    </main>
  )
}