import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Stats() {
  const { state } = useContext(AppContext);

  const validOrders = state.orders.filter(order =>
    order.items?.length > 0 &&
    order.items.every(i => i.quantity > 0) &&
    Number(order.totalAmount) > 0
  );

  const stats = validOrders.reduce(
    (acc, order) => {
      if (!order.status) return acc;

      acc.totalOrders++;

      if (order.status === "delivered") acc.deliveredOrders++;
      if (order.status === "cancelled") acc.cancelledOrders++;

      return acc;
    },
    { totalOrders: 0, deliveredOrders: 0, cancelledOrders: 0 }
  );

  window.appState = stats;

  return (
    <div>
      <div data-testid="total-orders">{stats.totalOrders}</div>
      <div data-testid="delivered-orders">{stats.deliveredOrders}</div>
      <div data-testid="cancelled-orders">{stats.cancelledOrders}</div>
    </div>
  );
}