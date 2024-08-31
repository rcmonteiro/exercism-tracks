export function verse(beers: number): string {
  let beersAvailable: number = beers - 1
  if (beers === 0) {
    return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
  }
  return `${beers} bottle${beers>1?'s':''} of beer on the wall, ${beers} bottle${beers>1?'s':''} of beer.\n${beersAvailable>0?`Take one down and pass it around, ${beersAvailable} bottle${beersAvailable>1?'s':''} of beer on the wall.\n`:'Take it down and pass it around, no more bottles of beer on the wall.\n'}` 
}

export function sing(
  initialBottlesCount: number = 99,
  takeDownCount: number = 0
): string {
  let song: string[] = []
  for (let i = initialBottlesCount; i >= takeDownCount; i--) {
    song.push(verse(i))
  }
  return song.join('\n')
}

console.log(sing(3))

// console.log(verse(1))
// console.log(verse(2))
// console.log(verse(98))
// console.log(verse(99))