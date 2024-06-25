export const steps = (count: number, stepsCount: number = 0): number => {
  if (count < 1 || !Number.isInteger(count)) {
    throw new Error('Only positive integers are allowed')
  }
  if (count === 1) {
    return stepsCount;
  }
  count = count % 2 === 0 ? count / 2 : count * 3 + 1;
  return steps(count, (stepsCount + 1))
}
