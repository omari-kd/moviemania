import { Link } from "react-router-dom";
import React from "react";
import "./SectionCard.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function SectionCard({ heading, movies }) {
  return (
    <div className="section-card-container">
      <h4>{heading}</h4>
      <div className="card-wrapper">
        {movies.slice(0, 4).map((movie, index) => (
          <div
            key={index}
            className="cards"
            onClick={() => (window.location.href = `/movie/${movie.id}`)}
          >
            <div
              className={`card-image${index + 1}`}
              style={{
                backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})`
              }}
            >
              <h4>{movie.title || movie.name}</h4>
            </div>
          </div>
        ))}
        <div className="cards">
          <div id="card-image-view-all">
            <Link
              to={{
                pathname: "/movies"
              }}
              state={{
                heading,
                movies
              }}
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
