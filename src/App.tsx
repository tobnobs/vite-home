import React from "react";
import { Route } from "wouter";

import "./App.css";
import LavaLamp from "./LavaLamp";
import Canvas from "./Canvas/Canvas";
import Three from "./Three";
import Mistress from "./Mistress/Mistress";

const App = () => (
  <>
    <Route path="/lavalamp">
      <LavaLamp />
    </Route>
    <Route path="/three">
      <Three />
    </Route>
    <Route path="/mistress">
      <Mistress />
    </Route>
    <Route>
      <Canvas />
    </Route>
  </>
);

export default App;
