import { MoviesCategoryType } from "@config";
import MoviesList from "./MovieList";

const PopularMovies = ({ movies, flagHP }: MoviesCategoryType) => {
  return (
    <MoviesList
      movies={movies}
      title={"Popular Movies"}
      category={"/movies/popular"}
      flagHP={flagHP}
    />
  );
};

export default PopularMovies;
