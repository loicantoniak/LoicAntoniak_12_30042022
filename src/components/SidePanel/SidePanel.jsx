import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./SidePanel.scss";

/**
 * Component for creating the left menu 
 * 
 * @component 
 */
export default function SidePanel() {
  return (
    <div className="sidePanel">
      <SideMenu />
      <p className='copyright'>Copyright, SportSee 2020</p>
    </div>
  );
}
