import { Currency } from './currency.enum';

export class CurrencyPosition {
  constructor(
    public amount: number,
    public heldAmount: number,
    public currency: Currency
  ) {}

  public toString() {
    return 'currency=' + Currency[this.currency] + ';amount=' + this.amount;
  }
}
