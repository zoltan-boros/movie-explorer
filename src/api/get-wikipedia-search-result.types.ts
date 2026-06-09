import type { IWikipediaSearchResult } from "./wikipedia-search-result";

export interface IOnSearchCompleteParams {
  searchTerm: string;
  result: IWikipediaSearchResult;
}
