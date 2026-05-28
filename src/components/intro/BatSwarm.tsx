'use client'

interface Bat {
  id:       number
  size:     number
  top:      string
  duration: number
  delay:    number
  opacity:  number
}

const BATS: Bat[] = [
  { id: 1, size: 18, top: '15%', duration: 7,  delay: 0,   opacity: 0.7 },
  { id: 2, size: 12, top: '25%', duration: 9,  delay: 1.5, opacity: 0.5 },
  { id: 3, size: 22, top: '40%', duration: 6,  delay: 3,   opacity: 0.8 },
  { id: 4, size: 10, top: '60%', duration: 11, delay: 0.5, opacity: 0.4 },
  { id: 5, size: 16, top: '70%', duration: 8,  delay: 2,   opacity: 0.6 },
  { id: 6, size: 14, top: '20%', duration: 10, delay: 4,   opacity: 0.5 },
  { id: 7, size: 20, top: '50%', duration: 7,  delay: 1,   opacity: 0.7 },
  { id: 8, size: 11, top: '80%', duration: 12, delay: 2.5, opacity: 0.4 },
]

function BatShape({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20C20 20 8 16 4 9C7 11 10 10 12 8C12 8 9 4 11 1C13 5 15 6 20 6C25 6 27 5 29 1C31 4 28 8 28 8C30 10 33 11 36 9C32 16 20 20 20 20Z"
        fill="var(--c-crimson)"
      />
    </svg>
  )
}

export default function BatSwarm() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {BATS.map((bat) => (
        <div
          key={bat.id}
          className="absolute"
          style={{
            top:       bat.top,
            opacity:   bat.opacity,
            animation: `batFly ${bat.duration}s linear ${bat.delay}s infinite`,
          }}
        >
          <BatShape size={bat.size} />
        </div>
      ))}

      <style jsx>{`
        @keyframes batFly {
          0%   { transform: translateX(-60px) scaleX(1);   }
          49%  { transform: translateX(110vw)  scaleX(1);  }
          50%  { transform: translateX(110vw)  scaleX(-1); }
          100% { transform: translateX(-60px)  scaleX(-1); }
        }
      `}</style>
    </div>
  )
}