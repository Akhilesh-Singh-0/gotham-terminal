'use client'

import { useState, useCallback } from 'react'
import { useLenis } from '@/lib/hooks/useLenis'
import { cn } from '@/lib/utils'
import IntroSequence from '@/components/intro/IntroSequence'
import HeroSection from '@/components/hero/HeroSection'
import Navigation from '@/components/layout/Navigation'
import AboutSection from '@/components/about/AboutSection'
import SkillsSection from '@/components/skills/SkillsSection'

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
      {introComplete && <Navigation />}
      <main className={cn(
        'transition-opacity duration-1000',
        introComplete ? 'opacity-100' : 'opacity-0'
      )}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <div style={{ height: '100vh', background: 'var(--c-charcoal)' }} />
      </main>
    </>
  )
}