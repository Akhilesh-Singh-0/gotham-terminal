'use client'

import { useEffect, useRef } from 'react'

const EVENTS = [
  'cache hit ratio: 98.4%',
  'queue processed: 12ms',
  'worker [ws-01] online',
  'websocket connected',
  'db pool: 4/10 active',
  'redis pub/sub active',
  'health check: OK',
  'rate limit: nominal',
  'bullmq job complete',
  'tx committed: 3.2ms',
  'api gateway: 200 OK',
  'replica synced',
  'session validated',
  'index scan: 1.1ms',
  'cache eviction: 0',
  'worker [bg-02] idle',
  'checkpoint complete',
  'connection pooled',
  'jwt verified',
  'seq scan avoided',
]

function ts() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`
}

export default function SystemLog() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let alive = true

    const tick = () => {
      if (!alive || !el) return

      const line = document.createElement('div')
      line.textContent = `[${ts()}] ${EVENTS[Math.floor(Math.random() * EVENTS.length)]}`
      line.style.cssText = [
        'font-family: var(--font-mono)',
        'font-size: 10px',
        'letter-spacing: 0.08em',
        'color: var(--c-ash)',
        'line-height: 1.9',
        'white-space: nowrap',
      ].join(';')
      el.appendChild(line)

      while (el.children.length > 12) {
        el.removeChild(el.firstChild!)
      }

      setTimeout(tick, 1800 + Math.random() * 2200)
    }

    const t = setTimeout(tick, 1000)
    return () => { alive = false; clearTimeout(t) }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 1,
        opacity: 0.15,
        pointerEvents: 'none',
        userSelect: 'none',
        maskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
      }}
    >
      <div ref={ref} />
    </div>
  )
}