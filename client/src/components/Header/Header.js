import React from "react";
import "./Header.css";

const Header = props => (
    <h1 id = "main-title">{props.children} </h1>
)

export default Header