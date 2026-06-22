import { SERVICE_URLS } from "../constants";
import type { IWikipediaPageExtract } from "../schema/wikipedia-page-extract.types";

export function fetchWikipediaPageExtract(
  pageTitle: string,
): Promise<Omit<IWikipediaPageExtract, "url">> {
  const urlSearchParams = new URLSearchParams({
    action: "query",
    titles: pageTitle,
    prop: "extracts",
    exlimit: "1",
    explaintext: "1",
    exsectionformat: "plain",
    format: "json",
  });

  return fetch(`${SERVICE_URLS.WIKIPEDIA}${urlSearchParams.toString()}`)
    .then((response) => response.json())
    .then((result) => {
      const pageData = Object.entries<any>(result.query.pages)[0][1];
      return {
        id: pageData.pageid,
        title: pageData.title,
        extract: pageData.extract,
      };
    });
}
