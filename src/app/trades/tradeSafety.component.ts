export class TradeSafety {
  constructor(
    public buy: number,
    public sell: number,
    public combined: number,
    public buyPing: number,
    public sellPong: number,
    public time: Date
  ) {}
}
