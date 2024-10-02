import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((state) => state.movies.trailer);
  useMovieTrailer(id);
  if (!trailer) {
    return;
  }
  return (
    <div className="w-full aspect-video -mt-7">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailer + "?autoplay=1&mute=1&loop=1&playlist=" + trailer + "&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
