import type { IMovie } from "./movie.types";
import dummyResponse from "./movie-search.1.response.json";

export function searchMovies(_query: string): IMovie[] {
  return dummyResponse.data.searchMovies as IMovie[];
}
