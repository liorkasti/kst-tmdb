import MoviesList from "./MovieList";

const PopularMovies = ({ popularMovies }: { popularMovies: any }) => {
  return (
    <MoviesList
      movies={popularMovies}
      title={"Popular Movies"}
      category={"/movies/popular"}
    />
  );
};

export default PopularMovies;
