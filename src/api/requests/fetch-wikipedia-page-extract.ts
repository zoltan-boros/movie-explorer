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

  return fetch(
    `${process.env.NEXT_PUBLIC_WIKIPEDIA_URL}${urlSearchParams.toString()}`,
  )
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
