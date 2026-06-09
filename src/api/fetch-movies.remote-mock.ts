import { SERVICE_URLS } from "./constants";
import type { IMovie } from "./movie.types";

export function fetchMovies(_searchTerm: string): Promise<IMovie[]> {
  return fetch(`${SERVICE_URLS.MOCK_API_BASE_URL}movie`).then<IMovie[]>(
    (response) => response.json(),
  );
}
