import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchResults from "./SearchResult";

const Header = ({ onSearch, searchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onSearch(localSearchQuery);
  }, [localSearchQuery, onSearch]);

  const handleCategoryClick = (category) => {
    navigate(`/${category.toLowerCase()}`);
    setMenuOpen(false); // Ferme le menu après un clic
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.png" alt="Logo"
             style={{ height: '160px', width: 'auto', display: 'block' }} />
          </Link>
        </div>

        <button className="menuburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <button
                onClick={() => handleCategoryClick("batiment")}
                className="nav-link"
              >
                Bâtiment
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleCategoryClick("service")}
                className="nav-link"
              >
                Service
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleCategoryClick("fabrication")}
                className="nav-link"
              >
                Fabrication
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleCategoryClick("alimentaire")}
                className="nav-link"
              >
                Alimentation
              </button>
            </li>
          </ul>
          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Recherche..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
            {localSearchQuery && (
              <SearchResults searchQuery={localSearchQuery} />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
