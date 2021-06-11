import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledHome from "./styles";

function Landing() {
  return (
    <StyledHome>
      <h4>
        Hello traveller! Welcome here, my name is Juan Martín and i'm studying
        Full Stack Development in Henry's Bootcamp. I've built this App so that
        you can find information about any country you want, add tourism
        activities to them, sort them by area, population and some other
        features. Feel free to come in!
      </h4>
      <Link to="/countries" className="button">
        <h4>Go!</h4>
      </Link>
    </StyledHome>
  );
}

export default Landing;
