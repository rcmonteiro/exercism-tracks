export const find = (haystack: number[], needle: number): number | never => {
  const binarySearch = (left: number, right: number): number => {
    if (left > right) {
      throw new Error('Value not in array')
    }
    const middle = ~~((left + right) / 2)
    if (haystack[middle] === needle) {
      return middle
    }
    if (haystack[middle] > needle) {
      return binarySearch(left, middle - 1)
    }
    return binarySearch(middle + 1, right)
  }
  return binarySearch(0, haystack.length - 1)
}
