import React from "react";

import { VscPackage } from "react-icons/vsc";
import CartCard from "../components/CartCard";
import { useDispatch, useSelector } from "react-redux";

import HeroWrapper from "../layout/HeroWrapper/HeroWrapper";
import { getAllItems, resetCart } from "../store/cartSlice";

const Cart = () => {
  // const { cartProducts, clearCart } = useContext(cartContext);
  const dispatch = useDispatch();

  const cartProducts = useSelector(getAllItems);
  const count = cartProducts.length;

  return (
    <div className="h-[70vh]">
      {count > 0 ? (
        <div className="h-[100%] flex flex-col">
          <div className="w-[90%] mx-auto flex justify-end">
            <h1
              onClick={() => dispatch(resetCart())}
              className="shadow-xl cursor-pointer bg-red-500 text-white px-3 py-1 rounded-xl"
            >
              Clear
            </h1>
          </div>
          <HeroWrapper height={80} gap={5}>
            {cartProducts.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </HeroWrapper>
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
