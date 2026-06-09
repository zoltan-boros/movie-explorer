import { fetchWikipediaSearchResult } from "./fetch-wikipedia-search-result";
import type { IOnSearchCompleteParams } from "./get-wikipedia-search-result.types";

export function getWikipediaSearchResult(
  searchTerm: string,
  onSearchComplete: (params: IOnSearchCompleteParams) => void,
): void {
  fetchWikipediaSearchResult(searchTerm).then((result) => {
    console.log(result);
    onSearchComplete({ searchTerm, result });
  });
}
