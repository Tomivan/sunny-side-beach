export const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}