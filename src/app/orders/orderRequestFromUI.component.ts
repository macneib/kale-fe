export class OrderRequestFromUI {
  constructor(
    public side: string,
    public price: number,
    public quantity: number,
    public timeInForce: string,
    public orderType: string
  ) {}
}
