export class Anagram {
  constructor(private readonly word: string) {}

  public matches(...potentials: string[]): string[] {
    return potentials.filter(word => {
      return word.toUpperCase() !== this.word.toUpperCase() && this.letters(this.word) === this.letters(word)
    })
  }

  private letters(word: string): string {
    return [...word.toUpperCase()].sort().join('')
  }
}
