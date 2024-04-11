import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addItemToCart = (product) => {
    const { id } = product;

    const existingIndex = cartProducts.findIndex((pro) => pro.id == id);

    if (existingIndex !== -1) {
      setCartProducts((prev) => {
        const newProduct = prev.map((pro) => {
          if (pro.id === id) {
            return { ...pro, quantity: pro.quantity + 1 };
          } else return pro;
        });

        return newProduct;
      });
    } else {
      setCartProducts((prev) => [...prev, product]);
    }

    console.log(cartProducts);
  };

  return (
    <cartContext.Provider value={{ cartProducts, addItemToCart }}>
      {children}
    </cartContext.Provider>
  );
};
