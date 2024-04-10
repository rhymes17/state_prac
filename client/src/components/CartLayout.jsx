import React from "react";
import { CartProvider } from "../context/cartContext";
import Cart from "./Cart";

const CartLayout = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default CartLayout;
