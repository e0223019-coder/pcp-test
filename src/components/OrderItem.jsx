import { Link } from "react-router-dom";

export default function OrderItem({ order }) {
  return (
    <div data-testid="order-item">
      <Link to={`/orders/${order.orderid}`}>
        <h3>{order.customerName || "Unknown"}</h3>
      </Link>
      <p>{order.restaurant}</p>
      {order.rating && <p>Rating: {order.rating}</p>}
    </div>
  );
}