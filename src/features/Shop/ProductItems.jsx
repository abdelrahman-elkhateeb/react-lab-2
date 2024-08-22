import Spinner from "../ui/Spinner";
import useFetch from "./useFetch";

function ProductItems() {
  const [product, loading, error] = useFetch();
  return !loading ? (
    <ul>
      {product.map((item) => (
        <li key={item.product_id} className="my-5">
          <h3 className="text-2xl font-bold">{item.product_name}</h3>
          <p className="my-2 font-semibold">{item.product_desc}</p>
          <p className="font-semibold">{item.product_category}</p>
        </li>
      ))}
    </ul>
  ) : (
    <Spinner />
  );
}

export default ProductItems;
