import React from "react";
import { Canvas } from "@react-three/fiber";

import Circle from "./Circle";
import styled from "styled-components";
import Controller from "./Controller";

const Container = styled.div`
  // height: 100vh;
  // width: 100vw;
`;

const Three = () => {
  return (
    <Container>
      <Canvas orthographic>
        <Controller />
        {Array.from({ length: 50 }).map((_, index) => (
          <Circle key={index} />
        ))}
      </Canvas>
    </Container>
  );
}

export default Three;
