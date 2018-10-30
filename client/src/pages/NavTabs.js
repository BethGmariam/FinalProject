import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
 
    <li className="nav-item">
      <Link
        to="/landing"
        className={
          window.location.pathname === "/landing" ? "nav-link active" : "nav-link"
        }
      >
        Landing 
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/registeration"
        className={
          window.location.pathname === "/registeration" ? "nav-link active" : "nav-link"
        }
      >
        Register
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
       Login
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/dashboard"
        className={
          window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
        }
      >
       Dashboard
      </Link>
    </li>

  </ul>
);

export default NavTabs;

// import React from "react";

// const NavTabs = props => (
//   <ul className="nav nav-tabs">
//     <li className="nav-item">
//       <a onClick={() => props.handlePageChange("Landing")} className="nav-link">
//         Landing
//       </a>
//     </li>
//     <li className="nav-item">
//       <a onClick={() => props.handlePageChange("Registration")} className="nav-link">
//         Registration
//       </a>
//     </li>
//     <li className="nav-item">
//       <a onClick={() => props.handlePageChange("Login")} className="nav-link">
//         Login
//       </a>
//     </li>
//     <li className="nav-item">
//       <a onClick={() => props.handlePageChange("Dashboard")} className="nav-link">
//         Dashboard
//       </a>
//     </li>
//   </ul>
// );

// export default NavTabs;

