import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlaying);
  const popular = useSelector((state) => state.movies.popular);
  const trending = useSelector((state) => state.movies.trending);
  const upcoming = useSelector((state) => state.movies.upcoming);

  if (nowPlaying?.length === 0) {
    return;
  }
  return (
    <div className="pl-6 -mt-32 relative">
      <MovieList title="Now Playing" movies={nowPlaying} />
      <MovieList title="Trending" movies={trending} />
      <MovieList title="Popular" movies={popular} />
      <MovieList title="Upcoming" movies={upcoming} />
    </div>
  );
};

export default SecondaryContainer;
