import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -150px 0px' }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return { ref, revealed }
}