type OldFormat = Record<number, string[]>
type NewFormat = Record<string, number>

export function transform(input: OldFormat): NewFormat {
  const output: NewFormat = {}
  for (const count in input) {
    input[count].forEach(letter => {
      output[letter.toLocaleLowerCase()] = +count
    })
  }
  return output
}
