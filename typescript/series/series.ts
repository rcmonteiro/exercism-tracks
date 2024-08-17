export class Series {
  private readonly negativeError = new Error('slice length cannot be negative')
  private readonly tooLargeError = new Error('slice length cannot be greater than series length')
  private readonly emptyError = new Error('series cannot be empty')
  private readonly zeroError = new Error('slice length cannot be zero')
  private readonly series: number[]

  constructor(series: string) {
    if (series.length === 0) throw this.emptyError
    this.series = [...series].map(Number)
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength === 0) throw this.zeroError    
    if (sliceLength < 0) throw this.negativeError
    if (this.series.length < sliceLength) throw this.tooLargeError

    const slices: number[][] = []
    for (let i = 0; i <= (this.series.length - sliceLength); i++) {
      slices.push(this.series.slice(i, i + sliceLength))
    }
    return slices
  }
}
