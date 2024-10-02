import { useSelector } from "react-redux";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import MovieSearch from "./MovieSearch";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useTrending();
  useUpcoming();

  const searchView = useSelector((state) => state.search.searchView);

  return (
    <div className="flex flex-col">
      <Header />
      {searchView ? (
        <MovieSearch />
      ) : (
        <div className="bg-gray-950">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
