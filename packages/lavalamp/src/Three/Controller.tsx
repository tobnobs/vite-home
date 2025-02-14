import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { AdaptiveDpr, PerspectiveCamera, Stats } from "@react-three/drei";

const Controller = () => {
  const { setSize } = useThree();

  useEffect(() => {
    setSize(window.innerWidth, window.innerHeight);
  }, [setSize]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 40]}
        fov={50}
      />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <AdaptiveDpr />
      <Stats />
    </>
  );
};

export default Controller;
