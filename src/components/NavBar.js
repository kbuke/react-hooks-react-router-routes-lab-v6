import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navBar">Home</NavLink>
      <NavLink to="/Directors" className="navBar">Directors</NavLink>
      <NavLink to="/Actors" className="navBar">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
