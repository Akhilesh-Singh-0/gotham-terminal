'use client'

import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'active'
}

export default function Tag({ children, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={cn(className)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '9px',
        letterSpacing: '0.1em',
        padding: '0.2rem 0.6rem',
        border: '1px solid',
        borderColor: variant === 'active' ? 'var(--c-crimson)' : 'var(--border-line)',
        color: variant === 'active' ? 'var(--c-crimson-lit)' : 'var(--c-ash)',
        background: variant === 'active' ? 'rgba(139,26,26,0.08)' : 'transparent',
        borderRadius: 'var(--radius-sm)',
        display: 'inline-block',
        transition: 'border-color 0.2s, color 0.2s, background 0.2s',
      }}
    >
      {children}
    </span>
  )
}