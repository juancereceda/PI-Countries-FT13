import React from "react";
import { Link } from "react-router-dom";
import StyledActivity from "./styles";
import Clock from "../../../clock.png";

function Activity({ name, duration, season, difficulty }) {
  let stars = [];
  for (let i = 1; i <= difficulty; i++) {
    stars.push(i);
  }
  return (
    <StyledActivity>
      <h1 id="nombre">{name}</h1>
      <div className="iconedProp">
        <img src={Clock} width="15" height="15" />
        <h4>{duration} min</h4>
      </div>
      <h4>{season}</h4>
      <div>
        {stars.map((el) => (
          <img
            src="https://image.flaticon.com/icons/png/512/1828/1828665.png"
            width="10"
            height="10"
            className="cross"
          />
        ))}
      </div>
    </StyledActivity>
  );
}

export default Activity;
