import React from "react";
import "./SmallCards.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function SmallCards({ categories }) {
  return (
    <div className="small-cards-container">
      <div className="features">
        {categories.map((category, index) => (
          <div
            key={index}
            className="small-card"
            style={{
              backgroundImage: category.movies?.[0]?.poster_path
                ? `url(${IMAGE_BASE_URL}${category.movies[0].poster_path})`
                : "url('/path_to_placeholder_image.jpg')", // Placeholder if no poster available
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
