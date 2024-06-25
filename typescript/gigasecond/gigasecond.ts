export class Gigasecond {
  constructor(private readonly inputDate: Date) {}
  public date(): Date {
    return new Date(this.inputDate.getTime() + 1e12)
  }
}
