import { Exchange } from '../exchange';
import { CurrencyPair } from '../currency';

export class PositionReport {
  constructor(
    public baseAmount: number,
    public quoteAmount: number,
    public baseHeldAmount: number,
    public quoteHeldAmount: number,
    public value: number,
    public quoteValue: number,
    public pair: CurrencyPair,
    public exchange: Exchange,
    public time: Date
  ) {}
}
