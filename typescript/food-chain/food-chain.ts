type Animal = {
  name: string
  comment: string
  action?: string
}

const animals: Animal[] = [
  { name: "fly", comment: "I don't know why she swallowed the fly. Perhaps she'll die." },
  { name: "spider", comment: "It wriggled and jiggled and tickled inside her." },
  { name: "bird", comment: "How absurd to swallow a bird!", action: "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her." },
  { name: "cat", comment: "Imagine that, to swallow a cat!" },
  { name: "dog", comment: "What a hog, to swallow a dog!" },
  { name: "goat", comment: "Just opened her throat and swallowed a goat!" },
  { name: "cow", comment: "I don't know how she swallowed a cow!" },
  { name: "horse", comment: "She's dead, of course!" },
];

const lyrics: string[] = generateLyrics();

function generateLyrics(): string[] {
  let currentVerse: string = '';
  return animals.map((animal, index) => {
      currentVerse = `I know an old lady who swallowed a ${animal.name}.\n`;
      currentVerse += `${animal.comment}\n`;
      if (index > 0 && index < animals.length - 1) {
        for (let i = 0; i < index; i++) {
          currentVerse += animals[index-i]?.action ? animals[index-i]?.action : `She swallowed the ${animals[index-i]?.name} to catch the ${animals[index-i-1]?.name}.`;
          currentVerse += '\n';
        }
        if (index < animals.length) {
          currentVerse += `${animals[0].comment}\n`;
        }
      }
      return currentVerse
  })
}

export function verse(verseNumber: number): string {
  if (verseNumber < 0 || verseNumber > lyrics.length) {
    throw new Error(`Invalid verse number: ${verseNumber}`);
  }
  return lyrics[verseNumber-1];
}

export function verses(start: number, end: number): string {
  if (start < 0 || start > end || end > lyrics.length) {
    throw new Error(`Invalid verse range: ${start}-${end}`);
  }
  return lyrics.slice(start-1, end).join('\n');
}
