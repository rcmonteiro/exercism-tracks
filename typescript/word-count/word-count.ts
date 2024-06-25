export function count(sentence: string): Map<string, number> {
  return sentence
    .toLocaleLowerCase()
    .split(/\b([\w']+)\b/g)
    .filter(word => /\w/.test(word))
    .reduce((wordCounts, word) => {
    return wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1)
  }, new Map<string, number>())
}