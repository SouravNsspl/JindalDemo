import React from "react";
import Animate from "./component/Animate";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Animation from "./component/animation/Animation";

const App = () => {
  return (
    <>
      <Animation />
      {/* <Animate /> */}
    </>
  );
};

export default App;
