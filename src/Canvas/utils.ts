import { getRandom, getRandomColor } from '../utils';

export const getRandomDirection = () => getRandom(2) - 1;

export type Item = {
  x: number;
  y: number;
  blur: number;
  radius: number;
  initialXDirection: number;
  initialYDirection: number;
  initialBlurDirection: number;
  color: string;
};

export const generateItem = (width: number, height: number): Item => ({
  x: getRandom(width + 10, -10),
  y: getRandom(height + 10, -10),
  blur: getRandom(60, 5),
  radius: getRandom(120, 20),
  initialXDirection: getRandomDirection(),
  initialYDirection: getRandomDirection(),
  initialBlurDirection: getRandomDirection(),
  color: getRandomColor(),
});
