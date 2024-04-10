import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <cartContext.Provider value={{ count }}>{children}</cartContext.Provider>
  );
};
