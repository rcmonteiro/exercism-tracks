export function parse(phrase: string): string {
  // Split the phrase into words based on spaces and non-alphabet characters
  const words = phrase.split(/[^a-zA-Z]+/).filter(word => word.length > 0);

  // Map each word to its first letter and join them to form the acronym
  const acronym = words.map(word => word[0].toUpperCase()).join('');

  return acronym;
}

