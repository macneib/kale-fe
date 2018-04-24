import { MarketSide } from './marketSide.component';

export function marketSideEquals(
  t: MarketSide,
  other: MarketSide,
  tol?: number
) {
  tol = tol || 1e-4;
  if (other == null) {
    return false;
  }
  return (
    Math.abs(t.price - other.price) > tol && Math.abs(t.size - other.size) > tol
  );
}
