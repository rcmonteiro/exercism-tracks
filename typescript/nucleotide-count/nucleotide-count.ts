type NucleotideCounts = {
  A: number
  C: number
  G: number
  T: number
};
type Nucleotide = keyof NucleotideCounts;

export function nucleotideCounts(dna: string): NucleotideCounts {
  if (/[^ACGT]/.test(dna)) {
    throw new Error('Invalid nucleotide in strand');
  }
  return [...dna]
    .reduce((output, n) => ({...output, [n]: output[n as Nucleotide] + 1}), {A:0,C:0,G:0,T:0});
}
