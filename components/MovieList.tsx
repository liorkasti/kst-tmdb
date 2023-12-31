"use client";

import { MovieCardType, MovieType, MoviesListType } from "@config";
import Link from "next/link";
import MovieCard from "./MovieCard";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Movie from "@models/movie";
import { connectToDB } from "@utils/database";

export const fetchWatchList = async () => {
  const response = await fetch("/api/watch-list");
  return await response.json();
};

const MoviesList = ({ movies, title, category }: MoviesListType) => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const [moviesList, setMovieList] = useState([]);
  const [myMovies, setMyMovies] = useState<MovieType[]>([]);

  const userName = searchParams.get("name");

  const fetchMovieList = async () => {
    const response = await fetch("/api/watch_list");
    const data = await response.json();
    console.log("data :>> ", await data);
    setMyMovies(await data);
  };

  useEffect(() => {
    if (session?.user?.name) fetchMovieList();
  }, []);
  useEffect(() => {
    if (session?.user?.name) fetchMovieList();
  }, [session?.user?.name]);

  const toggleMovie = async (movie: MovieType) => {
    const { id, title, poster_path, vote_average } = movie;
    try {
      if (isMovieExist(id)) {
        console.log("OK", isMovieExist(id));
        const response = await fetch(`./api/watch_list/${movie}`, {
          method: "DELETE",
        });
        console.log("DELETE", isMovieExist(id), response);
        if (response.ok) {
          const filteredMovies = myMovies.filter(
            (item: MovieType) => item.id !== movie.id
          );

          setMyMovies(filteredMovies);
          console.log("finally", filteredMovies);
        }
      } else {
        const response = await fetch(`./api/watch_list/new`, {
          method: "POST",
          body: JSON.stringify({
            user: session?.user,
            id,
            title,
            poster_path,
            vote_average,
          }),
        });

        setMyMovies(myMovies.filter((item: MovieType) => item.id !== movie.id));
        if (response.ok) {
          console.log("OK");
        }
      }
      // await fetch(`/api/profile/${movie}`, {
      //   method: "DELETE",
      // });
    } catch (error) {
      console.log("Error Toggle Movie to Watch List: ", error);
    } finally {
      console.log("finally", myMovies);
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
            />
          ))}
        </div>
        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative grid grid-cols-1 mt-4 gap-4'>
          {movies?.map((m: MovieType) => (
            <MovieCard
              // key={m.id}
              movie={m}
              onSelect={(m: MovieType) => toggleMovie(m)}
              myMovies={myMovies}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default MoviesList;
