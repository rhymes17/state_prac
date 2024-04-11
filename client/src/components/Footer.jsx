import React from "react";
import { GoHome } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="w-[80%] h-[55px] mx-auto rounded-xl text-white bg-[#192028] border-black border-2">
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
    </div>
  );
};

export default Footer;
