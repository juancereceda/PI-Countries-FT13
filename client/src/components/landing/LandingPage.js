import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Landing() {
  const [time, setTime] = useState();

  function getTime() {
    let now = new Date();
    let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    let minutes =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let seconds =
      now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    setTime(hours + ":" + minutes + ":" + seconds);
  }
  setInterval(getTime, 1000);

  return (
    <div>
      <Link to="/countries">
        <h1>Home</h1>
      </Link>
      <h4>{time}</h4>
    </div>
  );
}

export default Landing;
