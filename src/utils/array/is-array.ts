export function isArray(x: unknown): x is Array<unknown> {
  return Array.isArray(x);
}
