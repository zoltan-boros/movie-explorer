import type { ICredit } from "./credit.types";
import type { IGenre } from "./genre.types";

export interface IMovie {
  id: string;
  name: string;
  tagline?: string;
  genres: IGenre[];
  runtime?: number;
  score: number;
  releaseDate?: string;
  overview: string;
  cast: ICredit[];
}
