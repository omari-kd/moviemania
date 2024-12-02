import React from "react";
import "./Navbar.css";
import "../../App.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <nav>
          <div className="nav-links">
            <a href="/">
              Movie<span className="mania">Mania</span>
            </a>
            <a href="#">Films</a>
            <a href="#">Tv Shows</a>
            <a href="#">Animations</a>
          </div>

          <div className="nav-links-right">
            <div className="search-icon">
              {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
            </div>
            <div className="logout-button">
              <button>
                <a href="#">Logout</a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
