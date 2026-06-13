import { cn } from '@/lib/utils'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({
  size = 32,
  className,
}: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: '1px solid var(--c-dim)',
          borderRadius: '6px',
          fontFamily: 'var(--font-display)',
          fontSize: `${size * 0.42}px`,
          color: 'var(--c-crimson-lit)',
          lineHeight: 1,
        }}
      >
        AS
      </div>

      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: `${size * 0.42}px`,
            letterSpacing: '0.08em',
            color: 'var(--c-ghost)',
          }}
        >
          AKHILESH SINGH
        </span>

        <span
          style={{
            marginTop: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: `${size * 0.18}px`,
            letterSpacing: '0.18em',
            color: 'var(--c-dim)',
            textTransform: 'uppercase',
          }}
        >
          Backend & Systems Engineer
        </span>
      </div>
    </div>
  )
}