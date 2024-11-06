import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-item">
        <NavLink
          to="/courses/basics"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Basic
        </NavLink>
      </div>

      <div className="nav-item">
        <NavLink
          to="/courses/intermediate"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Intermediate
        </NavLink>
      </div>

      <div className="nav-item">
        <NavLink
          to="/courses/advance"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Advance
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
