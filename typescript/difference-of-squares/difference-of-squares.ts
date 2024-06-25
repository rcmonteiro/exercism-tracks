export class Squares {
  constructor(private readonly count: number) {}

  get sumOfSquares(): number {
    return Array.from({ length: this.count }).map((_, i) => (i + 1) ** 2).reduce((a, b) => a + b, 0);
  }

  get squareOfSum(): number {
    return Array.from({ length: this.count }).map((_, i) => (i + 1)).reduce((a, b) => a + b, 0) ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
