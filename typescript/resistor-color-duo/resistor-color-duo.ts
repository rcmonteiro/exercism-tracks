export const decodedValue = ([color1, color2]: Color[]): number => {
  const colorCode = `${COLORS[color1]}${COLORS[color2]}`;

  return Number(colorCode);
}

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