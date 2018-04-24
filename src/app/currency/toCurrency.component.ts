export function toCurrency(c: string): Currency | undefined {
  return Currency[c.toUpperCase()];
}
