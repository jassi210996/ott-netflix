import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((state) => state.movies.trailer);

  useEffect(() => {
    if (!movieTrailer) {
      getMovieVideos();
    }
  }, []);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailer = data.results?.find((video) => video.type === "Trailer");
    dispatch(addTrailer(trailer ? trailer.key : data.results[0].key));
  };
};

export default useMovieTrailer;
