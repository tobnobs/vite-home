export const getRandom = (max: number, min: number = 0): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const colors = ['#078D70', '#26CEAA', '#98E8C1', '#FFFFFF', '#7BADE2', '#5049CC', '#3D1A78'];
export const getRandomColor = (): string => colors[getRandom(colors.length - 1)];
