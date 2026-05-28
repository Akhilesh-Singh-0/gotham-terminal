'use client'

import { useEffect } from 'react'
import { useIntroSequence } from '@/lib/hooks/useIntroSequence'
import RainCanvas from './RainCanvas'
import BatSwarm from './BatSwarm'
import BatSignal from './BatSignal'
import BootTerminal from './BootTerminal'
import { cn } from '@/lib/utils'

interface IntroSequenceProps {
  onComplete: () => void
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const { phase, skip } = useIntroSequence()

  useEffect(() => {
    if (phase === 'complete') {
      onComplete()
    }
  }, [phase, onComplete])

  if (phase === 'complete') return null

  const after = (target: string) => {
    const order = ['idle', 'rain', 'bats', 'signal', 'boot']
    return order.indexOf(phase) >= order.indexOf(target)
  }

  return (
    <div
      className="fixed inset-0 z-[var(--z-intro)] overflow-hidden"
      style={{ background: 'var(--c-black)' }}
    >

      <div className={cn(
        'absolute inset-0 transition-opacity duration-1000',
        after('rain') ? 'opacity-100' : 'opacity-0'
      )}>
        <RainCanvas />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(255,255,255,0.03)',
          animation:  after('rain') ? 'thunder 6s ease-in-out infinite' : 'none',
        }}
      />

      <div className={cn(
        'absolute inset-0 transition-opacity duration-1000',
        after('bats') ? 'opacity-100' : 'opacity-0'
      )}>
        <BatSwarm />
      </div>

      <div className={cn(
        'absolute inset-0 transition-opacity duration-1500',
        after('signal') ? 'opacity-100' : 'opacity-0'
      )}>
        <BatSignal />
      </div>

      <div className={cn(
        'absolute inset-0 transition-opacity duration-1000',
        after('boot') ? 'opacity-100' : 'opacity-0'
      )}>
        <BootTerminal />
      </div>

      <div className={cn(
        'absolute inset-0 flex items-center justify-center transition-opacity duration-1000',
        after('signal') ? 'opacity-100' : 'opacity-0'
      )}>
        <div className="text-center">
          <p
            className="label-tactical"
            style={{ color: 'var(--c-gold)', letterSpacing: '0.3em' }}
          >
            WAYNE SYSTEMS
          </p>
        </div>
      </div>

      <button
        onClick={skip}
        className="absolute top-6 right-6 label-tactical text-gotham-dim hover:text-gotham-ash transition-colors"
        style={{ fontSize: 'var(--fs-xs)' }}
      >
        SKIP →
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {(['rain', 'bats', 'signal', 'boot'] as const).map((p) => (
          <span
            key={p}
            className={cn(
              'block w-1 h-1 rounded-full transition-all duration-500',
              after(p) ? 'bg-gold' : 'bg-gotham-dim'
            )}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes thunder {
          0%, 100% { opacity: 0; }
          10%, 30%, 32% { opacity: 1; }
          20%, 31% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}