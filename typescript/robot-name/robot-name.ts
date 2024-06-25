export class Robot {
  private serialNumber: number = -1;
  private static availableSerials: number[] = [];

  constructor() {
    this.resetName();
  }


  public get name(): string {
    const twoLetters = String.fromCharCode(
                                            65 + Math.floor(this.serialNumber / 26000),
                                            65 + Math.floor((this.serialNumber % 26000) / 1000)
                                          );
    const threeDigits = this.serialNumber % 1000;
    return `${twoLetters}${threeDigits.toString().padStart(3, '0')}`;
  }

  public resetName(): void {
    const randomIndex = Math.floor(Math.random() * Robot.availableSerials.length);
    this.serialNumber = Robot.availableSerials.splice(randomIndex, 1)[0];
  }

  public static releaseNames(): void {
    // [A-Z]{2}[0-9]{3} has 676000 possible combinations
    Robot.availableSerials = Array.from({ length: 676000 }, (_, index) => index);
  }
}
Robot.releaseNames();