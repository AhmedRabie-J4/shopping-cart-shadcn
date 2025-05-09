import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DUMMY_PRODUCTS } from "@/dummy-products";

// import useCartStore from "@/store/shop-context";
import { useCart } from "../store/shoppin-contextapi";

import { Link } from "react-router-dom";

export default function Products() {
  // const addItem = useCartStore((state) => state.addItem);
  const { addItem } = useCart();

  return (
    <div className="w-[80%] mx-auto py-2 sm:w-[70%] sm:mx-auto sm:py-8">
      <h2 className="text-[#a59b8b] uppercase font-bold pb-4 sm:uppercase sm:text-2xl sm:font-bold sm:pb-4">
        Elegant Clothing For Everyone
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 m-0 p-0  sm:grid sm:gap-8 sm:m-0 sm:p-0">
        {DUMMY_PRODUCTS.map((product) => (
          <Card
            key={product.id}
            className="bg-[#5f4e33] border-none lg:rounded-t-[6px] md:rounded-[10px] sm:rounded-[6px] sm:border-none "
          >
            <div>
              <Link to={`/${product.id}`}>
                <img
                  className="lg:rounded-t-[6px] md:rounded-t-[10px] sm:rounded-t-[10px]"
                  src={product.image}
                  alt={product.title}
                />
              </Link>
            </div>
            <CardHeader>
              <Link to={`/${product.id}`}>
                <CardTitle className="text-lg text-[#fbd392] sm:text-lg">
                  {product.title}
                </CardTitle>
              </Link>
              <CardDescription className="text-[#d1b68b] m-0 sm:m-0">
                ${product.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#f3e7d4]"> {product.description} </p>
            </CardContent>
            <CardFooter className="mt-auto sm:mt-auto">
              <button
                onClick={() => addItem(product)}
                className="ml-auto mb-5 bg-[#f4b115] text-[#201e1a] py-1 px-4 cursor-pointer rounded-[5px] hover:bg-[#f5b744] sm:ml-auto sm:mb-5 sm:py-1 sm:px-4 sm:cursor-pointer sm:rounded-[5px]"
              >
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
