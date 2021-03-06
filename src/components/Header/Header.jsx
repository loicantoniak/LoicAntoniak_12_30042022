import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

/**
 * Component for creating header with logo and menu 
 * 
 * @component 
 */
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="SportSee Logo" className="logo" />
      </Link>

      <Menu />
    </div>
  );
}
