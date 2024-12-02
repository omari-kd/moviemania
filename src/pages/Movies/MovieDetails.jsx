import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./MovieDetails.css";
import Loading from "../../components/LoadingIndicator/Loading";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "34afe6db454cd5e04ddd03b2ca5562a5"; // Replace with your TMDB API key
const API_URL = "https://api.themoviedb.org/3";

export default function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details
    fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <Loading />;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div>
      <Navbar />
      <div className="movie-details-container">
        {/* Movie Poster */}
        <div className="movie-poster">
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        </div>

        {/* Movie Information */}
        <div className="movie-info">
          <h1>
            {movie.title || movie.name} ({releaseYear})
          </h1>
          <p className="movie-overview">{movie.overview}</p>

          {/* Additional Details */}
          <div className="movie-details">
            <p>
              <strong>Release Date:</strong> {movie.release_date || "N/A"}
            </p>
            <p>
              <strong>Runtime:</strong>{" "}
              {movie.runtime ? `${movie.runtime} mins` : "N/A"}
            </p>
            <p>
              <strong>Original Language:</strong>{" "}
              {movie.original_language.toUpperCase()}
            </p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres && movie.genres.length
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>
            <p>
              <strong>Popularity:</strong> {movie.popularity.toFixed(1)}
            </p>
            <p>
              <strong>Vote Average:</strong> {movie.vote_average.toFixed(1)} /
              10
            </p>
            <p>
              <strong>Vote Count:</strong> {movie.vote_count}
            </p>
          </div>

          {/* Actions */}
          <div className="movie-actions">
            <button className="watch-btn">Watch</button>
            <button className="download-btn">Download</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
