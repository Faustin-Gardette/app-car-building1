import React from "react";
import Navigation from "../components/Navigation";
import Pub from "../components/Pub";
import Footer from "../components/Footer";

const Team = () => {
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
            <h3>Notre équipe</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Équipe
            </p>
          </div>
          <Navigation />
        </div>
      </div>

      <Pub />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Team;
