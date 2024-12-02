import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviePage.css";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MoviePage() {
  const location = useLocation();
  const { heading, movies } = location.state || {
    heading: "Movies",
    movies: []
  };

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="movie-page-container">
        <div className="category-header">
          <div className="category-title">
            <h1>{heading}</h1>
          </div>
        </div>
        <div className="movie-cards">
          {movies.map((movie, index) => (
            <div key={index} className="card-container">
              <div
                className="card"
                style={{
                  backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})`
                }}
                onClick={() => {
                  window.location.href = `/movie/${movie.id}`;
                }}
              ></div>
              <div className="card-title">
                <small>{movie.title || movie.name}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
