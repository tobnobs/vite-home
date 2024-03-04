import React from "react";

import useAnimation from "../useAnimation/useAnimation";
import { Mesh } from "three";

const Circle = () => {
  const { ref, radius, color, startX, startY } = useAnimation<Mesh>();

  return (
    <mesh ref={ref} position={[startX, startY, -600]}>
      {/* <pointLight position={[startX, startY, -400]} /> */}
      <circleGeometry args={[radius, 30]} />
      <meshStandardMaterial color={color} />
      {/* <meshBasicMaterial color={color} /> */}
    </mesh>
  );
};

export default Circle;
