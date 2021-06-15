import React from "react";
import AboutDiv from "./styles";
import Postgres from "../../img/postgres.png";
import ReactLogo from "../../img/react.png";
import Express from "../../img/express.png";
import Node from "../../img/node.png";

function About() {
  return (
    <AboutDiv>
      <h1>About this website:</h1>
      <h4>
        This website is my individual project in Henry's bootcamp. It's been
        built with PostgreSQL for the database, Node and Express for the back
        end and React/Redux for the front end. All the styling was made with
        pure CSS using styled-components library. <br />
        It consumes data from the following{" "}
        <a href="https://restcountries.eu/">API</a>
      </h4>
      <div className="pern">
        <a href="https://www.postgresql.org/">
          <img src={Postgres} width="50" heigth="50" className="pernIcon" />
        </a>
        <a href="https://expressjs.com/">
          <img src={Express} width="150" height="50" className="pernIcon" />
        </a>
        <a href="https://reactjs.org/">
          <img src={ReactLogo} width="60" height="50" className="pernIcon" />
        </a>
        <a href="https://nodejs.org/">
          <img src={Node} width="80" height="50" className="pernIcon" />
        </a>
      </div>
    </AboutDiv>
  );
}

export default About;
