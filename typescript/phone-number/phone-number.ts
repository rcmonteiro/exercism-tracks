export function clean(raw: string): string {
  const hasLetters = /[a-zA-Z]/
  const hasPunctuations = /[!?@:;,#$%^&*]/
  
  if (hasLetters.test(raw)) {
    throw new Error('Letters not permitted')
  }
  if (hasPunctuations.test(raw)) {
    throw new Error('Punctuations not permitted')
  }

  let cleaned = raw.replace(/\D/g, '')
  const cleanedLength = cleaned.length

  if (cleanedLength < 10) {
    throw new Error('Incorrect number of digits')
  }
  if (cleanedLength > 11) {
    throw new Error('More than 11 digits')
  }
  if (cleanedLength > 10) {
    if (cleaned.charAt(0) !== '1') {
      throw new Error('11 digits must start with 1')
    }
    cleaned = cleaned.replace(/^1/, '')
  }
  
  const areaCodeFirstDigit = cleaned.charAt(0)
  const exchangeCodeFirstDigit = cleaned.charAt(3)

  if (areaCodeFirstDigit === '0') {
    throw new Error('Area code cannot start with zero')
  }
  if (areaCodeFirstDigit === '1') {
    throw new Error('Area code cannot start with one')
  }
  if (exchangeCodeFirstDigit === '0') {
    throw new Error('Exchange code cannot start with zero')
  }
  if (exchangeCodeFirstDigit === '1') {
    throw new Error('Exchange code cannot start with one')
  }
  return cleaned
}
