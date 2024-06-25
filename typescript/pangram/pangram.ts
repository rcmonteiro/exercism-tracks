export function isPangram(sentence: string) {
  if (sentence.length === 0) {
    return false
  }

  const normalizedSentence = sentence
                              .toLocaleLowerCase()
                              .normalize('NFD')
                              .replace(/([^a-z]+)/g,'')

  const usedLetters = new Set(normalizedSentence)

  if (usedLetters.size !== 26) {
    return false
  }

  return true
}
