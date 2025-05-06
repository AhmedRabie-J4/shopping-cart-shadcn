import { DUMMY_PRODUCTS } from "@/dummy-products";
import { useParams } from "react-router-dom";
import useCartStore from "@/store/shop-context";
// type Product = {
//   id: string;
//   title: string;
//   price: number;
// };

export default function ProductDetailPage() {
  const addItem = useCartStore((state) => state.addItem);
  const { productId } = useParams<{ productId: string }>();

  const product = DUMMY_PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    throw new Response("Product Not Found", { status: 404 });
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_2fr] bg-[#5f4e33] lg:mx-50 rounded-2xl md:mx-5 lg:mt-0 md:mt-25 lg:w-[74%] md:w-[95%] sm:w-[70%] w-[80%]  sm:mx-auto mx-auto ">
      <div className="">
        <img
          src={product.image}
          alt={product.title}
          className="h-70 w-72 sm:h-20 sm:w-20 md:h-120 md:w-100 lg:h-105 lg:w-100  lg:rounded-l-2xl md:rounded-l-2xl sm:rounded-t-2xl rounded-t-2xl"
        />
      </div>
      <div className="lg:pt-5 md:pt-5 sm:pt-2 pt-2 lg:pl-0 md:pl-2 sm:pl-3 pl-3">
        <h2 className="text-[#fbd392] lg:text-[28px] lg:font-semibold md:text-3xl sm:text-2xl text-2xl">
          {product.title}
        </h2>
        <p className="text-[#d1b68b] lg:text-xl lg:pt-2 md:pt-4">
          ${product.price}
        </p>
        <p className="text-[#f3e7d4] pt-4 pb-4 lg:text-base md:text-lg">
          {product.description}
        </p>
        <hr className="w-[80%]" />
        <h3 className="text-[#fbd392] lg:text-[18px] md:text-[18px] sm:text-[17px] text-[17px] lg:pt-4 md:pt-6 sm:pt-3 pt-3">
          Details
        </h3>
        <ul className="pl-5">
          {product.details.map((detail, index) => (
            <li
              key={index}
              className="list-disc text-[#f3e7d4] lg:text-base md:text-base sm:text-sm text-sm"
            >
              {detail}
            </li>
          ))}
        </ul>
        <button
          onClick={() => addItem(product)}
          className="bg-[#f4b115] lg:w-[70%] md:w-[80%] sm:w-[100%] w-[104%] lg:ml-[0px] md:ml-[0px] sm:ml-[-11px] ml-[-11px] lg:mt-8 md:mt-8 sm:mt-4 mt-4 text-[#201e1a] py-1 px-4 cursor-pointer lg:rounded-[5px] md:rounded-[5px] sm:rounded-b-[5px] rounded-b-[5px] hover:bg-[#f5b744]"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}
