import { ICurrency } from './currency.enum';

export function toCurrency(c: string): ICurrency | undefined {
  return ICurrency[c.toUpperCase()];
}
