import React from "react";
import { GoHome } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CgAddR } from "react-icons/cg";

import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="w-[80%] h-[55px] mx-auto rounded-xl text-white bg-[#192028] ">
      {location.pathname === "/cart" ? (
        <h1 className="text-xl h-full items-center flex justify-center font-[400]">
          Procees To Checkout
        </h1>
      ) : location.pathname === "/todo" ? (
        <Link to="/">
          <div className="h-full items-center flex justify-center cursor-pointer">
            <h1 className="text-xl font-[400]">Back to Cart</h1>
          </div>
        </Link>
      ) : location.pathname === "/addTodo" ? (
        <Link to="/todo">
          <div className="h-full items-center flex justify-center cursor-pointer">
            <h1 className="text-xl font-[400]">Back to Todo</h1>
          </div>
        </Link>
      ) : (
        <div className="flex h-full w-[80%] mx-auto justify-between items-center">
          <Link to="/">
            <GoHome className="text-2xl cursor-pointer" />
          </Link>
          <IoSearchOutline className="text-2xl cursor-pointer" />
          <Link to="/todo">
            <LuListTodo className="text-2xl cursor-pointer" />
          </Link>
          <CgProfile className="text-2xl cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Footer;
