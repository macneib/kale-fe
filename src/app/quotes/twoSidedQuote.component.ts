import { ITimestamped } from '../timestamps';
import { Quote } from './quote.component';

export class TwoSidedQuote implements ITimestamped {
  constructor(public bid: Quote, public ask: Quote, public time: Date) {}
}
