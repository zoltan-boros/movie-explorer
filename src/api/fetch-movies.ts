import { API_BASE_URL } from "./constants";
import type { IMovie } from "./movie.types";

export function fetchMovies(_searchText: string): Promise<IMovie[]> {
  return fetch(`${API_BASE_URL}movie`).then<IMovie[]>((response) =>
    response.json(),
  );
  // .then<IMovie[]>((response) => response.data.searchMovies);
}
