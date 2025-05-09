import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import logo from "../assets/logo.avif";
// import useCartStore from "@/store/shop-context";
import { useCart } from "../store/shoppin-contextapi";

import { Link } from "react-router-dom";

export default function Header() {
  // const items = useCartStore((state) => state.items);
  // const removeItem = useCartStore((state) => state.removeItem);
  const { items, removeItem } = useCart();

  return (
    <div className="flex sm:justify-between py-12 sm:px-[15%] sm:items-center justify-around">
      <div className="sm:flex sm:items-center flex">
        <Link to="/">
          <img className="w-15 mr-2 rounded-[50%]" src={logo} alt="logo" />
        </Link>
        <h1 className="text-[#edbf68] text-center uppercase sm:m-0  mt-5 text-xs md:text-3xl md:mt-2 lg:text-[2.5rem]">
          Elegant Clothing
        </h1>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger className="bg-[#edbf68] rounded-[4px] sm:py-2 sm:px-6 text-[#201e1a] sm:text-xl cursor-pointer hover:bg-[#f5b744] text-xs py-1 px-4 mr-6 mt-4">
            Cart
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#d3b17b] sm:rounded-[6px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="sm:text-2xl text-[#4f3807] sm:uppercase sm:m-0">
                Your Cart
              </AlertDialogTitle>
              {items.length === 0 && (
                <AlertDialogDescription className="text-[#000] sm:text-[16px]">
                  No items in the cart!
                </AlertDialogDescription>
              )}
              {items.length > 0 &&
                items.map((item) => (
                  <div className="flex justify-between bg-[#fbd392] px-2 py-1 rounded-[5px]">
                    <AlertDialogDescription className="text-[#000] sm:text-[16px] text-xs">
                      {item.product.title}
                    </AlertDialogDescription>
                    <AlertDialogDescription className="text-[#000] sm:text-[16px] text-[10px] pl-4 bg-[#fbd392]">
                      {item.quantity} piece
                      {item.quantity > 1 && <span>s</span>}
                    </AlertDialogDescription>
                    <AlertDialogDescription className="text-[#000] sm:text-[13px] text-xs">
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="bg-[#fbd392] border-[#d3b17b] hover:bg-white px-2 rounded-[4px] sm:mt-[2.5px] cursor-pointer lg:text-black md:text-black sm:text-red-600 text-red-600"
                      >
                        remove
                      </button>
                    </AlertDialogDescription>
                  </div>
                ))}
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                Close
              </AlertDialogCancel>
              {items.length > 0 && (
                <AlertDialogAction className="cursor-pointer">
                  Checkout
                </AlertDialogAction>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
