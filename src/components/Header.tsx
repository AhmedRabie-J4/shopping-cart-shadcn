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

import logo from "../assets/logo.png";
import useCartStore from "@/store/shop-context";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  return (
    <div className="flex justify-between py-12 px-[15%] items-center">
      <div className="flex items-center">
        <img className="w-20 mr-6" src={logo} alt="logo" />
        <h1 className="text-[#edbf68] text-center uppercase m-0 text-[2.5rem]">
          Elegant Clothing
        </h1>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger className="bg-[#edbf68] rounded-[4px] py-2 px-6 text-[#201e1a] text-xl cursor-pointer hover:bg-[#f5b744]">
            Cart
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#d3b17b] rounded-[6px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl text-[#4f3807] uppercase m-0">
                Your Cart
              </AlertDialogTitle>
              {items.length === 0 && (
                <AlertDialogDescription className="text-[#000] text-[16px]">
                  No items in the cart!
                </AlertDialogDescription>
              )}
              {items.length > 0 &&
                items.map((item) => (
                  <div className="flex justify-between bg-[#fbd392] px-3 py-1 rounded-[5px]">
                    <AlertDialogDescription className="text-[#000] text-[16px]">
                      {item.product.title}
                    </AlertDialogDescription>
                    <AlertDialogDescription className="text-[#000] text-[16px] bg-[#fbd392] ">
                      {item.quantity} piece
                      {item.quantity > 1 && <span>s</span>}
                    </AlertDialogDescription>
                    <AlertDialogDescription className="text-[#000] text-[13px]">
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="bg-[#fbd392] border-[#d3b17b] hover:bg-red-600 px-2 rounded-[4px] mt-[2.5px] cursor-pointer"
                      >
                        Remove
                      </button>
                    </AlertDialogDescription>
                  </div>
                ))}
              {/* <AlertDialogDescription
                className="text-[#000] pt-2 text-[16px] flex justify-end
"
              >
                Cart Total:<span className="font-bold">$0.00</span>
              </AlertDialogDescription> */}
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
