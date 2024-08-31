/*
On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.

On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.

On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.

On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.
*/

const days = [
  ['first', 'a Partridge in a Pear Tree'],
  ['second', 'two Turtle Doves'],
  ['third', 'three French Hens'],
  ['fourth', 'four Calling Birds'],
  ['fifth', 'five Gold Rings'],
  ['sixth', 'six Geese-a-Laying'],
  ['seventh', 'seven Swans-a-Swimming'],
  ['eighth', 'eight Maids-a-Milking'],
  ['ninth', 'nine Ladies Dancing'],
  ['tenth', 'ten Lords-a-Leaping'],
  ['eleventh', 'eleven Pipers Piping'],
  ['twelfth', 'twelve Drummers Drumming']
]
 
export function recite(start: number, end: number): string {
  if (start < 1 || start > 12 || end < 1 || end > 12 || start > end) {
    throw new Error('Invalid day range')
  }
  return days.slice((start - 1), end).map(([day], index) => {
    const dayIndex = start - 1 + index
    let gifts: string[] = []
    for (let i = dayIndex; i >= 0; i--) {
      gifts.push(`${i===0 && dayIndex > 0 ? ' and' : ''} ${days[i][1]}`)
    }
    return `On the ${day} day of Christmas my true love gave to me:${gifts.join(',')}.\n`
  }).join('')
}

console.log(recite(1,3))