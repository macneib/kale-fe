export enum MarketDataFlag {
  Unknown = 0,
  NoChange = 1,
  First = 1 << 1,
  PriceChanged = 1 << 2,
  SizeChanged = 1 << 3,
  PriceAndSizeChanged = 1 << 4
}
