import React, { useState } from "react";
import "./Navbar.css";
import "../../App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <nav>
          <div className="nav-links">
            <a href="/" className="brand-logo">
              Movie<span className="mania">Mania</span>
            </a>
          </div>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <a href="#">Films</a>
            <a href="#">Tv Shows</a>
            <a href="#">Animations</a>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search movies, shows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: "10px",
                  width: "300px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc"
                }}
              />
              <button
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#514889",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Search
              </button>
            </div>
            <div className="logout-button">
              <button>
                <a href="#">Logout</a>
              </button>
            </div>
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
      </div>
    </div>
  );
}
