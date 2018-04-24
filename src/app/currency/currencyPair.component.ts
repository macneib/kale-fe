import { ICurrency } from './currency.enum';

export class CurrencyPair {
  constructor(public base: ICurrency, public quote: ICurrency) {}

  public toString() {
    return ICurrency[this.base] + '/' + ICurrency[this.quote];
  }
}
