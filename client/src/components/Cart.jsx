import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const Cart = () => {
  const { count } = useContext(cartContext);

  return (
    <div>
      <h1>Count is {count}</h1>
    </div>
  );
};

export default Cart;
