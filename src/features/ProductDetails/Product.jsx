import { AppGalleryProvider } from "../../context/AppGalleryProvider";
import AppGallery from "./AppGallery";
import ProductDetails from "./ProductDetails";

function product() {
  return (
    <div className="relative grid items-center gap-11 md:mt-16 md:grid-cols-2 md:gap-20">
      <AppGalleryProvider>
        <AppGallery />
        <ProductDetails />
      </AppGalleryProvider>
    </div>
  );
}

export default product;
