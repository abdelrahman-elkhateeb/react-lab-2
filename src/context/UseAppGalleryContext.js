import { useContext } from "react";
import { AppGalleryContext } from "./AppGalleryProvider";


function UseAppGalleryContext() {
  const context = useContext(AppGalleryContext);
  if (context === undefined) {
    throw new Error(
      "UseAppGalleryContext must be used within a AppGalleryProvider",
    );
  }
  return context;
}

export default UseAppGalleryContext;
