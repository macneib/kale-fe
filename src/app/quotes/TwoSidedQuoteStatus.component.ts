import { QuoteStatus } from './quoteStatus..enum';

export class TwoSidedQuoteStatus {
  constructor(public bidStatus: QuoteStatus, public askStatus: QuoteStatus) {}
}
