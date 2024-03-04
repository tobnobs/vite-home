import React from "react";
import useAnimation from "../useAnimation/useAnimation";
import { PointLight } from "three";

const Light = () => {
  const { ref, color } = useAnimation<PointLight>();

  console.log("hello", PointLight);
  return (
    <>
      {/* <ambientLight /> */}
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0, 10, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={"#6be092"} />
      </mesh>
    </>
  );
  // return <pointLight ref={ref} position={[100, 100, -5]} intensity={100} color={color} />;
};

export default Light;
