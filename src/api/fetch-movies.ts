import { API_BASE_URL } from "./constants";
import type { IMovie } from "./movie.types";

const query = `query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      overview
      releaseDate
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
  return fetch(API_BASE_URL, {
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
