/*
This represents the most significant bit (MSB) used to indicate whether 
there are more bytes in the sequence. It's equivalent to 128 or 0b10000000.
*/
const MSB = 1 << 7

/*
This creates a mask 0b01111111 (i.e., 127), 
used to extract the lower 7 bits of a byte.
*/
const MASK = MSB ^ 0xff  // 0b01111111

/*
Shifts a number n left by m bits using multiplication (n * (2 ** m)).
This approach avoids issues with JavaScript's bitwise operations on large numbers.
*/
function shiftLeft(n: number): number {
  return n * (2 ** 7)
}

/*
Shifts a number n right by m bits using division and Math.floor.
Again, this avoids the pitfalls of JavaScript's bitwise operations on large integers.
*/
function shiftRight(n: number): number {
  return Math.floor(n / (2 ** 7))
}

export function encode(numbers: number[]): number[] {
  let result: number[] = []
  numbers.forEach((n) => {
    const bytes = []
    let tmp = n
    let msb = 0
    do {
      bytes.unshift((tmp & MASK) | msb)
      msb = MSB
      tmp = shiftRight(tmp)
    } while (tmp > 0)
    result = result.concat(bytes)
  })
  return result
}

export function decode (bytes: number[]): number[] {
  if ((bytes[bytes.length - 1] & MSB) !== 0) {
    throw new Error('Incomplete sequence')
  }
  const accumulator: { nums: number[], n: number } = {nums: [], n: 0}
  const { nums } = bytes.reduce((acc, b) => {
    acc.n = shiftLeft(acc.n) + (b & MASK)
    if ((b & MSB) === 0) {
      acc.nums.push(acc.n)
      acc.n = 0
    }
    return acc
  }, accumulator)
  return nums
}