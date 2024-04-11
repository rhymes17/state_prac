import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[90%] mx-auto py-5">
      <div className="flex justify-between">
        <CgMenuMotion className="text-2xl" />
        <Link to="/cart">
          <BsHandbagFill className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
