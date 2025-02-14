import React from "react";
import { Route } from "wouter";

import LavaLamp from "./LavaLamp";
import Canvas from "./Canvas/Canvas";
import Three from "./Three";

const App = () => (
  <>
    <Route path="/lavalamp">
      <LavaLamp />
    </Route>
    <Route path="/three">
      <Three />
    </Route>
    <Route>
      <Canvas />
    </Route>
  </>
);

export default App;
