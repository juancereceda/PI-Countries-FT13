import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to="/countries">
        <h1>Home</h1>
      </Link>
    </div>
  );
}

export default Landing;
