import { ITimestamped } from '../timestamps';
import { Liquidity } from '../models';
import { Exchange } from '../exchange';
import { CurrencyPair } from '../currency';
import { Side } from '../markets';

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
