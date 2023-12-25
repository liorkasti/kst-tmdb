import MoviesList from "./MovieList";

const TopRatedMovies = ({ topRatedMovies }: { topRatedMovies: any }) => {
  return (
    <MoviesList
      movies={topRatedMovies}
      title={"Top Rated Movies"}
      category={"/movies/top-rated"}
    />
  );
};

export default TopRatedMovies;
