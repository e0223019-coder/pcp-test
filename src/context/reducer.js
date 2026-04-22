export const initialState = {
  orders: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, orders: action.payload };

    default:
      return state;
  }
}