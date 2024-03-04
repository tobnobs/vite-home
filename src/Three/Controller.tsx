import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "react-postprocessing";

const Controller = () => {
  const { setSize, camera, bloom } = useThree();

  useEffect(() => {
    console.log({ width: window.innerWidth, height: window.innerHeight });
    setSize(window.innerWidth, window.innerHeight);
    camera.position.x = -window.innerWidth / 2;
    camera.position.y = -window.innerHeight / 2;
  }, []);

  return (
    <EffectComposer>
      <Bloom />
      {/* <SSAO /> */}
    </EffectComposer>
  );
};

export default Controller;
