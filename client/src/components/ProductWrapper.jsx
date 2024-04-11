import React from "react";
import { CartProvider } from "../context/cartContext";
import ProductCard from "./ProductCard";

const ProductWrapper = ({ product }) => {
  return (
    <CartProvider>
      <ProductCard product={product} />
    </CartProvider>
  );
};

export default ProductWrapper;
