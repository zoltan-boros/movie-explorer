import { isArray } from "@/utils/array/is-array";
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

  return fetch(
    `${process.env.NEXT_PUBLIC_WIKIPEDIA_URL}${urlSearchParams.toString()}`,
  )
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
