import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import Feed from "@components/Feed";
import { fetchMoviesHP } from "./hooks/useFetch";

const Home = async () => (
  <section className='w-full flex-center flex-col'>
    <Feed />
    <UpcomingMovies upcomingMovies={await fetchMoviesHP("upcoming")} />
    <PopularMovies popularMovies={await fetchMoviesHP("popular")} />
    <TopRatedMovies topRatedMovies={await fetchMoviesHP("top_rated")} />
  </section>
);

export default Home;
