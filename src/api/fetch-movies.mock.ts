import type { IMovie } from "./movie.types";
import mockResponse from "./movie-search.1.response.mock.json";

export async function fetchMovies(_searchText: string): Promise<IMovie[]> {
  return Promise.resolve(mockResponse.data.searchMovies as IMovie[]);
}
