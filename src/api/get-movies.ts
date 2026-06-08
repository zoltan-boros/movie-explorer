// import { fetchMovies } from "./fetch-movies.mock";
import { fetchMovies } from "./fetch-movies";
import type { IMovie } from "./movie.types";

export function getMovies(
  searchText: string,
  setMovies: (movies: IMovie[]) => void,
): void {
  fetchMovies(searchText).then((movies) => setMovies(movies));
}
