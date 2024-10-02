import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state) => state.movies.upcoming);

  useEffect(() => {
    if (!upcoming) {
      getUpcoming();
    }
  }, []);

  const getUpcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };
};

export default useUpcoming;
