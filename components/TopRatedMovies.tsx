import { MovieType } from "@config";
import MoviesList from "./MovieList";

const TopRatedMovies = ({
  topRatedMovies,
}: {
  topRatedMovies: MovieType[];
}) => {
  return (
    <MoviesList
      movies={topRatedMovies}
      title={"Top Rated Movies"}
      category={"/movies/top-rated"}
    />
  );
};

export default TopRatedMovies;
