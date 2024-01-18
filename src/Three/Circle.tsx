import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

import { getRandom, getRandomColor } from "../utils";

const rad = [20, 120];
const speed = [50, 150];

const Circle = () => {
  const meshRef = useRef<Mesh>(null!);
  const { radius, ySpeed, xSpeed, color, maxX, maxY } =
    useMemo(() => {
      const radius = getRandom(rad[0], rad[1]);
      const maxY = window.innerHeight + 2 * rad[1];
      const maxX = window.innerWidth + 2 * rad[1];

      return {
        radius,
        ySpeed: getRandom(speed[0], speed[1]),
        xSpeed: getRandom(speed[0], speed[1]),
        color: getRandomColor(),
        maxY: window.innerHeight + 2 * rad[1],
        maxX: window.innerWidth + 2 * rad[1],
      };
    }, []);

  useFrame(({ clock }) => {
    // console.log({ width: window.innerWidth, clock: clock.getElapsedTime() });
    meshRef.current.position.y =
      -((clock.getElapsedTime() * ySpeed) % (window.innerHeight + 2 * radius)) +
      radius;
    meshRef.current.position.x =
      -((clock.getElapsedTime() * xSpeed) % (window.innerWidth + 2 * radius)) +
      radius;
  });

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[radius, 30]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Circle;
