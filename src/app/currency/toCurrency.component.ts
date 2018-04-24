import { Currency } from './currency.enum';

export function toCurrency(c: string): Currency | undefined {
  return Currency[c.toUpperCase()];
}
