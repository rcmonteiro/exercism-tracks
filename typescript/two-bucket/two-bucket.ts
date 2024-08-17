type BucketNumber = 'one' | 'two'

export class TwoBucket {
  private _moves: number = 0
  private _buckets: Record<BucketNumber, Bucket>
  private readonly _otherBucket: BucketNumber
  private states = new Set()
  private noSolution: boolean = false
  private goalReached: boolean = false


  constructor(
    bucket1Capacity: number, 
    bucket2Capacity: number,
    private readonly _goal: number,
    private readonly _startingBucket: BucketNumber
  ) {

    this._buckets = {
      one: new Bucket(bucket1Capacity, 0),
      two: new Bucket(bucket2Capacity, 0),
    }

    if (this._goal > bucket1Capacity && this._goal > bucket2Capacity) {
      this.noSolution
    }
    this._otherBucket = this._startingBucket === 'one' ? 'two' : 'one'
    this.executeMoves()
  }

  private executeMoves(): void {
    this._buckets[this._startingBucket].fill()
    this.incMoves()
    while (!this.goalReached && !this.noSolution) {
      if (this._buckets[this._otherBucket].capacity === this._goal) {
        this._buckets[this._otherBucket].fill()
      } else if (this._buckets[this._otherBucket].isFull()) {
        this._buckets[this._otherBucket].empty()
      } else if (!this._buckets[this._startingBucket].isEmpty()) {
        this._buckets[this._startingBucket].pour(this._buckets[this._otherBucket])
      } else {
        this._buckets[this._startingBucket].fill()
      }
      this.incMoves()
    }
  }

  private incMoves(): void {
    const state = `${this._buckets.one.filled},${this._buckets.two.filled}`
    console.log(state)
    if (this.states.has(state)) {
      this.noSolution = true
    } else {
      this.states.add(state)
      this._moves++
      if (this._buckets[this._startingBucket].filled === this._goal || this._buckets[this._otherBucket].filled === this._goal) {
        this.goalReached = true
      }
    }
  }

  moves(): number {
    if (this.noSolution) {
      throw new Error('No possible solution')
    }
    return this._moves
  }

  get goalBucket(): BucketNumber {
    if (this._buckets[this._startingBucket].filled === this._goal) {
      return this._startingBucket
    } else {
      return this._otherBucket
    }
  }

  get otherBucket(): number {
    return this._buckets[this.goalBucket === 'one' ? 'two' : 'one'].filled
  }

}


class Bucket {
  constructor(private readonly _capacity: number, private _filled: number) {}

  get capacity(): number {
    return this._capacity
  }

  get filled(): number {
    return this._filled
  }

  public fill(): void {
    this._filled = this.capacity
  }

  public empty(): void {
    this._filled = 0
  }

  public pour(other: Bucket): void {
    if (this._filled === 0) {
      throw new Error('Bucket is empty')
    }
    const content = Math.min(this._filled, other.available())
    this._filled -= content
    other._filled += content
  }

  public available(): number {
    return this.capacity - this._filled
  }

  public isFull(): boolean {
    return this._filled === this._capacity
  }

  public isEmpty(): boolean {
    return this._filled === 0
  }
}