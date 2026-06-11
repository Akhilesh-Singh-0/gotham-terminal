'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  active?: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

export default function GlowCard({
  children,
  className,
  hover = true,
  active = false,
  onClick,
  style,
}: GlowCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(className)}
      style={{
        border: '1px solid',
        borderColor: active ? 'rgba(139,26,26,0.5)' : 'var(--border-line)',
        background: active ? 'rgba(139,26,26,0.03)' : 'rgba(8,8,10,0.5)',
        borderRadius: 'var(--radius-card)',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
      whileHover={hover && !active ? {
        y: -3,
        borderColor: 'rgba(139,26,26,0.3)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.3), 0 0 12px rgba(139,26,26,0.06)',
      } : undefined}
      whileTap={onClick ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}