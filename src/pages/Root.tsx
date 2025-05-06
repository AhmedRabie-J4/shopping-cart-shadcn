import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function RootLayout() {
  return (
    <>
      <main
        style={{ background: "linear-gradient(#31220b, #382e1b)" }}
        className=" min-h-screen "
      >
        <Header />
        <Outlet />
      </main>
    </>
  );
}
