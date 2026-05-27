'use client'

export default function BatSignal() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <div
        className="absolute inset-0 animate-fog-drift"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 60%,
            rgba(139, 26, 26, 0.08) 0%,
            transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 animate-fog-drift"
        style={{
          background: `radial-gradient(ellipse 40% 30% at 50% 55%,
            rgba(201, 168, 76, 0.05) 0%,
            transparent 60%)`,
          animationDelay: '2s',
        }}
      />

      <svg
        width="340"
        height="340"
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-signal-pulse"
        style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.15))' }}
      >
        <circle
          cx="170" cy="170" r="165"
          stroke="rgba(201,168,76,0.08)"
          strokeWidth="1"
        />

        <circle
          cx="170" cy="170" r="140"
          stroke="rgba(201,168,76,0.12)"
          strokeWidth="0.75"
        />

        <circle
          cx="170" cy="170" r="115"
          stroke="rgba(201,168,76,0.18)"
          strokeWidth="0.75"
        />

        <path
          d="M170 170 L100 10 L240 10 Z"
          fill="rgba(201,168,76,0.04)"
          stroke="rgba(201,168,76,0.1)"
          strokeWidth="0.5"
        />

        <g transform="translate(100, 130)">
          <path
            d="M70 60C70 60 28 46 14 22C25 28 36 26 42 20C42 20 32 8 38 0C44 14 52 18 70 18C88 18 96 14 102 0C108 8 98 20 98 20C104 26 115 28 126 22C112 46 70 60 70 60Z"
            fill="rgba(201,168,76,0.7)"
          />
        </g>

        <line
          x1="170" y1="30"
          x2="170" y2="60"
          stroke="rgba(201,168,76,0.2)"
          strokeWidth="0.75"
        />
        <line
          x1="170" y1="280"
          x2="170" y2="310"
          stroke="rgba(201,168,76,0.2)"
          strokeWidth="0.75"
        />
        <line
          x1="30"  y1="170"
          x2="60"  y2="170"
          stroke="rgba(201,168,76,0.2)"
          strokeWidth="0.75"
        />
        <line
          x1="280" y1="170"
          x2="310" y2="170"
          stroke="rgba(201,168,76,0.2)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  )
}