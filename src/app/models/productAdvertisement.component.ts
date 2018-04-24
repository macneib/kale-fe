import { Exchange } from '../exchange';
import { CurrencyPair } from '../currency';

export class ProductAdvertisement {
  constructor(
    public exchange: Exchange,
    public pair: CurrencyPair,
    public environment: string,
    public minTick: number
  ) {}
}
