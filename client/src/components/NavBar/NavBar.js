import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import StyledNavBar from "./styles";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <StyledNavBar>
          <NavLink to="/" className="list-item">
            <h4 className="list-item">Home</h4>
          </NavLink>
          <NavLink to="/countries" className="list-item">
            <h4>Countries</h4>
          </NavLink>
          <NavLink to="/newactivity" className="list-item">
            <h4>Add activity</h4>
          </NavLink>
          <NavLink to="/about" className="list-item">
            <h4>About</h4>
          </NavLink>
          <NavLink to="/contact" className="list-item">
            <h4>Contact</h4>
          </NavLink>
        </StyledNavBar>
      </header>
    );
  }
}
