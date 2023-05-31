import React from "react";
import Navigation from "../components/Navigation";
import Pub from "../components/Pub";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div
        className="nav-back"
        style={{
          backgroundImage: `url(./assets/back-car.png)`,
        }}
      >
        <div className="nav-overlay">
          <div className="nav-back-content">
            <h3>Contact</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Contact
            </p>
          </div>
          <Navigation />
        </div>
      </div>
      <div className="form-container">
        <div className="form-info">
          <h1>Besoin d'informations complémentaires ?</h1>
          <p>
            Professionnel aux multiples facettes, compétent dans de nombreux
            domaines de la recherche et du développement et spécialiste de
            l'apprentissage. Plus de 15 ans d'expérience.
          </p>
          <i className="fa-solid fa-phone">06 12 13 14 15</i>
          <i className="fa-solid fa-envelope">location@gmail.com</i>
          <i className="fa-solid fa-location-dot">Lyon, France</i>
        </div>
        <div className="form-content">
          <form action="">
            <label htmlFor="">Nom complet</label>
            <input type="text" placeholder="Exemple: Eric André" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Votremail@gmail.com" />
            <label htmlFor="">Racontez-nous</label>
            <input type="text" placeholder="Écrire ici" />
          </form>
        </div>
      </div>
      <Pub />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
