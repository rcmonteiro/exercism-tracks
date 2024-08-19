export function isValid(isbn: string): boolean {
  if (!/^\d-?\d{3}-?\d{5}-?[\dX]$/.test(isbn)) {
    return false
  }
  const normalizedIsbn = isbn.toUpperCase().replace(/[^\dX]/g, '')
  return [...normalizedIsbn].reduce((acc, digit, index) => {
    return acc + (digit === 'X' ? 10 : Number(digit) * (10 - index))
  },0) % 11 === 0
}
console.log(isValid('3-598-21507-X') ? "Valid!" : "Invalid!")