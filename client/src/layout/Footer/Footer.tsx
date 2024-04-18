import { Link, useLocation } from "react-router-dom";
import ExtendedFooter from "./ExtendedFooter";

const Footer = () => {
  const location = useLocation();
  const isCart = location.pathname === "/cart";
  const isTodo = location.pathname === "/todo";
  const isAddTodo = location.pathname === "/addTodo";

  return (
    <div className="w-[80%] h-[55px] mx-auto rounded-xl text-white bg-[#192028] ">
      {isCart || isTodo || isAddTodo ? (
        <Link to={isCart || isTodo ? "/" : "/todo"}>
          <div className="h-full items-center flex justify-center cursor-pointer">
            <h1 className="text-xl font-[400]">
              {isAddTodo
                ? "Back to Cart"
                : isTodo
                ? "Back To Home"
                : "Proceed to Checkout"}
            </h1>
          </div>
        </Link>
      ) : (
        <ExtendedFooter />
      )}
    </div>
  );
};

export default Footer;
