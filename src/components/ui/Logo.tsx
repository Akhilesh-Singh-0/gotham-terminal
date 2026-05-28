import { cn } from '@/lib/utils'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="19" stroke="#570f0f" strokeWidth="0.75" opacity="0.6" />
        <circle cx="20" cy="20" r="15" stroke="#570f0f" strokeWidth="0.5" opacity="0.3" />
        <path
          d="M20 28C20 28 8 23 5 15C8.5 17 12 16 14 13.5C14 13.5 11 8 13 4C15 8.5 17 10 20 10C23 10 25 8.5 27 4C29 8 26 13.5 26 13.5C28 16 31.5 17 35 15C32 23 20 28 20 28Z"
          fill="#8b1a1a"
          opacity="0.9"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: `${size * 0.45}px`,
            letterSpacing: '0.12em',
            color: 'var(--c-crimson-lit)',
          }}
        >
          WAYNE
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: `${size * 0.22}px`,
            letterSpacing: '0.22em',
            color: 'var(--c-ash)',
          }}
        >
          SYSTEMS
        </span>
      </div>
    </div>
  )
}