import { describe, it, expect, xit } from '@jest/globals'
import { largestProduct } from './largest-series-product.ts'

describe('Largest Series Product', () => {
  it('finds the largest product if span equals length', () => {
    expect(largestProduct('29', 2)).toEqual(18)
  })

  it('can find the largest product of 2 with numbers in order', () => {
    expect(largestProduct('0123456789', 2)).toEqual(72)
  })

  it('can find the largest product of 2', () => {
    expect(largestProduct('576802143', 2)).toEqual(48)
  })

  it('can find the largest product of 3 with numbers in order', () => {
    expect(largestProduct('0123456789', 3)).toEqual(504)
  })

  it('can find the largest product of 3', () => {
    expect(largestProduct('1027839564', 3)).toEqual(270)
  })

  it('can find the largest product of 5 with numbers in order', () => {
    expect(largestProduct('0123456789', 5)).toEqual(15120)
  })

  it('can get the largest product of a big number', () => {
    expect(
      largestProduct('73167176531330624919225119674426574742355349194934', 6)
    ).toEqual(23520)
  })

  it('reports zero if the only digits are zero', () => {
    expect(largestProduct('0000', 2)).toEqual(0)
  })

  it('reports zero if all spans include zero', () => {
    expect(largestProduct('99099', 3)).toEqual(0)
  })

  it('rejects span longer than string length', () => {
    expect(() => largestProduct('123', 4)).toThrow(
      new Error('Span must be smaller than string length')
    )
  })

  it('rejects empty string and nonzero span', () => {
    expect(() => largestProduct('', 1)).toThrow(
      new Error('Span must be smaller than string length')
    )
  })

  it('rejects invalid character in digits', () => {
    expect(() => largestProduct('1234a5', 2)).toThrow(
      new Error('Digits input must only contain digits')
    )
  })

  it('rejects negative span', () => {
    expect(() => largestProduct('12345', -1)).toThrow(
      new Error('Span must not be negative')
    )
  })
})
