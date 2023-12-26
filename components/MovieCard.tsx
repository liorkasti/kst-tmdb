"use client";

import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

export type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

const MovieCard = ({ movie }: { movie: MovieType }) => {
  const [favorites, setAllFavorites] = useState([]);
  const { data: session } = useSession();
  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false);

  const fetchFavorites = async () => {
    const response = await fetch("/api/movie");
    const data = await response.json();

    setAllFavorites(data);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleToggleFavorite = async () => {
    try {
      const { id, title, poster_path, vote_average } = movie;
      const response = await fetch("/api/watch-list/new", {
        method: "POST",
        body: JSON.stringify({
          user: session?.user,
          movieId: id,
          title,
          poster_path,
          vote_average,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsFavoriteMovie(true);
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full h-[400px] relative'>
        {session?.user && (
          <button
            onClick={handleToggleFavorite}
            className='absolute top-5 right-5 z-10 outline-none'>
            {isFavoriteMovie ? (
              <FaHeart size={20} color='#ff0000' fill='#ffffff' />
            ) : (
              <FaRegHeart size={20} color='#ff0000' fill='#ffffff' />
            )}
          </button>
        )}
        <Image
          src={
            movie?.poster_path
              ? `${IMAGE_URL}${movie?.poster_path}`
              : `${EMPTY_MOVIE_URL}`
          }
          alt={movie?.title}
          fill={true}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='flex gap-4 justify-between items-center mt-3 bg-red'>
        <h2 className='text-lg font-medium'>{movie?.title}</h2>
        <span
          className={`flex flex-col p-2 text-white rounded-md ${
            movie?.vote_average < 5
              ? `bg-red-700`
              : movie?.vote_average === 5
              ? `bg-orange-700`
              : `bg-green-700`
          }`}>
          {movie?.vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
