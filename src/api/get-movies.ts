// import { fetchMovies } from "./fetch-movies.local-mock";
// import { fetchMovies } from "./fetch-movies.remote-mock";
import { fetchMovies } from "./fetch-movies";
import type { IMovie } from "./movie.types";

export function getMovies(
  searchTerm: string,
  setMovies: (movies: IMovie[]) => void,
): void {
  fetchMovies(searchTerm).then((movies) => setMovies(movies));
}
