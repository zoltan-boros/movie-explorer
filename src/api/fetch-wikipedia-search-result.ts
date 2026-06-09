import { SERVICE_URLS } from "./constants";
import type { IWikipediaSearchResult } from "./wikipedia-search-result";

export function fetchWikipediaSearchResult(
  searchTerm: string,
): Promise<IWikipediaSearchResult> {
  // const urlSearchParams = new URLSearchParams({
  //   action: "opensearch",
  //   search: searchTerm,
  //   format: "json",
  //   redirects: "resolve",
  //   limit: "1",
  // });

  // return fetch(
  //   `${SERVICE_URLS.WIKIPEDIA}${urlSearchParams.toString()}`,
  // )
  //   .then(
  //     // (response) => response.json(),
  //     (response) => response.text(), // For now...
  //   )
  //   .then<IWikipediaSearchResult>((text) => ({ text }));

  return Promise.resolve({
    text: `Search term: "${searchTerm}" - Lorem ipsum dolor sit amet...`,
  });
}
