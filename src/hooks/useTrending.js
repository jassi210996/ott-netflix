import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrending = () => {
  const dispatch = useDispatch();

  const trending = useSelector((state) => state.movies.trending);

  useEffect(() => {
    if (!trending) {
      getTrending();
    }
  }, []);

  const getTrending = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };
};

export default useTrending;
