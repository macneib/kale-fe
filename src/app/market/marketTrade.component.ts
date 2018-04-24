import { Side } from './side.enum';
import { MarketSide } from './marketSide.component';
import { ITimestamped } from '../timestamps';
import { Exchange } from '../models';
import { CurrencyPair } from '../currency';
import { TwoSidedQuote } from '../quotes';

export class MarketTrade implements ITimestamped {
  constructor(
    public exchange: Exchange,
    public pair: CurrencyPair,
    public price: number,
    public size: number,
    public time: Date,
    public quote: TwoSidedQuote,
    public bid: MarketSide,
    public ask: MarketSide,
    public make_side: Side
  ) {}
}
