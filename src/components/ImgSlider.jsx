import { useState } from "react";
import productImgOne from "../assets/image-product-1.jpg";
import productImgTwo from "../assets/image-product-2.jpg";
import productImgThree from "../assets/image-product-3.jpg";
import productImgFour from "../assets/image-product-4.jpg";

import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";
import UseAppGalleryContext from "../context/UseAppGalleryContext";

const imgSlider = [
  productImgOne,
  productImgTwo,
  productImgThree,
  productImgFour,
];

function ImgSlider() {
  const [imgIndex, setImageIndex] = useState(0);
  const { isImgSliderOpen, setIsImgSliderOpen } = UseAppGalleryContext();

  function handleNext() {
    setImageIndex((index) => (index === imgSlider.length - 1 ? 0 : index + 1));
  }

  function handlePrev() {
    setImageIndex((index) => (index === 0 ? imgSlider.length - 1 : index - 1));
  }

  const buttonClassName =
    "absolute top-1/2 transform -translate-y-1/2 rounded-full bg-white p-4 hover:bg-orange transition-all duration-300";

  return (
    <div
      className={`absolute left-1/2 top-1/2 w-2/4 -translate-x-1/2 -translate-y-1/2 transform ${isImgSliderOpen ? "block" : "hidden"}`}
    >
      <span
        className="material-symbols-outlined absolute -top-8 right-0 z-50 cursor-pointer text-3xl text-orange"
        onClick={() => setIsImgSliderOpen(false)}
      >
        close
      </span>
      <div className="relative">
        <button onClick={handlePrev} className={`${buttonClassName} -left-5`}>
          <img src={prev} alt="previous" />
        </button>

        <img src={imgSlider[imgIndex]} alt="product" className="rounded-xl" />

        <button onClick={handleNext} className={`${buttonClassName} -right-6`}>
          <img src={next} alt="next" />
        </button>
      </div>
    </div>
  );
}

export default ImgSlider;
