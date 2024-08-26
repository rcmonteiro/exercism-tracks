const CONSONANTS = [
  /\b([^aeoiu\s]*qu)/gi,
  /\b([^aeoiu\s]+)(?=y)/gi,
  /\b([^aeoiu\s])+/gi,
]

export function translateWord(word: string) {
  for (const regex of CONSONANTS) {
    const prefix = word.match(regex)?.join('').length ?? 0;
    if (!prefix) { continue }
    return word.slice(prefix) + word.slice(0, prefix) + 'ay'
  }
  return word + 'ay';
}

export function translate(phrase: string) {
  return phrase.split(' ').map(translateWord).join(' ');
}

console.log(translate("my"))
