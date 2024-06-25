export const decodedResistorValue = ([color1, color2, color3]: Color[]): string => {
  const totalOhms = Number(`${COLORS[color1]}${COLORS[color2]}`);
  const multiplier = Number(`1${'0'.repeat(COLORS[color3])}`);
  let ohms = totalOhms * multiplier;
  let scale = 0;
  while (ohms > 1000) {
    ohms /= 1000;
    scale++;
  }
  return `${ohms} ${SCALES[scale]}`;
}

const SCALES = [
  'ohms', 
  'kiloohms', 
  'megaohms', 
  'gigaohms'
];

enum COLORS {  
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

type Color = keyof typeof COLORS;

console.log(decodedResistorValue(['blue', 'green', 'yellow', 'orange']));