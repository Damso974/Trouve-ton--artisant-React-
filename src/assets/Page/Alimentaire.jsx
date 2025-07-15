import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import artisansData from '../data/datas.json';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Alimentation = () => {
  const [alimentationArtisans, setAlimentationArtisans] = useState([]);

  useEffect(() => {
    const filteredArtisans = artisansData.filter(artisan => artisan.category === 'Alimentation');
    setAlimentationArtisans(filteredArtisans);
  }, []);

 const renderStars = (note) => {
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
   };
 
     return (
         
             <section>
                 <h2>Alimentation</h2>
                 <div className="row">
                     {alimentationArtisans.length > 0 ? alimentationArtisans.map(artisan => (
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
                     )) : <p>Aucun artisan trouvé.</p>}
                 </div>
             </section>
         
     );
 };

export default Alimentation;
