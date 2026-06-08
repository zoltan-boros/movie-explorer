export function isBlank(s?: string): boolean {
  return s == null || (typeof s === "string" && (s === "" || s.trim() === ""));
}
