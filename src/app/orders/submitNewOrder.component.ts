import { Side } from '../markets';
import { TimeInForce } from '../models';
import { OrderType, OrderSource } from '../orders';
import { Exchange } from '../exchange';

export class SubmitNewOrder {
  constructor(
    public side: Side,
    public quantity: number,
    public type: OrderType,
    public price: number,
    public timeInForce: TimeInForce,
    public exchange: Exchange,
    public generatedTime: Date,
    public preferPostOnly: boolean,
    public source: OrderSource,
    public msg?: string
  ) {
    this.msg = msg || null;
  }
}
