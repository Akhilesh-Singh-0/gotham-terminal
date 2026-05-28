'use client'

import { useEffect, useRef } from 'react'

interface RainDrop {
  x:       number
  y:       number
  speed:   number
  length:  number
  opacity: number
}

export default function RainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const drops: RainDrop[] = Array.from({ length: 180 }, () => ({
      x:       Math.random() * window.innerWidth,
      y:       Math.random() * window.innerHeight,
      speed:   Math.random() * 4 + 2,
      length:  Math.random() * 20 + 10,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    let animId: number

    const draw = () => {
      ctx.fillStyle = 'rgba(8, 8, 10, 0.25)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop) => {
        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x - 1, drop.y + drop.length)
        ctx.strokeStyle = `rgba(139, 26, 26, ${drop.opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        drop.y += drop.speed
        if (drop.y > canvas.height) {
          drop.y = -drop.length
          drop.x = Math.random() * canvas.width
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}