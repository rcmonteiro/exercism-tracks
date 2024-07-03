type Classification = "perfect" | "deficient" | "abundant"

export function classify(input: number): Classification {
  if (input < 1) {
    throw new Error("Classification is only possible for natural numbers.")
  }
  const aliquotSum = [...Array(input - 1)].reduce<number>((acc,_,i) => {
    return input % i === 0 ? acc + i: acc
  },0)
  if (aliquotSum > input) {
    return "abundant";
  } else if (aliquotSum < input) {
    return "deficient";
  } else {
    return "perfect";
  }
}