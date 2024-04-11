import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductWrapper from "../components/ProductWrapper";

const Home = () => {
  // Fetch products logic
  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      return res.data;
    } catch (error) {
      return error.message;
    }
  };

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="h-[70vh] w-[90%] m-2  mx-auto overflow-hidden">
      {/* Head */}
      <div className="">
        <h1 className="text-2xl font-semibold">
          Discover <br /> our new items
        </h1>
      </div>

      {/* TODO : Category wise */}

      {/* Render products */}
      <div className="my-5 h-[55vh] overflow-y-scroll no-scrollbar flex flex-col gap-8 items-center">
        {products?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
