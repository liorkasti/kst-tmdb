import Link from "next/link";
import React from "react";
import MovieCard, { MovieType } from "@components/MovieCard";

type MoviesListType = {
  movies: any;
  title: string;
  category: string;
};
const MoviesList = ({ movies, title, category }: MoviesListType) => {
  return (
    <div className='flex flex-col w-full mb-6'>
      <div className='flex justify-between items-center mt-4'>
        <h1 className='text-2xl font-medium'>{title}</h1>
        <Link
          href={category}
          className='py-2 px-5 bg-slate-800 text-md font-normal text-white'>
          See all
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className='sm:flex hidden grid grid-cols-4 mt-4 gap-4'>
        {movies.results.slice(0, 4).map((movie: MovieType) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative grid grid-cols-1 mt-4 gap-4'>
        {movies.results.slice(0, 4).map((movie: MovieType) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
