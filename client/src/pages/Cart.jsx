import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const Cart = () => {
  const { cartProducts } = useContext(cartContext);
  const count = cartProducts.length;
  return (
    <div>
      <h1>Count is {count}</h1>
    </div>
  );
};

export default Cart;
