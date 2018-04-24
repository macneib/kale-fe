import { Exchange } from '../exchange';

export class OrderCancel {
  constructor(
    public origOrderId: string,
    public exchange: Exchange,
    public generatedTime: Date
  ) {}
}
