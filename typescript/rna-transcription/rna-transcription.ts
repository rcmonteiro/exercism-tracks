export function toRna(dnaInput: string): string {
  let RNA = "";
  dnaInput.split("").map((base) => {
    if (!DNA2RNAMap.hasOwnProperty(base)) {
      throw new Error("Invalid input DNA.");
    }
    RNA += DNA2RNAMap[base as DNA];
  });

  return RNA
}

const DNA2RNAMap = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

type DNA = keyof typeof DNA2RNAMap;