import PopularMovies from "@/components/PopularMovies";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import Feed from "@components/Feed";

async function getMovies(type: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

const Home = async () => {
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");

  return (
    <section className='w-full flex-center flex-col'>
      <Feed />
      {/* <main className=sm:hidden mt-5 flex flex-col'> */}
      {/* <div className='sm:hidden flex relative'> */}
      {/* <div className='w-[1300px] max-w-full px-4 mx-auto'>
        <UpcomingMovies upcomingMovies={upcomingMovies} />
        <PopularMovies popularMovies={popularMovies} />
        <TopRatedMovies topRatedMovies={topRatedMovies} />
      </div> */}
      {/* </main> */}
    </section>
  );
};

export default Home;
