import { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const sampleData = [
      {
        orderid: 1001,
        customerName: "Arun",
        restaurant: "Spice Hub",
        items: [{ name: "Biryani", price: 120, quantity: 3 }],
        totalAmount: 360,
        status: "delivered",
        rating: 4
      },
      {
        orderid: 1002,
        customerName: "",
        restaurant: "Food Court",
        items: [],
        totalAmount: 0,
        status: "cancelled"
      },
      {
        orderid: 1003,
        restaurant: "Spice Hub",
        items: [{ name: "Pizza", price: 200, quantity: 2 }],
        totalAmount: 400,
        status: "pending"
      }
    ];

    dispatch({ type: "SET_DATA", payload: sampleData });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};