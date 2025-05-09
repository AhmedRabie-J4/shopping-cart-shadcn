import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { CartProvider } from "../store/shoppin-contextapi";
export default function RootLayout() {
  return (
    <>
      <CartProvider>
        <main
          style={{ background: "linear-gradient(#31220b, #382e1b)" }}
          className=" min-h-screen "
        >
          <Header />
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}
