import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { Link } from "react-router-dom";

const ExtendedFooter = () => {
  return (
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
  );
};

export default ExtendedFooter;
