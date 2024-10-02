const MovieImage = ({ img, cls, url }) => {
  const src = url || `https://image.tmdb.org/t/p/original${img}`;
  return <img src={src} alt="movie" className={cls} />;
};

export default MovieImage;
