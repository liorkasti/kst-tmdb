import { MovieType } from "@config";
import MoviesList from "./MovieList";

const UpcomingMovies = ({
  upcomingMovies,
}: {
  upcomingMovies: MovieType[];
}) => {
  return (
    <MoviesList
      movies={upcomingMovies}
      title={"Upcoming Movies"}
      category={"/movies/upcoming"}
    />
  );
};

export default UpcomingMovies;
