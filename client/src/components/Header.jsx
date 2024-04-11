import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-[90%] mx-auto py-5">
      <div className="flex justify-between">
        <CgMenuMotion className="text-2xl" />
        <BsHandbagFill className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
