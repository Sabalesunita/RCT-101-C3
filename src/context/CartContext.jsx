import React, { createContext } from "react"
import { useState } from "react"


export const CartContext = createContext();

export const CartProvider = ({ children }) => {


  const [count, setCount] = useState(0)
  const addtocart = () => {
    setCount(count + 1)
  }

  const removefromcart = () => {
    setCount(count - 1)
  }


  return <CartContext.Provider value={{ count, addtocart, removefromcart }}>{children}</CartContext.Provider>;
};