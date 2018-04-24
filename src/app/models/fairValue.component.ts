import { ITimestamped } from '../timestamps';

export class FairValue implements ITimestamped {
  constructor(public price: number, public time: Date) {}
}
