import MovieImage from "./MovieImage";

const VideoTitle = ({ title, poster, overview }) => {
  return (
    <div
      className="p-14 flex flex-col justify-end absolute text-white w-full aspect-video
    bg-gradient-to-r from-black
    "
    >
      <div className="w-2/4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg font-semibold mb-4">{overview}</p>
        <MovieImage img={poster} cls="h-48" />
        <div className="flex mt-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Play</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
