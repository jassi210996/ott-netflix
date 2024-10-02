import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const nowPlaying = useSelector((state) => state.movies.nowPlaying);
  if (!nowPlaying) {
    return;
  }
  const mainMovie = nowPlaying ? nowPlaying[0] : null;
  const { id, title, overview, poster_path } = mainMovie;
  return (
    <div>
      <VideoTitle
        title={title}
        overview={overview}
        poster={poster_path}
      />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
