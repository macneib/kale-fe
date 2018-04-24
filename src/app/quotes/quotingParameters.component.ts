import { QuotingMode } from './quotingMode.enum';
import { FairValueModel } from '../models';
import { AutoPositionMode } from '../positions';

export class QuotingParameters {
  constructor(
    public width: number,
    public size: number,
    public mode: QuotingMode,
    public fvModel: FairValueModel,
    public targetBasePosition: number,
    public positionDivergence: number,
    public ewmaProtection: boolean,
    public autoPositionMode: AutoPositionMode,
    public aggressivePositionRebalancing: boolean,
    public tradesPerMinute: number,
    public tradeRateSeconds: number,
    public longEwma: number,
    public shortEwma: number,
    public quotingEwma: number,
    public aprMultiplier: number,
    public stepOverSize: number
  ) {}
}
