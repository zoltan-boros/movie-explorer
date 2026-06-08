import type { IMovie } from "@/api/movie.types";

export interface ISearchPanelProps {
  setMovies: (movies: IMovie[]) => void;
}
