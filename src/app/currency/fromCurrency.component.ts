import { Currency } from './currency.enum';

export function fromCurrency(c: Currency): string | undefined {
  const t = Currency[c];
  if (t) {
    return t.toUpperCase();
  }
  return undefined;
}
