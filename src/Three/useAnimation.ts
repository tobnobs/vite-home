import { useMemo, useRef } from "react";
import { getRandomColor } from "../utils";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Mesh } from "three";

const rad = [60, 60];

const useAnimation = () => {
  const meshRef = useRef<Mesh>(null!);

  const {
    color,
    maxX,
    maxY,
    factor,
    speed,
    xFactor,
    yFactor,
    zFactor,
  } = useMemo(() => {

    return {
      color: getRandomColor(),
      maxY: window.innerHeight + 2 * rad[1],
      maxX: window.innerWidth + 2 * rad[1],

      factor: MathUtils.randInt(20, 100),
      speed: MathUtils.randFloat(0.01, 0.1),
      xFactor: MathUtils.randFloatSpread(40),
      yFactor: MathUtils.randFloatSpread(10),
      zFactor: MathUtils.randFloatSpread(1),
    };
  }, []);

  useFrame(({ clock }) => {
    const t = factor + clock.elapsedTime * (speed / 2);
    meshRef.current.position?.set(
      Math.cos(t) +
        Math.sin(t * 1) / 10 +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      Math.sin(t) +
        Math.cos(t * 2) / 10 +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 4
    );
  });

  return { meshRef, color, maxX, maxY };
};

export default useAnimation;
