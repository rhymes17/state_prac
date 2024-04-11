import { createContext, useState } from "react";

export const cartContext = createContext(null);

const exisitingProducts = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(exisitingProducts);

  // Add to Cart
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
        localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      });
    } else {
      setCartProducts((prev) => {
        const newProduct = [...prev, product];
        localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      });
    }
  };

  //Clear Cart
  const clearCart = () => {
    setCartProducts([]);
    localStorage.removeItem("cart");
  };

  // Increment Quantity
  const incrementQuantity = (id) => {
    const existingIndex = cartProducts.findIndex((pro) => pro.id === id);

    if (existingIndex !== -1) {
      setCartProducts((prev) => {
        const newProduct = prev.map((pro) => {
          if (pro.id === id) {
            return { ...pro, quantity: pro.quantity + 1 };
          } else return pro;
        });
        localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      });
    }
  };

  // Decrement Quantity
  const decrementQuantity = (id) => {
    const existingIndex = cartProducts.findIndex((pro) => pro.id === id);

    if (existingIndex !== -1) {
      setCartProducts((prev) => {
        let newProduct = prev.map((pro) => {
          if (pro.id === id) {
            if (pro.quantity >= 1) {
              return { ...pro, quantity: pro.quantity - 1 };
            }
          } else return pro;
        });

        newProduct = newProduct.filter((pro) => pro.quantity > 0);

        localStorage.setItem("cart", JSON.stringify(newProduct));
        return newProduct;
      });
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addItemToCart,
        decrementQuantity,
        incrementQuantity,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
