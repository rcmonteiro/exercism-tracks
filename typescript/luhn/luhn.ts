export function valid(digitString: string): boolean {
  if (!/^[0-9\s]+$/g.test(digitString)) return false 
  const digits = digitString.replace(/\D/g, '')
  if (digits.length <= 1) return false
  
  return [...digits.replace(/\D/g, '')]
    .reverse()
    .map((digit, index) => {
      return (index + 1) % 2 === 0 ? (+digit * 2) > 9 ? +digit * 2 - 9 : +digit * 2 : +digit
    })
    .reverse()
    .reduce((sum, digit) => sum + digit, 0) % 10 === 0
}