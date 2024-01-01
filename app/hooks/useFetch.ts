import { MovieType, MoviesAPIType, TMDB_BASE_URL } from "@config";

export const useFetchMovies = async (
  category: string
): Promise<MoviesAPIType> => {
  const res = await fetch(
    `${TMDB_BASE_URL}${category}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
};

export const useFetchMoviesHP = async (
  category: string
): Promise<MovieType[]> => {
  const res = await fetch(
    `${TMDB_BASE_URL}${category}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movies = await res.json();
  return await movies.results.slice(0, 4);
};

export const useFetchWatchList = async () => {
  const response = await fetch("/api/watch_list");
  return await response.json();
};
