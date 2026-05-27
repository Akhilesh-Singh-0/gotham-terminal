import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max)

export const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t

export const mapRange = (
  val: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => ((val - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin


export const sleep = (ms: number) =>
new Promise((resolve) => setTimeout(resolve, ms))