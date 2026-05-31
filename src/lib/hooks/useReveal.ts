import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -200px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, revealed }
}