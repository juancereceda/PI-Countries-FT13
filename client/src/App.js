import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <React.Fragment>
      <Route path="/home" component={Home} />
    </React.Fragment>
  );
}

export default App;
