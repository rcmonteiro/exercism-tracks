export function proverb(...list: string[]): string {
  return list.reduce((proverb, item, index) => index < list.length - 1 
      ? `${proverb}For want of a ${item} the ${list[index + 1]} was lost.\n` 
      : `${proverb}And all for the want of a ${list[0]}.`
  , '')
}

console.log(proverb('penny', 'pen', 'pound', 'shilling', 'pence', 'cent'))
