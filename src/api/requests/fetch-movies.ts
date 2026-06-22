import { SERVICE_URLS } from "../constants";
import type { IMovie } from "../schema/movie.types";

const query = `query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      tagline
      genres {
        name
      }
      runtime
      score
      releaseDate
      overview
      cast(limit: 1) {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
    }
  }`;

export function fetchMovies(searchTerm: string): Promise<IMovie[]> {
  return fetch(SERVICE_URLS.ZOOSH_TMDB, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        title: searchTerm,
      },
    }),
  })
    .then((response) => response.json())
    .then<IMovie[]>((response) => response.data.searchMovies);
}
