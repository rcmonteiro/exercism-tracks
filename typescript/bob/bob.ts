type TBobResponses = 'Sure.' | 'Whoa, chill out!' | 'Calm down, I know what I\'m doing!' | 'Fine. Be that way!' | 'Whatever.'

export function hey(message: string): TBobResponses {
  const isYelling = !/[a-z]+/.test(message) && /[A-Z]+/.test(message)
  const isAsking = message.trim().endsWith('?')
  const isSilence = /^[\s]*$/.test(message)

  if (isSilence) {
    return 'Fine. Be that way!'
  }

  if (isYelling && isAsking) {
    return 'Calm down, I know what I\'m doing!'
  }

  if (isYelling && !isAsking) {
    return 'Whoa, chill out!'
  }

  if (isAsking) {
    return 'Sure.'
  }

  return 'Whatever.'
}