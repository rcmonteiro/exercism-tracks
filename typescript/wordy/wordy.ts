const allowedOperations = [
  'plus',
  'minus',
  'multiplied',
  'divided'
] as const
type Operation = typeof allowedOperations[number]

export const answer = (command: string): number => {

  if (/^\w+\sis(\s\d+)?[^\d]+\?$/g.test(command) && !/plus|minus|multiplied by|divided by/g.test(command)) {
    throw new Error('Unknown operation')
  }

  if (!/^What is -?\d+(\s(plus|minus|multiplied by|divided by)\s-?\d+)*\?$/g.test(command)) {
    throw new Error('Syntax error')
  }

  const tokens = command
    .replace(/\?|What|is|by/g,'')
    .trim()
    .split(' ')
    .filter((word) => word !== '')

  let currentCommand: Operation | '' = '';
  const result = tokens.reduce((acc, word) => {
    if (!isNaN(Number(word))) {
      if (acc === Infinity) {
        return Number(word)
      }

      switch (currentCommand) {
        case 'plus':
          currentCommand = ''
          return Number(acc) + Number(word)
        case 'minus':
          currentCommand = ''
          return Number(acc) - Number(word)
        case 'multiplied':
          currentCommand = ''
          return Number(acc) * Number(word)
        case 'divided':
          currentCommand = ''
          return Number(acc) / Number(word)
      }
    }
    currentCommand = word as Operation
    return acc
  }, Infinity)
  return Number(result)
}
