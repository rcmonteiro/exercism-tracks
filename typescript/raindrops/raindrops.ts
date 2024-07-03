const sounds = ["Pling","Plang","Plong"];
export function convert(input: number): string {
  let sound = [3,5,7].reduce((acc, num, index) => {
    if (input % num === 0) {
      acc += sounds[index];
    }
    return acc;
  }, "");
  
  return !!sound ? sound : `${input}`;
}
