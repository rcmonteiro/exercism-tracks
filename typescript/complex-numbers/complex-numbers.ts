export class ComplexNumber {
  constructor(private readonly _real: number, private readonly _imaginary: number) {}

  public get real(): number {
    return this._real;
  }

  public get imag(): number {
    return this._imaginary;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real + other._real, this._imaginary + other._imaginary);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this._real - other._real, this._imaginary - other._imaginary);
  }

  public mul(other: ComplexNumber): ComplexNumber {
    const realPart = this._real * other._real - this._imaginary * other._imaginary;
    const imaginaryPart = this._real * other._imaginary + this._imaginary * other._real;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  public div(other: ComplexNumber): ComplexNumber {
    const denominator = other._real ** 2 + other._imaginary ** 2;
    if (denominator === 0) {
      throw new Error("Division by zero");
    }
    const realPart = (this._real * other._real + this._imaginary * other._imaginary) / denominator;
    const imaginaryPart = (this._imaginary * other._real - this._real * other._imaginary) / denominator;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  public get abs(): number {
    return Math.sqrt(this._real ** 2 + this._imaginary ** 2);
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this._real, this._imaginary > 0 ? -this._imaginary : this._imaginary);
  }

  public get exp(): ComplexNumber {
    const eToTheReal = Math.exp(this._real);
    return new ComplexNumber(eToTheReal * Math.cos(this._imaginary), eToTheReal * Math.sin(this._imaginary));
  }
}
