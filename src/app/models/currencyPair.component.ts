import { Currency } from './currency.enum';

export class CurrencyPair {
  constructor(public base: Currency, public quote: Currency) {}

  public toString() {
    return Currency[this.base] + '/' + Currency[this.quote];
  }
}
