import { ICurrency } from './currency.enum';

export function fromCurrency(c: ICurrency): string | undefined {
  const t = ICurrency[c];
  if (t) {
    return t.toUpperCase();
  }
  return undefined;
}
