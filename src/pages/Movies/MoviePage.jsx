import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviePage.css";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/LoadingIndicator/Loading";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MoviePage() {
  const location = useLocation();
  const { heading, movies: initialMovies } = location.state || {
    heading: "Movies",
    movies: []
  };

  const [movies, setMovies] = useState(initialMovies || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=34afe6db454cd5e04ddd03b2ca5562a5&language=en-US&page=${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setIsLoading(false);
  };

  // Fetch movies if initialMovies is empty
  useEffect(() => {
    if (!initialMovies.length) {
      fetchMovies(currentPage);
    }
  }, [currentPage, initialMovies]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
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
          {totalPages > 1 && (
            <div className="pagination-container">
              <button
                id="previous"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                id="next"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
