import React from "react";
import { CiCircleMinus } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";

const CartCard = ({ product }) => {
  const { title, quantity, price, imgUrl } = product;

  return (
    <div className="">
      <div className="">
        <img src={imgUrl} className="" />
      </div>

      {/* Info */}
      <div className="flex flex-col">
        <h1>{title}</h1>
        <p>${price}</p>
      </div>

      {/* Quantity */}
      <div>
        <CiCircleMinus />
        <h1>{quantity}</h1>
        <IoMdAddCircle />
      </div>
    </div>
  );
};

export default CartCard;
