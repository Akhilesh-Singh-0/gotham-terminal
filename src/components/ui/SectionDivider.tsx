'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SectionDividerProps {
  label?: string
}

export default function SectionDivider({ label }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: '120px', background: 'var(--c-black)' }}
    >
      {/* Fog layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(139,26,26,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Center line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: '50%',
          height: '1px',
          background: 'var(--c-dim)',
          transform: 'translateY(-50%)',
        }}
      />

      <AnimatePresence>
        {triggered && (
          <>
            {/* Wide atmospheric glow — the fog light */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                top: '0',
                bottom: '0',
                width: '60%',
                background: 'linear-gradient(to right, transparent 0%, rgba(139,26,26,0.06) 30%, rgba(196,40,40,0.12) 50%, rgba(139,26,26,0.06) 70%, transparent 100%)',
                filter: 'blur(8px)',
              }}
              initial={{ left: '-60%' }}
              animate={{ left: '120%' }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Sharp headlight beam */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                top: '0',
                bottom: '0',
                width: '20%',
                background: 'linear-gradient(to right, transparent, rgba(196,40,40,0.25), transparent)',
                filter: 'blur(2px)',
              }}
              initial={{ left: '-20%' }}
              animate={{ left: '120%' }}
              transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Bright center point — the headlight itself */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4%',
                height: '3px',
                background: 'linear-gradient(to right, transparent, var(--c-crimson-lit), transparent)',
                filter: 'blur(1px)',
                boxShadow: '0 0 20px 4px rgba(196,40,40,0.4)',
              }}
              initial={{ left: '-4%' }}
              animate={{ left: '120%' }}
              transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Road reflection below center */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                top: '50%',
                bottom: '0',
                width: '30%',
                background: 'linear-gradient(to right, transparent, rgba(139,26,26,0.05), transparent)',
                filter: 'blur(4px)',
              }}
              initial={{ left: '-30%' }}
              animate={{ left: '120%' }}
              transition={{ duration: 1.0, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            />

            {/* Label */}
            {label && (
              <motion.div
                className="absolute left-1/2 top-1/2 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div
                  style={{
                    background: 'var(--c-black)',
                    padding: '0.25rem 1rem',
                    border: '1px solid var(--c-dim)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '8px',
                    color: 'var(--c-crimson-lit)',
                    letterSpacing: '0.28em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </div>
              </motion.div>
            )}

            {/* Line activates crimson after streak */}
            <motion.div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: '50%',
                height: '1px',
                transformOrigin: 'left',
                background: 'linear-gradient(to right, var(--c-crimson-dark), var(--c-dim))',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}