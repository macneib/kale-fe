import { MarketSide } from './marketSide.component';
import { ITimestamped } from '../timestamps';

export class Market implements ITimestamped {
  constructor(
    public bids: MarketSide[],
    public asks: MarketSide[],
    public time: Date
  ) {}

  public toString() {
    return (
      'asks: [' + this.asks.join(';') + '] bids: [' + this.bids.join(';') + ']'
    );
  }
}
