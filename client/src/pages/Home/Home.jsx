import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import HeroWrapper from "../../layout/HeroWrapper/HeroWrapper";
import { getAllProducts } from "../../utils/api";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 60 * 10 * 1000,
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
      <HeroWrapper height={70} gap={8}>
        {products?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HeroWrapper>
    </div>
  );
};

export default Home;
