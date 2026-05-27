import { useState, useEffect } from 'react'

export type IntroPhase =
  | 'idle'
  | 'rain'
  | 'bats'
  | 'signal'
  | 'boot'
  | 'complete'


export function useIntroSequence() {
  const [phase, setPhase] = useState<IntroPhase>('idle')

  useEffect(() => {
    
    if (sessionStorage.getItem('intro-seen')) {
      setPhase('complete')
      return
    }

    const sequence: { phase: IntroPhase; duration: number }[] = [
      { phase: 'rain',   duration: 2000 },
      { phase: 'bats',   duration: 2500 },
      { phase: 'signal', duration: 3000 },
      { phase: 'boot',   duration: 3500 },
    ]

    let elapsed = 0

    sequence.forEach(({ phase, duration }) => {
      elapsed += duration
      setTimeout(() => setPhase(phase), elapsed)
    })

    setTimeout(() => {
      setPhase('complete')
      sessionStorage.setItem('intro-seen', 'true')
    }, elapsed + 1000)
  }, [])

  const skip = () => {
    setPhase('complete')
    sessionStorage.setItem('intro-seen', 'true')
  }

  return { phase, skip }
}