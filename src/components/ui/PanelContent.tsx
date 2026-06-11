'use client'

import { cn } from '@/lib/utils'

interface PanelContentProps {
  children: React.ReactNode
  className?: string
}

export default function PanelContent({ children, className }: PanelContentProps) {
  return (
    <div className={cn('relative z-10 max-w-6xl mx-auto px-6 md:px-10', className)}>
      {children}
    </div>
  )
}