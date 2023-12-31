import { MovieType, MoviesAPIType, TMDB_BASE_URL } from "@config";

export const fetchWatchList1 = async () => {
  const response = await fetch("/api/watch-list");
  return await response.json();
};

export const fetchMovies = async (category: string): Promise<MoviesAPIType> => {
  const res = await fetch(
    `${TMDB_BASE_URL}${category}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
};

export const fetchMoviesHP = async (category: string): Promise<MovieType[]> => {
  const res = await fetch(
    `${TMDB_BASE_URL}${category}?api_key=${process.env.API_KEY}&language=en-US`
  );
  const movies = await res.json();
  return await movies.results.slice(0, 4);
};

export const fetchWatchList = async (): Promise<MoviesAPIType[] | []> => {
  try {
    const data = await fetch("/api/watch-list");
    return data.json();
  } catch (err) {
    console.warn("Failed to fetch movies", err);
  }
  return [];
};
