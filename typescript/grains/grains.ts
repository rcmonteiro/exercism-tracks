export const square = (n: number): bigint => {
  if (n < 1  || n > 64) {
    throw new Error('There is only 64 places in a chessboard')
  }
  return 2n ** (BigInt(n) - 1n);
}

export const total = (): bigint => {
  return Array.from({ length: 64 }).reduce<bigint>((acc, _, i) => acc + square(i+1), 0n);
}
