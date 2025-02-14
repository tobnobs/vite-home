import React from "react";
import { Canvas } from "@react-three/fiber";

import Circles from "./Circle";
import styled from "styled-components";
import Controller from "./Controller";
import { Autofocus, EffectComposer } from "@react-three/postprocessing";

const Container = styled.div`
  // height: 100vh;
  // width: 100vw;
`;

const Three = () => {
  return (
    <Container>
      <Canvas>
        <EffectComposer>
          <Autofocus
            target={[0, 0, 0]}
            focusRange={0.001}
            bokehScale={10}
            smoothTime={10}
          />
        </EffectComposer>
        <Controller />
        <Circles />
      </Canvas>
    </Container>
  );
};

export default Three;
