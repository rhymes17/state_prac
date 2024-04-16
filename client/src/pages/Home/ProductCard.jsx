import React from "react";
import { IoBagAdd } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductCard = ({ product }) => {
  // Product data
  const { id, title, description, price, brand, category, images } = product;
  const imgUrl = images[0];

  const dispatch = useDispatch();

  return (
    <div className="w-[90%] mx-auto shadow-xl rounded-2xl py-7 bg-[#FFFFFF]">
      {/* Image*/}
      <div className="flex justify-center items-center">
        <img
          src={imgUrl}
          className="w-[25vw] rounded-xl aspect-square object-cover"
        />
      </div>

      {/* Title */}
      <div className="mt-5 flex items-end justify-between w-[80%] mx-auto">
        <div className="flex flex-col ">
          <p className="text-[0.8rem] text-black/30 font-semibold">{brand}</p>
          <h1 className="font-semibold">{title}</h1>
        </div>
        <p className="font-semibold text-red-500">${price}</p>
      </div>

      {/* Category & Brand */}
      <div className="w-[80%] mx-auto items-center flex justify-between pt-3">
        <h1 className="text-gray-300">{category}</h1>
        <IoBagAdd
          onClick={() =>
            dispatch(
              addToCart({ id, title, brand, price, imgUrl, quantity: 1 })
            )
          }
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductCard;
