import { IMG_BASE_URL_W500 } from "../utils/constants";
import MovieImage from "./MovieImage";

const MovieCard = ({ movie }) => {
  if (!movie?.poster_path && !movie?.backdrop_path) {
    return null;
  }
  return (
    <div className="m-1 bg-black flex min-w-40">
      <MovieImage
        img={movie.poster_path}
        cls="aspect-video h-48 w-full"
        url={IMG_BASE_URL_W500(movie?.poster_path || movie?.backdrop_path)}
      />
    </div>
  );
};

export default MovieCard;
