'use client'

import { cn } from '@/lib/utils'

interface PanelProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'black' | 'charcoal'
}

export default function Panel({ children, className, id, background = 'black' }: PanelProps) {
  return (
    <section
      id={id}
      className={cn('relative section-padding overflow-hidden', className)}
      style={{ background: background === 'black' ? 'var(--c-black)' : 'var(--c-charcoal)' }}
    >
      {children}
    </section>
  )
}