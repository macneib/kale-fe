import { CurrencyPair } from '../currency';
import { Side } from '../market';
import { OrderType, OrderStatus, OrderSource } from '../orders';
import { TimeInForce, Liquidity } from '../models';
import { Exchange } from '../exchange';

export interface OrderStatusReport {
  pair: CurrencyPair;
  side: Side;
  quantity: number;
  type: OrderType;
  price: number;
  timeInForce: TimeInForce;
  orderId: string;
  exchangeId: string;
  orderStatus: OrderStatus;
  rejectMessage: string;
  time: Date;
  lastQuantity: number;
  lastPrice: number;
  leavesQuantity: number;
  cumQuantity: number;
  averagePrice: number;
  liquidity: Liquidity;
  exchange: Exchange;
  computationalLatency: number;
  version: number;
  preferPostOnly: boolean;
  source: OrderSource;
  partiallyFilled: boolean;
  pendingCancel: boolean;
  pendingReplace: boolean;
  cancelRejected: boolean;
}
