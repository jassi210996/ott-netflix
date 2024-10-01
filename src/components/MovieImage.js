const MovieImage = ({img, cls}) => {
  return <img src={`https://image.tmdb.org/t/p/original${img}`} alt="movie" className={cls}/>;
};

export default MovieImage;
