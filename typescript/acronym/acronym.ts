export function parse(phrase: string): string {
  return phrase.match(/[a-zA-Z]+/g)?.reduce<string>((acronym, word) => {
    return acronym += !/[a-z]/.test(word) 
      ? word[0] 
      : word[0].toUpperCase()+word.slice(1).replace(/[a-z]+/g, '')
  }, '') ?? ''
}

