import React from "react";
import { NavLink } from "react-router-dom";// changed from Link to NavLink to get activeStyle option for styling

const Nav = () => (
  <ul className="nav nav-tabs">

   <li className="nav-item">
      <NavLink
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
        activeStyle={{color:"green"}}
      >
        Home
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/registration"
        className={
          window.location.pathname === "/registration" ? "nav-link active" : "nav-link"
        }
        activeStyle={{color:"green"}}

      >
        Register
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
        activeStyle={{color:"green"}}
      >
       Login
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        to="/dashboard"
        className={
          window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
        }
        activeStyle={{color:"green"}}

      >
       Dashboard
      </NavLink>
    </li>

  </ul>
);

export default Nav;