import { ICurrency } from './currency.enum';

export class CurrencyPosition {
  constructor(
    public amount: number,
    public heldAmount: number,
    public currency: ICurrency
  ) {}

  public toString() {
    return 'currency=' + ICurrency[this.currency] + ';amount=' + this.amount;
  }
}
