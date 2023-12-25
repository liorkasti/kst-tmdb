import MoviesList from "./MovieList";

const UpcomingMovies = ({ upcomingMovies }: { upcomingMovies: any }) => {
  return (
    <MoviesList
      movies={upcomingMovies}
      title={"Upcoming Movies"}
      category={"/movies/upcoming"}
    />
  );
};

export default UpcomingMovies;
