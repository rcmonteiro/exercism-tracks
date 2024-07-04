export function sum(multiples: number[], limit: number): number {
  return multiples.reduce<number[]>((sum, multiple) => {
    for (let i = multiple; i < limit; i += 1) {
      if (i % multiple === 0 && !sum.includes(i)) {
        sum.push(i)
      }
    }
    return sum
  }, []).reduce<number>((sum, i) => sum + i, 0)
}
