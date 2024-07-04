type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

class Triplet {
  constructor(private a: number, private b: number, private c: number) {}

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c]
  }
}

export function triplets({ minFactor = 1, maxFactor, sum }: Options): Triplet[] {
  const triplets: Triplet[] = []
  for (let a = minFactor; a <= (maxFactor ?? sum/3); a++) {
    for (let b = a + 1; b <= (maxFactor ?? sum/2); b++) {
      const c = Math.sqrt(a ** 2 + b ** 2)
      if (a + b + c === sum && c <= (maxFactor ?? sum)) {
        triplets.push(new Triplet(a, b, c))
        break
      }
    }
  }
  return triplets
}
