import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content">
      <h1 className="h1">
        Bienvenue sur <span className="color-red">SportSee</span>
      </h1>

      <p>
        Projet 12 de la formation OpenClassrooms, réalisation d'un tableau de
        bors analytique avec React.
      </p>
      <p>Cliquez sur l'id d'un utilisateur pour voir ses données.</p>

      <div className="link-menu">
        <Link to="/">Accueil</Link>
        <Link to="/user/12">User 12</Link>
        <Link to="/user/18">User 18</Link>
        <Link to="/error">Erreur</Link>
      </div>
    </div>
  );
}
