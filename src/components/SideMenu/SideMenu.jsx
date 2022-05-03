import React from "react";
import "./SideMenu.scss";
// Icons
import { ReactComponent as Yogi } from "../../assets/icons/yogi.svg";
import { ReactComponent as Cyclist } from "../../assets/icons/cyclist.svg";
import { ReactComponent as Swimmer } from "../../assets/icons/swimmer.svg";
import { ReactComponent as Fitness } from "../../assets/icons/fitness.svg";

const MAPPING_ICON = [<Yogi />, <Cyclist />, <Swimmer />, <Fitness />];

export default function SideMenu() {
  return (
    <div>
      {MAPPING_ICON.map((icon, i) => (
        <div key={i} className="sideMenuItem">{icon}</div>
      ))}
    </div>
  );
}
