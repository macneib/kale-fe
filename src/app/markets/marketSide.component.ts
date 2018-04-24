export class MarketSide {
  constructor(public price: number, public size: number) {}

  public toString() {
    return 'px=' + this.price + ';size=' + this.size;
  }
}
