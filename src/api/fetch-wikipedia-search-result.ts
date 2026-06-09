import { isArray } from "@/utils/array/is-array";
import { SERVICE_URLS } from "./constants";
import type { IWikipediaSearchResult } from "./wikipedia-search-result.types";
import { isEmpty } from "@/utils/array/isEmpty";

export function fetchWikipediaSearchResult(
  movieTitle: string,
): Promise<IWikipediaSearchResult> {
  const urlSearchParams = new URLSearchParams({
    action: "opensearch",
    search: movieTitle,
    format: "json",
    redirects: "resolve",
    limit: "1",
  });

  return fetch(`${SERVICE_URLS.WIKIPEDIA}${urlSearchParams.toString()}`)
    .then((response) => response.json())
    .then((result) => {
      if (!isArray(result)) {
        throw new Error("Invalid response.");
      }
      const pageTitles = result[1];
      if (!isArray(pageTitles)) {
        throw new Error("Invalid response.");
      }
      if (isEmpty(pageTitles)) {
        throw new Error(`Movie "${movieTitle}" not found on Wikipedia.`);
      }
      const pageTitle = pageTitles[0];
      if (typeof pageTitle === "string") {
        return { pageTitle };
      }
      throw new Error("Invalid response.");
    });
}
