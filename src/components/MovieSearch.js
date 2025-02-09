import MovieSearchBar from "./MovieSearchBar";
import MovieSearchResult from "./MovieSearchResult";

const MovieSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-cover overflow-y-auto bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg')]">
      <MovieSearchBar />
      <MovieSearchResult />
    </div>
  );
};

export default MovieSearch;
