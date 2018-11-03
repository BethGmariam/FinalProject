import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" ,color:"wheat",backgroundColor:"red"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
