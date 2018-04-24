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
