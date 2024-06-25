export class Clock {
  private _hour: number = 0
  private _minute: number = 0

  constructor(hour: number = 0, minute: number = 0) { 
    this._minute = minute % 60
    if (this._minute < 0) {
      this._minute += 60
    }
    this._hour = ((hour + ~~(minute / 60)) % 24)
    if (minute < 0) {
      this._hour -= 1
    }
    if (this._hour < 0) {
      this._hour += 24
    }
  }

  public toString(): string {
    return `${String(this._hour).padStart(2, '0')}:${String(this._minute).padStart(2, '0')}`
  }

  public plus(minutes: number): Clock {
    return new Clock(this._hour, this._minute + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(this._hour, this._minute - minutes)
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }
}
