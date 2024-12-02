import React, { useState } from "react";
import "./Navbar.css";
import "../../App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
