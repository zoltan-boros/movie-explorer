import type { CreditType } from "./creditType.types";
import type { IPerson } from "./person.types";

export interface ICredit {
  id: string;
  person?: IPerson;
  role: CreditType;
}
