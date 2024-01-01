import { MoviesCategoryType } from "@config";
import MoviesList from "./MovieList";

const UpcomingMovies = ({ movies, flagHP }: MoviesCategoryType) => {
  return (
    <MoviesList
      movies={movies}
      title={"Upcoming Movies"}
      category={"/movies/upcoming"}
      flagHP={flagHP}
    />
  );
};

export default UpcomingMovies;
