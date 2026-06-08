import type { ICredit } from "./credit.types";

export interface IMovie {
  id: string;
  name: string;
  overview: string;
  releaseDate?: string;
  cast: ICredit[];
}
