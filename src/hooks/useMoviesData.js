import { useState, useEffect } from "react";
import {
  fetchRequestPopular,
  fetchRequestTopRated,
  fetchRequestUpcoming,
  fetchRequestNowPlaying,
  fetchRequestHorror,
  fetchRequestComedy,
  fetchRequestAction,
  fetchRequestDrama,
  fetchRequestSciFi
} from "../../src/functions/apis/fetch";

const useMoviesData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    upcoming: [],
    nowPlaying: [],
    horror: [],
    comedy: [],
    action: [],
    drama: [],
    sciFi: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          popularData,
          topRatedData,
          upcomingData,
          nowPlayingData,
          horrorData,
          comedyData,
          actionData,
          dramaData,
          sciFiData
        ] = await Promise.all([
          fetchRequestPopular(),
          fetchRequestTopRated(),
          fetchRequestUpcoming(),
          fetchRequestNowPlaying(),
          fetchRequestHorror(),
          fetchRequestComedy(),
          fetchRequestAction(),
          fetchRequestDrama(),
          fetchRequestSciFi()
        ]);

        setMovies({
          popular: popularData?.results || [],
          topRated: topRatedData?.results || [],
          upcoming: upcomingData?.results || [],
          nowPlaying: nowPlayingData?.results || [],
          horror: horrorData?.results || [],
          comedy: comedyData?.results || [],
          action: actionData?.results || [],
          drama: dramaData?.results || [],
          sciFi: sciFiData?.results || []
        });
      } catch (error) {
        setErrorMessage("Failed to fetch movie data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, movies, errorMessage };
};

export default useMoviesData;
