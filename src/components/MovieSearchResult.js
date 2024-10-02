import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieSearchResult = () => {
  const results = useSelector((state) => state.search.result);

  if (!results) {
    return null;
  }

  return (
    <div className="bg-black grid grid-cols-12 max-h-[32rem] m-6 overflow-y-auto w-3/4 p-4 bg-opacity-75">
      {results.map((result) => {
        console.log(result);
        return result?.map((movie) => {
          console.log(movie);
          if (!(movie?.poster_path && movie?.backdrop_path)) {
            return null;
          }
          return (
            <div className="col-span-2">
              <MovieCard key={movie.id} movie={movie} />;
            </div>
          );
        });
      })}
    </div>
  );
};

export default MovieSearchResult;
