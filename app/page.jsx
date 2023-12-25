import Feed from "@components/Feed";
import MoviesHP from "@components/MoviesHP";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <Feed />
      <MoviesHP />
    </section>
  );
};

export default Home;
