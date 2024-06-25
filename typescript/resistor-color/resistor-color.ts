export const colorCode = (colorInput: string): number => {
  if (colorInput.length < 3) {
    throw new Error('Color must be at least 3 characters');
  }

  const normalizedColor = colorInput.toLowerCase()
  
  if (COLORS.indexOf(colorInput) === -1) {
    throw new Error('Invalid color');
  }

  return COLORS.indexOf(normalizedColor);
}

export const COLORS = [  
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
