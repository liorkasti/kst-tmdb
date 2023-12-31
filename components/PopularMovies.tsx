import { MovieType } from "@config";
import MoviesList from "./MovieList";

const PopularMovies = ({ popularMovies }: { popularMovies: MovieType[] }) => {
  return (
    <MoviesList
      movies={popularMovies}
      title={"Popular Movies"}
      category={"/movies/popular"}
    />
  );
};

export default PopularMovies;
