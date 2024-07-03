const Allergen = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
]

export class Allergies {
  constructor(private readonly allergenIndex: number) {}

  public list(): string[] {
    return Allergen.filter((_, index) => this.allergenIndex & (1 << index))
  }

  public allergicTo(allergen: string): boolean {
    return (this.allergenIndex & (1 << Allergen.indexOf(allergen))) > 0
  }
}
