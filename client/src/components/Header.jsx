import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Header = () => {
  const location = useLocation();

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
      ) : (
        <div className="flex justify-between">
          <CgMenuMotion className="text-2xl" />
          <Link to="/cart">
            <BsHandbagFill className="text-2xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
