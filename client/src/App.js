import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import LandingPage from "./components/landing/LandingPage";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
    </React.Fragment>
  );
}

export default App;
