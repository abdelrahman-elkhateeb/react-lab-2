import useCartContext from "../../context/UseCartContext";

function ProductDetails() {
  const { items, setItems, setIsCartOpen } = useCartContext();

  return (
    <div className="flex flex-col justify-between">
      <p className="mb-2 font-bold uppercase text-gray-500">sneaker company</p>
      <h1 className="mb-8 text-3xl font-bold capitalize text-black md:text-5xl">
        fall limited edition sneakers
      </h1>
      <p className="mb-5 text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <section className="mb-6 flex justify-between md:block">
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold">$125.00</p>
          <span className="block w-fit rounded bg-black px-[8px] py-[3px] text-xs font-bold text-white">
            50%
          </span>
        </div>
        <span className="font-bold text-gray-500 line-through">$250.00</span>
      </section>

      <section className="flex flex-col gap-4 md:flex-row">
        <div className="flex grow-[1] items-center justify-between rounded-lg bg-slate-100 px-2 py-4">
          <span
            className="material-symbols-outlined cursor-pointer text-orange"
            onClick={() => items > 0 && setItems(items - 1)}
          >
            remove
          </span>

          <p className="font-bold">{items}</p>

          <span
            className="material-symbols-outlined cursor-pointer text-orange"
            onClick={() => setItems(items + 1)}
          >
            add
          </span>
        </div>

        <button
          className="flex grow-[3] items-center justify-center gap-3 rounded-lg bg-orange px-2 py-4"
          onClick={() => items > 0 && setIsCartOpen(true)}
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <p className="font-bold">Add to cart</p>
        </button>
      </section>
    </div>
  );
}

export default ProductDetails;
