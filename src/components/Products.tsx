import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DUMMY_PRODUCTS } from "@/dummy-products";

import useCartStore from "@/store/shop-context";

export default function Products() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="w-[70%] mx-auto py-8">
      <h2 className="text-[#a59b8b] uppercase text-2xl font-bold pb-4">
        Elegant Clothing For Everyone
      </h2>
      <div className="grid grid-cols-3 gap-8 m-0 p-0 ">
        {DUMMY_PRODUCTS.map((product) => (
          <Card
            key={product.id}
            className="bg-[#5f4e33] border-none rounded-[6px]"
          >
            <div>
              <img
                className="rounded-[6px] "
                src={product.image}
                alt={product.title}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg text-[#fbd392]">
                {product.title}
              </CardTitle>
              <CardDescription className="text-[#d1b68b] m-0">
                ${product.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#f3e7d4]">{product.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <button
                onClick={() => addItem(product)}
                className=" ml-auto mb-5 bg-[#f4b115] text-[#201e1a] py-1 px-4 cursor-pointer rounded-[5px] hover:bg-[#f5b744]"
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
