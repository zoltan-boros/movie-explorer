import type { IMovie } from "../schema/movie.types";

export function fetchMovies(_searchTerm: string): Promise<IMovie[]> {
  return fetch(`${process.env.NEXT_PUBLIC_MOCK_API_BASE_URL}movie`).then<
    IMovie[]
  >((response) => response.json());
}
