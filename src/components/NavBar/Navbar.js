import React, { useState } from "react";
import "./Navbar.css";
import "../../App.css";
import Loading from "../LoadingIndicator/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]); // Stores movies from the API
  const [hasSearched, setHasSearched] = useState(false); // Tracks if a search has been performed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const API_KEY = "34afe6db454cd5e04ddd03b2ca5562a5";
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Base URL for movie posters

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    if (!searchQuery.trim()) return; // Prevent empty searches

    setLoading(true);
    setError(null);
    setHasSearched(true); // Indicate that a search has been performed

    axios
      .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then((response) => {
        setMovies(response.data.results); // Update movies with search results
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch movies. Please try again.");
        setLoading(false);
      });
  };

  //logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(sessionStorage);
    setLoading(true);
    //redirect to signin page
    navigate("/signin");
  };

  if (loading) return <Loading />;

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
                onClick={handleSearch} // Call the handleSearch function here
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

            {/* <div className="logout-button">
              <button onClick={handleLogout}>
                <a href="#">Logout</a>
              </button>
            </div> */}
          </div>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </nav>
      </div>
      <div className="search-results">
        {loading && <Loading />} {/* Show your custom loading indicator */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {movies.length > 0 && (
          <div className="movie-list">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="movie-item"
                style={{ margin: "20px" }}
              >
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}${movie.poster_path}` // Display poster if available
                      : "https://via.placeholder.com/150" // Placeholder if no poster is available
                  }
                  alt={movie.title}
                  style={{
                    width: "150px",
                    height: "225px",
                    borderRadius: "10px",
                    marginBottom: "10px"
                  }}
                />
                <h4 style={{ color: "white" }}>{movie.title}</h4>
                <p style={{ color: "white" }}>{movie.overview}</p>
                <small>Release Date: {movie.release_date}</small>
              </div>
            ))}
          </div>
        )}
        {movies.length === 0 && !loading && !error && hasSearched && (
          <p style={{ color: "#fff" }}>
            No results found. Try searching for something else!
          </p>
        )}
      </div>
    </div>
  );
}
