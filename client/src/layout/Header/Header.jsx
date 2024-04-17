import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { useSelector } from "react-redux";
import { getAllItems } from "../../store/cartSlice";

const Header = () => {
  const location = useLocation();

  const cartProducts = useSelector(getAllItems);
  const isCartPage = location.pathname === "/cart";
  const isTodoPage = location.pathname === "/todo";

  return (
    <div className="w-[90%] mx-auto py-5">
      <div
        className={
          isCartPage || isTodoPage
            ? "flex justify-between w-[93%]  mx-auto items-center"
            : "flex justify-between"
        }
      >
        <Link to="/">
          <GoHome className={isTodoPage ? "text-3xl" : "text-2xl"} />
        </Link>

        {isCartPage ? (
          <h1 className="text-xl font-semibold">Cart</h1>
        ) : isTodoPage ? (
          <h1 className="text-xl font-semibold">Todos</h1>
        ) : (
          <CgMenuMotion className="text-2xl" />
        )}

        {!isCartPage && (
          <div className="relative">
            <Link to="/cart">
              <BsHandbagFill className="text-2xl" />
            </Link>
            {cartProducts.length > 0 && (
              <div className="absolute top-[-3px] right-[-3px] h-[10px] w-[10px] bg-red-500 rounded-full"></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
