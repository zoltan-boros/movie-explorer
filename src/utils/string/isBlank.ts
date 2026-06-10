import type { Nullable } from "../types/nullable";

export function isBlank(s: Nullable<string>): boolean {
  return s == null || (typeof s === "string" && (s === "" || s.trim() === ""));
}
