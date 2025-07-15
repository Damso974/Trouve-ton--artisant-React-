import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './assets/Components/Header.jsx';
import Footer from './assets/Components/Footer.jsx';
import Acceuil from './assets/Page/Acceuil.jsx';
import Alimentaire from './assets/Page/Alimentaire.jsx';
import Batiment from './assets/Page/Batiment.jsx';
import Fabrication from './assets/Page/Fabrication.jsx';
import Service from './assets/Page/Service.jsx';
import Erreur404 from './assets/Page/Erreur404.jsx';
import Profilartisan from './assets/Page/Profilartisan.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
   
  };

  return (
    <Router>
    
        
          <Header onSearch={handleSearch} searchQuery={searchQuery} />
       

        <main>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/alimentaire" element={<Alimentaire />} />
            <Route path="/batiment" element={<Batiment />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/service" element={<Service />} />
            <Route path="/profilartisan/:id" element={<Profilartisan />} />
            <Route path="*" element={<Erreur404 />} />
          </Routes>
        </main>

       
          <Footer />
        
    
    </Router>
  );
}

export default App;
