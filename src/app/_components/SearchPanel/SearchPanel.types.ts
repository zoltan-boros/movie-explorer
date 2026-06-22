import type { IMovie } from "@/api/schema/movie.types";

export interface IOnSearchCompleteParams {
  searchTerm: string;
  movies: IMovie[];
}

export interface ISearchPanelProps {
  onSearchComplete: (params: IOnSearchCompleteParams) => void;
}
