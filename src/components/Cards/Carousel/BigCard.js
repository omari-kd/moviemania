import React, { useState, useEffect } from "react";
import "./BigCard.css";

const images = [
  "/images/houseofthedragon.avif",
  "/images/the-day-of-the-jackal.avif",
  "images/deadpoolandwolverine2.jpg",
  "images/Avengers-Infinity-War-cast.avif",
  "images/power.jpg",
  "images/power-ghost.jpg"
];

export default function BigCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="big-card-container"
        style={{
          backgroundImage: `url(${images[currentIndex]})`
        }}
      ></div>

      <button className="arrow left-arrow" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="arrow right-arrow" onClick={handleNext}>
        &#10095;
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
