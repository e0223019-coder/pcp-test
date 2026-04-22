import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Orders() {
  const { state } = useContext(AppContext);

  const validOrders = state.orders.filter(order =>
    order.items?.length > 0 &&
    order.items.every(i => i.quantity > 0) &&
    Number(order.totalAmount) > 0
  );

  return (
    <div>
      {validOrders.map(order => (
        <div key={order.orderid} data-testid="order-item">
          <p>{order.customerName || "Unknown"}</p>
          <p>{order.restaurant}</p>
        </div>
      ))}
    </div>
  );
}