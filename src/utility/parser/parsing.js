export function parseCommaSeparatedString(str) {
  return str.split(',').map((item) => item.trim());
}
