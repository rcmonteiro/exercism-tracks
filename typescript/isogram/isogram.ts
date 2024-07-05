export function isIsogram(word: string): boolean {
  word = word.toLowerCase().replace(/[^a-z]/g, '')
  return [...new Set(word)].length === word.length
}
