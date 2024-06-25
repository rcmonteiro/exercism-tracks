export class Matrix {
  private readonly _rows: number[][]
  private readonly _columns: number[][]

  constructor(textMatrix: string) {
    this._rows = textMatrix.split("\n").map(row => row.split(" ").map(cell => Number(cell)))
    this._columns = this._rows[0].map((_, idx) => this._rows.map((row) => row[idx]))
  }

  public get rows(): number[][] {
    return structuredClone(this._rows)
  }

  public get columns(): number[][] {
    return structuredClone(this._columns)
  }
}