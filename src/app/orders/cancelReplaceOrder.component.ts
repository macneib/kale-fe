export class CancelReplaceOrder {
  constructor(
    public origOrderId: string,
    public quantity: number,
    public price: number,
    public exchange: Exchange,
    public generatedTime: Date
  ) {}
}
