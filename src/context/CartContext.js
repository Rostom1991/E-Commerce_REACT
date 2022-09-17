import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const initialState = { cart: [], total: 0 };

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //Keep the cart items when refresh
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      console.log("cart", cart);
      for (const i in cart) {
        dispatch({ type: "ADD_TO_CART", payload: { ...cart[i] } });
      }
    }
  }, []);

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
