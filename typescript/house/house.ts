type Item = {
  name: string
  action?: string
}

const items: Item[] = [
  { name: "malt" },
  { name: "rat", action: "that ate the malt" },
  { name: "cat", action: "that killed the rat" },
  { name: "dog", action: "that worried the cat" },
  { name: "cow with the crumpled horn", action: "that tossed the dog" },
  { name: "maiden all forlorn", action: "that milked the cow with the crumpled horn" },
  { name: "man all tattered and torn", action: "that kissed the maiden all forlorn" },
  { name: "priest all shaven and shorn", action: "that married the man all tattered and torn" },
  { name: "rooster that crowed in the morn", action: "that woke the priest all shaven and shorn" },
  { name: "farmer sowing his corn", action: "that kept the rooster that crowed in the morn" },
  { name: "horse and the hound and the horn", action: "that belonged to the farmer sowing his corn" },
];

const lyrics: string[] = generateLyrics();

function generateLyrics(): string[] {
  let lines: string[] = [];
  lines.push('This is the house that Jack built.');
  for (let index = 0; index < items.length; index++) {
    lines.push('');
    lines.push(`This is the ${items[index].name}`);
    if (index > 0) {
      for (let i = 0; i < index; i++) {
        if (items[index-i].action) lines.push(items[index-i].action!);
      }
    }
    lines.push('that lay in the house that Jack built.');
  }
  return lines;
}

function sumOfFirstNNumbers(n: number): number {
  if (n < 0) {
    throw new Error("Sum is not defined for negative numbers");
  }
  
  return (n * (n + 1)) / 2;
}

export function verse(verseNumber: number): string[] { 
  const start = sumOfFirstNNumbers(verseNumber) - 1
  const end = start + verseNumber;
  return lyrics.slice(start, end);
}

export function verses(verseStart: number, verseEnd: number): string[] {
  const start = sumOfFirstNNumbers(verseStart) - 1
  const end = sumOfFirstNNumbers(verseEnd) - 1 + verseEnd;
  return lyrics.slice(start, end);
}
