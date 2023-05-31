import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <ul>
          <NavLink to="/">
            <img src="./assets/logo.svg" alt="" />
          </NavLink>
        </ul>
      </div>
      <div className="nav-links">
        <ul>
          <NavLink to="/">
            <li>Acceuil</li>
          </NavLink>
          <NavLink to="/service">
            <li>Service</li>
          </NavLink>
          <NavLink to="/voitures">
            <li>Voitures</li>
          </NavLink>
          <NavLink to="/avis">
            <li>Avis</li>
          </NavLink>
          <NavLink to="/nous">
            <li>Équipe</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div className="nav-co">
        <ul>
          <NavLink>
            <li className="connexion">Connexion</li>
          </NavLink>
          <NavLink>
            <li className="register">Inscription</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
