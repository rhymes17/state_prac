import React, { useContext } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import { cartContext } from "../context/cartContext";

const CartCard = ({ product }) => {
  const { id, title, quantity, price, brand, imgUrl } = product;

  const { incrementQuantity, decrementQuantity } = useContext(cartContext);

  return (
    <div className="flex justify-between items-center w-[90%] mx-auto">
      <div className="bg-white rounded-xl">
        <img
          src={imgUrl}
          className="w-[9vw] object-cover rounded-2xl aspect-square"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1 px-2 mx-1 h-full ">
        <h1 className="font-semibold text-xl ">{title}</h1>
        <p className="text-[0.8rem] text-black/20 font-[600]">{brand}</p>
        <p className="font-[500]">${price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-center gap-3">
        <CiCircleMinus
          onClick={() => decrementQuantity(id)}
          className="text-3xl cursor-pointer"
        />
        <h1 className="text-md">{quantity}</h1>
        <IoMdAddCircle
          onClick={() => incrementQuantity(id)}
          className="text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CartCard;
