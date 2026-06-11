'use client'

interface FadeItemProps {
  children: React.ReactNode
  delay?: number
  visible: boolean
  className?: string
}

export default function FadeItem({ children, delay = 0, visible, className }: FadeItemProps) {
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(1.5rem)',
        transition: `opacity 0.9s ${delay}s var(--ease-expo), transform 0.9s ${delay}s var(--ease-expo)`,
      }}
    >
      {children}
    </div>
  )
}