export const largestProduct = (input: string, span: number): number => {
  if (span > input.length) {
    throw new Error('Span must be smaller than string length')
  }
  if (!/^\d+$/.test(input)) {
    throw new Error('Digits input must only contain digits')
  }
  if (span < 1) {
    throw new Error('Span must not be negative')
  }
  if (/^[0]+$/.test(input)) {
    return 0
  }
  return [...input].reduce<number[]>((acc, _, index) => {
    if (index + span <= input.length) {
      const chunk = input.slice(index, index + span)
      acc.push([...chunk].reduce((a, b) => Number(a) * Number(b), 1))
    }
    return acc
  }, []).sort((a, b) => b - a)[0]
}
