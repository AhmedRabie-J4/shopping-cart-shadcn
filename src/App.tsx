import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
function App() {
  return (
    <>
      <main
        style={{ background: "linear-gradient(#31220b, #382e1b)" }}
        className=" min-h-screen "
      >
        <Header />
        <Products />
      </main>
    </>
  );
}

export default App;
