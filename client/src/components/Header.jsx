import React, { useContext } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { cartContext } from "../context/cartContext";

const Header = () => {
  const location = useLocation();

  const { cartProducts } = useContext(cartContext);

  return (
    <div className="w-[90%] mx-auto py-5">
      {location.pathname === "/cart" ? (
        <div className="flex justify-between items-center">
          <Link to="/">
            <GoHome className="text-2xl" />
          </Link>
          <h1 className="text-xl font-semibold">Cart</h1>
          <div></div>
        </div>
      ) : location.pathname === "/todo" ? (
        <div className="flex justify-between w-[93%]  mx-auto items-center">
          <Link to="/">
            <GoHome className="text-3xl" />
          </Link>
          <h1 className="text-xl font-semibold">Todos</h1>
          <div className=""></div>
        </div>
      ) : (
        <div className="flex justify-between">
          <CgMenuMotion className="text-2xl" />
          <div className="relative">
            <Link to="/cart">
              <BsHandbagFill className="text-2xl" />
            </Link>
            {cartProducts.length > 0 && (
              <div className="absolute top-[-3px] right-[-3px] h-[10px] w-[10px] bg-red-500 rounded-full"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
