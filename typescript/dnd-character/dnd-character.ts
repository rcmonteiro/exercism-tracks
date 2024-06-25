export class DnDCharacter {
  readonly strength = DnDCharacter.generateAbilityScore()
  readonly dexterity = DnDCharacter.generateAbilityScore()
  readonly constitution = DnDCharacter.generateAbilityScore()
  readonly intelligence = DnDCharacter.generateAbilityScore()
  readonly wisdom = DnDCharacter.generateAbilityScore()
  readonly charisma = DnDCharacter.generateAbilityScore()
  readonly hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)

  public static generateAbilityScore(): number {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1)
      .sort()
      .slice(-3)
      .reduce((a, b) => a + b, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}