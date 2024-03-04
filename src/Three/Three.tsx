import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import Circle from "./Circle";
import styled from "styled-components";
import Controller from "./Controller";
import Light from "../Light/Light";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const Container = styled.div`
  // height: 100vh;
  // width: 100vw;
`;

const Three = () => {
  const ballCount = useMemo(
    () => (window.innerWidth * window.innerHeight) / 45000,
    []
  );

  return (
    <Container>
      <Canvas
        orthographic
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ReinhardToneMapping;
          gl.setClearColor(new THREE.Color("#000000"));
        }}
      >
        <Controller />
        <ambientLight intensity={0.5} />
        <pointLight color="white" intensity={1} position={[10, 10, -10]} />
        {Array.from({ length: ballCount }).map((_, index) => (
          // <Light key={index} />
          <Circle key={index} />
        ))}
      </Canvas>
    </Container>
  );
};

export default Three;
