import { CurrencyPair } from './currencyPair.component';

export function currencyPairEqual(a: CurrencyPair, b: CurrencyPair): boolean {
  return a.base === b.base && a.quote === b.quote;
}
