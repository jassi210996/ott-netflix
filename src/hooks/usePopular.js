import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopular = () => {
  const dispatch = useDispatch();

  const popular = useSelector((state) => state.movies.popular);

  useEffect(() => {
    if (!popular) {
      getPopular();
    }
  }, []);

  const getPopular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default usePopular;
