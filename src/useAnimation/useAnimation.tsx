import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { getRandom, getRandomColor } from "../utils";
import { Object3D } from "three";

const rad = [20, 120];
const speed = [10, 150];

/**
 * Start position plus the distance traveled in the elapsed time, modulo the window size.
 */
const getPosition = (
  elapsedTime: number,
  speed: number,
  radius: number,
  max: number,
  start: number
) => -((start + elapsedTime * speed) % max) + radius;

const useAnimation = <T extends Object3D>() => {
  const ref = useRef<T>(null!);
  const { radius, ySpeed, xSpeed, color, maxX, maxY, startX, startY } =
    useMemo(() => {
      const radius = getRandom(rad[0], rad[1]);
      const maxY = 2 * radius + window.innerHeight;
      const maxX = 2 * radius + window.innerWidth;

      return {
        radius,
        ySpeed: getRandom(speed[0], speed[1]),
        xSpeed: getRandom(speed[0], speed[1]),
        color: getRandomColor(),
        startX: getRandom(0, maxX),
        startY: getRandom(0, maxY),
        maxY,
        maxX,
      };
    }, []);

  useFrame(({ clock }) => {
    ref.current.position.y = getPosition(
      clock.getElapsedTime(),
      ySpeed,
      radius,
      maxY,
      startY
    );
    ref.current.position.x = getPosition(
      clock.getElapsedTime(),
      xSpeed,
      radius,
      maxX,
      startX
    );
  });

  return { ref, radius, color, startX, startY };
};

export default useAnimation;
