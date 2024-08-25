import cart from "../../imgs/icon-cart.svg";
import img from "../../imgs/image-product-1.jpg";
import useCartContext from "../../context/UseCartContext";

function Cart() {
  const { items, setItems, isCartOpen, setIsCartOpen } = useCartContext();
  return (
    <>
      <div
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
      >
        <img src={cart} alt="cart" className="cursor-pointer" />
      </div>
      <div
        className={`fixed z-50 sm:absolute ${isCartOpen ? "block" : "hidden"} right-0 top-20 w-full rounded-md bg-white shadow-md sm:w-72`}
      >
        <h4 className="border-b-[1px] border-x-gray-700 p-5 font-bold text-black">
          Cart
        </h4>
        <div>
          {items > 0 ? (
            <section className="p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <div>
                  <img src={img} alt="img" className="w-12 rounded" />
                </div>

                <div className="grow">
                  <p className="text-xs font-medium capitalize text-gray-400">
                    fall limited edition sneakers
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="text-gray-400">$125.00 x {items} </span>
                    <span className="font-bold">${items * 125}.00</span>
                  </p>
                </div>
                <span
                  className="material-symbols-outlined cursor-pointer text-xl text-gray-400"
                  onClick={() => {
                    setItems(0);
                    setIsCartOpen(!isCartOpen);
                  }}
                >
                  delete
                </span>
              </div>

              <button className="my-2 w-full rounded-lg bg-orange p-3 font-bold text-black">
                Checkout
              </button>
            </section>
          ) : (
            <p className="flex min-h-48 items-center justify-center font-bold text-gray-500">
              your cart is empty
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
