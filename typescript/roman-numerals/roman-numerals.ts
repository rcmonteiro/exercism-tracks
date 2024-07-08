const romanNumerals: Array<[number, string]> = [
  [1000, 'M'], [900, 'CM'],
  [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'],
  [5, 'V'], [4, 'IV'],
  [1, 'I'],
]
  
export const toRoman = (number: number, index: number = 0): string => {
  const divisor = +romanNumerals[index][0];  
  const quotient = ~~(number / divisor);
  const remainder = number % divisor;
  if (remainder === number && index < romanNumerals.length - 1) {
    return toRoman(number, index + 1);
  }
  return romanNumerals[index][1].repeat(quotient) + (remainder > 0 ? toRoman(remainder) : '');  
}
