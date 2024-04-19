import ProductCard from "./ProductCard";
import HeroWrapper from "../../layout/HeroWrapper/HeroWrapper";
import { IProduct } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/asyncThunk";
import { useEffect } from "react";
import { getAllProducts } from "../../store/productSlice";

const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getProducts());
  }, [])

  const {products , isLoading, isError, errorMessage} = useSelector(getAllProducts)

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading...</h1>;
  if (isError) {
    return <h1>{errorMessage}</h1>;
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
        {products?.products?.map((product : IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HeroWrapper>
    </div>
  );
};

export default Home;
