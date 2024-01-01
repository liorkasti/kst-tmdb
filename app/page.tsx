import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import Feed from "@components/Feed";
import { useFetchMoviesHP } from "./hooks/useFetch";

const Home = async () => (
  <section className='w-full flex-center flex-col'>
    <Feed />
    <UpcomingMovies flagHP={true} movies={await useFetchMoviesHP("upcoming")} />
    <PopularMovies flagHP={true} movies={await useFetchMoviesHP("popular")} />
    <TopRatedMovies
      flagHP={true}
      movies={await useFetchMoviesHP("top_rated")}
    />
  </section>
);

export default Home;
