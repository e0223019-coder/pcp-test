import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function OrderDetails() {
  const { id } = useParams();
  const { state } = useContext(AppContext);

  const order = state.orders.find(o => o.orderid == id);

  if (!order) return <h2>Order not found</h2>;

  return (
    <div>
      <h2>Order {order.orderid}</h2>

      {order.items?.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>Subtotal: {item.price * item.quantity}</p>
        </div>
      ))}

      <h3>Total: {order.totalAmount}</h3>
    </div>
  );
}