import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import artisansData from "../data/datas.json";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar
} from "react-icons/fa";

function Acceuil() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    const featuredArtisans = artisansData
      .filter((artisan) => artisan.top)
      .slice(0, 3);
    setTopArtisans(featuredArtisans);
  }, []);

  function renderStars(note) {
    const rating = parseFloat(note);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="#cd2c2e" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} color="#cd2c2e" />);
      } else {
        stars.push(<FaRegStar key={i} color="#cd2c2e" />);
      }
    }
    return stars;
  }

  return (
    <div>
      <h2>Comment trouver mon artisan ?</h2>
      <section className="how-to-section">
        <div className="step">
          <h3>1. Choisir la catégorie d’artisanat dans le menu</h3>
          <p>
            Naviguez dans notre menu pour sélectionner la catégorie d’artisanat
            qui correspond à vos besoins.
          </p>
        </div>
        <div className="step">
          <h3>2. Choisir un artisan</h3>
          <p>
            Explorez les profils des artisans disponibles dans la catégorie
            choisie.
          </p>
        </div>
        <div className="step">
          <h3>3. Le contacter via le formulaire de contact</h3>
          <p>
            Une fois votre artisan choisi, contactez-le directement via notre
            formulaire.
          </p>
        </div>
        <div className="step">
          <h3>4. Une réponse sous 48h</h3>
          <p>
            Votre demande sera traitée rapidement et vous recevrez une réponse
            sous 48 heures.
          </p>
        </div>
      </section>

      <section>
        <h2>Artisans du mois</h2>
        <div className="row">
          {topArtisans.length > 0 ? (
            topArtisans.map((artisan) => (
              <div key={artisan.id} className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <Link to={`/profilartisan/${artisan.id}`}>
                      <h5 className="card-title">{artisan.name}</h5>
                    </Link>
                    <p className="card-text">
                      Note: {artisan.note} {renderStars(artisan.note)}
                    </p>
                    <p className="card-text">Spécialité: {artisan.specialty}</p>
                    <p className="card-text">Localisation: {artisan.location}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucun artisan du mois trouvé.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Acceuil;
