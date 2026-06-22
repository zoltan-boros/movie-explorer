import { fetchWikipediaPageExtract } from "./fetch-wikipedia-page-extract";
import { fetchWikipediaSearchResult } from "./fetch-wikipedia-search-result";
import type { IOnRequestChangeParams } from "../schema/request-change.types";
import type { IWikipediaPageExtract } from "../schema/wikipedia-page-extract.types";

export function getWikipediaPageExtract(
  searchTerm: string,
  onSearchComplete: (
    params: IOnRequestChangeParams<IWikipediaPageExtract>,
  ) => void,
): void {
  fetchWikipediaSearchResult(searchTerm).then((result) =>
    fetchWikipediaPageExtract(result.pageTitle).then((partialPageExtract) => {
      onSearchComplete({
        status: "a",
        searchTerm,
        data: {
          ...partialPageExtract,
          url: result.pageUrl,
        },
      });
    }),
  );
}
