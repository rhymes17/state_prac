import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const addItemToCart = (product) => {
    setCartProducts((prev) => [...prev, product]);
    setCount((prev) => prev + 1);
  };

  return (
    <cartContext.Provider value={{ count, cartProducts, addItemToCart }}>
      {children}
    </cartContext.Provider>
  );
};
