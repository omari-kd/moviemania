import React from "react";
import "../../App.css";
import Navbar from "../../components/NavBar/Navbar";
import BigCard from "../../components/Cards/Carousel/BigCard";
import SmallCards from "../../components/Cards/Carditems/SmallCards";
import SectionCard from "../../components/Cards/SectionCards/SectionCard";
import Footer from "../../components/Footer/Footer";
import useMoviesData from "../../hooks/useMoviesData";
import Loading from "../../components/LoadingIndicator/Loading";

export default function Mainpage() {
  const { isLoading, movies, errorMessage } = useMoviesData();

  if (isLoading) return <Loading />;
  if (errorMessage) return <div>{errorMessage}</div>;

  const categories = [
    { name: "Popular", movies: movies.popular },
    { name: "Top Rated", movies: movies.topRated },
    { name: "Sci-Fi", movies: movies.sciFi },
    { name: "Drama", movies: movies.drama },
    { name: "Horror", movies: movies.horror },
    { name: "Comedy", movies: movies.comedy }
  ];

  return (
    <>
      <Navbar />
      <BigCard />
      <SmallCards categories={categories} />
      <div className="main-content">
        <SectionCard heading="Recommended" movies={movies.recommended} />
        <SectionCard heading="Trailer" movies={movies.trailer} />
        <SectionCard heading="Popular" movies={movies.popular} />
        <SectionCard heading="Top Rated" movies={movies.topRated} />
        <SectionCard heading="Upcoming" movies={movies.upcoming} />
        <SectionCard heading="Now Playing" movies={movies.nowPlaying} />
        <SectionCard heading="Horror" movies={movies.horror} />
        <SectionCard heading="Comedy " movies={movies.comedy} />
        <SectionCard heading="Action" movies={movies.action} />
        <SectionCard heading="Drama" movies={movies.drama} />
        <SectionCard heading="Sci-Fi" movies={movies.sciFi} />
      </div>
      <Footer />
    </>
  );
}
