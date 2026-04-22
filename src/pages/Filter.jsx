import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Filter() {
  const { state } = useContext(AppContext);
  const [query, setQuery] = useState("");

  const validOrders = state.orders.filter(order =>
    order.items?.length > 0 &&
    order.items.every(i => i.quantity > 0) &&
    Number(order.totalAmount) > 0
  );

  const filtered = validOrders.filter(order =>
    order.restaurant?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        data-testid="filter-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {query === "" && <p>Enter restaurant</p>}
      {filtered.length === 0 && query !== "" && <p>No results found</p>}

      {filtered.map(order => (
        <div key={order.orderid}>{order.restaurant}</div>
      ))}
    </div>
  );
}