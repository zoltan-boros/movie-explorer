// import { fetchMovies } from "./fetch-movies.local-mock";
// import { fetchMovies } from "./fetch-movies.remote-mock";
import { fetchMovies } from "./fetch-movies";
import type { IOnSearchCompleteParams } from "@/app/_components/SearchPanel/SearchPanel.types";

export function getMovies(
  searchTerm: string,
  onSearchComplete: (params: IOnSearchCompleteParams) => void,
): void {
  fetchMovies(searchTerm).then((movies) =>
    onSearchComplete({ searchTerm, movies }),
  );
}
