import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((state) => state.movies.nowPlaying);

  useEffect(() => {
    if (!nowPlaying) {
      getNowPlaying();
    }
  }, []);

  const getNowPlaying = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
};

export default useNowPlaying;
