import React from "react";
import "./Menu.scss";
import CustomLink from "./CustomLink/CustomLink";

const MAPPING_LINK = [
  { path: "/", name: "Accueil" },
  { path: "/profile", name: "Profile" },
  { path: "/reglage", name: "Réglage" },
  { path: "/communaute", name: "Communauté" },
];

export default function Menu() {
  return (
    <nav className="menu">
      {MAPPING_LINK.map((link, i) => (
        <CustomLink key={i} to={link.path}>
          {link.name}
        </CustomLink>
      ))}
    </nav>
  );
}
