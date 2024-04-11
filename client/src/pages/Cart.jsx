import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { VscPackage } from "react-icons/vsc";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cartProducts } = useContext(cartContext);
  const count = cartProducts.length;
  return (
    <div className="h-[80%] overflow-hidden">
      {count > 0 ? (
        <div className="h-[70vh] py-5 flex flex-col gap-7">
          {cartProducts.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="h-[70%] w-[80%] mx-auto flex flex-col justify-center items-center ">
          <h1 className="text-2xl">
            Cart is currently empty,
            <br /> add items to your cart.
          </h1>
          <VscPackage className="text-5xl" />
        </div>
      )}
    </div>
  );
};

export default Cart;
