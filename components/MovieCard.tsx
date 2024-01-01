"use client";

import { EMPTY_MOVIE_URL, IMAGE_URL, MovieCardType } from "@config";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ movie, onSelect, isListed }: MovieCardType) => {
  const { data: session } = useSession();

  const handleToggle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      onSelect(movie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full h-[400px] relative'>
        {session?.user && (
          <button
            onClick={handleToggle}
            className='absolute top-5 right-5 z-10 outline-none'>
            {isListed ? (
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
