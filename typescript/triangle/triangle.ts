export class Triangle {
  private readonly sides: number[]
  
  constructor(...sides: [number, number, number]) {
    this.sides = this.isValidTriangle(sides) ? sides : []
  }

  get isEquilateral(): boolean {
    return this.sides.length > 0 && this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]
  }

  get isIsosceles(): boolean {
    return this.sides.length > 0 && (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[2] === this.sides[0])
  }

  get isScalene(): boolean {
    return this.sides.length > 0 && !this.isIsosceles && !this.isEquilateral
  }

  private isValidTriangle(sides: [number, number, number]): boolean {
    const [a, b, c] = sides;
    return sides.every(side => side > 0) &&
           (a + b >= c) &&
           (a + c >= b) &&
           (b + c >= a);
  }
}

