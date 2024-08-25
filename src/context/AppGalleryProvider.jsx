import { createContext, useState } from "react";

const AppGalleryContext = createContext();

function AppGalleryProvider({ children }) {
  const [isImgSliderOpen, setIsImgSliderOpen] = useState(false);
  return (
    <AppGalleryContext.Provider
      value={{ isImgSliderOpen, setIsImgSliderOpen }}
    >
      {children}
    </AppGalleryContext.Provider>
  );
}

export { AppGalleryProvider, AppGalleryContext };
