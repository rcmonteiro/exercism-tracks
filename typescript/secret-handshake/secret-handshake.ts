const Actions = ['wink', 'double blink', 'close your eyes','jump']

export function commands(command: number): string[] {
  return Actions.filter((_, action) => command & (1 << action))[command & 16 ? 'reverse' : 'slice']()
}
