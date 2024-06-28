const proteins = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
  'UUA': 'Leucine', 'UUG': 'Leucine', 
  'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
  'UAU': 'Tyrosine', 'UAC': 'Tyrosine', 'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP'
}

type Codon = keyof typeof proteins;
type Protein = typeof proteins[Codon];

export function translate(rna: string): Protein[] {
  const codons: string[] = rna.match(/.{1,3}/g) || [];
  const protein: Protein[] = [];
  let stop = false;

  for (const codon of codons) {
    const translatedProtein = proteins[codon as Codon];
    if (!translatedProtein) {
      throw new Error('Invalid codon');
    }
    if (translatedProtein === 'STOP') {
      break;
    }
    protein.push(translatedProtein);
  }

  return protein;
}