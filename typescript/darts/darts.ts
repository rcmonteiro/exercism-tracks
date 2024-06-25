export function score(x: number, y: number): number {
  const distanceToCenter = Math.hypot(x, y);

  if (distanceToCenter <=  1) { return 10 }
  if (distanceToCenter <=  5) { return 5 }
  if (distanceToCenter <= 10) { return 1 }

  return 0
}