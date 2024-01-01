import { MoviesCategoryType } from "@config";
import MoviesList from "./MovieList";

const TopRatedMovies = ({ movies, flagHP }: MoviesCategoryType) => {
  return (
    <MoviesList
      movies={movies}
      title={"Top Rated Movies"}
      category={"/movies/top-rated"}
      flagHP={flagHP}
    />
  );
};

export default TopRatedMovies;
