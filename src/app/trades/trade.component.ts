import { ITimestamped } from '../timestamps';
import { Exchange, Side, Liquidity } from '../models';
import { CurrencyPair } from '../currency';

export class Trade implements ITimestamped {
  constructor(
    public tradeId: string,
    public time: Date,
    public exchange: Exchange,
    public pair: CurrencyPair,
    public price: number,
    public quantity: number,
    public side: Side,
    public value: number,
    public liquidity: Liquidity,
    public feeCharged: number
  ) {}
}
