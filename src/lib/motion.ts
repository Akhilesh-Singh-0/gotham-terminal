export const EASING = {
  cinematic: [0.77, 0, 0.175, 1] as const,
  expo:      [0.16, 1, 0.3, 1]   as const,
  soft:      [0.25, 0.46, 0.45, 0.94] as const,
}

export const DURATION = {
  fast:   0.2,
  normal: 0.5,
  slow:   0.8,
  cinematic: 1.2,
}

export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.expo,
      delay,
    },
  }),
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.soft,
      delay,
    },
  }),
}

export const lineReveal = {
  hidden:  { y: '100%' },
  visible: (delay = 0) => ({
    y: '0%',
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.cinematic,
      delay,
    },
  }),
}

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren:   delay,
    },
  },
})
