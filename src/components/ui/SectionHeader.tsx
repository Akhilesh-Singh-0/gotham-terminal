'use client'

import FadeItem from '@/components/ui/FadeItem'

interface SectionHeaderProps {
  index: string
  label: string
  visible: boolean
}

export default function SectionHeader({ index, label, visible }: SectionHeaderProps) {
  return (
    <FadeItem delay={0} visible={visible}>
      <div className="flex items-center gap-4 mb-16">
        <span className="rule-crimson" />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-xs)',
          letterSpacing: '0.18em',
          color: 'var(--c-ash)',
          border: '1px solid var(--border-line)',
          padding: '0.25rem 0.625rem',
          borderRadius: 'var(--radius-sm)',
        }}>
          {index} — {label}
        </span>
        <span className="rule-crimson" />
      </div>
    </FadeItem>
  )
}