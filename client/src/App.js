import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";
import LandingPage from "./components/landing/LandingPage";
import Detail from "./components/detail/Detail";
import newActivity from "./components/newActivity/NewActivity";

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/countries" component={Home} />
      <Route path="/countries/:id" component={Detail} />
      <Route path="/newactivity" component={newActivity} />
    </React.Fragment>
  );
}

export default App;
