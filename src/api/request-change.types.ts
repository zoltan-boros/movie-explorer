/** Placeholder for now. To be specified later on. */
export type RequestStatus = "a" | "b" | "c";

export interface IOnRequestChangeParams<T> {
  status: RequestStatus;
  // ToDo: Include `searchTerm` in `data`.
  searchTerm: string;
  data: T;
}
