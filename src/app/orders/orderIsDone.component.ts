import { OrderStatus } from './orderStatus.enum';

export const orderIsDone = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Complete:
    case OrderStatus.Cancelled:
    case OrderStatus.Rejected:
      return true;
    default:
      return false;
  }
};
