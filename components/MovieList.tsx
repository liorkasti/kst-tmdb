"use client";

import { MovieType, MoviesListType } from "@config";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export const fetchWatchList = async () => {
  const response = await fetch("/api/watch-list");
  return await response.json();
};

const MoviesList = ({ movies, title, category }: MoviesListType) => {
  const { data: session } = useSession();
  const [myMovies, setMyMovies] = useState<MovieType[]>([]);

  const fetchMovieList = async () => {
    const response = await fetch("/api/watch_list");
    const data = await response.json();
    setMyMovies(await data);
  };

  useEffect(() => {
    if (session?.user?.name) fetchMovieList();
  }, [myMovies]);

  useEffect(() => {
    if (session?.user?.name) fetchMovieList();
  }, [session?.user?.name]);

  const toggleMovie = async (movie: MovieType) => {
    const { id, title, poster_path, vote_average } = movie;
    try {
      if (isMovieExist(id)) {
        const idx = myMovies.findIndex((item) => item.id === id);
        await fetch(`./api/watch_list/${myMovies[idx]}`, {
          method: "DELETE",
        });
      } else {
        await fetch(`./api/watch_list/new`, {
          method: "POST",
          body: JSON.stringify({
            user: session?.user,
            id,
            title,
            poster_path,
            vote_average,
          }),
        });
      }
    } catch (error) {
      console.log("Error Toggle Movie to Watch List: ", error);
    } finally {
      () => {
        fetchMovieList();
      };
    }
  };

  const isMovieExist = (id: number): boolean => {
    return myMovies?.some((item: MovieType) => item.id === id);
  };

  return (
    <div className='flex flex-col w-full mb-6'>
      <div className='flex justify-between items-center mt-4'>
        {myMovies ? (
          <h1 className='text-2xl font-medium'>{"Your Watch List Is Empty"}</h1>
        ) : (
          <h1 className='text-2xl font-medium'>{title}</h1>
        )}
        {category !== "myProfile" && (
          <Link
            href={category}
            className='py-2 px-5 bg-slate-800 text-md font-normal text-white'>
            See all
          </Link>
        )}
      </div>
      <>
        {/* Desktop Navigation */}
        <div className='sm:flex hidden grid grid-cols-4 mt-4 gap-4'>
          {movies?.map((m: MovieType) => (
            <MovieCard
              key={m.id}
              movie={m}
              onSelect={(m: MovieType) => toggleMovie(m)}
              myMovies={myMovies}
              isListed={isMovieExist(m.id)}
            />
          ))}
        </div>
        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative grid grid-cols-1 mt-4 gap-4'>
          {movies?.map((m: MovieType) => (
            <MovieCard
              key={m.id}
              movie={m}
              onSelect={(m: MovieType) => toggleMovie(m)}
              myMovies={myMovies}
              isListed={isMovieExist(m.id)}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default MoviesList;
