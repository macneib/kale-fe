export class ExchangePairMessage<T> {
  constructor(
    public exchange: Exchange,
    public pair: CurrencyPair,
    public data: T
  ) {}
}
