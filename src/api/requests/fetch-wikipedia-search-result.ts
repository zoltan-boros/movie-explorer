import { isArray } from "@/utils/array/is-array";
import { SERVICE_URLS } from "../constants";
import type { IWikipediaSearchResult } from "../schema/wikipedia-search-result.types";
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
      const pageUrls = result[3];

      if (!isArray(pageTitles) || !isArray(pageUrls)) {
        throw new Error("Invalid response.");
      }

      if (isEmpty(pageTitles)) {
        throw new Error(`Movie "${movieTitle}" not found on Wikipedia.`);
      }

      const pageTitle = pageTitles[0];
      const pageUrl = pageUrls[0];

      if (typeof pageTitle !== "string" || typeof pageUrl !== "string") {
        throw new Error("Invalid response.");
      }

      return { pageTitle, pageUrl };
    });
}
