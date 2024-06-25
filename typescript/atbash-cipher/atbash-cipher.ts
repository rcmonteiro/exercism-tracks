export function encode(plainText: string): string {
  return normalize(plainText)
          .split('')
          .map((char, index) => crypt(char).concat((index + 1) % 5 === 0 ? ' ' : ''))
          .join('')
          .trimEnd()
}

export function decode(cipherText: string): string {
  return cipherText
    .replace(/\s/g, '')
    .split('')
    .map(crypt)
    .join('')
}

export function crypt(char: string): string {
  const code: number = char.charCodeAt(0)
  return code >= 48 && code <= 57
      ? String(char)
      : String.fromCharCode(122 - (code - 97))
}

export function normalize(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '')
}

it('encode OMG', () => {
  const cipherText = encode('OMG')
  expect(cipherText).toEqual('lnt')
})