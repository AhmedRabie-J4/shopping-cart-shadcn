import Header from "../components/Header";
export default function ErrorPage() {
  return (
    <>
      <main
        style={{ background: "linear-gradient(#31220b, #382e1b)" }}
        className=" min-h-screen "
      >
        <Header />
        <div className="text-[#edbf68] text-center pt-10">
          <h2 className="text-3xl pb-5">An error occurred!</h2>
          <p className="">Couldn't find this page</p>
        </div>
      </main>
    </>
  );
}
