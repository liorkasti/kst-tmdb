import { Session } from "next-auth";

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const EMPTY_MOVIE_URL =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/movie/";

export type MoviesAPIType = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieType[];
};

export type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export type MoviesListType = {
  movies: MovieType[];
  flagHP?: boolean;
  title: string;
  category: string;
};

export type MovieCardType = {
  movie: any;
  onSelect: (m: MovieType) => void;
  isListed: boolean;
};

export type MoviesCategoryType = {
  movies: MovieType[];
  flagHP?: boolean;
};

export interface ProviderProps {
  children: React.ReactNode;
  session: Session;
}
