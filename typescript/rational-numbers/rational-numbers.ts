export class Rational {
  constructor(public numerator: number,public denominator: number) {
    if (this.denominator === 0) {
      throw new Error('Cannot create a rational number with a denominator of zero')
    }
    this.numerator = this.numerator * Math.sign(this.denominator)
    this.denominator = this.denominator * Math.sign(this.denominator)
  } 

  add(r: Rational): Rational {
    return new Rational(
      (this.numerator * r.denominator) + (r.numerator * this.denominator),
      this.denominator * r.denominator
    ).reduce()
  }

  sub(r: Rational): Rational {
    return new Rational(
      (this.numerator * r.denominator) - (r.numerator * this.denominator),
      this.denominator * r.denominator
    ).reduce()
  }

  mul(r: Rational): Rational {
    return new Rational(
      this.numerator * r.numerator,
      this.denominator * r.denominator
    ).reduce()
  }

  div(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator,
      r.numerator * this.denominator
    ).reduce()
  }

  abs(): Rational {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    ).reduce()
  }

  exprational(n: number): Rational {
    return n > 0
      ? new Rational(this.numerator ** n, this.denominator ** n)
      : new Rational(this.denominator ** -n, this.numerator ** -n)
  }

  expreal(n: number): number {
    return (n ** this.numerator) ** (1 / this.denominator)
  }

  reduce(): Rational {
    const gcd = this.gcd(this.numerator, this.denominator)
    return new Rational(
      this.numerator / gcd, 
      this.denominator / gcd
    )
  }

  private gcd(a: number, b: number): number {
    if (b === 0) {
      return a
    }
    return this.gcd(b, a % b)
  }
}