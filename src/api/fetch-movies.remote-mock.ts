import { MOCK_API_BASE_URL } from "./constants";
import type { IMovie } from "./movie.types";

export function fetchMovies(_searchTerm: string): Promise<IMovie[]> {
  return fetch(`${MOCK_API_BASE_URL}movie`).then<IMovie[]>((response) =>
    response.json(),
  );
}
