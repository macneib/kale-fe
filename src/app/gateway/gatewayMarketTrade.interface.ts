import { ITimestamped } from '../timestamps';
import { Side } from '../markets';

export class GatewayMarketTrade implements ITimestamped {
  constructor(
    public price: number,
    public size: number,
    public time: Date,
    public onStartup: boolean,
    public make_side: Side
  ) {}
}
