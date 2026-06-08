export function toDateString(param: Date | string): string {
  const dateTime = typeof param === "string" ? new Date(param) : param;
  return `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`;
}
